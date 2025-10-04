import React from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ChevronsUpDown, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { AIModel } from '@/lib/types';
import { cn } from '@/lib/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

interface ModelSelectorProps {
  selectedModel: AIModel;
  onModelChange: (model: AIModel) => void;
  availableModels: readonly AIModel[];
  disabled?: boolean;
  className?: string;
}

const getModelProviderImage = (modelId: string): string => {
  const provider = modelId.split('/')[0];
  return `/images/models/${provider}.png`;
};

const ModelSelector: React.FC<ModelSelectorProps> = ({
  selectedModel,
  onModelChange,
  availableModels,
  disabled,
  className,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={cn(disabled ? "opacity-50 pointer-events-none" : "", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
            disabled={disabled}
          >
            {selectedModel.name}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <Command>
            <CommandInput placeholder="Search models..." />
            <CommandList>
              <CommandEmpty>No models found.</CommandEmpty>
              <CommandGroup>
                {availableModels.map((model) => (
                  <CommandItem
                    key={model.id}
                    value={model.id}
                    onSelect={() => {
                      onModelChange(model);
                      setOpen(false);
                    }}
                    className="cursor-pointer px-2 py-1"
                  >
                    <div className="grid grid-cols-[1fr_auto] gap-2 w-full items-center">
                      <div className="text-left">
                        <p className="font-medium">{model.name}</p>
                        <p className="text-xs text-muted-foreground">{model.provider}</p>
                        {model.description && (
                          <p className="text-xs text-muted-foreground">{model.description}</p>
                        )}
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        {model.speed && (
                          <Badge variant="secondary" className="text-xs">
                            {model.speed}
                          </Badge>
                        )}
                        {model.contextWindow && (
                          <Badge variant="outline" className="text-xs">
                            {model.contextWindow}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Check
                      className={cn(
                        "ml-2 h-4 w-4",
                        selectedModel.id === model.id ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ModelSelector;