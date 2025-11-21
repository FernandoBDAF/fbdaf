import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'sempre-fichas',
    title: 'Sempre Fichas Management System',
    description: 'Comprehensive enterprise management system handling operations, finance, accounting, and compliance for a growing company.',
    longDescription: 'Started this project 10 years ago as founder and CTO of Sempre Fichas. Initially a legacy .NET MVC application, I led the complete modernization from 2022 onwards. Today it features a modern .NET API, Next.js frontend, CI/CD pipelines, and staging environments. The system manages all company operations, financial tracking, accounting, and compliance requirements. Deployed on Azure with frontend hosted on Vercel.',
    image: '/content-management-automation-dashboard.jpg',
    tags: ['.NET', 'Next.js', 'TypeScript', 'Azure', 'SQL Server', 'Vercel'],
    github: 'https://github.com/FernandoBDAF/SFAccountingSystem',
    featured: true,
  },
  {
    id: 'concept-microservice',
    title: 'Concept Microservice Architecture',
    description: 'Reference microservice architecture demonstrating distributed systems with orchestration, caching, authentication, and asynchronous workers.',
    longDescription: 'Designed as a proof-of-concept architecture showcasing a Go API orchestrating a complete environment with Redis caching, authentication layers, multiple databases, and Python agentic workers. The system demonstrates how modern microservices can handle complex workflows with proper separation of concerns and scalability. Includes Kubernetes deployment, Docker containerization, RabbitMQ message queues, and comprehensive load testing with k6.',
    image: '/api-gateway-dashboard-with-metrics-and-analytics.jpg',
    tags: ['Go', 'Python', 'Kubernetes', 'Docker', 'RabbitMQ', 'Redis', 'Node.js'],
    github: 'https://github.com/FernandoBDAF/concept-microservice',
    featured: true,
  },
  {
    id: 'youtube-rag',
    title: 'YoutubeRAG - GraphRAG System',
    description: 'Advanced GraphRAG pipeline for extracting and analyzing knowledge from YouTube content with comprehensive observability.',
    longDescription: 'Started as a hackathon project using traditional RAG, evolved into a sophisticated GraphRAG implementation. The current pipeline features 8 transformation stages with detailed monitoring through Grafana and custom observability systems. Provides deep insights into data transformations at each stage to enable precise tuning of knowledge extraction. Building agentic pipelines for intelligent data consumption and MCP server integration.',
    image: '/developer-tools-interface-with-code-editor-and-ai-.jpg',
    tags: ['Python', 'Docker', 'Grafana', 'GraphRAG', 'LLM', 'Observability'],
    github: 'https://github.com/FernandoBDAF/YoutubeRAG',
    featured: true,
  },
  {
    id: 'context-manager',
    title: 'Context Manager',
    description: 'Intelligent context management system for optimizing LLM interactions with structured context preservation.',
    longDescription: 'Born from repeated optimization efforts across multiple LLM-based projects, this tool provides a controlled methodology for managing and enriching context for AI model calls. Originally developed inline, now extracted as a standalone utility. Currently being refactored into an MCP server for broader IDE integration, with plans to support VS Code and Claude Code directly for seamless workflow integration.',
    image: '/collaborative-workspace-with-multiple-users-editin.jpg',
    tags: ['Python', 'LLM', 'MCP'],
    github: 'https://github.com/FernandoBDAF/context-manager',
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
