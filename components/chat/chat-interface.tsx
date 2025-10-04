"use client"

import React, { useEffect, useRef, useState } from "react"
import { useChat } from "ai/react"
import { RippleButton } from "@/components/ui/ripple-button"
import { Card } from "@/components/ui/card"
import { Send, Bot, Loader2, Trash2 } from "lucide-react"
import { MessageBubble } from "./message-bubble"
import { cn } from "@/lib/utils"
import RuixenPromptBox from "@/components/ui/ruixen-prompt-box"

function TypingIndicator() {
  return (
    <div className="flex gap-3 mb-4 justify-start">
      <div className="bg-muted rounded-2xl px-4 py-3">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  )
}

export function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages } = useChat({
    api: "/api/chat"
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const clearChat = () => {
    setMessages([])
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-background/50 backdrop-blur-sm">
        {messages.length > 0 && (
          <RippleButton
            variant="ghost"
            size="sm"
            onClick={clearChat}
            className="text-muted-foreground hover:text-destructive"
          >
            <Trash2 className="w-4 h-4" />
          </RippleButton>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Bot className="w-12 h-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Start a conversation
            </h3>
            <p className="text-muted-foreground max-w-md">
              Ask me anything! I'm here to help you with questions, code, creative tasks, and more.
            </p>
          </div>
        ) : (
          <>
            {messages.map((message: any) => (
              <MessageBubble
                key={message.id}
                role={message.role}
                content={message.content}
                timestamp={new Date()}
              />
            ))}
            {isLoading && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Input */}
      <RuixenPromptBox
        value={input}
        onChange={(value) => handleInputChange({ target: { value } } as any)}
        onSend={() => handleSubmit()}
        isLoading={isLoading}
      />
    </div>
  )
}