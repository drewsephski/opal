import React from "react"
import Link from "next/link"
import { RippleButton } from "@/components/ui/ripple-button"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { CheckCircle, Zap, Bot, Layers, Shield } from "lucide-react"

const features = [
  {
    id: 1,
    title: "Streaming AI Responses",
    subtitle: "Real-time token streaming for instant feedback",
    description: "Experience the future of AI interaction with our advanced streaming technology. Watch responses appear token-by-token as the AI thinks, providing immediate feedback and a more natural conversation flow.",
    benefits: [
      "Instant response visibility with token-by-token streaming",
      "Reduced perceived latency and improved user experience",
      "Real-time conversation flow without waiting for complete responses",
      "Built-in error handling for interrupted streams"
    ],
    image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
    icon: Zap,
    ctaText: "Try Live Chat",
    ctaHref: "/chat"
  },
  {
    id: 2,
    title: "Autonomous Agent Framework",
    subtitle: "Build self-directed AI workflows",
    description: "Create intelligent agents that can plan, execute, and adapt to complex tasks autonomously. Our framework provides the tools and patterns to build AI systems that operate independently while maintaining safety and control.",
    benefits: [
      "Pre-built agent patterns for common use cases",
      "Flexible workflow orchestration and task management",
      "Built-in safety mechanisms and human oversight",
      "Extensible architecture for custom agent development"
    ],
    image: "bg-gradient-to-br from-green-500/20 to-teal-500/20",
    icon: Bot,
    ctaText: "Explore Agents",
    ctaHref: "/agents"
  },
  {
    id: 3,
    title: "Multi-Provider Support",
    subtitle: "Switch between OpenRouter models seamlessly",
    description: "Access a wide range of AI models through OpenRouter's unified API. Switch between different models and providers based on your needs, with automatic fallbacks and performance optimization.",
    benefits: [
      "Access to 100+ AI models from multiple providers",
      "Automatic model selection based on task requirements",
      "Unified API interface across all providers",
      "Cost optimization with intelligent model routing"
    ],
    image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    icon: Layers,
    ctaText: "View Models",
    ctaHref: "/features"
  },
  {
    id: 4,
    title: "Production Ready",
    subtitle: "TypeScript, error handling, and best practices built-in",
    description: "Built for production from day one with TypeScript for type safety, comprehensive error handling, and enterprise-grade architecture. Deploy with confidence knowing your AI applications are robust and maintainable.",
    benefits: [
      "Full TypeScript support with comprehensive type definitions",
      "Enterprise-grade error handling and logging",
      "Production-ready architecture with proper separation of concerns",
      "Built-in monitoring and observability features"
    ],
    image: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
    icon: Shield,
    ctaText: "Get Started",
    ctaHref: "/chat"
  }
]

export function FeaturesShowcase() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Advanced Features for AI Development
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the powerful capabilities that make our AI template the perfect foundation for your next project.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, idx) => {
            const reversed = idx % 2 === 1
            return (
              <AnimatedGroup
                key={feature.id}
                preset="blur-slide"
                className="grid gap-12 lg:grid-cols-2 items-center"
              >
                {/* Content side */}
                <div
                  className={`space-y-6 ${
                    reversed ? 'lg:order-2' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <feature.icon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={feature.ctaHref}>
                    <RippleButton size="lg" className="mt-6">
                      {feature.ctaText}
                    </RippleButton>
                  </Link>
                </div>

                {/* Visual side */}
                <div
                  className={`relative ${
                    reversed ? 'lg:order-1' : ''
                  }`}
                >
                  <div className={`aspect-square rounded-2xl ${feature.image} flex items-center justify-center border shadow-lg`}>
                    <feature.icon className="h-24 w-24 text-primary/60" />
                  </div>
                </div>
              </AnimatedGroup>
            )
          })}
        </div>
      </div>
    </section>
  )
}