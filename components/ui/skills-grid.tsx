import { Badge } from '@/components/ui/badge'

interface SkillCategory {
  category: string
  skills: string[]
}

interface SkillsGridProps {
  skillCategories: SkillCategory[]
}

export function SkillsGrid({ skillCategories }: SkillsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {skillCategories.map((category) => (
        <div key={category.category} className="space-y-4">
          <h3 className="text-lg font-semibold text-text-primary">{category.category}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
