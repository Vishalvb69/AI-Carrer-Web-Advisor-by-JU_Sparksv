#!/bin/bash

# RAG Chatbot Setup Script
# This script helps set up the RAG chatbot with necessary API keys and configuration

set -e

echo "🚀 AI Career Advisor - RAG Chatbot Setup"
echo "========================================="
echo ""

# Check if .env.local exists
if [ -f ".env.local" ]; then
    echo "⚠️  .env.local already exists. Backing up to .env.local.backup"
    cp .env.local .env.local.backup
fi

# Create .env.local with prompts
echo "Let's set up your RAG Chatbot! You'll need two API keys."
echo ""

# Hugging Face API Key
echo "1️⃣  HUGGING FACE API KEY"
echo "   Get it from: https://huggingface.co/settings/tokens"
read -p "   Enter your Hugging Face API Key: " HF_KEY

# Gemini API Key
echo ""
echo "2️⃣  GOOGLE GEMINI API KEY"
echo "   Get it from: https://makersuite.google.com/app/apikey"
read -p "   Enter your Google Gemini API Key: " GEMINI_KEY

# Create .env.local
cat > .env.local << EOF
# Hugging Face API Key (for embeddings)
HUGGINGFACE_API_KEY=$HF_KEY

# Google Gemini API Key (for LLM)
GEMINI_API_KEY=$GEMINI_KEY

# Rate limiting configuration
RATE_LIMIT_CHAT_ENABLED=true
RATE_LIMIT_MESSAGES_PER_HOUR=20

# Vector store configuration
VECTOR_STORE_BATCH_SIZE=10
VECTOR_STORE_TIMEOUT=30000

# Debug mode (set to true for verbose logging)
DEBUG_RAG=false
EOF

echo ""
echo "✅ .env.local created successfully!"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✨ Setup complete! You can now:"
echo "   1. Run: npm run dev (for development)"
echo "   2. Run: npm run build (for production)"
echo "   3. Deploy to Netlify with your environment variables"
echo ""
echo "📚 Documentation: See RAG_IMPLEMENTATION.md for detailed info"
echo "🤖 RAG Feature: Vector search is automatically integrated!"
echo ""
