import React from "react"
import Link from "next/link"
import { RippleButton } from "@/components/ui/ripple-button"
import { Card } from "@/components/ui/card"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { Check, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const pricingTiers = [
  {
    id: "free",
    name: "Free",
    price: 0,
    description: "Perfect for developers and testing",
    features: [
      "GLM-4.5-Air model access",
      "20 requests/minute",
      "50 requests/day",
      "Community support",
      "Basic features"
    ],
    ctaText: "Get Started",
    ctaHref: "/chat",
    popular: false
  },
  {
    id: "pro",
    name: "Pro",
    price: 29,
    description: "For production apps and teams",
    features: [
      "All free features included",
      "Premium model access",
      "100 requests/minute",
      "10,000 requests/day",
      "Priority support",
      "Advanced features"
    ],
    ctaText: "Start Pro Trial",
    ctaHref: "/pricing",
    popular: true
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "custom",
    description: "For large scale deployments",
    features: [
      "All Pro features included",
      "Unlimited requests",
      "Custom models",
      "Dedicated support",
      "SLA guarantee",
      "Custom integrations"
    ],
    ctaText: "Contact Sales",
    ctaHref: "/about",
    popular: false
  }
]

export function PricingCards() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <AnimatedGroup
          preset="blur-slide"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {pricingTiers.map((tier, index) => (
            <Card
              key={tier.id}
              className={cn(
                "relative p-8 transition-all duration-300 hover:shadow-xl",
                tier.popular
                  ? "border-primary shadow-lg shadow-primary/20 scale-105 md:scale-110"
                  : "hover:scale-105",
                index === 1 && "md:-mt-4 md:mb-4" // Make Pro tier stand out
              )}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {tier.name}
                </h3>
                <div className="mb-4">
                  {tier.price === "custom" ? (
                    <span className="text-4xl font-bold text-foreground">Custom</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-foreground">${tier.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </>
                  )}
                </div>
                <p className="text-muted-foreground">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href={tier.ctaHref}>
                <RippleButton
                  className={cn(
                    "w-full",
                    tier.popular
                      ? "bg-primary hover:bg-primary/90"
                      : ""
                  )}
                  variant={tier.popular ? "default" : "outline"}
                  size="lg"
                >
                  {tier.ctaText}
                </RippleButton>
              </Link>
            </Card>
          ))}
        </AnimatedGroup>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include access to our documentation and community support.
            <br />
            Upgrade or downgrade at any time with no setup fees.
          </p>
        </div>
      </div>
    </section>
  )
}