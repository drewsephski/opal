// Site metadata
export const SITE_NAME = "Opal";
export const SITE_TITLE = "Opal - AI Chatbot & Autonomous Agent Template";
export const SITE_DESCRIPTION = "A production-ready Next.js template for building AI applications";
export const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

// AI configuration
export const DEFAULT_SYSTEM_PROMPT = "You are a helpful AI assistant built with the Opal AI template. You provide clear, concise, and accurate responses.";
export const MAX_TOKENS = 2048;
export const TEMPERATURE = 0.7;

// Multi-model configuration
export const FREE_MODELS = [
  {
    id: "meta-llama/llama-3.3-8b-instruct:free",
    name: "Llama 3.3 8B",
    description: "Meta's latest Llama model with excellent reasoning capabilities",
    contextWindow: 8192,
    speed: "balanced",
    provider: "Meta"
  },
  {
    id: "meta-llama/llama-3.2-3b-instruct:free",
    name: "Llama 3.2 3B",
    description: "Lightweight Llama model optimized for speed",
    contextWindow: 8192,
    speed: "fast",
    provider: "Meta"
  },
  {
    id: "mistralai/mistral-small-24b-instruct-2501:free",
    name: "Mistral Small 3",
    description: "Mistral's balanced model with strong performance",
    contextWindow: 32768,
    speed: "balanced",
    provider: "Mistral"
  },
  {
    id: "qwen/qwen3-30b-a3b:free",
    name: "Qwen 3 30B",
    description: "Powerful Qwen model for complex reasoning tasks",
    contextWindow: 32768,
    speed: "slow",
    provider: "Qwen"
  },
  {
    id: "openchat/openchat-7b:free",
    name: "OpenChat 3.5",
    description: "Uncensored chat model with creative responses",
    contextWindow: 8192,
    speed: "fast",
    provider: "OpenChat"
  },
  {
    id: "sarvamai/sarvam-m:free",
    name: "Sarvam-M 24B",
    description: "Multilingual model supporting multiple languages",
    contextWindow: 16384,
    speed: "balanced",
    provider: "Sarvam"
  },
  {
    id: "cognitivecomputations/dolphin3.0-mistral-24b:free",
    name: "Dolphin 3.0",
    description: "Uncensored Mistral-based model with enhanced capabilities",
    contextWindow: 32768,
    speed: "balanced",
    provider: "Cognitive Computations"
  },
  {
    id: "cognitivecomputations/dolphin3.0-r1-mistral-24b:free",
    name: "Dolphin 3.0 R1",
    description: "Reasoning-focused Dolphin model with advanced logic",
    contextWindow: 32768,
    speed: "slow",
    provider: "Cognitive Computations"
  },
  {
    id: "microsoft/mai-ds-r1:free",
    name: "MAI DS R1",
    description: "Microsoft's data science model for analytical tasks",
    contextWindow: 16384,
    speed: "balanced",
    provider: "Microsoft"
  }
] as const;
export const DEFAULT_MODEL = FREE_MODELS[0].id;

// Comparison mode settings
export const COMPARISON_MODE_ENABLED = true;
export const MAX_COMPARISON_MODELS = 3;

// Rate limits (for display purposes)
export const FREE_TIER_REQUESTS_PER_MINUTE = 20;
export const FREE_TIER_REQUESTS_PER_DAY = 50;
export const PRO_TIER_REQUESTS_PER_MINUTE = 100;
export const PRO_TIER_REQUESTS_PER_DAY = 10000;

// Navigation links
export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Agents', href: '/agents' },
  { name: 'Chat', href: '/chat' },
];

// Social links
export const SOCIAL_LINKS = {
  github: "https://github.com/drewsephski",
  twitter: "https://x.com/drewsepeczi",
  linkedin: "https://www.linkedin.com/in/drewsepeczi",
  email: "drewsepeczi@gmail.com"
};

// Feature flags (optional)
export const ENABLE_CHAT_HISTORY = false;
export const ENABLE_MULTI_MODEL = true;