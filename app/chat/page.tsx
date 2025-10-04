"use client"

import React, { useState, useRef } from "react"
import { ChatInterface } from "@/components/chat/chat-interface"
import { ChatSidebar } from "@/components/chat/chat-sidebar"
import { RippleButton } from "@/components/ui/ripple-button"
import { Menu } from "lucide-react"

export default function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [messageCount, setMessageCount] = useState(0)
  const [sidebarWidth, setSidebarWidth] = useState(320) // Default width in pixels
  const [isResizing, setIsResizing] = useState(false)
  const resizeRef = useRef<HTMLDivElement>(null)

  const handleClearChat = () => {
    // The ChatInterface component handles clearing internally
    setMessageCount(0)
  }

  const handleMessageCountChange = (count: number) => {
    setMessageCount(count)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsResizing(true)
    e.preventDefault()
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizing) return

    const newWidth = window.innerWidth - e.clientX
    const minWidth = 250
    const maxWidth = 600

    if (newWidth >= minWidth && newWidth <= maxWidth) {
      setSidebarWidth(newWidth)
    }
  }

  const handleMouseUp = () => {
    setIsResizing(false)
  }

  React.useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.body.style.cursor = 'col-resize'
      document.body.style.userSelect = 'none'
    } else {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
    }
  }, [isResizing])

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      {/* Chat Content */}
      <div className="flex-1 flex bg-background overflow-hidden">
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Mobile Header */}
          <div className="md:hidden flex items-center justify-between p-4 border-b bg-background/50 backdrop-blur-sm">
            <RippleButton
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-4 h-4" />
            </RippleButton>
            <h1 className="text-lg font-semibold">AI Chat</h1>
            <div className="w-8" /> {/* Spacer for centering */}
          </div>

          {/* Chat Interface */}
          <div className="flex-1">
            <ChatInterface />
          </div>
        </div>

        {/* Resize Handle */}
        <div
          ref={resizeRef}
          className="hidden md:block w-1 bg-border hover:bg-primary/50 cursor-col-resize transition-colors"
          onMouseDown={handleMouseDown}
        />

        {/* Sidebar */}
        <div
          className="hidden md:block bg-background border-l border-border overflow-hidden"
          style={{ width: `${sidebarWidth}px` }}
        >
          <ChatSidebar
            isOpen={true}
            onToggle={() => setSidebarOpen(!sidebarOpen)}
            onClearChat={handleClearChat}
            messageCount={messageCount}
          />
        </div>
      </div>
    </div>
  )
}