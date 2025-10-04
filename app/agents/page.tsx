import { AgentWorkflows } from "@/components/sections/agent-workflows"
import { CTASection } from "@/components/sections/cta-section"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { Card } from "@/components/ui/card"
import { RippleButton } from "@/components/ui/ripple-button"
import Link from "next/link"
import {
  ArrowRight,
  MessageSquare,
  Search,
  FileText,
  BarChart3,
  Settings,
  CheckCircle,
  ChevronRight
} from "lucide-react"

const steps = [
  {
    step: 1,
    title: "Goal Setting",
    description: "Define the objective and constraints for your autonomous agent."
  },
  {
    step: 2,
    title: "Planning",
    description: "The agent creates a strategic plan to achieve the defined goals."
  },
  {
    step: 3,
    title: "Execution",
    description: "The agent performs actions and interacts with systems autonomously."
  },
  {
    step: 4,
    title: "Evaluation",
    description: "The agent assesses progress and adjusts its approach as needed."
  },
  {
    step: 5,
    title: "Adaptation",
    description: "The agent learns from experience and optimizes future performance."
  }
]

const useCases = [
  {
    icon: MessageSquare,
    title: "Customer Support",
    description: "24/7 automated assistance that handles inquiries, resolves issues, and escalates complex problems."
  },
  {
    icon: Search,
    title: "Research & Analysis",
    description: "Autonomous web research, data gathering, and synthesis from multiple sources."
  },
  {
    icon: FileText,
    title: "Content Generation",
    description: "Multi-step content creation pipeline for blogs, articles, and marketing materials."
  },
  {
    icon: BarChart3,
    title: "Data Processing",
    description: "Automated ETL processes, data cleaning, and transformation workflows."
  },
  {
    icon: Settings,
    title: "Workflow Automation",
    description: "Business process automation that coordinates multiple systems and teams."
  },
  {
    icon: ArrowRight,
    title: "API Integration",
    description: "Connect and automate interactions with third-party services and APIs."
  }
]

const itemTransitionVariants = {
  hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
  },
  visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
          type: 'spring',
          bounce: 0.3,
          duration: 1.5,
      },
  },
}

const containerTransitionVariants = {
  container: {
      visible: {
          transition: {
              staggerChildren: 0.05,
              delayChildren: 0.75,
          },
      },
  },
}

