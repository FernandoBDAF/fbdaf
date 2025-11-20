"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
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
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-24 bg-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Section Header */}
          <motion.div
            className="space-y-4"
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">About Me</h2>
            <motion.div
              className="space-y-6 text-lg text-text-muted leading-relaxed"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.p variants={itemVariants}>
                I&apos;m an AI Engineer and Full-Stack Developer passionate about building intelligent systems that solve
                real-world problems. With expertise spanning machine learning, modern web frameworks, and cloud
                infrastructure, I create solutions that are both powerful and elegant.
              </motion.p>
              <motion.p variants={itemVariants}>
                My work focuses on AI automation, agent orchestration, and developer tooling. I believe in writing clean
                code, building scalable architectures, and delivering exceptional user experiences.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Key Skills Preview */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              {
                title: "AI Engineering",
                description: "LLM integration, agent systems, prompt engineering, and ML workflows"
              },
              {
                title: "Full-Stack Development",
                description: "Next.js, React, TypeScript, Node.js, and modern web technologies"
              },
              {
                title: "Cloud & DevOps",
                description: "Vercel, AWS, Docker, CI/CD, and scalable infrastructure"
              }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-text-primary">{skill.title}</h3>
                <p className="text-text-muted">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Link href="/about">
              <Button className="group">
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
