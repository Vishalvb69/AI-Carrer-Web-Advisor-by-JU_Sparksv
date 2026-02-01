// Quick test of OpenRouter API
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.GROQ_API_KEY;

console.log('Testing Groq API...');
console.log('API Key:', apiKey ? `${apiKey.substring(0, 20)}...` : 'NOT FOUND');

async function testAPI() {
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [{
          role: 'user',
          content: 'Say hello'
        }],
        max_tokens: 50
      })
    });

    console.log('\nResponse Status:', response.status, response.statusText);
    
    const data = await response.text();
    console.log('\nResponse Body:');
    console.log(data);

    if (response.ok) {
      const json = JSON.parse(data);
      if (json.choices && json.choices[0]) {
        console.log('\n✅ API TEST SUCCESSFUL!');
        console.log('AI Response:', json.choices[0].message.content);
      }
    } else {
      console.log('\n❌ API TEST FAILED!');
    }
  } catch (error) {
    console.error('\n❌ Error:', error.message);
  }
}

testAPI();
