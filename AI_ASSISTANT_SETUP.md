# AI Assistant Setup Instructions

## What Was Fixed

✅ **Created proper Vercel serverless API route** at `pages/api/chat.js`
✅ **Enhanced error handling** with detailed debugging messages  
✅ **Fixed security issue** - removed API key from .env file
✅ **Updated vercel.json** to properly route API calls
✅ **Improved frontend error display** - shows actual error messages

## Installation Steps

### 1. Clean Up the Old API Folder (Optional)
You have an old `api/chat.js` at the root - it's no longer needed. The new one is in `pages/api/chat.js`.

### 2. Vercel Setup - IMPORTANT ⚠️

Before deploying, you MUST set the environment variable in Vercel:

1. Go to: https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add a new variable:
   - **Name:** `OPENAI_API_KEY`
   - **Value:** Your OpenAI API key (from https://platform.openai.com/api-keys)
5. Click "Add"
6. Redeploy your project

### 3. Local Testing

For local testing (optional):
1. Create a `.env.local` file in the `portofolio` folder
2. Add: `OPENAI_API_KEY=your-api-key-here`
3. Run: `npm start`
4. Test the chatbot

### 4. Deploy to Vercel

```bash
git add .
git commit -m "Fix AI assistant - add proper API routes"
git push
```

Vercel will auto-deploy. Once done, the chatbot should work!

## Troubleshooting

If the chatbot still shows errors:

1. **Check Vercel Environment Variables:**
   - Open Vercel dashboard → Settings → Environment Variables
   - Verify `OPENAI_API_KEY` exists and is correct

2. **Check for Errors:**
   - Open browser DevTools (F12)
   - Check Console and Network tabs
   - Look for error messages from the `/api/chat` endpoint

3. **Common Issues:**
   - ❌ API Key not set on Vercel → Go to Vercel dashboard and add it
   - ❌ API Key is invalid → Get a new one from OpenAI
   - ❌ Project not redeployed → Click "Redeploy" in Vercel dashboard

## Files Changed

- ✨ Created: `pages/api/chat.js` (new Vercel serverless function)
- 📝 Updated: `src/components/AIChatBot.jsx` (better error handling)
- 📝 Updated: `vercel.json` (correct routing)
- 📝 Updated: `.env` (removed API key for security)
- 📝 Created: `.env.example` (shows proper structure)

## Security Notes

⚠️ Never commit `.env` with your API key to Git!
- The `.gitignore` file already protects it
- API keys should ONLY be set in Vercel dashboard
