import Link from "next/link"
import { CTASection } from "@/components/sections/cta-section"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { Card } from "@/components/ui/card"
import { RippleButton } from "@/components/ui/ripple-button"
import {
  Target,
  Users,
  Shield,
  Code,
  Heart,
  Github,
  Twitter,
  Linkedin,
  ArrowRight,
  ChevronRight
} from "lucide-react"

const values = [
  {
    icon: Users,
    title: "Developer First",
    description: "Built by developers, for developers. We understand the challenges of AI integration and provide solutions that work."
  },
  {
    icon: Target,
    title: "Open & Transparent",
    description: "Clear pricing, no hidden costs. We believe in transparency in both our code and our business practices."
  },
  {
    icon: Shield,
    title: "Production Ready",
    description: "Enterprise-grade code with best practices built-in. Your applications will be robust, scalable, and maintainable."
  },
  {
    icon: Heart,
    title: "Community Driven",
    description: "Powered by feedback and contributions from our community. We build what developers actually need."
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

const technologies = [
  { name: "Next.js 15", description: "React framework for production" },
  { name: "React 19", description: "Latest React with concurrent features" },
  { name: "TypeScript", description: "Type-safe JavaScript" },
  { name: "Tailwind CSS 4", description: "Utility-first CSS framework" },
  { name: "Vercel AI SDK", description: "AI integration framework" },
  { name: "OpenRouter", description: "Multi-provider AI API" },
  { name: "Framer Motion", description: "Animation library" },
  { name: "Lucide React", description: "Beautiful icons" }
]

export default function AboutPage() {
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
                    <span className="text-foreground text-sm">Join Our Community</span>
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
                    Building the Future of AI Applications
                  </h1>
                  <p
                    className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                    Opal is a production-ready template that empowers developers to create intelligent applications with ease.
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
                        <span className="text-nowrap">Get Started</span>
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
                    alt="app development screen"
                    width="2700"
                    height="1440"
                  />
                  <img
                    className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                    src="https://tailark.com/_next/image?url=%2Fmail2-light.png&w=3840&q=75"
                    alt="app development screen"
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
                Trusted by Developers Worldwide
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Join thousands of developers building the next generation of AI applications.
              </p>
            </div>
            <div id="community" className="group relative m-auto max-w-5xl px-6">
              <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                <Link
                  href="/about"
                  className="block text-sm duration-150 hover:opacity-75">
                  <span> Meet Our Community</span>

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

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedGroup preset="blur-slide">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Our Mission
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                We believe that artificial intelligence should be accessible to every developer, not just those with extensive machine learning expertise. The complexity of integrating AI into applications has been a significant barrier to innovation.
              </p>
              <p>
                Opal was created to solve this problem. We provide a comprehensive, production-ready template that handles the heavy lifting of AI integration, allowing developers to focus on building amazing user experiences.
              </p>
              <p>
                Our vision is to democratize AI development, making it as easy to add intelligent features to applications as it is to add a button or form. We want to empower the next generation of developers to create applications that were previously impossible.
              </p>
            </div>
          </AnimatedGroup>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do and build.
            </p>
          </div>

          <AnimatedGroup preset="blur-slide" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <value.icon className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Built with Modern Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We use the latest and greatest technologies to ensure your applications are fast, reliable, and maintainable.
            </p>
          </div>

          <AnimatedGroup preset="blur-slide" className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <Code className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </Card>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedGroup preset="blur-slide">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Meet the Creator
            </h2>
            <Card className="p-8">
              <div className="flex flex-col items-center gap-6">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <Code className="w-12 h-12 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Drew Sepeczi</h3>
                  <p className="text-muted-foreground mb-4">Full Stack Developer & AI Enthusiast</p>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    Passionate about making AI accessible to developers. Building tools that bridge the gap between complex AI systems and practical applications.
                  </p>
                  <div className="flex justify-center gap-4">
                    <Link href="https://github.com/drewsephski" className="text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="h-6 w-6" />
                    </Link>
                    <Link href="https://x.com/drewsepeczi" className="text-muted-foreground hover:text-foreground transition-colors">
                      <Twitter className="h-6 w-6" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/drewsepeczi" className="text-muted-foreground hover:text-foreground transition-colors">
                      <Linkedin className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedGroup>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Join the Community"
        description="Connect with other developers building AI applications and share your experiences."
        primaryButtonText="Get Started"
        primaryButtonHref="/chat"
        secondaryButtonText="View on GitHub"
        secondaryButtonHref="https://github.com/drewsephski"
      />
    </>
  )
}