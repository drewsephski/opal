"use client"

import React, { useEffect, useRef, useState } from "react"
import { Popover } from "@/components/ui/popover"
import { useChat } from "ai/react"
import { RippleButton } from "@/components/ui/ripple-button"
import { Card } from "@/components/ui/card"
import { Send, Bot, Loader2, Trash2, Maximize2, Columns, Grid3x3 } from "lucide-react"
import { MessageBubble } from "./message-bubble"
import ModelSelector from "./model-selector"
import ComparisonPane from "./comparison-pane"
import ComparisonToolbar from "./comparison-toolbar"
import { cn } from "@/lib/utils"
import { FREE_MODELS, DEFAULT_MODEL } from "@/lib/constants"
import RuixenPromptBox from "@/components/ui/ruixen-prompt-box"
import type { AIModel, ComparisonMode, ComparisonPane as ComparisonPaneType, Message } from "@/lib/types"

export function ChatInterface() {
  // State management
  const [comparisonMode, setComparisonMode] = useState<ComparisonMode>('single')
  const [selectedModels, setSelectedModels] = useState<AIModel[]>([
    FREE_MODELS.find(m => m.id === DEFAULT_MODEL) || FREE_MODELS[0]
  ])
  const [syncEnabled, setSyncEnabled] = useState(true)
  const [sharedInput, setSharedInput] = useState('')

  // Single mode chat hook
  const singleChat = useChat({
    api: "/api/chat",
    body: { model: selectedModels[0]?.id }
  })

  // Comparison mode chat hooks
  const chat1 = useChat({
    api: "/api/chat",
    body: { model: selectedModels[0]?.id }
  })
  const chat2 = useChat({
    api: "/api/chat",
    body: { model: selectedModels[1]?.id }
  })
  const chat3 = useChat({
    api: "/api/chat",
    body: { model: selectedModels[2]?.id }
  })

  const comparisonChats = [chat1, chat2, chat3]

  // Get current chat data based on mode
  const currentChat = comparisonMode === 'single' ? singleChat : null
  const isAnyLoading = comparisonMode === 'single'
    ? singleChat.isLoading
    : comparisonChats.slice(0, comparisonMode === 'split' ? 2 : 3).some(chat => chat.isLoading)

  // Handle model selection
  const handleModelChange = (model: AIModel) => {
    setSelectedModels([model])
  }

  // Handle comparison model changes
  const handleComparisonModelChange = (index: number, model: AIModel) => {
    const newModels = [...selectedModels]
    newModels[index] = model
    setSelectedModels(newModels)
  }

  // Handle mode changes
  const handleModeChange = (mode: ComparisonMode) => {
    if (mode === 'single') {
      setComparisonMode('single')
      setSelectedModels([selectedModels[0] || FREE_MODELS[0]])
    } else {
      const modelCount = mode === 'split' ? 2 : 3
      const newModels = [...selectedModels]
      while (newModels.length < modelCount) {
        newModels.push(FREE_MODELS[newModels.length % FREE_MODELS.length])
      }
      newModels.splice(modelCount)
      setSelectedModels(newModels)
      setComparisonMode(mode)
    }
  }

  // Handle sending messages in comparison mode
  const handleComparisonSend = (input: string) => {
    if (syncEnabled) {
      comparisonChats.forEach(chat => {
        chat.handleSubmit({ preventDefault: () => {} } as any, { data: { prompt: input } } as any)
      })
    }
  }

  // Handle clearing chats
  const handleClearSingle = () => {
    singleChat.setMessages([])
  }

  const handleClearAll = () => {
    if (comparisonMode === 'single') {
      handleClearSingle()
    } else {
      comparisonChats.forEach(chat => chat.setMessages([]))
    }
  }

  // Helper function to convert UIMessage to Message
  const convertUIMessages = (uiMessages: any[]): Message[] => {
    return uiMessages.map(msg => ({
      id: msg.id,
      role: msg.role,
      content: msg.content,
      timestamp: new Date()
    }))
  }

  // Export functionality
  const handleExport = () => {
    const panes: ComparisonPaneType[] = comparisonMode === 'single'
      ? [{ id: 'single', model: selectedModels[0], messages: convertUIMessages(singleChat.messages), isLoading: singleChat.isLoading }]
      : selectedModels.map((model, index) => ({
          id: `pane-${index}`,
          model,
          messages: convertUIMessages(comparisonChats[index]?.messages || []),
          isLoading: comparisonChats[index]?.isLoading || false
        }))

    // For now, just log - we'll implement proper export later
    console.log('Export data:', panes)
  }

  // Copy all functionality
  const handleCopyAll = async () => {
    const allContent = comparisonMode === 'single'
      ? singleChat.messages.map(m => m.content).join('\n\n')
      : comparisonChats.map((chat, index) =>
          `${selectedModels[index].name}:\n${chat.messages.map(m => m.content).join('\n\n')}`
        ).join('\n\n---\n\n')

    // For now, just log - we'll implement proper copy later
    console.log('Copy content:', allContent)
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-background/50 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          {/* Mode Toggle */}
          <div className="flex items-center gap-1">
            <RippleButton
              variant={comparisonMode === 'single' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => handleModeChange('single')}
              title="Single model mode"
            >
              <Maximize2 className="w-4 h-4" />
            </RippleButton>
            <RippleButton
              variant={comparisonMode === 'split' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => handleModeChange('split')}
              title="Split comparison (2 models)"
            >
              <Columns className="w-4 h-4" />
            </RippleButton>
            <RippleButton
              variant={comparisonMode === 'triple' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => handleModeChange('triple')}
              title="Triple comparison (3 models)"
            >
              <Grid3x3 className="w-4 h-4" />
            </RippleButton>
          </div>

          {/* Model Selector */}
          {comparisonMode === 'single' && (
            <Popover>
              <ModelSelector
                selectedModel={selectedModels[0]}
                onModelChange={handleModelChange}
                availableModels={FREE_MODELS}
                disabled={isAnyLoading}
              />
            </Popover>
          )}
        </div>

        {/* Clear Button */}
        <RippleButton
          variant="ghost"
          size="sm"
          onClick={handleClearAll}
          className="text-muted-foreground hover:text-destructive"
          disabled={isAnyLoading}
        >
          <Trash2 className="w-4 h-4" />
        </RippleButton>
      </div>

      {/* Content Area */}
      {comparisonMode === 'single' ? (
        /* Single Mode */
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {singleChat.messages.length === 0 ? (
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
              singleChat.messages.map((message: any) => (
                <MessageBubble
                  key={message.id}
                  role={message.role}
                  content={message.content}
                  timestamp={new Date()}
                  isStreaming={singleChat.isLoading && message.role === 'assistant'}
                />
              ))
            )}
          </div>

          <RuixenPromptBox
            value={singleChat.input}
            onChange={(value) => singleChat.handleInputChange({ target: { value } } as any)}
            onSend={(value) => {
              singleChat.handleSubmit()
            }}
            isLoading={singleChat.isLoading}
          />
        </div>
      ) : (
        /* Comparison Mode */
        <div className="flex-1 flex flex-col">
          <div className={cn(
            "flex-1 grid gap-4 p-4",
            comparisonMode === 'split' ? "grid-cols-2" : "grid-cols-3"
          )}>
            {selectedModels.map((model, index) => (
              <ComparisonPane
                key={`${model.id}-${index}`}
                model={model}
                messages={convertUIMessages(comparisonChats[index]?.messages || [])}
                isLoading={comparisonChats[index]?.isLoading || false}
                onSendMessage={handleComparisonSend}
                onClearChat={() => comparisonChats[index]?.setMessages([])}
                showModelSelector={true}
                onModelChange={(newModel: AIModel) => handleComparisonModelChange(index, newModel)}
              />
            ))}
          </div>

          {/* Comparison Toolbar */}
          <ComparisonToolbar
            comparisonMode={comparisonMode}
            syncEnabled={syncEnabled}
            onModeChange={handleModeChange}
            onSyncToggle={() => setSyncEnabled(!syncEnabled)}
            onExport={handleExport}
            onCopyAll={handleCopyAll}
            onClearAll={handleClearAll}
          />

          {/* Shared Input */}
          {syncEnabled && (
            <div className="p-4 border-t bg-background/50">
              <RuixenPromptBox
                value={sharedInput}
                onChange={(value) => {
                  setSharedInput(value)
                  // Update all chat inputs
                  comparisonChats.forEach(chat => {
                    chat.handleInputChange({ target: { value } } as any)
                  })
                }}
                onSend={(value) => {
                  if (value.trim()) {
                    handleComparisonSend(value)
                    setSharedInput('')
                  }
                }}
                isLoading={isAnyLoading}
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}