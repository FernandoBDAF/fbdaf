import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "Blog | FernandoBDAF",
  description: "Thoughts on AI engineering, full-stack development, and building production software.",
}

export default function BlogPage() {
  return <BlogClientPage />
}
