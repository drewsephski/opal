"use client";

import { PricingCards } from "@/components/sections/pricing-cards"
import { CTASection } from "@/components/sections/cta-section"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { Card } from "@/components/ui/card"
import { RippleButton } from "@/components/ui/ripple-button"
import Link from "next/link"
import { ChevronDown, ArrowRight, ChevronRight } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "What's included in the free tier?",
    answer: "The free tier includes access to our GLM-4.5-Air model with 20 requests per minute and 50 requests per day. You get basic features, community support, and all core functionality."
  },
  {
    question: "Can I upgrade or downgrade anytime?",
    answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades apply at the end of your current billing cycle."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers. All payments are processed securely through Stripe."
  },
  {
    question: "Is there a free trial for Pro?",
    answer: "Yes, we offer a 14-day free trial for the Pro plan. No credit card required to start. You can cancel anytime during the trial period."
  },
  {
    question: "What are the rate limits?",
    answer: "Free tier: 20 req/min, 50 req/day. Pro tier: 100 req/min, 10,000 req/day. Enterprise: Custom limits based on your needs."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team for a full refund."
  },
  {
    question: "Can I use my own OpenRouter API key?",
    answer: "Yes, you can configure your own OpenRouter API key in the settings. This gives you full control over your API usage and billing."
  },
  {
    question: "What's the difference between models?",
    answer: "Different models offer varying capabilities in terms of speed, intelligence, and specialized tasks. GLM-4.5-Air is our free model optimized for general conversations."
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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="p-6">
      <RippleButton
        onClick={() => setIsOpen(!isOpen)}
        variant="ghost"
        className="w-full flex items-center justify-between text-left p-0 h-auto"
      >
        <h3 className="text-lg font-semibold text-foreground">{question}</h3>
        <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </RippleButton>
      {isOpen && (
        <p className="mt-4 text-muted-foreground">{answer}</p>
      )}
    </Card>
  )
}

export default function PricingPage() {
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
                    <span className="text-foreground text-sm">Choose Your Plan</span>
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
                    Simple, Transparent Pricing
                  </h1>
                  <p
                    className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                    Start free and scale as you grow. No hidden fees, no surprises.
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
                        <span className="text-nowrap">Start Free</span>
                      </RippleButton>
                    </Link>
                  </div>
                  <Link href="/about">
                    <RippleButton
                      key={2}
                      size="lg"
                      variant="ghost"
                      className="h-10.5 rounded-xl px-5">
                      <span className="text-nowrap">Contact Sales</span>
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
                    alt="pricing plans screen"
                    width="2700"
                    height="1440"
                  />
                  <img
                    className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                    src="https://tailark.com/_next/image?url=%2Fmail2-light.png&w=3840&q=75"
                    alt="pricing plans screen"
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
                Trusted by Businesses Worldwide
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Join thousands of companies scaling their AI applications with our platform.
              </p>
            </div>
            <div id="businesses" className="group relative m-auto max-w-5xl px-6">
              <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                <Link
                  href="/about"
                  className="block text-sm duration-150 hover:opacity-75">
                  <span> Learn About Our Customers</span>

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

      {/* Pricing Cards */}
      <PricingCards />

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our pricing and plans.
            </p>
          </div>

          <AnimatedGroup preset="blur-slide" className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Join thousands of developers building AI applications with our platform."
        primaryButtonText="Start Free"
        primaryButtonHref="/chat"
        secondaryButtonText="Contact Sales"
        secondaryButtonHref="/about"
      />
    </>
  )
}