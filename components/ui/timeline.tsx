import * as React from "react"

import { cn } from "@/lib/utils"

interface TimelineProps {
  items: Array<{
    year: string
    title: string
    description: string
    company?: string
  }>
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="relative flex gap-6">
          {/* Timeline line */}
          <div className="relative flex flex-col items-center">
            <div className="w-4 h-4 bg-primary rounded-full border-4 border-background" />
            {index < items.length - 1 && (
              <div className="w-0.5 h-full bg-border mt-2" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 pb-8">
            <div className="text-sm font-semibold text-primary mb-1">
              {item.year}
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-1">
              {item.title}
            </h3>
            {item.company && (
              <p className="text-text-muted text-sm mb-2">
                {item.company}
              </p>
            )}
            <p className="text-text-muted leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
