# Deployment Instructions for AI Career Counselor Website

## Context
This is an AI Career Counseling website with a working chatbot powered by Groq API. The working code is currently on the `Praduman` branch and needs to be merged to `main` and deployed to Netlify.

## Repository Information
- **Repository**: Vishalvb69/AI-Carrer-Web-Advisor-by-JU_Sparksv
- **Current Working Branch**: `Praduman`
- **Target Branch**: `main`
- **Technology Stack**: React + Vite, Node.js, Netlify Functions
- **AI Service**: Groq API (Free tier: 14,400 requests/day)

## Prerequisites
⚠️ **CRITICAL**: You MUST obtain the Groq API key from the repository owner before deployment. Without this API key, the chatbot will NOT work.

### Required from Owner:
1. **Groq API Key** - Ask: "Please provide your GROQ_API_KEY for deployment"
   - This is essential for the chatbot functionality
   - The owner should have this key saved locally in their `.env` file
   - Never commit this key to the repository

## Step 1: Merge Praduman Branch to Main

```bash
# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main

# Merge Praduman branch
git merge Praduman

# Resolve any conflicts if they arise
# After resolving conflicts:
git add .
git commit -m "Merge Praduman branch with Groq API integration"

# Push to main
git push origin main
```

## Step 2: Netlify Deployment

### Option A: Deploy via Netlify Dashboard (Recommended)

1. **Connect Repository**
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize
   - Select repository: `Vishalvb69/AI-Carrer-Web-Advisor-by-JU_Sparksv`
   - Select branch: `main`

2. **Configure Build Settings**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Add Environment Variables** ⚠️ CRITICAL STEP
   - Go to Site settings → Environment variables
   - Click "Add a variable" → "Add a single variable"
   - Add the following:
   
   **Variable 1 (REQUIRED):**
   - Key: `GROQ_API_KEY`
   - Value: `[ASK OWNER FOR THIS KEY]`
   
   **Variable 2 (Optional):**
   - Key: `RATE_LIMIT_MAX_REQUESTS`
   - Value: `10`
   
   **Variable 3 (Optional):**
   - Key: `RATE_LIMIT_WINDOW_HOURS`
   - Value: `1`

4. **Deploy**
   - Click "Deploy site"
   - Wait for deployment to complete
   - Test the chatbot on the live site

### Option B: Deploy via Netlify CLI

```bash
# Install Netlify CLI if not already installed
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site (first time only)
netlify init

# Add environment variable (ASK OWNER FOR THE KEY FIRST)
netlify env:set GROQ_API_KEY "paste_owner_key_here"

# Deploy to production
netlify deploy --prod
```

## Step 3: Verify Deployment

After deployment, test the following:

1. **Website Loads**: Visit the deployed URL
2. **Chatbot Icon**: Look for blue chat icon (bottom right)
3. **Chatbot Opens**: Click the icon
4. **Send Test Message**: Type "What is computer science?" and send
5. **AI Response**: Verify you receive an AI-generated response
6. **No Errors**: Check browser console (F12) for errors

### Expected Behavior:
- ✅ Chatbot responds within 2-5 seconds
- ✅ No error messages about OPENROUTER_API_KEY
- ✅ RAG badge visible on chatbot header
- ✅ Smooth conversation flow

### Troubleshooting:
- ❌ If you see "Sorry, I'm having trouble responding"
  - Check environment variables in Netlify dashboard
  - Verify GROQ_API_KEY is set correctly
  - Check Netlify function logs for errors

- ❌ If chatbot doesn't appear
  - Check browser console for JavaScript errors
  - Verify build completed successfully
  - Try hard refresh (Ctrl+Shift+R)

## Step 4: Post-Deployment Configuration

1. **Custom Domain** (Optional)
   - Go to Site settings → Domain management
   - Add your custom domain
   - Update DNS records as instructed

2. **Enable HTTPS** (Automatic)
   - Netlify provides free HTTPS certificates
   - Should be enabled automatically

3. **Set Up Monitoring**
   - Monitor function logs in Netlify dashboard
   - Check for rate limiting issues
   - Monitor Groq API usage

## Important Files Reference

### Environment Configuration:
- `.env` (local only, NOT in git) - Contains GROQ_API_KEY

### API Endpoints:
- `dev-server.js` - Local development API server
- `netlify/functions/chat.js` - Production chat endpoint
- `netlify/functions/rag-chat.js` - Production RAG chat endpoint

### Frontend:
- `src/main.jsx` - App entry point (uses MinimalApp)
- `src/MinimalApp.jsx` - Main app component
- `src/components/ChatInterface-RAG.jsx` - Chatbot component

### Configuration:
- `vite.config.js` - Vite config with API proxy
- `netlify.toml` - Netlify configuration
- `package.json` - Dependencies and scripts

## Key Features Included

✅ AI-powered career counseling chatbot
✅ RAG (Retrieval Augmented Generation) support
✅ Rate limiting (10 requests/hour per IP)
✅ Career information pages
✅ Exam guidance
✅ Stream-specific career paths
✅ Responsive design
✅ Error handling and fallback responses

## Security Notes

⚠️ **NEVER commit the `.env` file to git**
⚠️ **NEVER expose the GROQ_API_KEY in client-side code**
⚠️ **The API key must ONLY be in Netlify environment variables**
⚠️ **Rate limiting is enabled to prevent abuse**

## Support & Documentation

- **Groq API Docs**: https://console.groq.com/docs
- **Netlify Docs**: https://docs.netlify.com/
- **Vite Docs**: https://vitejs.dev/
- **React Docs**: https://react.dev/

## Final Checklist

Before marking deployment as complete:

- [ ] Merged Praduman branch to main
- [ ] Obtained GROQ_API_KEY from owner
- [ ] Connected repository to Netlify
- [ ] Set build command: `npm run build`
- [ ] Set publish directory: `dist`
- [ ] Added GROQ_API_KEY environment variable
- [ ] Deployment succeeded
- [ ] Website loads correctly
- [ ] Chatbot icon appears
- [ ] Chatbot responds to test messages
- [ ] No console errors
- [ ] HTTPS enabled
- [ ] Informed owner of live URL

## Owner Contact Points

**BEFORE DEPLOYMENT - Ask the owner:**
1. "Please provide your GROQ_API_KEY for the chatbot"
2. "Would you like to use a custom domain?"
3. "Should I enable any additional Netlify features?"

**AFTER DEPLOYMENT - Inform the owner:**
1. Live website URL
2. Netlify dashboard access details
3. How to update environment variables if needed
4. How to view function logs and usage stats

---

**Note**: This deployment uses the free tier of Groq API which provides 14,400 requests per day. Monitor usage to ensure it stays within limits.
