"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { siteConfig } from "@/lib/metadata"
import { trackEvent } from "@/lib/tracking"

export function Footer() {
  const handleContactClick = (method: "email" | "linkedin" | "github") => {
    trackEvent({ event: "contact_click", method })
  }

  return (
    <footer className="border-t border-border/40 bg-bg">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-text-primary">{siteConfig.name}</h3>
            <p className="text-sm text-text-muted leading-relaxed">{siteConfig.description}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-sm text-text-muted hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-text-muted hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-text-muted hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-text-muted hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-text-primary">Connect</h4>
            <div className="flex gap-4">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors"
                onClick={() => handleContactClick("github")}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors"
                onClick={() => handleContactClick("linkedin")}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-text-muted hover:text-accent transition-colors"
                onClick={() => handleContactClick("email")}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/40">
          <p className="text-sm text-text-muted text-center">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
