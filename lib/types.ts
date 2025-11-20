export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image?: string
  tags: string[]
  github?: string
  demo?: string
  featured?: boolean
}

export interface Skill {
  name: string
  category: string
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface TimelineItem {
  year: string
  title: string
  description: string
  company?: string
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  content?: string
  readTime?: string
}

export interface NavItem {
  name: string
  href: string
}
