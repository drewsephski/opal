import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type SelectProps = React.HTMLAttributes<HTMLDivElement>

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ className, ...props }, ref) => (
    <div className={cn("relative", className)} ref={ref} {...props} />
  )
)
Select.displayName = "Select"

interface SelectTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <Button
      variant="outline"
      role="combobox"
      aria-expanded="false"
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
    </Button>
  )
)
SelectTrigger.displayName = Select.displayName

interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <PopoverContent
        className={cn(
          "w-[200px] p-0",
          className
        )}
        align="start"
        sideOffset={4}
        {...props}
      >
        <Command>
          <CommandList>
            {children}
          </CommandList>
        </Command>
      </PopoverContent>
    );
  }
)
SelectContent.displayName = "SelectContent";

interface SelectItemProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, "onSelect"> {
  value: string;
}

const SelectItem = React.forwardRef<
  HTMLButtonElement,
  SelectItemProps
>(({ className, children, title, value, onClick, ...props }, ref) => {
  return (
    <button
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      onClick={(event) => {
          onClick?.(event)
      }}
      value={value}
      {...props}
      ref={ref}
    >
      {children}
      <Check className="ml-auto h-4 w-4" style={{ display: "none" }} />
    </button>
  );
});
SelectItem.displayName = "SelectItem";

interface SelectGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

const SelectGroup = React.forwardRef<HTMLDivElement, SelectGroupProps>(
  ({ className, ...props }, ref) => (
    <CommandGroup
      className={cn(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2.5 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        className
      )}
      {...props}
      ref={ref}
    />
  )
)
SelectGroup.displayName = "SelectGroup"

interface SelectLabelProps extends React.HTMLAttributes<HTMLDivElement> {}

const SelectLabel = React.forwardRef<HTMLDivElement, SelectLabelProps>(
  ({ className, ...props }, ref) => (
    <div
      className={cn(
        "px-2 py-1.5 text-sm font-semibold",
        className
      )}
      {...props}
      ref={ref}
    />
  )
)
SelectLabel.displayName = "SelectLabel"

interface SelectSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

const SelectSeparator = React.forwardRef<HTMLDivElement, SelectSeparatorProps>(
  ({ className, ...props }, ref) => (
    <CommandSeparator
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
      ref={ref}
    />
  )
)
SelectSeparator.displayName = "SelectSeparator"

export {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
}