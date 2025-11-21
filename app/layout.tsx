import type React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FernandoBDAF - AI Engineer & Full-Stack Developer',
  description: 'AI Engineer specializing in intelligent systems, automation, and modern web development. Building the future with AI-driven solutions.',
  keywords: ['AI Engineer', 'Full-Stack Developer', 'Machine Learning', 'AI Automation', 'Web Development'],
  authors: [{ name: 'FernandoBDAF' }],
  openGraph: {
    title: 'FernandoBDAF - AI Engineer & Full-Stack Developer',
    description: 'AI Engineer specializing in intelligent systems, automation, and modern web development.',
    type: 'website',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0D0D0D',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
