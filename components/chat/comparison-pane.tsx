import React from 'react';
import { MessageBubble } from './message-bubble';
import ModelSelector from './model-selector';
import { AIModel, Message } from '@/lib/types';

interface ComparisonPaneProps {
  model: AIModel;
  messages: Message[];
  isLoading: boolean;
  onSendMessage: (content: string) => void;
  onClearChat: () => void;
  showModelSelector?: boolean;
  onModelChange?: (model: AIModel) => void;
}

const ComparisonPane: React.FC<ComparisonPaneProps> = ({
  model,
  messages,
  isLoading,
  onSendMessage,
  onClearChat,
  showModelSelector = false,
  onModelChange,
}) => {
  return (
    <div className="border rounded-md shadow-sm p-4">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-lg font-semibold">{model.name}</h3>
          <p className="text-sm text-muted-foreground">{model.provider}</p>
        </div>
        {showModelSelector && onModelChange && (
          <ModelSelector
            selectedModel={model}
            onModelChange={onModelChange}
            availableModels={[]} // TODO: Pass available models
          />
        )}
        <div>
          <button onClick={onClearChat} className="text-sm text-red-500">
            Clear Chat
          </button>
        </div>
      </div>
      <div className="h-64 overflow-y-auto">
        {messages
          .filter((message) => message.role !== 'system')
          .map((message) => (
            <MessageBubble
              key={message.id}
              role={message.role as "user" | "assistant"}
              content={message.content}
              timestamp={message.timestamp}
            />
          ))}
        {isLoading && <p>Generating...</p>}
      </div>
      <div className="mt-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full border rounded-md px-3 py-2"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const target = e.target as HTMLInputElement;
              onSendMessage(target.value);
              target.value = '';
            }
          }}
        />
      </div>
    </div>
  );
};

export default ComparisonPane;