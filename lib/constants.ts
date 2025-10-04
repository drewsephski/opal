// Site metadata
export const SITE_NAME = "Opal"
export const SITE_TITLE = "Opal - AI Chatbot & Autonomous Agent Template"
export const SITE_DESCRIPTION = "A production-ready Next.js template for building AI applications"
export const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

// AI configuration
export const DEFAULT_MODEL = "z-ai/glm-4.5-air:free"
export const DEFAULT_SYSTEM_PROMPT = "You are a helpful AI assistant built with the Opal AI template. You provide clear, concise, and accurate responses."
export const MAX_TOKENS = 2048
export const TEMPERATURE = 0.7

// Rate limits (for display purposes)
export const FREE_TIER_REQUESTS_PER_MINUTE = 20
export const FREE_TIER_REQUESTS_PER_DAY = 50
export const PRO_TIER_REQUESTS_PER_MINUTE = 100
export const PRO_TIER_REQUESTS_PER_DAY = 10000

// Navigation links
export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Agents', href: '/agents' },
  { name: 'Chat', href: '/chat' },
]

// Social links
export const SOCIAL_LINKS = {
  github: "https://github.com/drewsephski",
  twitter: "https://x.com/drewsepeczi",
  linkedin: "https://www.linkedin.com/in/drewsepeczi",
  email: "drewsepeczi@gmail.com"
}

// Feature flags (optional)
export const ENABLE_CHAT_HISTORY = false
export const ENABLE_MULTI_MODEL = false