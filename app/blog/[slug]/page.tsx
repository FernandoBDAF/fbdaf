import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts } from '@/lib/data/blog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { trackEvent } from '@/lib/tracking'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
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
  trackEvent({ event: 'blog_post_view', post: post.slug })

  return (
    <main className="min-h-screen bg-background py-24 sm:py-28 md:py-32 lg:py-36">
      <article className="container mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
        {/* Back Button */}
        <Link href="/blog" className="mb-12 inline-block">
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-accent/10 gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        {/* Header */}
        <header className="mb-12 space-y-6">
          <h1 className="text-balance text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
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
          <div className="space-y-6 leading-relaxed text-muted-foreground">
            {post.content?.split('\n\n').map((paragraph, index) => {
              // Handle markdown headings
              if (paragraph.startsWith('# ')) {
                return (
                  <h1
                    key={index}
                    className="mb-6 mt-12 text-balance text-3xl font-bold text-foreground md:text-4xl"
                  >
                    {paragraph.replace('# ', '')}
                  </h1>
                )
              }
              if (paragraph.startsWith('## ')) {
                return (
                  <h2
                    key={index}
                    className="mb-5 mt-10 text-balance text-2xl font-bold text-foreground md:text-3xl"
                  >
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }

              // Regular paragraphs
              return (
                <p
                  key={index}
                  className="text-base leading-relaxed text-muted-foreground sm:text-lg"
                >
                  {paragraph}
                </p>
              )
            })}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-border pt-10">
          <Link href="/blog">
            <Button
              variant="outline"
              className="hover:bg-accent/10 gap-2 bg-transparent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Posts
            </Button>
          </Link>
        </footer>
      </article>
    </main>
  )
}
