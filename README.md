# Opal - Multi-Model AI Comparison Lab & Chat Template

A production-ready Next.js template for building AI chatbots and autonomous agents with **side-by-side model comparison**, streaming responses, multi-model support, and modern UI.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **🔄 Streaming AI responses** with Vercel AI SDK v5
- **🤖 Multi-model comparison** - Compare up to 3 AI models side-by-side
- **🎯 Dynamic model selection** from 9+ free OpenRouter models
- **🔀 Synchronized input** across comparison panes
- **📊 Model performance metrics** and response time tracking
- **💾 Export and compare responses** in Markdown/JSON formats
- **🎨 Enhanced UI** with AI-generated provider images and animations
- **⚡ Real-time streaming** responses from multiple models simultaneously
- **📱 Fully responsive design** (mobile-friendly)
- **🌓 Dark/light mode support**
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
- **`/chat`** - AI chat interface with model comparison

## 🤖 Supported Models

Opal supports 9 free OpenRouter models for comparison and experimentation:

| Model | Provider | Speed | Context Window | Description |
|-------|----------|-------|----------------|-------------|
| **Llama 3.3 8B** | Meta | Balanced | 8K | Latest Llama model with excellent reasoning |
| **Llama 3.2 3B** | Meta | Fast | 8K | Lightweight Llama optimized for speed |
| **Mistral Small 3** | Mistral | Balanced | 32K | Strong performance with good balance |
| **Qwen 3 30B** | Qwen | Slow | 32K | Powerful model for complex reasoning |
| **OpenChat 3.5** | OpenChat | Fast | 8K | Uncensored chat model with creative responses |
| **Sarvam-M 24B** | Sarvam | Balanced | 16K | Multilingual model supporting multiple languages |
| **Dolphin 3.0** | Cognitive Computations | Balanced | 32K | Uncensored Mistral-based model |
| **Dolphin 3.0 R1** | Cognitive Computations | Slow | 32K | Reasoning-focused Dolphin model |
| **MAI DS R1** | Microsoft | Balanced | 16K | Microsoft's data science model |

*Note: Model availability may change due to OpenRouter's rotation policy. Check [OpenRouter docs](https://openrouter.ai/docs) for the latest list.*

## 🚀 Usage Guide

### Basic Chat
1. Navigate to `/chat`
2. Select your preferred AI model from the dropdown
3. Type your message and press Enter
4. Enjoy streaming responses with real-time updates

### Model Comparison Mode
1. Click the **Columns** (2 models) or **Grid3x3** (3 models) button in the header
2. Select different models for each pane using the model selectors
3. Enable **Sync** to send the same prompt to all models simultaneously
4. Compare responses side-by-side with performance metrics
5. Export comparison results as Markdown or JSON

### Keyboard Shortcuts
- `Cmd/Ctrl + 1` - Switch to single model mode
- `Cmd/Ctrl + 2` - Switch to split comparison (2 models)
- `Cmd/Ctrl + 3` - Switch to triple comparison (3 models)
- `Cmd/Ctrl + M` - Open model selector
- `Cmd/Ctrl + K` - Clear all conversations

## ⚙️ Technology Stack

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

### Free OpenRouter Models

Opal supports a range of free models from OpenRouter. Check `lib/constants.ts` for the current list and update as needed.

### Changing the AI Model

Edit `app/api/chat/route.ts` to customize the model:

```typescript
model: openrouter(selectedModel)
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
- [Lucide React](https://lucide.dev/) - Beautiful icons

## 📞 Support

- 📧 Email: drewsepeczi@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/drewsephski/opal/issues)
- 💬 Community: [Discord](https://discord.com/)

---

Built with ❤️ by [Drew Sepeczi](https://github.com/drewsephski)
