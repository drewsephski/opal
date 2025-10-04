import React from "react"
import { Bot, User, Copy, RotateCcw, ThumbsUp, ThumbsDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { getModelProviderImage, formatResponseTime } from "@/lib/utils"

interface MessageBubbleProps {
  role: "user" | "assistant"
  content: string
  timestamp: Date
  isStreaming?: boolean
  modelName?: string
  modelColor?: string
  responseTime?: number
  showModelBadge?: boolean
}

export function MessageBubble({
  role,
  content,
  timestamp,
  isStreaming = false,
  modelName,
  modelColor,
  responseTime,
  showModelBadge = false
}: MessageBubbleProps) {
  const isUser = role === "user"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content)
      // Could add a toast notification here
    } catch (error) {
      console.error('Failed to copy message:', error)
    }
  }

  const handleRegenerate = () => {
    // Placeholder for regenerate functionality
    console.log('Regenerate message')
  }

  return (
    <div className={cn(
      "flex gap-3 mb-4 group",
      isUser ? "justify-end" : "justify-start"
    )}>
      {!isUser && (
        <Avatar className="flex-shrink-0 w-8 h-8">
          <AvatarImage
            src={modelName ? getModelProviderImage(modelName) : undefined}
           alt={modelName || "AI Assistant"}
         />
         <AvatarFallback className="bg-primary text-primary-foreground">
           {modelName ? modelName.charAt(0).toUpperCase() : <Bot className="w-4 h-4" />}
         </AvatarFallback>
        </Avatar>
      )}

      <div className="flex-1 max-w-[80%]">
        {/* Model badge for assistant messages in comparison mode */}
        {!isUser && showModelBadge && modelName && (
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" size="sm" className="text-xs">
              {modelName}
            </Badge>
            {responseTime && (
              <span className="text-xs text-muted-foreground">
                {formatResponseTime(responseTime)}
              </span>
            )}
          </div>
        )}

        <div className={cn(
          "rounded-2xl px-4 py-3 relative",
          isUser
            ? "bg-primary text-primary-foreground ml-auto"
            : cn(
                "bg-muted text-muted-foreground",
                modelColor && `border-l-4 ${modelColor}`
              )
        )}>
          <div className="text-sm whitespace-pre-wrap">{content}</div>

          {/* Action buttons - show on hover */}
          {!isUser && (
            <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={handleCopy}
                className="p-1 rounded hover:bg-black/10 text-muted-foreground hover:text-foreground transition-colors"
                title="Copy message"
              >
                <Copy className="w-3 h-3" />
              </button>
              <button
                onClick={handleRegenerate}
                className="p-1 rounded hover:bg-black/10 text-muted-foreground hover:text-foreground transition-colors"
                title="Regenerate response"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
              <div className="flex items-center gap-1 ml-2">
                <button
                  className="p-1 rounded hover:bg-black/10 text-muted-foreground hover:text-green-600 transition-colors"
                  title="Good response"
                >
                  <ThumbsUp className="w-3 h-3" />
                </button>
                <button
                  className="p-1 rounded hover:bg-black/10 text-muted-foreground hover:text-red-600 transition-colors"
                  title="Poor response"
                >
                  <ThumbsDown className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}

          {isStreaming && (
            <div className="flex space-x-1 mt-2">
              <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          )}

          <div className="text-xs opacity-70 mt-1 flex items-center justify-between">
            <span>
              {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
            {!isUser && responseTime && !showModelBadge && (
              <span className="ml-2">
                {formatResponseTime(responseTime)}
              </span>
            )}
          </div>
        </div>
      </div>

      {isUser && (
       <Avatar className="flex-shrink-0 w-8 h-8">
         <AvatarFallback className="bg-secondary text-secondary-foreground">
           U
         </AvatarFallback>
       </Avatar>
      )}
    </div>
  )
}