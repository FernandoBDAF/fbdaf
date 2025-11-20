"use client"

import { useState, useMemo } from "react"
import type { Project } from "@/lib/types"
import { ProjectCard } from "@/components/ui/project-card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ProjectsClientProps {
  projects: Project[]
}

export function ProjectsClient({ projects }: ProjectsClientProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [projects])

  // Filter projects based on selected tag
  const filteredProjects = useMemo(() => {
    if (!selectedTag) return projects
    return projects.filter((project) => project.tags.includes(selectedTag))
  }, [projects, selectedTag])

  return (
    <div className="space-y-8">
      {/* Tag Filter */}
      <div className="space-y-4">
        <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wide">Filter by Technology</h2>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedTag === null ? "default" : "outline"}
            className={cn(
              "cursor-pointer transition-all",
              selectedTag === null ? "bg-accent text-accent-foreground" : "hover:bg-accent/10",
            )}
            onClick={() => setSelectedTag(null)}
          >
            All Projects ({projects.length})
          </Badge>
          {allTags.map((tag) => {
            const count = projects.filter((p) => p.tags.includes(tag)).length
            return (
              <Badge
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                className={cn(
                  "cursor-pointer transition-all",
                  selectedTag === tag ? "bg-accent text-accent-foreground" : "hover:bg-accent/10",
                )}
                onClick={() => setSelectedTag(tag)}
              >
                {tag} ({count})
              </Badge>
            )
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* No Results Message */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-text-muted">No projects found with the selected filter.</p>
        </div>
      )}
    </div>
  )
}
