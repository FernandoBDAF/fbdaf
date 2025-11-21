'use client'

import { Timeline } from '@/components/ui/timeline'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { experience } from '@/lib/data/experience'

export function AboutPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

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
        ease: 'easeOut',
      },
    },
  }

  const fullStackItems = [
    'Next.js and React applications',
    'TypeScript, Node.js, and modular API ecosystems',
    'Cloud-ready architectures built for clarity and maintainability',
    'End-to-end product development with AI as co-designer',
  ]

  const aiEngineeringItems = [
    'Agentic pipelines and workflow automation',
    'Knowledge systems: embeddings, vector stores, retrieval',
    'Designing AI reasoning loops and orchestration layers',
    'Integrating MCP and modern multimodal tooling',
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
            <h2 className="text-3xl font-bold text-text-primary md:text-4xl lg:text-5xl">
              About Me
            </h2>
            <motion.div
              className="space-y-6 text-base leading-relaxed text-text-muted sm:text-lg md:text-xl"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <motion.p variants={itemVariants}>
                I didn’t begin my journey in software - I began in science,
                where I learned to think in systems. Entrepreneurship came next,
                where I learned to build things that survive in the real world.
                Software came later, when I realized I needed to turn ideas into
                products myself.
              </motion.p>
              <motion.p variants={itemVariants}>
                Along the way, AI changed the landscape. It didn’t replace the
                need to understand code - it expanded what a single person could
                build. AI became a second cognitive layer, a new interface above
                programming languages where I could describe, reason, and
                prototype entire systems with far more clarity and speed.
              </motion.p>
              <motion.p variants={itemVariants}>
                That shift is where I found myself.
              </motion.p>
              <motion.p variants={itemVariants}>
                Today, I work at the intersection of AI orchestration, agentic
                systems, and full-stack engineering. I see coding as part
                technical craft, part architectural thinking, and part
                conversation - a blend that lets one person design, plan, and
                ship complex ideas end-to-end.
              </motion.p>
              <motion.p variants={itemVariants}>
                My work is about exploring what modern software creation looks
                like when curiosity, structure, and AI work together.
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
            {/* <h3 className="text-2xl font-bold text-text-primary md:text-3xl">What I Do</h3> */}
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
              {/* Full-Stack Development */}
              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <h4 className="text-xl font-semibold text-text-primary md:text-2xl">
                  Full-Stack Development
                </h4>
                <ul className="space-y-3 text-base text-text-muted sm:text-lg">
                  {fullStackItems.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      variants={itemVariants}
                    >
                      <span className="mr-3 mt-1 text-accent">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* AI Engineering */}
              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <h4 className="text-xl font-semibold text-text-primary md:text-2xl">
                  AI Engineering
                </h4>
                <ul className="space-y-3 text-base text-text-muted sm:text-lg">
                  {aiEngineeringItems.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      variants={itemVariants}
                    >
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
            <h3 className="text-2xl font-bold text-text-primary md:text-3xl">
              Professional Journey
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <Timeline items={experience} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
