"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { navItems } from "@/lib/metadata"
import { cn } from "@/lib/utils"
import { trackEvent } from "@/lib/tracking"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { siteConfig } from "@/lib/metadata"
import { Github, Linkedin } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (href: string) => {
    trackEvent({ event: "nav_click", target: href })
    setMobileMenuOpen(false)
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  }

  const handleContactClick = (method: "linkedin" | "github") => {
    trackEvent({ event: "contact_click", method })
  }

  return (
    <nav className="border-border/40 bg-bg/95 supports-[backdrop-filter]:bg-bg/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-accent"
            onClick={() => handleContactClick("github")}
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-accent"
            onClick={() => handleContactClick("linkedin")}
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative py-2 text-sm font-medium transition-colors hover:text-accent",
                pathname === item.href
                  ? "text-text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent"
                  : "text-text-muted",
              )}
              onClick={() => handleNavClick(item.href)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="p-2 text-text-muted transition-colors hover:text-text-primary md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div animate={{ rotate: mobileMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="border-border/40 bg-bg/95 overflow-hidden border-t backdrop-blur md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="container mx-auto flex flex-col gap-2 px-4 py-6">
              {navItems.map((item, index) => (
                <motion.div key={item.href} variants={itemVariants}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-3 text-base font-medium transition-colors hover:text-accent",
                      pathname === item.href ? "text-text-primary" : "text-text-muted",
                    )}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
