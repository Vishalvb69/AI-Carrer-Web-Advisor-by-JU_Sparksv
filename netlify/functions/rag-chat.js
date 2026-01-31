// Enhanced RAG (Retrieval Augmented Generation) chat function with vector search
import {
  checkRateLimit,
  getClientIP,
  sanitizeInput,
} from "./utils/rateLimit.js";
import {
  searchDocuments,
  formatSearchResultsAsContext,
  initializeVectorStore,
} from "./utils/vectorStore.js";
import { getFallbackResponse } from "./utils/fallbackResponses.js";
import { searchWebsiteByKeyword } from "./utils/keywordSearch.js";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const RATE_LIMIT_ENABLED = process.env.RATE_LIMIT_CHAT_ENABLED === "true";
const MESSAGES_PER_HOUR = parseInt(process.env.RATE_LIMIT_MESSAGES_PER_HOUR) ||
  10;

// Career counseling context
const RAG_CAREER_CONTEXT = `You are an expert career counselor specializing in Indian education system and career guidance. You have access to a comprehensive knowledge base of career profiles, exam information, and educational pathways.

When responding:
1. Use the provided information to give accurate, specific advice
2. Always cite the career or exam information when relevant
3. Provide actionable next steps and clear guidance
4. Be encouraging but honest about challenges
5. Consider the Indian education context and current opportunities
6. Keep responses conversational but informative (under 350 words)

Your goal is to help students make informed decisions about their education and career paths.`;

export async function handler(event, context) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  // Handle preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: "OK" }),
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    // Parse request
    let body;
    try {
      body = JSON.parse(event.body || "{}");
    } catch {
      return sendError(headers, "Invalid JSON in request", 400);
    }

    const { message, conversationHistory = [] } = body;

    // Validate message
    if (!message || typeof message !== "string") {
      return sendError(headers, "Message is required and must be a string", 400);
    }

    // Rate limiting
    if (RATE_LIMIT_ENABLED) {
      const clientIP = getClientIP(event.headers);
      const rateLimitResult = await checkRateLimit(clientIP, MESSAGES_PER_HOUR);

      if (!rateLimitResult.allowed) {
        return {
          statusCode: 429,
          headers: {
            ...headers,
            "X-RateLimit-Limit": MESSAGES_PER_HOUR.toString(),
            "X-RateLimit-Remaining": "0",
          },
          body: JSON.stringify({
            error: "Rate limit exceeded",
            resetIn: Math.ceil(rateLimitResult.resetIn / 1000 / 60),
          }),
        };
      }
    }

    // Sanitize input
    const sanitizedMessage = sanitizeInput(message);
    if (!sanitizedMessage) {
      return sendError(headers, "Message cannot be empty after sanitization", 400);
    }

    // If no API key, try website keyword search first so results come from our site
    if (!OPENROUTER_API_KEY) {
      console.warn("OPENROUTER_API_KEY not configured - using website content fallback");
      const websiteResult = searchWebsiteByKeyword(sanitizedMessage);
      if (websiteResult.response) {
        return sendSuccess(
          headers,
          websiteResult.response,
          true,
          websiteResult.sources,
        );
      }
      const fallbackResult = getFallbackResponse(sanitizedMessage);
      return sendSuccess(headers, fallbackResult.response, true);
    }

    // Initialize RAG
    let ragContext = "";
    let searchResults = [];
    try {
      await initializeVectorStore();
      searchResults = await searchDocuments(sanitizedMessage, 5);
      ragContext = formatSearchResultsAsContext(searchResults);
    } catch (error) {
      console.warn("RAG search failed:", error.message);
      // Continue without RAG context
    }

    // Call OpenRouter API
    let aiResponse;
    try {
      aiResponse = await callOpenRouterAPI(
        sanitizedMessage,
        conversationHistory,
        ragContext,
      );
    } catch (error) {
      console.error("OpenRouter API failed:", error.message);
      // Return clear error for auth/credits so user can fix the key
      if (error.status === 401 || error.status === 403) {
        return {
          statusCode: 401,
          headers,
          body: JSON.stringify({
            error:
              "Invalid or missing OpenRouter API key. Set OPENROUTER_API_KEY in .env (get a key at https://openrouter.ai/keys).",
            code: "INVALID_API_KEY",
          }),
        };
      }
      // Use website content first so results come from our site
      const websiteResult = searchWebsiteByKeyword(sanitizedMessage);
      if (websiteResult.response) {
        return sendSuccess(
          headers,
          websiteResult.response,
          true,
          websiteResult.sources,
        );
      }
      const fallbackResult = getFallbackResponse(sanitizedMessage);
      return sendSuccess(headers, fallbackResult.response, true);
    }

    // Return success response
    return sendSuccess(headers, aiResponse, false, searchResults);
  } catch (error) {
    console.error("Unhandled error:", error);
    // Try to return website content or fallback so the user still gets a reply
    try {
      const body = JSON.parse(event.body || "{}");
      const msg = body.message && typeof body.message === "string"
        ? sanitizeInput(body.message)
        : "";
      if (msg) {
        const websiteResult = searchWebsiteByKeyword(msg);
        if (websiteResult.response) {
          return sendSuccess(
            headers,
            websiteResult.response,
            true,
            websiteResult.sources,
          );
        }
        const fallbackResult = getFallbackResponse(msg);
        return sendSuccess(headers, fallbackResult.response, true);
      }
    } catch (fallbackErr) {
      console.error("Fallback failed:", fallbackErr);
    }
    // Last resort: generic message and include error for debugging
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        response:
          "Something went wrong on our side. You can try again, or rephrase your question. If this keeps happening, check that OPENROUTER_API_KEY is set in .env and that the app is run with `netlify dev` when testing locally.",
        fallbackMode: true,
        error: error.message,
      }),
    };
  }
}

