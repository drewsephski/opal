c"use client";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { RippleButton } from "@/components/ui/ripple-button";
import { HeroSection } from "@/components/blocks/hero-section-1"
import CaseStudies from "@/components/ui/case-studies";
import { ClipPathLinks } from "@/components/ui/clip-path-links";
import { StatsSection } from "@/components/sections/stats-section";
import { CTASection } from "@/components/sections/cta-section";

const features = [
  {
    title: "AI-Powered Chat",
    description: "Experience intelligent conversations with our advanced AI chat interface.",
    href: "/chat"
  },
  {
    title: "Autonomous Agents",
    description: "Build self-directed AI systems that operate independently.",
    href: "/agents"
  },
  {
    title: "Flexible Pricing",
    description: "Choose the plan that fits your needs, from free to enterprise.",
    href: "/pricing"
  },
  {
    title: "About Our Mission",
    description: "Learn about our vision for democratizing AI development.",
    href: "/about"
  }
]

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Key Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the powerful capabilities that make our AI template the perfect foundation for your next project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <Link href={feature.href}>
                  <RippleButton variant="outline" className="w-full">
                    Learn More
                  </RippleButton>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <CaseStudies />
      <CTASection />
      <ClipPathLinks />
    </>
  );
}
