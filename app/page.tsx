import { Hero } from "@/components/sections/hero"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { AboutPreview } from "@/components/sections/about-preview"

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <AboutPreview />
    </>
  )
}
