import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border-primary",
        secondary:
          "bg-secondary text-secondary-foreground border-secondary",
        destructive:
          "border-destructive/50 bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "border-border bg-background",
        success: "bg-green-500 text-white border-green-500"
      },
      size: {
        sm: "text-xs",
        default: "text-sm",
        lg: "text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        className={cn(badgeVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge, badgeVariants }