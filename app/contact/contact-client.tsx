"use client"

import { ContactForm } from "@/components/contact/contact-form"
import { Github, Linkedin, Mail } from "lucide-react"
import { siteConfig } from "@/lib/metadata"
import { trackEvent } from "@/lib/tracking"
import Link from "next/link"

export default function ContactClientPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Page Header */}
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">Get in Touch</h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto text-balance">
              Interested in collaborating or have a question? I&apos;d love to hear from you. Feel free to reach out through
              any of the channels below.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group p-6 bg-surface border border-border/40 rounded-lg hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10"
              onClick={() => trackEvent({ event: "contact_click", method: "email" })}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">Email</h3>
                <p className="text-sm text-text-muted break-all">{siteConfig.email}</p>
              </div>
            </a>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-surface border border-border/40 rounded-lg hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10"
              onClick={() => trackEvent({ event: "contact_click", method: "linkedin" })}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">LinkedIn</h3>
                <p className="text-sm text-text-muted">Connect with me</p>
              </div>
            </a>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-surface border border-border/40 rounded-lg hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10"
              onClick={() => trackEvent({ event: "contact_click", method: "github" })}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                  <Github className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">GitHub</h3>
                <p className="text-sm text-text-muted">View my work</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="pt-8">
            <div className="p-8 bg-surface border border-border/40 rounded-lg">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-text-primary">Send a Message</h2>
                  <p className="text-text-muted">
                    Fill out the form below and I&apos;ll get back to you as soon as possible.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center space-y-4 pt-8">
            <p className="text-text-muted">Looking for my resume or more details?</p>
            <Link href="/about" className="text-accent hover:underline font-medium">
              Visit my About page
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
