import { Hero } from "@/components/site/hero"
import { FeatureGrid } from "@/components/site/feature-grid"
import { CodeSnippet } from "@/components/site/code-snippet"
import { CTASection } from "@/components/site/cta-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <CodeSnippet />
      <CTASection />
    </>
  )
}