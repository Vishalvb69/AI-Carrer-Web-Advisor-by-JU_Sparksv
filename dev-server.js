// Development server for local API testing
// This server proxies /api/chat requests to a simple mock handler
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Helper function to sanitize input
function sanitizeInput(message) {
  if (!message) return '';
  return message
    .trim()
    .substring(0, 500)
    .replace(/<[^>]*>/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '');
}

// Chat API endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, conversationHistory = [] } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required and must be a string' });
    }

    // Check API key
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      console.error('❌ GROQ_API_KEY not found in .env');
      return res.status(500).json({
        error: 'AI service temporarily unavailable. GROQ_API_KEY is not configured.'
      });
    }

    const sanitizedMessage = sanitizeInput(message);
    if (!sanitizedMessage) {
      return res.status(400).json({ error: 'Message cannot be empty after sanitization' });
    }

    // Career counseling context
    const CAREER_CONTEXT = `You are an expert career counselor for an AI Career Counseling Website specializing in Indian education system. Help students find the RIGHT career path and guide them to relevant pages on the website.`;

    // Prepare messages for OpenRouter API
    const messages = [
      {
        role: 'system',
        content: CAREER_CONTEXT
      },
      ...conversationHistory.slice(-10),
      {
        role: 'user',
        content: sanitizedMessage
      }
    ];

    // Call Groq API (OpenAI-compatible)
    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant', // Fast & efficient for free tier
        messages: messages,
        max_tokens: 800,
        temperature: 0.7,
        top_p: 0.9
      })
    });

    if (!groqResponse.ok) {
      const errorData = await groqResponse.text();
      console.error('❌ Groq API error:');
      console.error('   Status:', groqResponse.status);
      console.error('   Status Text:', groqResponse.statusText);
      console.error('   Response:', errorData);
      
      // Try to parse error details
      let errorMessage = 'API request failed';
      try {
        const errorJson = JSON.parse(errorData);
        errorMessage = errorJson.error?.message || errorJson.message || errorMessage;
      } catch (e) {
        // Not JSON, use raw text
        errorMessage = errorData || groqResponse.statusText;
      }
      
      return res.status(500).json({
        error: `Groq API Error: ${errorMessage}. Please check your API key.`
      });
    }

    const groqData = await groqResponse.json();
    console.log('✅ Groq response received');

    if (!groqData.choices || !groqData.choices[0] || !groqData.choices[0].message) {
      console.error('❌ Invalid Groq response structure:', JSON.stringify(groqData, null, 2));
      return res.status(500).json({
        error: 'Received an unexpected response format from the AI service.'
      });
    }

    const aiResponse = groqData.choices[0].message.content;

    res.status(200).json({
      response: aiResponse,
      messageCount: conversationHistory.length + 1,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Chat API error:', error.message);
    res.status(500).json({
      error: `Server error: ${error.message}`
    });
  }
});

// RAG Chat API endpoint (same as regular chat for dev)
app.post('/api/rag-chat', async (req, res) => {
  try {
    const { message, conversationHistory = [] } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required and must be a string' });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      console.error('❌ GROQ_API_KEY not found in .env');
      return res.status(500).json({
        error: 'AI service temporarily unavailable. GROQ_API_KEY is not configured.'
      });
    }

    const sanitizedMessage = sanitizeInput(message);
    if (!sanitizedMessage) {
      return res.status(400).json({ error: 'Message cannot be empty after sanitization' });
    }

    // Enhanced career context for RAG
    const RAG_CONTEXT = `You are an expert career counselor specializing in Indian education system and career guidance. Provide comprehensive, accurate career advice.`;

    const messages = [
      { role: 'system', content: RAG_CONTEXT },
      ...conversationHistory.slice(-10),
      { role: 'user', content: sanitizedMessage }
    ];

    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: messages,
        max_tokens: 800,
        temperature: 0.7,
        top_p: 0.9
      })
    });

    if (!groqResponse.ok) {
      const errorData = await groqResponse.text();
      console.error('❌ Groq RAG API error:', groqResponse.status, errorData.substring(0, 200));
      return res.status(500).json({
        error: `AI service error. Please try again.`
      });
    }

    const groqData = await groqResponse.json();
    console.log('✅ Groq RAG response received');

    if (!groqData.choices?.[0]?.message) {
      console.error('❌ Invalid Groq response structure');
      return res.status(500).json({
        error: 'Received an unexpected response format from the AI service.'
      });
    }

    const aiResponse = groqData.choices[0].message.content;

    res.status(200).json({
      response: aiResponse,
      fallbackMode: false,
      rag: {
        sources: [] // Dev mode doesn't include RAG sources
      },
      messageCount: conversationHistory.length + 1,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ RAG Chat API error:', error.message);
    res.status(500).json({
      error: `Server error: ${error.message}`
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Dev API server running on http://localhost:${PORT}`);
  console.log(`   Chat endpoint: http://localhost:${PORT}/api/chat`);
  console.log(`   RAG endpoint: http://localhost:${PORT}/api/rag-chat`);
  console.log(`🔑 Using Groq API Key: ${process.env.GROQ_API_KEY ? '✓ Configured' : '✗ NOT FOUND'}`);
  console.log(`🚀 Model: llama-3.1-8b-instant (Free tier: 14,400 requests/day)`);
});