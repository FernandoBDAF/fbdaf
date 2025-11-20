import type { Metadata } from "next"
import { ProjectsClient } from "@/components/projects/projects-client"
import { projects } from "@/lib/data/projects"

export const metadata: Metadata = {
  title: "Projects - FernandoBDAF",
  description: "Explore my portfolio of AI engineering and full-stack development projects.",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Page Header */}
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">Projects</h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto text-balance">
              A collection of projects showcasing my work in AI engineering, automation, and full-stack development
            </p>
          </div>

          {/* Projects with Filtering */}
          <ProjectsClient projects={projects} />
        </div>
      </div>
    </div>
  )
}
