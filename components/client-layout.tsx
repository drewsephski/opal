"use client"

import { usePathname } from "next/navigation"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"

interface ClientLayoutProps {
  children: React.ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname()
  const isChatPage = pathname === '/chat'

  return (
    <>
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      {!isChatPage && <Footer />}
    </>
  )
}