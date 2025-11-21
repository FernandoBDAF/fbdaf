import * as React from 'react'

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
            <div className="h-4 w-4 rounded-full border-4 border-background bg-primary" />
            {index < items.length - 1 && (
              <div className="mt-2 h-full w-0.5 bg-border" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 pb-8">
            <div className="mb-1 text-sm font-semibold text-primary">
              {item.year}
            </div>
            <h3 className="mb-1 text-lg font-bold text-text-primary">
              {item.title}
            </h3>
            {item.company && (
              <p className="mb-2 text-sm text-text-muted">{item.company}</p>
            )}
            <p className="leading-relaxed text-text-muted">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
