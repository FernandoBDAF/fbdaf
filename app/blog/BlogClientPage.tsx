"use client"

import Link from "next/link"
import { blogPosts } from "@/lib/data/blog"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"
import { trackEvent } from "@/lib/tracking"
import ComingSoon from "@/components/ui/coming-soon"

export default function BlogClientPage() {
  if (blogPosts.length === 0) {
    return <ComingSoon />
  }

  return (
    <main className="min-h-screen bg-background py-24 sm:py-28 md:py-32 lg:py-36">
      <div className="container mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-20 space-y-5">
          <h1 className="text-4xl font-bold text-foreground text-balance md:text-5xl lg:text-6xl">Blog</h1>
          <p className="text-base text-muted-foreground leading-relaxed sm:text-lg md:text-xl">
            Thoughts on AI engineering, full-stack development, and building production software.
          </p>
        </div>

        {/* Blog Posts List */}
        <div className="space-y-10">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              onClick={() => trackEvent({ event: "blog_post_click", post: post.slug })}
            >
              <Card className="p-7 transition-all duration-300 hover:border-accent hover:shadow-lg group sm:p-8 md:p-10">
                <h2 className="mb-4 text-2xl font-bold text-foreground text-balance transition-colors group-hover:text-accent md:text-3xl lg:text-4xl">
                  {post.title}
                </h2>

                {/* Meta Info */}
                <div className="mb-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  {post.readTime && (
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
                  {post.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2.5">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
