import type { Metadata } from "next"
import { ProjectsClient } from "@/components/projects/projects-client"
import { projects } from "@/lib/data/projects"

export const metadata: Metadata = {
  title: "Projects - FernandoBDAF",
  description: "Explore my portfolio of AI engineering and full-stack development projects.",
}

export function Projects() {
  return (
    <div className="min-h-screen py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-16">
          {/* Page Header */}
          <div className="space-y-6 text-center">
            <h1 className="text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl">Projects</h1>
            <p className="mx-auto max-w-2xl text-balance text-base text-text-muted sm:text-lg md:text-xl">
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
