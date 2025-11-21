import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { blogPosts } from "@/lib/data/blog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { trackEvent } from "@/lib/tracking"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | FernandoBDAF`,
    description: post.description,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Track page view
  trackEvent({ event: "blog_post_view", post: post.slug })

  return (
    <main className="min-h-screen bg-background py-24 sm:py-28 md:py-32 lg:py-36">
      <article className="container mx-auto px-6 max-w-4xl sm:px-8 lg:px-12">
        {/* Back Button */}
        <Link href="/blog" className="inline-block mb-12">
          <Button variant="ghost" size="sm" className="gap-2 hover:bg-accent/10">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        {/* Header */}
        <header className="mb-12 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
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

          {/* Tags */}
          <div className="flex flex-wrap gap-2.5">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="px-3 py-1">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="text-muted-foreground leading-relaxed space-y-6">
            {post.content?.split("\n\n").map((paragraph, index) => {
              // Handle markdown headings
              if (paragraph.startsWith("# ")) {
                return (
                  <h1 key={index} className="text-3xl md:text-4xl font-bold text-foreground mt-12 mb-6 text-balance">
                    {paragraph.replace("# ", "")}
                  </h1>
                )
              }
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl md:text-3xl font-bold text-foreground mt-10 mb-5 text-balance">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              }

              // Regular paragraphs
              return (
                <p key={index} className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-10 border-t border-border">
          <Link href="/blog">
            <Button variant="outline" className="gap-2 bg-transparent hover:bg-accent/10">
              <ArrowLeft className="h-4 w-4" />
              Back to All Posts
            </Button>
          </Link>
        </footer>
      </article>
    </main>
  )
}
