"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { RippleButton } from "@/components/ui/ripple-button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MessageSquare,
  Settings,
  Download,
  Share,
  Trash2,
  X,
  Plus,
  Clock,
  Zap,
  Copy,
  BarChart3
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { AIModel, ComparisonMode } from "@/lib/types"

interface ChatSidebarProps {
  isOpen: boolean
  onToggle: () => void
  onClearChat: () => void
  messageCount: number
  selectedModels: AIModel[]
  comparisonMode: ComparisonMode
  onModelChange: (models: AIModel[]) => void
}

export function ChatSidebar({
  isOpen,
  onToggle,
  onClearChat,
  messageCount,
  selectedModels,
  comparisonMode,
  onModelChange
}: ChatSidebarProps) {
  const [sidebarState, setSidebarState] = useState(isOpen)

  useEffect(() => {
    setSidebarState(isOpen)
  }, [isOpen])

  const handleNewChat = () => {
    onClearChat()
    if (window.innerWidth < 768) {
      onToggle() // Close sidebar on mobile after starting new chat
    }
  }

  const handleExportChat = () => {
    // Placeholder for export functionality
    alert("Export functionality coming soon!")
  }

  const handleShareChat = () => {
    // Placeholder for share functionality
    alert("Share functionality coming soon!")
  }

  return (
    <>
      {/* Mobile overlay */}
      {sidebarState && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed top-0 right-0 h-full w-full max-w-sm bg-background border-l border-border z-50 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-full md:max-w-none",
        sidebarState ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Chat Settings</h2>
            <RippleButton
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className="md:hidden"
            >
              <X className="w-4 h-4" />
            </RippleButton>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* New Chat */}
            <Card className="p-4">
              <RippleButton
                onClick={handleNewChat}
                className="w-full justify-start gap-2"
                variant="default"
              >
                <Plus className="w-4 h-4" />
                New Chat
              </RippleButton>
            </Card>

            {/* Conversation History */}
            <Card className="p-4">
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Conversation History
              </h3>
              <div className="text-center py-8 text-muted-foreground">
                <Clock className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Coming Soon</p>
                <p className="text-xs mt-1">Chat history will be available in a future update</p>
              </div>
            </Card>

            {/* Model Settings */}
            <Card className="p-4">
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Model Settings
              </h3>
              <div className="space-y-3">
                {comparisonMode === 'single' ? (
                  <div>
                    <p className="text-sm font-medium">Current Model</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" size="sm">
                        {selectedModels[0]?.name}
                      </Badge>
                      <Badge variant="outline" size="sm">
                        {selectedModels[0]?.speed}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {selectedModels[0]?.contextWindow}K context • {selectedModels[0]?.provider}
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-sm font-medium">Active Models ({selectedModels.length})</p>
                    <div className="space-y-2 mt-2">
                      {selectedModels.map((model, index) => (
                        <div key={model.id} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" size="sm">
                              {model.name}
                            </Badge>
                            <Badge
                              variant={model.speed === 'fast' ? 'success' : model.speed === 'balanced' ? 'secondary' : 'outline'}
                              size="sm"
                            >
                              {model.speed}
                            </Badge>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {model.provider}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium">Rate Limits</p>
                  <p className="text-xs text-muted-foreground">20 req/min, 50 req/day</p>
                </div>
                <Link href="/pricing">
                  <RippleButton variant="outline" size="sm" className="w-full">
                    <Zap className="w-3 h-3 mr-1" />
                    Upgrade to Pro
                  </RippleButton>
                </Link>
              </div>
            </Card>

            {/* Comparison Settings - only show in comparison mode */}
            {comparisonMode !== 'single' && (
              <Card className="p-4">
                <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Comparison Settings
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium">Mode</p>
                    <p className="text-xs text-muted-foreground capitalize">{comparisonMode} View</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Total Messages</p>
                    <p className="text-xs text-muted-foreground">{messageCount} messages across all models</p>
                  </div>
                  <div className="flex gap-2">
                    <RippleButton
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => alert('Export comparison coming soon!')}
                    >
                      <Download className="w-3 h-3 mr-1" />
                      Export
                    </RippleButton>
                    <RippleButton
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => alert('Copy comparison coming soon!')}
                    >
                      <Copy className="w-3 h-3 mr-1" />
                      Copy
                    </RippleButton>
                  </div>
                </div>
              </Card>
            )}

            {/* Quick Actions */}
            <Card className="p-4">
              <h3 className="text-sm font-semibold mb-3">Quick Actions</h3>
              <div className="space-y-2">
                {comparisonMode === 'single' ? (
                  <>
                    <RippleButton
                      onClick={handleExportChat}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start gap-2"
                      disabled={messageCount === 0}
                    >
                      <Download className="w-4 h-4" />
                      Export Chat
                    </RippleButton>
                    <RippleButton
                      onClick={handleShareChat}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start gap-2"
                      disabled={messageCount === 0}
                    >
                      <Share className="w-4 h-4" />
                      Share Chat
                    </RippleButton>
                  </>
                ) : (
                  <>
                    <RippleButton
                      onClick={() => alert('Export comparison coming soon!')}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start gap-2"
                      disabled={messageCount === 0}
                    >
                      <Download className="w-4 h-4" />
                      Export Comparison
                    </RippleButton>
                    <RippleButton
                      onClick={() => alert('Copy comparison coming soon!')}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start gap-2"
                      disabled={messageCount === 0}
                    >
                      <Copy className="w-4 h-4" />
                      Copy Comparison
                    </RippleButton>
                  </>
                )}
                <RippleButton
                  onClick={onClearChat}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start gap-2 text-destructive hover:text-destructive"
                  disabled={messageCount === 0}
                >
                  <Trash2 className="w-4 h-4" />
                  {comparisonMode === 'single' ? 'Clear Chat' : 'Clear All Chats'}
                </RippleButton>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}