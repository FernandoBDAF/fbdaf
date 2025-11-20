import type { SkillCategory } from "../types"

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Go", "SQL", "HTML/CSS"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Next.js", "React", "Node.js", "Express", "FastAPI", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
  },
  {
    category: "AI/ML Tools",
    skills: [
      "OpenAI API",
      "LangChain",
      "Vercel AI SDK",
      "Anthropic Claude",
      "Vector Databases",
      "Prompt Engineering",
      "RAG Systems",
      "Agent Orchestration",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    skills: ["Vercel", "AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Serverless"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Pinecone", "Neon"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "VS Code", "Postman", "Figma", "Linear", "Notion", "Sentry", "PostHog"],
  },
]
