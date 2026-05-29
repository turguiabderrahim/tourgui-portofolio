# Tourgui's Portfolio 🚀

A modern, interactive portfolio website showcasing my projects, skills, and experience as a software developer.

## Features ✨

- **🌐 Multi-Language Support**: English & German translations using i18next
- **🤖 AI ChatBot**: Integrated OpenAI ChatBot to answer questions about my work
- **⚡ Performance Optimized**: Lazy loading and code splitting for fast page loads
- **🎨 Modern Design**: Clean, professional UI with smooth animations
- **📱 Responsive**: Fully responsive design for desktop, tablet, and mobile
- **🚀 Vercel Deployment Ready**: Easy deployment to Vercel with serverless API routes

## Tech Stack

- **Frontend**: React 19, React-i18next
- **Backend**: Node.js, Vercel Serverless Functions
- **AI**: OpenAI GPT-3.5 Turbo
- **Build**: Webpack (via Create React App)
- **Deployment**: Vercel

## Getting Started

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/turguiabderrahim/tourgui-portofolio.git
   cd tourgui-portofolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env.local` file:
   ```bash
   OPENAI_API_KEY=your-api-key-here
   ```

4. Start development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Production Build

```bash
npm run build
```

## Deployment to Vercel

1. Push to GitHub
2. Connect your repo to Vercel
3. Add environment variable: `OPENAI_API_KEY`
4. Deploy!

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── css/             # Stylesheets
│   ├── App.js           # Main app component
│   └── i18n.js          # i18next configuration
├── pages/
│   └── api/
│       └── chat.js      # Vercel serverless API route
├── package.json
└── vercel.json          # Vercel configuration
```

## Available Scripts

- `npm start` - Run development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## Sections

- **Hero**: Eye-catching introduction
- **About**: Personal background and bio
- **Projects**: Showcase of featured projects
- **Skills**: Technical skills breakdown
- **Experience**: Work experience timeline
- **Education**: Educational background
- **Languages**: Spoken languages proficiency
- **ChatBot**: AI assistant for interactions

## Environment Variables

### Required
- `OPENAI_API_KEY` - OpenAI API key for ChatBot functionality

## License

Copyright © 2024 Tourgui Abderrahim. All rights reserved.

## Contact

👋 Feel free to reach out through the portfolio website!
