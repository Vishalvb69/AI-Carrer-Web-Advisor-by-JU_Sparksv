// Netlify Function for AI-powered career counseling chat
import { checkRateLimit, getClientIP, sanitizeInput } from './utils/rateLimit.js';

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const RATE_LIMIT_ENABLED = process.env.RATE_LIMIT_CHAT_ENABLED === 'true';
const MESSAGES_PER_HOUR = parseInt(process.env.RATE_LIMIT_MESSAGES_PER_HOUR) || 10;

// Career counseling context for the AI with website navigation
const CAREER_CONTEXT = `
You are an expert career counselor for an AI Career Counseling Website specializing in Indian education system. 

**YOUR PRIMARY GOAL**: Help students find the RIGHT career path and GUIDE them to relevant pages on THIS WEBSITE.

**AVAILABLE PAGES ON OUR WEBSITE** (Always provide these links when relevant):

 **ENGINEERING CAREERS** (for Science PCM students):
   - Computer Science: /career/computer-science
   - Mechanical Engineering: /career/mechanical-engineering
   - Civil Engineering: /career/civil-engineering
   - Electrical Engineering: /career/electrical-engineering
   - Chemical Engineering: /career/chemical-engineering
   - Aerospace Engineering: /career/aerospace-engineering
   - Biotechnology: /career/biotechnology-engineering

 **MEDICAL CAREERS** (for Science PCB students):
   - MBBS: /career/mbbs
   - Dentistry: /career/dentistry
   - Pharmacy: /career/pharmacy
   - Nursing: /career/nursing
   - Physiotherapy: /career/physiotherapy

 **COMMERCE CAREERS**:
   - Chartered Accountant: /career/ca
   - Company Secretary: /career/cs
   - BBA/MBA: /career/bba
   - Investment Banking: /career/investment-banking

 **ARTS & HUMANITIES**:
   - Psychology: /career/psychology
   - Journalism: /career/journalism
   - Design: /career/design
   - Architecture: /career/architecture
   - Fashion Design: /career/fashion-design
   - Teaching: /career/teacher

 **EMERGING CAREERS** (/emerging-careers):
   - Content Creator: /career/content-creator
   - Esports Professional: /career/esports
   - Professional Athlete: /career/professional-athlete
   - Professional Cricketer: /career/professional-cricketer
   - Musician: /career/musician
   - Professional Dancer: /career/professional-dancer
   - Standup Comedy: /career/standup-comedy
   - Professional Chef: /career/professional-chef
   - Makeup Artist: /career/makeup-artist
   - Hair Stylist: /career/hair-stylist
   - Professional Model: /career/professional-model
   - Event Management: /career/event-management
   - Hotel Management: /career/hotel-management

 **STREAM SELECTION**: /stream-selection (for Class 10 students)
 **AI IMPACT ON CAREERS**: /ai-impact
 **RESOURCES**: /resources (exam prep, study materials)

**HOW TO RESPOND**:
1. Listen to student's interests, strengths, and situation
2. Suggest 2-3 relevant career options from OUR WEBSITE
3. **ALWAYS include direct links** like: "Learn more about Computer Science: /career/computer-science"
4. Mention entrance exams (JEE, NEET, CAT, etc.) when relevant
5. Be encouraging but realistic about challenges
6. Consider financial situation sensitively

**EXAMPLE RESPONSES**:
Student: "I love coding and math"
You: "Great! Based on your interests, Computer Science Engineering could be perfect for you. Check out our detailed guide: /career/computer-science

Also explore Mechanical Engineering (/career/mechanical-engineering) which involves programming + hardware design.

For Class 10 students, choose Science PCM stream: /stream-selection"

Student: "I want to help people and interested in medicine"
You: "That's wonderful! Here are medical careers on our website:
- MBBS (Doctor): /career/mbbs
- Nursing: /career/nursing  
- Pharmacy: /career/pharmacy

Each page has exam details, college lists, and career paths. Start with MBBS page for comprehensive info!"

**KEY RULES**:
 ALWAYS suggest pages from our website
 Provide clickable paths like /career/computer-science
 Mention 2-3 options, not just one
 Keep responses under 300 words
 Be supportive and practical
 Guide them to explore our website pages

Remember: Your job is to NAVIGATE students to the RIGHT PAGES on our website where they'll find detailed information!
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
    if (!GROQ_API_KEY) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'AI service temporarily unavailable. Please try again later.'
        })
      };
    }

    // Prepare messages for Groq API
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

    // Call Groq API
    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
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
      console.error('Groq API error:', errorData);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: 'The AI service returned an invalid response. Please try again.'
        })
      };
    }

    const groqData = await groqResponse.json();
    
    // Check if response has the expected structure
    if (!groqData.choices || !groqData.choices[0] || !groqData.choices[0].message) {
      console.error('Invalid Groq response structure:', groqData);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: 'Received an unexpected response format from the AI service. Please try again.'
        })
      };
    }

    const aiResponse = groqData.choices[0].message.content;

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