export default function AgentsPage() {
  return (
    <>
      <main id="hero" className="overflow-hidden">
        <div
          aria-hidden
          className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
          <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24 md:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: itemTransitionVariants as any,
              }}
              className="absolute inset-0 -z-20">
              <img
                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                alt="background"
                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                width="3276"
                height="4095"
              />
            </AnimatedGroup>
            <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup
                  variants={{
                    container: containerTransitionVariants.container,
                    item: itemTransitionVariants as any,
                  }}>
                  <Link
                    href="/chat"
                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                    <span className="text-foreground text-sm">Deploy Your First Agent</span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </Link>

                  <h1
                    className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                    Autonomous AI Agents
                  </h1>
                  <p
                    className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                    Build self-directed AI systems that can plan, execute, and adapt to achieve complex goals with minimal human intervention.
                  </p>
                </AnimatedGroup>

                <AnimatedGroup
                  variants={{
                    container: containerTransitionVariants.container,
                    item: itemTransitionVariants as any,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[14px] border p-0.5">
                    <Link href="/chat">
                      <RippleButton
                        size="lg"
                        className="rounded-xl px-5 text-base">
                        <span className="text-nowrap">Try Agent Chat</span>
                      </RippleButton>
                    </Link>
                  </div>
                  <Link href="/features">
                    <RippleButton
                      key={2}
                      size="lg"
                      variant="ghost"
                      className="h-10.5 rounded-xl px-5">
                      <span className="text-nowrap">View Features</span>
                    </RippleButton>
                  </Link>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: containerTransitionVariants.container,
                item: itemTransitionVariants as any,
              }}>
              <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                  <img
                    className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                    src="https://tailark.com//_next/image?url=%2Fmail2.png&w=3840&q=75"
                    alt="agent workflow screen"
                    width="2700"
                    height="1440"
                  />
                  <img
                    className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                    src="https://tailark.com/_next/image?url=%2Fmail2-light.png&w=3840&q=75"
                    alt="agent workflow screen"
                    width="2700"
                    height="1440"
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
        <section className="bg-background pb-16 pt-16 md:pb-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Powered by Advanced AI Models
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Built on top of cutting-edge AI technology for reliable autonomous operation.
              </p>
            </div>
            <div id="models" className="group relative m-auto max-w-5xl px-6">
              <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                <Link
                  href="/features"
                  className="block text-sm duration-150 hover:opacity-75">
                  <span> Explore AI Models</span>

                  <ChevronRight className="ml-1 inline-block size-3" />
                </Link>
              </div>
              <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 items-center gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                <div className="flex justify-center">
                  <img
                    className="h-5 w-auto dark:invert"
                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                    alt="Nvidia Logo"
                    height="20"
                    width="auto"
                  />
                </div>

                <div className="flex justify-center">
                  <img
                    className="h-4 w-auto dark:invert"
                    src="https://html.tailus.io/blocks/customers/column.svg"
                    alt="Column Logo"
                    height="16"
                    width="auto"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    className="h-4 w-auto dark:invert"
                    src="https://html.tailus.io/blocks/customers/github.svg"
                    alt="GitHub Logo"
                    height="16"
                    width="auto"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    className="h-5 w-auto dark:invert"
                    src="https://html.tailus.io/blocks/customers/nike.svg"
                    alt="Nike Logo"
                    height="20"
                    width="auto"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    className="h-5 w-auto dark:invert"
                    src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                    alt="Lemon Squeezy Logo"
                    height="20"
                    width="auto"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    className="h-4 w-auto dark:invert"
                    src="https://html.tailus.io/blocks/customers/laravel.svg"
                    alt="Laravel Logo"
                    height="16"
                    width="auto"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    className="h-7 w-auto dark:invert"
                    src="https://html.tailus.io/blocks/customers/lilly.svg"
                    alt="Lilly Logo"
                    height="28"
                    width="auto"
                  />
                </div>

                <div className="flex justify-center">
                  <img
                    className="h-6 w-auto dark:invert"
                    src="https://html.tailus.io/blocks/customers/openai.svg"
                    alt="OpenAI Logo"
                    height="24"
                    width="auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* What are Autonomous Agents */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedGroup preset="blur-slide">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                What are Autonomous Agents?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Autonomous AI agents are intelligent systems that can operate independently, making decisions and taking actions without constant human supervision. Unlike simple chatbots that respond to queries, autonomous agents can plan, execute complex tasks, and adapt their behavior based on results.
                </p>
                <p className="text-lg text-muted-foreground">
                  These agents combine advanced reasoning capabilities with the ability to interact with external systems, APIs, and data sources. They can break down complex objectives into manageable steps, execute those steps, and learn from the outcomes to improve future performance.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-muted-foreground">Independent decision making</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-muted-foreground">Multi-step task execution</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-muted-foreground">Adaptive learning capabilities</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl p-8 text-center">
                <Settings className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Intelligent autonomous systems that work for you</p>
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </section>

      {/* Agent Workflows */}
      <AgentWorkflows />

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              How Autonomous Agents Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to achieving complex objectives through intelligent automation.
            </p>
          </div>

          <AnimatedGroup preset="blur-slide" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="p-6 text-center relative">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6 text-muted-foreground" />
                )}
              </Card>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Real-World Applications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Autonomous agents are already transforming industries and workflows across various domains.
            </p>
          </div>

          <AnimatedGroup preset="blur-slide" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <useCase.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </Card>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedGroup preset="blur-slide">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Built on Solid Foundations
              </h2>
            </div>
            <Card className="p-8 bg-slate-900 text-slate-100">
              <pre className="text-sm overflow-x-auto">
                <code>{`// Example: Basic autonomous agent setup
const researchAgent = createAgent({
  name: "Research Assistant",
  model: "glm-4.5-air",
  capabilities: ["web-search", "data-analysis"],
  goals: ["Gather information", "Synthesize findings"],
  constraints: ["Stay on topic", "Cite sources"]
});

// Execute autonomous task
const result = await researchAgent.execute({
  objective: "Research renewable energy trends for 2024",
  maxSteps: 10,
  outputFormat: "comprehensive-report"
});`}</code>
              </pre>
            </Card>
            <div className="mt-8 space-y-4 text-muted-foreground">
              <p>
                Our agent framework provides the building blocks for creating sophisticated autonomous systems. Built on top of the Vercel AI SDK and OpenRouter, agents can seamlessly interact with multiple AI models and external services.
              </p>
              <p>
                The framework includes pre-built patterns for common agent types, safety mechanisms, and monitoring capabilities to ensure reliable operation in production environments.
              </p>
            </div>
          </AnimatedGroup>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Start Building Agents"
        description="Try our AI chat to see agent capabilities in action and begin your autonomous AI journey."
        primaryButtonText="Try Agent Chat"
        primaryButtonHref="/chat"
        secondaryButtonText="View Documentation"
        secondaryButtonHref="/features"
      />
    </>
  )
}