import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { FREE_MODELS } from "./constants"
import type { AIModel, ComparisonPane } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Date formatting
export function formatTimestamp(date: Date): string {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)

  if (minutes < 1) return 'Just now'
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  if (days < 7) return `${days}d ago`

  return date.toLocaleDateString()
}

// Text truncation
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength - 3) + '...'
}

// Message ID generation
export function generateMessageId(): string {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

// Error message formatting
export function formatErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message
  if (typeof error === 'string') return error
  return 'An unexpected error occurred'
}

// Local storage helpers
export function saveToLocalStorage(key: string, value: any): void {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value))
    }
  } catch (error) {
    console.warn('Failed to save to localStorage:', error)
  }
}

export function loadFromLocalStorage<T>(key: string, defaultValue: T): T {
  try {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    }
  } catch (error) {
    console.warn('Failed to load from localStorage:', error)
  }
  return defaultValue
}

// Scroll utilities
export function scrollToBottom(element: HTMLElement, smooth = true): void {
  if (element) {
    element.scrollTo({
      top: element.scrollHeight,
      behavior: smooth ? 'smooth' : 'auto'
    })
  }
}

// Model image mapping function
export function getModelProviderImage(modelId: string): string {
  const provider = modelId.split('/')[0];
  return `/images/models/${provider}.png`;
}

// Model color assignment function
export function getModelColor(modelId: string, index: number): string {
  const colors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-red-500',
    'bg-yellow-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-teal-500',
    'bg-orange-500'
  ];
  return colors[index % colors.length];
}

// Export formatting functions
export function formatComparisonAsMarkdown(panes: ComparisonPane[]): string {
  let markdown = '# AI Model Comparison Results\n\n';
  markdown += `Generated on ${new Date().toLocaleString()}\n\n`;

  panes.forEach((pane, index) => {
    const model = pane.model;
    markdown += `## ${model.name} (${model.provider})\n\n`;
    markdown += `**Speed:** ${model.speed} | **Context Window:** ${model.contextWindow}K tokens\n\n`;
    markdown += `**Description:** ${model.description}\n\n`;

    pane.messages.forEach((message, msgIndex) => {
      if (message.role === 'user') {
        markdown += `### User Query ${Math.floor(msgIndex / 2) + 1}\n\n${message.content}\n\n`;
      } else {
        markdown += `### Response\n\n${message.content}\n\n`;
      }
    });

    markdown += '---\n\n';
  });

  return markdown;
}

export function formatComparisonAsJSON(panes: ComparisonPane[]): string {
  const data = {
    timestamp: new Date().toISOString(),
    models: panes.map(pane => ({
      model: pane.model,
      messageCount: pane.messages.length,
      messages: pane.messages
    }))
  };
  return JSON.stringify(data, null, 2);
}

// Download helper function
export function downloadFile(content: string, filename: string, mimeType: string): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Clipboard helper function
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const success = document.execCommand('copy');
      textArea.remove();
      return success;
    }
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return false;
  }
}

// Response time formatter
export function formatResponseTime(ms: number): string {
  if (ms < 1000) {
    return `${ms}ms`;
  } else {
    return `${(ms / 1000).toFixed(1)}s`;
  }
}

// Model metadata helper
export function getModelMetadata(modelId: string): { provider: string, name: string, speed: string, contextWindow: number } | null {
  const model = FREE_MODELS.find(m => m.id === modelId);
  if (!model) return null;

  return {
    provider: model.provider,
    name: model.name,
    speed: model.speed,
    contextWindow: model.contextWindow
  };
}
