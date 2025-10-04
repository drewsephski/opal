"use client";
import { Card } from "@/components/ui/card";
import { HeroSection } from "@/components/blocks/hero-section-1"
import CaseStudies from "@/components/ui/case-studies";
import { ClipPathLinks } from "@/components/ui/clip-path-links";

import { RippleButton } from "@/components/ui/ripple-button";

export default function Home() {
  return (
    <>
    <HeroSection />
    <CaseStudies />
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-16 p-4 md:p-12 items-center mx-24">
      {[...Array(4)].map((_, i) => (
          <Card key={i} className="bg-card rounded-lg shadow-sm p-4 md:p-8 hover:shadow-xl hover:bg-accent/20 transition-all duration-300">
            <h1 className="text-3xl font-bold text-left ml-2">AutomateX Feature {i + 1}</h1>
            <p className="text-muted-foreground text-sm text-left ml-2">Unlock the power of AI automation with AutomateX. Streamline your workflows and boost productivity.</p>
            <div className="flex justify-start ml-2">
              <RippleButton onClick={() => { }}>
                Click me
              </RippleButton>
            </div>
          </Card>
      ))}
    </div>
    <ClipPathLinks />
    </>
  );
}
