// Netlify Function for AI-powered career counseling chat
import { checkRateLimit, getClientIP, sanitizeInput } from './utils/rateLimit.js';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const RATE_LIMIT_ENABLED = process.env.RATE_LIMIT_CHAT_ENABLED === 'true';
const MESSAGES_PER_HOUR = parseInt(process.env.RATE_LIMIT_MESSAGES_PER_HOUR) || 10;

// Career counseling context for the AI
const CAREER_CONTEXT = `
You are an expert career counselor specializing in Indian education system and career guidance. You help students with:

1. Stream selection after Class 10 (Science PCM/PCB, Commerce, Arts)
2. Career opportunities in different fields
3. Entrance exam guidance (JEE, NEET, CAT, etc.)
4. College selection and admission processes
5. AI impact on future careers
6. Skill development recommendations

Key Information:
- Engineering: Science PCM → JEE Main/Advanced → IITs/NITs/Private colleges
- Medical: Science PCB → NEET UG → MBBS/BDS/AYUSH → AIIMS/Government/Private medical colleges
- Commerce: CA, CS, MBA paths → CAT/XAT for MBA, Foundation courses for CA/CS
- Arts: Psychology, Journalism, Design, Civil Services → Various entrance exams

Important Guidelines:
- Always be encouraging and supportive
- Provide specific, actionable advice
- Mention both opportunities and challenges honestly
- Consider family financial situation sensitively
- Emphasize the importance of both passion and practical considerations
- Stay updated with current Indian education trends
- Be aware of reservation policies and their impact

Keep responses conversational, helpful, and under 300 words unless the user asks for detailed information.
`;

export async function handler(event, context) {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'CORS preflight successful' })
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse request body
    let body;
    try {
      body = JSON.parse(event.body);
    } catch (error) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid JSON in request body' })
      };
    }

    // Validate input
    const { message, conversationHistory = [] } = body;
    
    if (!message || typeof message !== 'string') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Message is required and must be a string' })
      };
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
            'X-RateLimit-Limit': MESSAGES_PER_HOUR.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': new Date(Date.now() + rateLimitResult.resetIn).toISOString()
          },
          body: JSON.stringify({ 
            error: 'Rate limit exceeded. Please try again later.',
            resetIn: Math.ceil(rateLimitResult.resetIn / 1000 / 60) // minutes
          })
        };
      }
    }

    // Sanitize input
    const sanitizedMessage = sanitizeInput(message);
    if (!sanitizedMessage) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Message cannot be empty after sanitization' })
      };
    }

    // Check if API key is available
    if (!GEMINI_API_KEY) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'AI service temporarily unavailable. Please try again later.' 
        })
      };
    }

    // Prepare conversation for Gemini API
    const conversationText = conversationHistory.slice(-10)
      .map(msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
      .join('\n') + `\nUser: ${sanitizedMessage}`;

    const fullPrompt = `${CAREER_CONTEXT}\n\nConversation:\n${conversationText}\n\nAssistant:`;

    // Call Gemini API
    const geminiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: fullPrompt
          }]
        }],
        generationConfig: {
          maxOutputTokens: 500,
          temperature: 0.7,
          topP: 0.8,
          topK: 40
        }
      })
    });

    if (!geminiResponse.ok) {
      const errorData = await geminiResponse.text();
      console.error('Gemini API error:', errorData);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'AI service error. Please try again in a moment.' 
        })
      };
    }

    const geminiData = await geminiResponse.json();
    const aiResponse = geminiData.candidates[0].content.parts[0].text;

    // Return successful response
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        response: aiResponse,
        messageCount: conversationHistory.length + 1,
        timestamp: new Date().toISOString()
      })
    };

  } catch (error) {
    console.error('Chat function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error. Please try again later.' 
      })
    };
  }
}