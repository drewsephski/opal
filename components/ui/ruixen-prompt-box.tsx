"use client";

import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Sparkles, BadgeCheck, SendHorizontal } from "lucide-react";

const TRANSFORM_OPTIONS = [
  {
    label: "Summarize",
    icon: Sparkles,
    color: "text-yellow-500",
    prompt: "Please summarize the following text: ",
  },
  {
    label: "Correct Grammar",
    icon: BadgeCheck,
    color: "text-green-600",
    prompt: "Please correct the grammar in the following text: ",
  },
  {
    label: "Compress",
    icon: SendHorizontal,
    color: "text-indigo-500",
    prompt: "Please compress the following text while keeping the main points: ",
  },
];

export interface RuixenPromptBoxProps {
  value: string;
  onChange: (value: string) => void;
  onSend: (value: string, selectedOption: string | null) => void;
  isLoading?: boolean;
}

export default function RuixenPromptBox({ value, onChange, onSend, isLoading = false }: RuixenPromptBoxProps) {

  const handleSend = () => {
    onSend(value, null);
    onChange("");
  };

  const handleTransformClick = (prompt: string) => {
    const newValue = prompt + value;
    onChange(newValue);
  };

  return (
    <div className="w-full px-4 py-6">
      <div className="max-w-2xl mx-auto space-y-3">
        <div className="relative rounded-xl bg-muted/10 dark:bg-white/5 border border-border p-4 shadow-sm">
          <Textarea
            placeholder="Refine your message..."
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            className={cn(
              "w-full resize-none bg-transparent border-none text-foreground text-sm sm:text-base",
              "focus:outline-none focus-visible:ring-0 placeholder:text-muted-foreground",
              "min-h-[60px] max-h-[200px]"
            )}
          />

          <div className="absolute bottom-3 right-4">
            <button
              onClick={handleSend}
              className={cn(
                "p-2 rounded-full transition-all duration-200",
                value
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              )}
              disabled={isLoading || !value}
              type="button"
            >
              <SendHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Transform Options */}
        <div className="flex flex-wrap gap-2 justify-start">
          {TRANSFORM_OPTIONS.map(({ label, icon: Icon, color, prompt }) => (
            <button
              key={label}
              type="button"
              onClick={() => handleTransformClick(prompt)}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 text-xs rounded-full border transition-all",
                "bg-transparent border-border text-muted-foreground hover:bg-muted/10"
              )}
            >
              <Icon className={cn("w-4 h-4", color)} />
              <span className="whitespace-nowrap">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}