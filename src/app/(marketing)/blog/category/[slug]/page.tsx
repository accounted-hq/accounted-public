import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getPostsByCategory, getAllCategories, formatDate } from "@/lib/mdx"
import { site } from "@/lib/site-config"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"

interface BlogCategoryPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const categories = getAllCategories('blog')
  return categories.map((category) => ({
    slug: category.toLowerCase().replace(/\s+/g, '-'),
  }))
}

export async function generateMetadata({ params }: BlogCategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const categoryName = slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
  
  const posts = getPostsByCategory('blog', categoryName)
  
  if (posts.length === 0) {
    return {}
  }

  const url = `${site.baseUrl}/blog/category/${slug}`
  const fullTitle = `${categoryName} Articles | ${site.name} Blog`
  const description = `Browse all articles in the ${categoryName} category. Insights and updates about ${categoryName.toLowerCase()} from the ${site.name} team.`
  
  // Generate OG image URL with custom parameters
  const ogImageParams = new URLSearchParams({
    title: `${categoryName} Articles`,
    description: description,
    page: "Blog Category",
  })
  const ogImageUrl = `/api/og?${ogImageParams.toString()}`

  return {
    title: `${categoryName} Articles`,
    description,
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: fullTitle,
      description,
      siteName: site.name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImageUrl],
    },
  }
}

export default async function BlogCategoryPage({ params }: BlogCategoryPageProps) {
  const { slug } = await params
  const categoryName = slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
  
  const posts = getPostsByCategory('blog', categoryName)

  if (posts.length === 0) {
    notFound()
  }

  return (
    <div className="py-16">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Back Link */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Category Header */}
        <header className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">{categoryName}</Badge>
          <h1 className="text-4xl font-bold mb-4">
            {categoryName} Articles
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse all articles in the {categoryName} category. 
            {posts.length} {posts.length === 1 ? 'article' : 'articles'} found.
          </p>
        </header>

        {/* Articles List */}
        <div className="space-y-8">
          {posts.map((post) => (
            <article 
              key={post.slug} 
              className="bg-background border rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <time className="text-sm text-muted-foreground">
                      {formatDate(post.matter.date)}
                    </time>
                    {post.matter.author && (
                      <>
                        <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{post.matter.author}</span>
                        </div>
                      </>
                    )}
                    <Badge variant="outline">{categoryName}</Badge>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.matter.title}
                    </Link>
                  </h2>
                  
                  <p className="text-muted-foreground mb-4">
                    {post.matter.description}
                  </p>
                  
                  {post.matter.tags && post.matter.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.matter.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                          className="inline-block"
                        >
                          <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground text-xs">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <Link 
                href={`/blog/${post.slug}`}
                className="text-primary hover:underline text-sm font-medium inline-flex items-center"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>

        {/* Footer CTA */}
        <footer className="mt-16 pt-8 border-t text-center">
          <p className="text-muted-foreground mb-6">
            Want to explore more topics? Check out our other articles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button variant="outline" asChild>
              <Link href="/blog">
                All Articles
              </Link>
            </Button>
            <Button asChild>
              <Link href={`mailto:${site.contactEmail}?subject=Article Suggestion`}>
                Suggest a Topic
              </Link>
            </Button>
          </div>
        </footer>
      </div>
    </div>
  )
}