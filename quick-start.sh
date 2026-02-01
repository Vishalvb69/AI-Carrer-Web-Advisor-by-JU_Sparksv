#!/bin/bash
# Quick Start Script - Get the chat working in 2 minutes

echo "🚀 AI Career Advisor - Quick Start"
echo "=================================="
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm not found. Please install Node.js and npm first."
    exit 1
fi

echo "✅ npm found: $(npm --version)"
echo ""

# Navigate to project directory
cd "$(dirname "$0")" || exit 1
echo "📁 Project directory: $(pwd)"
echo ""

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ npm install failed"
        exit 1
    fi
    echo "✅ Dependencies installed"
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "🔑 API Configuration Status:"
echo "============================="

# Check .env.local
if [ -f ".env.local" ]; then
    if grep -q "GEMINI_API_KEY=" .env.local; then
        API_KEY=$(grep "GEMINI_API_KEY=" .env.local | cut -d'=' -f2)
        if [[ $API_KEY == AIza* ]]; then
            echo "✅ Valid Gemini API key configured"
            echo "   Full AI features will be enabled"
        elif [ -z "$API_KEY" ]; then
            echo "⚠️  GEMINI_API_KEY is empty"
            echo "   System will use fallback responses"
            echo "   Get one here: https://aistudio.google.com/app/apikey"
        else
            echo "⚠️  GEMINI_API_KEY might be invalid (doesn't start with 'AIza')"
            echo "   System will use fallback responses"
            echo "   Current format: ${API_KEY:0:20}..."
            echo "   Get a valid one: https://aistudio.google.com/app/apikey"
        fi
    fi
    
    if grep -q "HUGGINGFACE_API_KEY=" .env.local; then
        HF_KEY=$(grep "HUGGINGFACE_API_KEY=" .env.local | cut -d'=' -f2)
        if [ -n "$HF_KEY" ]; then
            echo "✅ Hugging Face API key configured"
        fi
    fi
else
    echo "⚠️  .env.local not found"
    echo "   Creating default .env.local..."
    cat > .env.local << 'EOF'
HUGGINGFACE_API_KEY=your_api_key_here
GEMINI_API_KEY=
RATE_LIMIT_CHAT_ENABLED=true
RATE_LIMIT_MESSAGES_PER_HOUR=20
EOF
    echo "   ✅ Created .env.local (please add valid API keys)"
fi

echo ""
echo "✅ Setup Complete!"
echo "=================="
echo ""
echo "Starting development server..."
echo ""
echo "The app will be available at:"
echo "  📱 Local:   http://localhost:5173 (or next available port)"
echo "  🌐 Network: Check terminal output for exact URL"
echo ""
echo "Next steps:"
echo "1. Look for the chat bubble (💬) in the bottom-right corner"
echo "2. Click it to open the chat interface"
echo "3. Ask: 'What are the best engineering careers?'"
echo "4. Wait ~30 seconds for first response (embeddings are being generated)"
echo ""
echo "To upgrade to full AI features:"
echo "1. Get API key: https://aistudio.google.com/app/apikey"
echo "2. Update GEMINI_API_KEY in .env.local"
echo "3. Restart this script"
echo ""
echo "Ready? Starting now..."
echo "Press Ctrl+C to stop the server"
echo "=================================="
echo ""

# Run the development server
npm run dev
