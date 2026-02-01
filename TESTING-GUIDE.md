# 🤖 AI Career Counselor Chatbot - Testing Guide

## ✅ Current Status

**Servers Running:**
- 🟢 **API Server**: http://localhost:3001 (Groq API with llama-3.1-8b-instant)
- 🟢 **Frontend**: http://localhost:5174 (Vite dev server)

**Configuration:**
- ✅ Groq API Key: Configured
- ✅ Model: llama-3.1-8b-instant (Free tier: 14,400 requests/day)
- ✅ Proxy: Vite proxies `/api/*` to `http://localhost:3001`

---

## 🧪 Testing Steps

### Step 1: Test API Directly
Open: http://localhost:5174/test-chat.html

Click both buttons to test:
1. **Direct API** - Tests http://localhost:3001/api/chat
2. **Proxied API** - Tests /api/chat through Vite proxy

**Expected Result:** Both should return AI responses

---

### Step 2: Test Main Application
Open: http://localhost:5174

1. Click the **chatbot icon** (bottom right corner)
2. Type a message like: "Which stream should I choose after Class 10?"
3. Press Enter or click Send

**Expected Result:** AI should respond with career guidance

---

### Step 3: Check Terminal Logs

Watch the terminal for:
```
✅ Groq response received
```

This confirms the API is working.

---

## 🐛 Troubleshooting

### If chatbot doesn't respond:

1. **Check browser console** (F12 → Console tab)
   - Look for network errors or CORS issues

2. **Check terminal**
   - Should show incoming requests
   - Should show "✅ Groq response received"

3. **Verify servers are running**
   ```powershell
   Get-NetTCPConnection | Where-Object {$_.LocalPort -in @(3001, 5174)}
   ```

4. **Restart servers**
   - Press Ctrl+C in terminal
   - Run: `npm run dev`

---

## 📦 For Production (Netlify)

### Deploy to Netlify:

1. **Connect Repository to Netlify:**
   - Go to https://app.netlify.com/
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository

2. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Functions directory: `netlify/functions`

3. **Environment Variables:**
   After deployment, add in Netlify dashboard:
   ```
   GROQ_API_KEY=your_groq_api_key_here
   ```

4. **Redeploy:**
   - After adding environment variables
   - Click "Trigger deploy" → "Deploy site"

---

## 🔄 What Was Changed

### Files Modified:
1. **`.env`** - Added Groq API key
2. **`dev-server.js`** - Created local API server using Groq
3. **`netlify/functions/chat.js`** - Updated to use Groq API
4. **`vite.config.js`** - Added proxy configuration
5. **`package.json`** - Added scripts to run both servers concurrently

### Dependencies Added:
- `express` - API server
- `cors` - CORS handling
- `node-fetch` - HTTP requests
- `dotenv` - Environment variables
- `concurrently` - Run multiple commands

---

## 📊 API Usage Limits

**Groq Free Tier:**
- ✅ 30 requests per minute
- ✅ 14,400 requests per day
- ✅ No credit card required
- ✅ Very fast responses

---

## 🆘 Need Help?

If the chatbot still doesn't work:
1. Share the browser console errors (F12)
2. Share the terminal output
3. Try accessing http://localhost:5174/test-chat.html
