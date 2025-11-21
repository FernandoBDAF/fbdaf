'use client'

import { featuredProjects } from '@/lib/data/projects'
import { ProjectCard } from '@/components/ui/project-card'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function FeaturedProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section className="bg-surface py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl space-y-12">
          {/* Section Header */}
          <motion.div className="space-y-4 text-center" ref={ref} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-text-primary md:text-4xl">Featured Projects</h2>
            <p className="mx-auto max-w-2xl text-balance text-lg text-text-muted">A selection of my recent work in AI engineering and full-stack development</p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
            {featuredProjects.map((project, index) => (
              <motion.div key={project.id} variants={itemVariants} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
