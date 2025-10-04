import React from "react"
import Link from "next/link"
import { RippleButton } from "@/components/ui/ripple-button"
import { Card } from "@/components/ui/card"
import { AnimatedGroup } from "@/components/ui/animated-group"
import {
  Search,
  Code,
  BarChart3,
  FileText,
  GitBranch,
  Zap,
  Clock
} from "lucide-react"
import { cn } from "@/lib/utils"

const agentWorkflows = [
  {
    id: 1,
    name: "Research Agent",
    description: "Autonomous web research and summarization",
    icon: Search,
    useCase: "Gather and synthesize information from multiple sources",
    status: "available" as const,
    span: "col-span-1 md:col-span-2"
  },
  {
    id: 2,
    name: "Code Assistant",
    description: "Multi-step code generation and debugging",
    icon: Code,
    useCase: "Write, test, and refactor code autonomously",
    status: "available" as const,
    span: "col-span-1"
  },
  {
    id: 3,
    name: "Data Analyst",
    description: "Automated data analysis and visualization",
    icon: BarChart3,
    useCase: "Process datasets and generate insights",
    status: "coming-soon" as const,
    span: "col-span-1"
  },
  {
    id: 4,
    name: "Content Creator",
    description: "Multi-stage content generation pipeline",
    icon: FileText,
    useCase: "Create blog posts, articles, and marketing content",
    status: "coming-soon" as const,
    span: "col-span-1 md:col-span-2"
  },
  {
    id: 5,
    name: "Task Orchestrator",
    description: "Coordinate multiple AI agents",
    icon: GitBranch,
    useCase: "Manage complex workflows across different agents",
    status: "coming-soon" as const,
    span: "col-span-1"
  },
  {
    id: 6,
    name: "API Integrator",
    description: "Connect and automate external services",
    icon: Zap,
    useCase: "Build integrations with third-party APIs",
    status: "coming-soon" as const,
    span: "col-span-1"
  }
]

function StatusBadge({ status }: { status: "available" | "coming-soon" }) {
  return (
    <div className={cn(
      "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium",
      status === "available"
        ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
        : "bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400"
    )}>
      <Clock className="h-3 w-3" />
      {status === "available" ? "Available" : "Coming Soon"}
    </div>
  )
}

export function AgentWorkflows() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Autonomous Agent Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Build intelligent systems that can operate independently, make decisions, and execute complex tasks with minimal human intervention.
          </p>
        </div>

        <AnimatedGroup
          preset="blur-slide"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {agentWorkflows.map((workflow) => (
            <Card
              key={workflow.id}
              className={cn(
                "group relative overflow-hidden p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 bg-gradient-to-br from-background to-muted/50",
                workflow.span
              )}
            >
              <div className="flex items-start justify-between mb-4">
                <workflow.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                <StatusBadge status={workflow.status} />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {workflow.name}
              </h3>

              <p className="text-muted-foreground mb-3 leading-relaxed">
                {workflow.description}
              </p>

              <p className="text-sm text-muted-foreground/80">
                <strong>Use case:</strong> {workflow.useCase}
              </p>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </Card>
          ))}
        </AnimatedGroup>

        <div className="text-center">
          <Link href="/chat">
            <RippleButton size="lg">
              Start Building Agents
            </RippleButton>
          </Link>
        </div>
      </div>
    </section>
  )
}