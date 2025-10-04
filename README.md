# Opal - AI Chatbot & Autonomous Agent Template

A production-ready Next.js template for building AI chatbots and autonomous agents with streaming responses, multi-model support, and modern UI.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **🔄 Streaming AI responses** with Vercel AI SDK v5
- **🤖 OpenRouter integration** with free GLM-4.5-Air model
- **🎨 Modern UI** with Tailwind CSS 4 and Framer Motion
- **🌓 Dark/light mode support**
- **📱 Fully responsive design**
- **⚡ Edge runtime support**
- **🔒 TypeScript for type safety**
- **🎯 Production-ready architecture**
- **🧩 Modular component structure**
- **🚀 Autonomous agent framework**

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
git clone [repo-url]
cd opal
npm install
```

### Environment Setup

```bash
cp .env.example .env.local
# Add your OPENROUTER_API_KEY
```

### Getting an OpenRouter API Key

1. Visit [https://openrouter.ai/keys](https://openrouter.ai/keys)
2. Create a free account
3. Generate an API key
4. Add it to your `.env.local` file

**Free tier limits:** 20 requests/minute, 50-1000 requests/day (depending on credit purchase)

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
opal/
├── app/                    # Next.js pages and API routes
│   ├── api/chat/          # Chat API endpoint
│   ├── features/          # Features page
│   ├── pricing/           # Pricing page
│   ├── about/             # About page
│   ├── agents/            # Agents page
│   ├── chat/              # Chat page
│   └── layout.tsx         # Root layout
├── components/            # Reusable React components
│   ├── layout/            # Layout components (nav, footer)
│   ├── sections/          # Page sections
│   ├── chat/              # Chat-related components
│   └── ui/                # UI components
├── lib/                   # Utility functions and types
└── public/                # Static assets
```

## 📄 Pages Overview

- **`/`** - Landing page with hero, features, and testimonials
- **`/features`** - Comprehensive feature showcase
- **`/pricing`** - Pricing tiers and FAQ
- **`/about`** - Mission, values, and technology stack
- **`/agents`** - Autonomous agent capabilities
- **`/chat`** - AI chat interface

## 🛠 Technology Stack

- **Next.js 15** - React framework for production
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vercel AI SDK v5** - AI integration framework
- **OpenRouter** - Multi-provider AI API
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

## ⚙️ Configuration

### Environment Variables

```env
OPENROUTER_API_KEY=your_openrouter_api_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Next.js Config

Image domains are configured in `next.config.ts` for all external images used in the application.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Build Command

```bash
npm run build
```

## 🎨 Customization Guide

### Changing the AI Model

Edit `app/api/chat/route.ts`:

```typescript
model: openrouter('your-preferred-model')
```

### Adding New Pages

1. Create new directory in `app/`
2. Add `page.tsx` with your content
3. Update navigation in `components/layout/navigation.tsx`

### Customizing Theme

Modify `tailwind.config.js` and CSS variables in `app/globals.css`.

## 🔌 API Routes

### `/api/chat`

Streaming chat endpoint using Vercel AI SDK.

**Request:**
```typescript
POST /api/chat
{
  "messages": [
    {
      "role": "user",
      "content": "Hello!"
    }
  ]
}
```

**Response:** Server-sent events stream with AI responses.

## 💡 Best Practices

- **Rate Limiting:** Implement middleware for production rate limiting
- **Error Handling:** Comprehensive error handling throughout
- **Security:** Validate all inputs and sanitize outputs
- **Performance:** Use edge runtime for optimal response times

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines.

## 📄 License

MIT License - see LICENSE file for details.

## 🙏 Credits

- [Vercel AI SDK](https://vercel.com/docs/ai) - AI integration
- [OpenRouter](https://openrouter.ai/) - Multi-provider AI API
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## 📞 Support

- 📧 Email: drewsepeczi@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/drewsephski/opal/issues)
- 💬 Community: [Discord](https://discord.com/)

---

Built with ❤️ by [Drew Sepeczi](https://github.com/drewsephski)
