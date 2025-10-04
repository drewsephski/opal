import React from 'react';
import { cn } from "@/lib/utils";
import { RippleButton } from "@/components/ui/ripple-button";
import { Maximize2, Columns, Grid3x3, Link2, Copy, Trash2, Settings, Download } from "lucide-react";
import type { ComparisonMode } from "@/lib/types";

interface ComparisonToolbarProps {
  comparisonMode: ComparisonMode;
  syncEnabled: boolean;
  onModeChange: (mode: ComparisonMode) => void;
  onSyncToggle: () => void;
  onExport: () => void;
  onCopyAll: () => void;
  onClearAll: () => void;
}

const ComparisonToolbar: React.FC<ComparisonToolbarProps> = ({
  comparisonMode,
  syncEnabled,
  onModeChange,
  onSyncToggle,
  onExport,
  onCopyAll,
  onClearAll
}) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-background/70 backdrop-blur-md rounded-full shadow-md z-50">
      <div className="flex items-center justify-center p-2 space-x-2">
        <RippleButton
          variant={comparisonMode === 'split' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onModeChange('split')}
          title="Split comparison (2 models)"
        >
          <Columns className="w-4 h-4" />
        </RippleButton>
        <RippleButton
          variant={comparisonMode === 'triple' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onModeChange('triple')}
          title="Triple comparison (3 models)"
        >
          <Grid3x3 className="w-4 h-4" />
        </RippleButton>
        <RippleButton
          variant="ghost"
          size="sm"
          onClick={onSyncToggle}
          title="Toggle input sync"
        >
          <Link2 className={cn("w-4 h-4", syncEnabled ? "text-green-500" : "")} />
        </RippleButton>
        <RippleButton
          variant="ghost"
          size="sm"
          onClick={onCopyAll}
          title="Copy all responses"
        >
          <Copy className="w-4 h-4" />
        </RippleButton>
        <RippleButton
          variant="ghost"
          size="sm"
          onClick={onExport}
          title="Export comparison"
        >
          <Download className="w-4 h-4" />
        </RippleButton>
        <RippleButton
          variant="ghost"
          size="sm"
          onClick={onClearAll}
          title="Clear all chats"
        >
          <Trash2 className="w-4 h-4" />
        </RippleButton>
        <RippleButton
          variant="ghost"
          size="sm"
          onClick={() => alert('Comparison settings coming soon!')}
          title="Comparison settings"
        >
          <Settings className="w-4 h-4" />
        </RippleButton>
      </div>
    </div>
  );
};

export default ComparisonToolbar;