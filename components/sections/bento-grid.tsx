import React from "react"
import {
  MessageSquare,
  Bot,
  Zap,
  Layers,
  Settings,
  Code,
  Moon,
  FileText,
  Shield,
  Users
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Settings,
    title: "Customizable",
    description: "Provident fugit and vero voluptate. magnam magni doloribus dolores voluptates a sapiente nisi.",
    span: "col-span-1 md:col-span-2",
    gradient: "from-blue-500/10 to-purple-500/10"
  },
  {
    icon: Shield,
    title: "Secure by default",
    description: "Provident fugit vero voluptate. magnam magni doloribus dolores voluptates a sapiente nisi.",
    span: "col-span-1",
    gradient: "from-green-500/10 to-teal-500/10"
  },
  {
    icon: Zap,
    title: "Faster than light",
    description: "Provident fugit vero voluptate. magnam magni doloribus dolores voluptates a sapiente nisi.",
    span: "col-span-1",
    gradient: "from-yellow-500/10 to-orange-500/10"
  },
  {
    icon: Users,
    title: "Keep your loved ones safe",
    description: "Voluptate. magnam magni doloribus dolores voluptates a sapiente inventore nisi.",
    span: "col-span-1 md:col-span-2",
    gradient: "from-pink-500/10 to-rose-500/10"
  }
]

export function BentoGrid() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Powerful Features for Modern AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build production-ready AI chatbots and autonomous agents with cutting-edge technology.
          </p>
        </div>

        <AnimatedGroup
          preset="blur-slide"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              className={cn(
                "group relative overflow-hidden border-0 bg-gradient-to-br transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10",
                feature.span,
                feature.gradient
              )}
            >
              <div className="p-6 h-full flex flex-col">
                <div className="mb-4">
                  <feature.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </Card>
          ))}
        </AnimatedGroup>
      </div>
    </div>
  )
}