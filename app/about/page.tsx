import type { Metadata } from "next"
import { Timeline } from "@/components/ui/timeline"
import { experience } from "@/lib/data/experience"

export const metadata: Metadata = {
  title: "About - FernandoBDAF",
  description: "Learn more about my journey as an AI Engineer and Full-Stack Developer.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Page Header */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">About Me</h1>
            <p className="text-xl text-text-muted leading-relaxed text-pretty">
              I&apos;m Fernando, an AI Engineer and Full-Stack Developer passionate about building intelligent systems that
              solve real-world problems.
            </p>
          </div>

          {/* Bio Section */}
          <div className="space-y-6 text-lg text-text-muted leading-relaxed">
            <p>
              My journey in software development began with a fascination for how technology can transform ideas into
              reality. Over the years, I&apos;ve evolved from building traditional web applications to architecting
              sophisticated AI-powered systems that push the boundaries of what&apos;s possible.
            </p>
            <p>
              Today, I specialize in AI engineering, focusing on large language models, agent orchestration, and
              intelligent automation. I combine this with deep expertise in modern web development using Next.js, React,
              and TypeScript to create seamless, production-ready solutions.
            </p>
            <p>
              I believe in writing clean, maintainable code and building systems that scale. Whether it&apos;s designing AI
              workflows, optimizing performance, or crafting delightful user experiences, I approach every project with
              attention to detail and a commitment to excellence.
            </p>
          </div>

          {/* What I Do */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-text-primary">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-text-primary">AI Engineering</h3>
                <ul className="space-y-2 text-text-muted">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>LLM integration and prompt engineering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Multi-agent system design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>AI workflow orchestration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Vector databases and embeddings</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-text-primary">Full-Stack Development</h3>
                <ul className="space-y-2 text-text-muted">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Next.js and React applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>TypeScript and modern JavaScript</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>API design and backend systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Cloud infrastructure and deployment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Journey */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-text-primary">Professional Journey</h2>
            <Timeline items={experience} />
          </div>

          {/* Values */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-text-primary">Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-2 p-6 bg-surface border border-border/40 rounded-lg">
                <h3 className="text-lg font-semibold text-text-primary">Quality First</h3>
                <p className="text-sm text-text-muted">
                  Every line of code should be purposeful, clean, and maintainable.
                </p>
              </div>
              <div className="space-y-2 p-6 bg-surface border border-border/40 rounded-lg">
                <h3 className="text-lg font-semibold text-text-primary">Continuous Learning</h3>
                <p className="text-sm text-text-muted">
                  Technology evolves rapidly. I stay current with the latest tools and best practices.
                </p>
              </div>
              <div className="space-y-2 p-6 bg-surface border border-border/40 rounded-lg">
                <h3 className="text-lg font-semibold text-text-primary">User-Centric</h3>
                <p className="text-sm text-text-muted">
                  Great technology serves people. UX and developer experience matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