async function callOpenRouterAPI(message, history, ragContext) {
  const messages = [
    {
      role: "system",
      content: RAG_CAREER_CONTEXT,
    },
    ...history.slice(-8).map((msg) => ({
      role: msg.role === "user" ? "user" : "assistant",
      content: msg.content,
    })),
    {
      role: "user",
      content: ragContext
        ? `Available Information:\n${ragContext}\n\nQuestion: ${message}`
        : message,
    },
  ];

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "anthropic/claude-3.5-sonnet",
      messages,
      max_tokens: 600,
      temperature: 0.7,
      top_p: 0.8,
    }),
  });

  // Check response status
  if (!response.ok) {
    const errorText = await response.text();
    console.error(
      `OpenRouter error (${response.status}):`,
      errorText.substring(0, 200),
    );
    const err = new Error(`OpenRouter API error: ${response.status}`);
    err.status = response.status;
    throw err;
  }

  // Parse response
  let data;
  try {
    data = await response.json();
  } catch (error) {
    console.error("Failed to parse OpenRouter response:", error);
    throw new Error("Invalid JSON response from OpenRouter");
  }

  // Extract message
  if (
    !data.choices ||
    !data.choices[0] ||
    !data.choices[0].message ||
    !data.choices[0].message.content
  ) {
    console.error("Invalid response structure:", data);
    throw new Error("Invalid response structure from OpenRouter");
  }

  return data.choices[0].message.content;
}

function sendSuccess(
  headers,
  response,
  fallbackMode = false,
  sources = [],
) {
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      response,
      timestamp: new Date().toISOString(),
      fallbackMode,
      rag: {
        enabled: !fallbackMode,
        documentsUsed: sources.length,
        sources: sources.map((s) => ({
          title: s.title,
          type: s.type,
          relevance: s.relevance,
          ...(s.url && { url: s.url }),
        })),
      },
    }),
  };
}

function sendError(headers, message, statusCode = 500) {
  return {
    statusCode,
    headers,
    body: JSON.stringify({ error: message }),
  };
}
