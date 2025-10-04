"use client"

import * as React from "react"
import { RippleButton } from "@/components/ui/ripple-button"
import { cn } from "@/lib/utils"

type Theme = "light" | "dark"

interface ThemeToggleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: Theme
  onClick: () => void
  animationVariant?: "circle" | "circle-blur" | "gif" | "polygon"
  start?:
    | "center"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
  showLabel?: boolean
  url?: string
  className?: string
  disabled?: boolean
}

// Helper hook for View Transitions API
function useThemeTransition() {
  const startTransition = React.useCallback(
    (callback: () => void) => {
      if (
        // @ts-ignore
        document.startViewTransition
      ) {
        // @ts-ignore
        document.startViewTransition(() => {
          callback()
        })
      } else {
        callback()
      }
    },
    []
  )

  return { startTransition }
}

const ThemeToggleButton = React.forwardRef<
  HTMLButtonElement,
  ThemeToggleButtonProps
>(
  (
    {
      className,
      theme,
      onClick,
      animationVariant = "circle",
      start = "center",
      showLabel = false,
      url,
      disabled,
      ...props
    },
    ref
  ) => {
    const { startTransition } = useThemeTransition()

    const handleClick = () => {
      startTransition(() => {
        onClick()
      })
    }

    const Icon = () => {
      if (theme === "dark") {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        )
      }
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      )
    }

    return (
      <RippleButton
        ref={ref}
        variant="outline"
        size="icon"
        className={cn("theme-toggle-button", className)}
        onClick={handleClick}
        disabled={disabled}
        {...props}
      >
        <Icon />
        {showLabel && <span>{theme === "dark" ? "Dark" : "Light"}</span>}
      </RippleButton>
    )
  }
)
ThemeToggleButton.displayName = "ThemeToggleButton"

export { ThemeToggleButton }