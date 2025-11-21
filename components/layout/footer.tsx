"use client"
import { siteConfig } from "@/lib/metadata"
import { trackEvent } from "@/lib/tracking"

export function Footer() {
  const handleContactClick = (method: "linkedin" | "github") => {
    trackEvent({ event: "contact_click", method })
  }

  return (
    <footer className="border-border/40 border-t bg-bg">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
