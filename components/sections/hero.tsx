'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { trackEvent } from '@/lib/tracking'

export function Hero() {
  const handleCTAClick = (cta: string) => {
    trackEvent({ event: 'hero_cta_click', cta })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
      {/* Gradient background effect */}
      <motion.div
        className="from-accent/5 pointer-events-none absolute inset-0 bg-gradient-to-b via-background to-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Animated glow */}
      <motion.div
        className="bg-accent/10 pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
      />

      <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl space-y-10 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            className="border-border/40 inline-flex items-center gap-2 rounded-full border bg-surface px-4 py-2 text-sm text-text-muted"
            variants={itemVariants}
          >
            <Sparkles className="h-4 w-4 text-accent" />
            <span>Agentic & Full-Stack</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-balance text-4xl font-bold leading-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            Software Engineer{' '}
            <span className="text-accent">Augmented by AI</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="mx-auto max-w-3xl text-pretty text-lg leading-relaxed text-text-muted sm:text-xl md:text-2xl"
            variants={itemVariants}
          >
            Exploring the era where knowledge is always accessible. I see AI as
            a cognitive layer above code, allowing imagination and a solid grasp
            of the foundations to be all you need.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row"
            variants={itemVariants}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  )
}
