import type { Project } from "../types"

export const projects: Project[] = [
  {
    id: "ai-workflow-orchestration",
    title: "AI Workflow Orchestration Platform",
    description:
      "Enterprise-grade platform for orchestrating complex AI workflows with multi-agent systems and real-time monitoring.",
    longDescription:
      "Built a comprehensive platform that enables teams to design, deploy, and monitor sophisticated AI agent workflows. Features include visual workflow builder, real-time execution tracking, and advanced debugging capabilities.",
    image: "/ai-workflow-orchestration-dashboard-with-nodes-and.jpg",
    tags: ["Next.js", "TypeScript", "OpenAI", "LangChain", "PostgreSQL", "Redis"],
    github: "https://github.com/fernandobdaf/ai-orchestration",
    demo: "https://ai-orchestration-demo.vercel.app",
    featured: true,
  },
  {
    id: "intelligent-document-analysis",
    title: "Intelligent Document Analysis System",
    description:
      "AI-powered system for extracting, analyzing, and structuring data from complex documents with 95%+ accuracy.",
    longDescription:
      "Developed a machine learning pipeline that processes various document types, extracts key information, and structures it into actionable data. Handles PDFs, images, and scanned documents with high accuracy.",
    image: "/document-analysis-ai-interface-showing-extracted-d.jpg",
    tags: ["Python", "FastAPI", "PyTorch", "OpenCV", "React", "MongoDB"],
    github: "https://github.com/fernandobdaf/doc-analysis",
    featured: true,
  },
  {
    id: "developer-productivity-suite",
    title: "Developer Productivity Suite",
    description:
      "AI-enhanced developer tools that boost productivity through intelligent code generation and analysis.",
    longDescription:
      "Created a suite of developer tools powered by AI that provides smart code suggestions, automated refactoring, documentation generation, and code quality analysis.",
    image: "/developer-tools-interface-with-code-editor-and-ai-.jpg",
    tags: ["TypeScript", "Node.js", "OpenAI", "VSCode API", "Next.js"],
    github: "https://github.com/fernandobdaf/dev-suite",
    demo: "https://dev-suite-demo.vercel.app",
    featured: true,
  },
  {
    id: "content-automation-platform",
    title: "Content Automation Platform",
    description: "Platform for automating content creation workflows using AI, saving teams hours of manual work.",
    image: "/content-management-automation-dashboard.jpg",
    tags: ["Next.js", "TypeScript", "AI SDK", "Supabase", "Vercel"],
    github: "https://github.com/fernandobdaf/content-automation",
    featured: false,
  },
  {
    id: "realtime-collaboration",
    title: "Real-time Collaboration Workspace",
    description: "Modern collaboration platform with real-time editing, AI assistance, and seamless team workflows.",
    image: "/collaborative-workspace-with-multiple-users-editin.jpg",
    tags: ["React", "WebSockets", "Node.js", "PostgreSQL", "Redis"],
    github: "https://github.com/fernandobdaf/collab-workspace",
    demo: "https://collab-workspace-demo.vercel.app",
    featured: false,
  },
  {
    id: "api-gateway-service",
    title: "Intelligent API Gateway",
    description: "High-performance API gateway with AI-powered rate limiting, caching, and request optimization.",
    image: "/api-gateway-dashboard-with-metrics-and-analytics.jpg",
    tags: ["Go", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
    github: "https://github.com/fernandobdaf/api-gateway",
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
