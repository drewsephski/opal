// Chat types
export interface Message {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: Date
}

export interface ChatSession {
  id: string
  title: string
  messages: Message[]
  createdAt: Date
  updatedAt: Date
}

// AI Model types
export interface AIModel {
  id: string;
  name: string;
  description: string;
  contextWindow: number;
  speed: 'fast' | 'balanced' | 'slow';
  provider: string;
}

export interface ComparisonPane {
  id: string;
  model: AIModel;
  messages: Message[];
  isLoading: boolean;
}

export type ComparisonMode = 'single' | 'split' | 'triple';

// Navigation types
export interface NavLink {
  name: string
  href: string
  description?: string
}

// Feature types
export interface Feature {
  id: string
  title: string
  description: string
  icon: string | React.ComponentType
  image?: string
}

// Pricing types
export interface PricingTier {
  id: string
  name: string
  price: number | 'custom'
  description: string
  features: string[]
  highlighted?: boolean
  ctaText: string
  ctaHref: string
}

// Agent types
export interface AgentWorkflow {
  id: string
  name: string
  description: string
  icon: string | React.ComponentType
  status: 'available' | 'coming-soon'
  useCase: string
}

// API types
export interface ChatRequest {
  messages: Message[];
  model?: string;
}

export interface ChatResponse {
  message: Message
  error?: string
}

export interface ErrorResponse {
  error: string
  message: string
  statusCode: number
}

// Component prop types
export interface CTASectionProps {
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  variant?: "default" | "gradient"
}

export interface NavigationProps {
  activePage?: string
}

export interface ChatSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onClearChat: () => void;
  messageCount: number;
  selectedModels: AIModel[];
  comparisonMode: ComparisonMode;
  onModelChange: (models: AIModel[]) => void;
}

export interface MessageBubbleProps {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  isStreaming?: boolean;
}