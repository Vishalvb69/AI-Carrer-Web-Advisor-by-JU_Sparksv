# 🚀 Netlify Deployment Guide

## Quick Setup (5 minutes)

### Step 1: Connect to Netlify

1. **Go to Netlify**: https://app.netlify.com/
2. **Sign in** with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Select **GitHub** as your Git provider
5. Authorize Netlify to access your repositories
6. Select repository: **`Vishalvb69/AI-Carrer-Web-Advisor-by-JU_Sparksv`**
7. Select branch: **`Praduman`**

### Step 2: Configure Build Settings

On the deployment configuration page, enter:

```
Build command: npm run build
Publish directory: dist
Functions directory: netlify/functions
```

Click **"Deploy site"**

### Step 3: Add Environment Variable

After the initial deployment completes:

1. Go to **Site settings** → **Environment variables**
2. Click **"Add a variable"** → **"Add a single variable"**
3. Enter:
   - **Key**: `GROQ_API_KEY`
   - **Value**: `your_groq_api_key_here`
4. Click **"Create variable"

### Step 4: Redeploy

1. Go to **Deploys** tab
2. Click **"Trigger deploy"** → **"Deploy site"**
3. Wait for deployment to complete (~2 minutes)

### Step 5: Test Your Live Site

1. Click the site URL (e.g., `https://your-site-name.netlify.app`)
2. Click the chatbot icon (bottom right)
3. Send a test message

🎉 **Done! Your AI Career Counselor is live!**

---

## 🔧 Troubleshooting

### Chatbot not working on live site?

1. **Check Environment Variables:**
   - Go to Site settings → Environment variables
   - Verify `GROQ_API_KEY` is set correctly
   - If changed, trigger a new deploy

2. **Check Function Logs:**
   - Go to Functions tab
   - Click on `chat` function
   - Check logs for errors

3. **Check Deploy Logs:**
   - Go to Deploys tab
   - Click latest deploy
   - Check build logs for errors

---

## 📝 Alternative: Deploy via Netlify CLI

If you prefer command line:

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize Netlify site
netlify init

# Add environment variable
netlify env:set GROQ_API_KEY "your_groq_api_key_here"

# Deploy
netlify deploy --prod
```

---

## 🔄 Future Updates

After pushing changes to GitHub:

1. Netlify will **automatically rebuild and deploy**
2. No need to manually trigger deploys
3. Check deploy status at your Netlify dashboard

---

## 🌐 Custom Domain (Optional)

To add a custom domain:

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow the instructions to configure DNS

---

## 📊 Monitor Your Site

Netlify provides:
- ✅ Build & deploy status
- ✅ Function invocation logs
- ✅ Bandwidth & performance metrics
- ✅ Form submissions (if enabled)

Access all at: https://app.netlify.com/sites/YOUR-SITE-NAME

---

## 🆘 Need Help?

If deployment fails:
1. Check build logs for errors
2. Verify all dependencies in package.json
3. Ensure .env is NOT committed to Git (it shouldn't be)
4. Check that environment variables are set in Netlify
