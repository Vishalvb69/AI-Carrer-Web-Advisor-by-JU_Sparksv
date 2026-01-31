# ???? AI Career Advisor - RAG Chatbot

An intelligent career guidance chatbot powered by OpenRouter's Claude AI with Retrieval Augmented Generation (RAG) using vector search across 350+ career profiles.

## ???? Quick Start

### Prerequisites
- Node.js (v22+)
- npm (v9+)
- OpenRouter API key (get at https://openrouter.ai)

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Setup environment
cp .env.example .env.local

# 3. Add your OpenRouter API key to .env.local
OPENROUTER_API_KEY=sk-or-v1-YOUR_KEY_HERE

# 4. Start development server
npm run dev

# 5. Open browser
# http://localhost:5173
```

## ???? Features

??? **AI-Powered Career Guidance**
- Claude 3.5 Sonnet via OpenRouter
- RAG with vector search
- 350+ career profiles
- Source citations

???? **Career Database**
- Engineering, Medical, Commerce, Arts
- 25+ entrance exams
- Salary info & growth rates
- AI impact analysis

???? **Smart Chat**
- Real-time responses
- Conversation history
- Fallback when API unavailable

## ???? Configuration

Update `.env.local`:

```env
OPENROUTER_API_KEY=sk-or-v1-YOUR_KEY_HERE
HUGGINGFACE_API_KEY=hf_YOUR_KEY_HERE
RATE_LIMIT_CHAT_ENABLED=true
RATE_LIMIT_MESSAGES_PER_HOUR=20
```

## ???? How It Works

1. User sends message via chat
2. System searches vector database (350+ careers)
3. Top 5 relevant careers retrieved
4. Claude generates response with context
5. Sources displayed with scores

## ???? Structure

```
src/
????????? components/ChatInterface-RAG.jsx
????????? data/careers.js (350+ profiles)
????????? data/exams.js (25+ exams)

netlify/functions/
????????? rag-chat.js
????????? utils/
    ????????? embeddings.js
    ????????? vectorStore.js
    ????????? fallbackResponses.js
```

## ???? Deploy

```bash
npm run build
netlify deploy --prod
```

## ?????? Tech Stack

- **Frontend**: React, Vite, Tailwind
- **Backend**: Netlify Functions
- **AI**: OpenRouter (Claude 3.5 Sonnet)
- **Vector Search**: Hugging Face Embeddings

## ???? Troubleshooting

**Chat not responding?**
- Verify `OPENROUTER_API_KEY` in `.env.local`
- Check OpenRouter account has credits
- Restart: `npm run dev`

**JSON parse error?**
- System uses fallback responses automatically
- Check browser console
- Ensure `.env.local` formatted correctly

**Slow response?**
- First query initializes embeddings (~30s)
- Normal behavior

## ???? License

MIT License
