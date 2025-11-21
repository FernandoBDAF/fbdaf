"use client"

import { Button } from "@/components/ui/button"
import { Timeline } from "@/components/ui/timeline"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { experience } from "@/lib/data/experience"

export function AboutPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        ease: "easeOut",
      },
    },
  }

  const aiEngineeringItems = [
    "LLM integration and prompt engineering",
    "Multi-agent system design",
    "AI workflow orchestration",
    "Vector databases and embeddings",
  ]

  const fullStackItems = [
    "Next.js and React applications",
    "TypeScript and modern JavaScript",
    "API design and backend systems",
    "Cloud infrastructure and deployment",
  ]

  return (
    <section className="bg-bg py-28 sm:py-32 lg:py-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-16">
          {/* Section Header */}
          <motion.div
            className="space-y-8"
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl">About Me</h2>
            <motion.div
              className="space-y-6 text-base leading-relaxed text-text-muted sm:text-lg md:text-xl"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.p variants={itemVariants}>
                I&apos;m an AI Engineer and Full-Stack Developer passionate about building intelligent systems that
                solve real-world problems. With expertise spanning machine learning, modern web frameworks, and cloud
                infrastructure, I create solutions that are both powerful and elegant.
              </motion.p>
              <motion.p variants={itemVariants}>
                My work focuses on AI automation, agent orchestration, and developer tooling. I believe in writing clean
                code, building scalable architectures, and delivering exceptional user experiences.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* What I Do Section */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-text-primary md:text-3xl">What I Do</h3>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
              {/* AI Engineering */}
              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <h4 className="text-xl font-semibold text-text-primary md:text-2xl">AI Engineering</h4>
                <ul className="space-y-3 text-base text-text-muted sm:text-lg">
                  {aiEngineeringItems.map((item, index) => (
                    <motion.li key={index} className="flex items-start" variants={itemVariants}>
                      <span className="mr-3 mt-1 text-accent">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Full-Stack Development */}
              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <h4 className="text-xl font-semibold text-text-primary md:text-2xl">Full-Stack Development</h4>
                <ul className="space-y-3 text-base text-text-muted sm:text-lg">
                  {fullStackItems.map((item, index) => (
                    <motion.li key={index} className="flex items-start" variants={itemVariants}>
                      <span className="mr-3 mt-1 text-accent">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Professional Journey */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-text-primary md:text-3xl">Professional Journey</h3>
            <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
              <Timeline items={experience.slice(0, 3)} />
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
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
