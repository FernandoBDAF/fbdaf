"use client"

import type { Project } from "@/lib/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import { trackEvent } from "@/lib/tracking"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const handleProjectOpen = (source: string) => {
    trackEvent({ event: "project_open", slug: project.id, source })
  }

  return (
    <div className="group bg-surface border border-border/40 rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
      {/* Project Image */}
      <div className="relative aspect-video bg-muted overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-text-muted text-sm leading-relaxed">{project.description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 4 && (
            <Badge variant="secondary" className="text-xs">
              +{project.tags.length - 4}
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleProjectOpen("github")}
            >
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Github className="h-4 w-4" />
                Code
              </Button>
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={() => handleProjectOpen("demo")}>
              <Button size="sm" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                Demo
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}