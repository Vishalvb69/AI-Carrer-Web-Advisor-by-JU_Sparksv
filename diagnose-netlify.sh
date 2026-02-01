#!/bin/bash

# Netlify Connection Diagnostic Script
# Run this to diagnose connection issues

echo "🔍 Netlify Connection Diagnostic Tool"
echo "======================================"
echo ""

# Check 1: Node & NPM
echo "1️⃣  Checking Node & NPM..."
node -v
npm -v
echo ""

# Check 2: Environment Variables
echo "2️⃣  Checking Environment Variables..."
if [ -f ".env.local" ]; then
    echo "✓ .env.local exists"
    if grep -q "HUGGINGFACE_API_KEY" .env.local; then
        echo "  ✓ HUGGINGFACE_API_KEY found"
    else
        echo "  ✗ HUGGINGFACE_API_KEY missing"
    fi
    if grep -q "GEMINI_API_KEY" .env.local; then
        echo "  ✓ GEMINI_API_KEY found"
    else
        echo "  ✗ GEMINI_API_KEY missing"
    fi
else
    echo "✗ .env.local NOT FOUND"
fi
echo ""

# Check 3: Function Files
echo "3️⃣  Checking Function Files..."
if [ -f "netlify/functions/rag-chat.js" ]; then
    echo "✓ rag-chat.js exists"
else
    echo "✗ rag-chat.js MISSING"
fi

if [ -f "netlify/functions/utils/embeddings.js" ]; then
    echo "✓ embeddings.js exists"
else
    echo "✗ embeddings.js MISSING"
fi

if [ -f "netlify/functions/utils/vectorStore.js" ]; then
    echo "✓ vectorStore.js exists"
else
    echo "✗ vectorStore.js MISSING"
fi
echo ""

# Check 4: netlify.toml
echo "4️⃣  Checking netlify.toml..."
if [ -f "netlify.toml" ]; then
    echo "✓ netlify.toml exists"
    if grep -q 'functions = "netlify/functions"' netlify.toml; then
        echo "  ✓ functions directory configured"
    else
        echo "  ✗ functions directory NOT configured"
    fi
else
    echo "✗ netlify.toml MISSING"
fi
echo ""

# Check 5: Netlify CLI
echo "5️⃣  Checking Netlify CLI..."
if command -v netlify &> /dev/null; then
    echo "✓ Netlify CLI installed"
    netlify --version
else
    echo "✗ Netlify CLI NOT installed"
    echo "  Install with: npm install -g netlify-cli"
fi
echo ""

# Check 6: Netlify Auth
echo "6️⃣  Checking Netlify Authentication..."
if netlify status > /dev/null 2>&1; then
    echo "✓ Netlify authenticated"
    netlify status | head -5
else
    echo "✗ NOT authenticated to Netlify"
    echo "  Run: netlify login"
fi
echo ""

# Check 7: Syntax Errors
echo "7️⃣  Checking JavaScript Syntax..."
if node -c netlify/functions/rag-chat.js 2>/dev/null; then
    echo "✓ rag-chat.js - Valid syntax"
else
    echo "✗ rag-chat.js - Syntax error!"
fi

if node -c netlify/functions/utils/embeddings.js 2>/dev/null; then
    echo "✓ embeddings.js - Valid syntax"
else
    echo "✗ embeddings.js - Syntax error!"
fi

if node -c netlify/functions/utils/vectorStore.js 2>/dev/null; then
    echo "✓ vectorStore.js - Valid syntax"
else
    echo "✗ vectorStore.js - Syntax error!"
fi
echo ""

# Summary
echo "======================================"
echo "📊 Diagnostic Summary"
echo "======================================"
echo ""
echo "To start development server:"
echo "  netlify dev --clear"
echo ""
echo "To test API endpoint:"
echo "  curl -X POST http://localhost:8888/.netlify/functions/rag-chat \\"
echo "    -H 'Content-Type: application/json' \\"
echo "    -d '{\"message\": \"Test\", \"conversationHistory\": []}'"
echo ""
echo "For more help: See NETLIFY_TROUBLESHOOTING.md"
echo ""
