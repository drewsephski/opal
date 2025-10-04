"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { AnimatedGroup } from "@/components/ui/animated-group"

// Avoid SSR hydration issues by loading react-countup on the client.
const CountUp = dynamic(() => import("react-countup"), { ssr: false })

/** Hook: respects user's motion preferences */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches)
    setReduced(mq.matches)
    mq.addEventListener?.("change", onChange)
    return () => mq.removeEventListener?.("change", onChange)
  }, [])
  return reduced
}

/** Utility: parse a metric like "98%", "3.8x", "$1,200+", "1.5M", "€23.4k" */
function parseMetricValue(raw: string) {
  const value = (raw ?? "").toString().trim()
  const m = value.match(
    /^([^\d\-+]*?)\s*([\-+]?\d{1,3}(?:,\d{3})*(?:\.\d+)?)\s*([^\d\s]*)$/
  )
  if (!m) {
    return { prefix: "", end: 0, suffix: value, decimals: 0 }
  }
  const [, prefix, num, suffix] = m
  const normalized = num.replace(/,/g, "")
  const end = parseFloat(normalized)
  const decimals = (normalized.split(".")[1]?.length ?? 0)
  return {
    prefix: prefix ?? "",
    end: isNaN(end) ? 0 : end,
    suffix: suffix ?? "",
    decimals,
  }
}

/** Small component: one animated metric */
function MetricStat({
  value,
  label,
  sub,
  duration = 1.6,
}: {
  value: string
  label: string
  sub?: string
  duration?: number
}) {
  const reduceMotion = usePrefersReducedMotion()
  const { prefix, end, suffix, decimals } = parseMetricValue(value)

  return (
    <div className="flex flex-col gap-2 text-center p-6">
      <p
        className="text-2xl font-medium text-gray-900 dark:text-white sm:text-4xl"
        aria-label={`${label} ${value}`}
      >
        {prefix}
        {reduceMotion ? (
          <span>
            {end.toLocaleString(undefined, {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            })}
          </span>
        ) : (
          <CountUp
            end={end}
            decimals={decimals}
            duration={duration}
            separator=","
            enableScrollSpy
            scrollSpyOnce
          />
        )}
        {suffix}
      </p>
      <p className="font-medium text-gray-900 dark:text-white text-center">
        {label}
      </p>
      {sub ? (
        <p className="text-gray-600 dark:text-gray-400 text-center">{sub}</p>
      ) : null}
    </div>
  )
}

const stats = [
  { value: "99.9%", label: "Uptime Reliability", sub: "99.9% service availability" },
  { value: "<100ms", label: "Average Response Time", sub: "Lightning-fast AI responses" },
  { value: "50+", label: "Supported AI Models", sub: "Access to leading AI providers" },
  { value: "10K+", label: "Active Developers", sub: "Growing community worldwide" }
]

export function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Trusted by Developers Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers building the future of AI applications with our reliable platform.
          </p>
        </div>

        <AnimatedGroup
          preset="blur-slide"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <MetricStat
              key={index}
              value={stat.value}
              label={stat.label}
              sub={stat.sub}
            />
          ))}
        </AnimatedGroup>
      </div>
    </section>
  )
}