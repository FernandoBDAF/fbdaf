import type { Metadata } from "next"
import { skillCategories } from "@/lib/data/skills"
import { SkillsGrid } from "@/components/ui/skills-grid"

export const metadata: Metadata = {
  title: "Skills - FernandoBDAF",
  description: "My technical skills and expertise in AI engineering and full-stack development.",
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Page Header */}
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">Skills & Technologies</h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto text-balance">
              A comprehensive overview of the technologies and tools I use to build intelligent systems and modern web
              applications
            </p>
          </div>

          {/* Skills Grid */}
          <SkillsGrid skillCategories={skillCategories} />

          {/* Additional Info */}
          <div className="pt-8 space-y-6 max-w-3xl mx-auto">
            <div className="p-6 bg-surface border border-border/40 rounded-lg space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">Continuous Learning</h2>
              <p className="text-text-muted leading-relaxed">
                The tech landscape evolves rapidly, especially in AI and web development. I&apos;m constantly learning new
                technologies, exploring emerging tools, and refining my craft. Currently diving deeper into advanced AI
                agent systems, real-time architectures, and performance optimization techniques.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border/40 rounded-lg space-y-4">
              <h2 className="text-xl font-semibold text-text-primary">Best Practices</h2>
              <p className="text-text-muted leading-relaxed">
                Beyond specific tools, I prioritize clean code, proper testing, accessibility, security, and scalable
                architecture. I believe in building systems that are maintainable, well-documented, and a joy to work
                with for both users and developers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
