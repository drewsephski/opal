import React from "react"
import Link from "next/link"
import { RippleButton } from "@/components/ui/ripple-button"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { cn } from "@/lib/utils"

interface CTASectionProps {
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  variant?: "default" | "gradient"
}

export function CTASection({
  title = "Ready to Build Your AI Application?",
  description = "Start with our free tier and scale as you grow. No credit card required.",
  primaryButtonText = "Try Chat Now",
  primaryButtonHref = "/chat",
  secondaryButtonText = "View Pricing",
  secondaryButtonHref = "/pricing",
  variant = "default"
}: CTASectionProps) {
  return (
    <section className={cn(
      "py-16 md:py-24",
      variant === "gradient" && "bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10"
    )}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <AnimatedGroup preset="blur-slide">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryButtonHref}>
              <RippleButton size="lg" className="text-base px-8">
                {primaryButtonText}
              </RippleButton>
            </Link>
            {secondaryButtonText && secondaryButtonHref && (
              <Link href={secondaryButtonHref}>
                <RippleButton variant="outline" size="lg" className="text-base px-8">
                  {secondaryButtonText}
                </RippleButton>
              </Link>
            )}
          </div>
        </AnimatedGroup>
      </div>
    </section>
  )
}