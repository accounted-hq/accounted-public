import { Hero } from "@/components/site/hero"
import { FeatureGrid } from "@/components/site/feature-grid"
import { CodeSnippet } from "@/components/site/code-snippet"
import { CTASection } from "@/components/site/cta-section"
import { generateMetadata } from "@/lib/metadata"
import { pageMetadata } from "@/lib/metadata"

export const metadata = generateMetadata(pageMetadata.home)

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