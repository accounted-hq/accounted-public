import {Metadata} from "next"
import {notFound} from "next/navigation"
import Link from "next/link"
import {MDXRemote} from "next-mdx-remote/rsc"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {formatDate, getAllPosts, getPostBySlug} from "@/lib/mdx"
import {ArrowLeft, Calendar, Tag, User} from "lucide-react"

interface BlogPostPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    const posts = getAllPosts('blog')
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({params}: BlogPostPageProps): Promise<Metadata> {
    const {slug} = await params
    const post = getPostBySlug('blog', slug)

    if (!post) {
        return {}
    }

    const url = `https://accounted.app/blog/${slug}`
    const fullTitle = `${post.matter.title} | Accounted`
    
    // Generate OG image URL with custom parameters
    const ogImageParams = new URLSearchParams({
        title: post.matter.title,
        description: post.matter.description || "",
        page: "Blog",
    })
    const ogImageUrl = `/api/og?${ogImageParams.toString()}`

    return {
        title: post.matter.title,
        description: post.matter.description,
        openGraph: {
            type: "article",
            locale: "en_US",
            url,
            title: fullTitle,
            description: post.matter.description,
            siteName: "Accounted",
            publishedTime: post.matter.date,
            authors: post.matter.author ? [post.matter.author] : undefined,
            tags: post.matter.tags || undefined,
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
            description: post.matter.description,
            images: [ogImageUrl],
        },
    }
}

export default async function BlogPostPage({params}: BlogPostPageProps) {
    const {slug} = await params
    const post = getPostBySlug('blog', slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="py-16">
            <div className="container mx-auto max-w-4xl px-4">
                {/* Back Link */}
                <div className="mb-8">
                    <Button variant="ghost" asChild>
                        <Link href="/blog">
                            <ArrowLeft className="w-4 h-4 mr-2"/>
                            Back to Blog
                        </Link>
                    </Button>
                </div>

                {/* Article Header */}
                <header className="mb-12">
                    <div className="flex items-center space-x-3 mb-4">
                        <Calendar className="w-4 h-4 text-muted-foreground"/>
                        <time className="text-sm text-muted-foreground">
                            {formatDate(post.matter.date)}
                        </time>
                        {post.matter.category && (
                            <Badge variant="secondary">{post.matter.category}</Badge>
                        )}
                    </div>

                    <h1 className="text-4xl font-bold mb-4">{post.matter.title}</h1>

                    <p className="text-xl text-muted-foreground mb-6">
                        {post.matter.description}
                    </p>

                    {post.matter.author && (
                        <div className="flex items-center space-x-2 mb-6">
                            <User className="w-4 h-4 text-muted-foreground"/>
                            <span className="text-sm text-muted-foreground">
                By {post.matter.author}
              </span>
                        </div>
                    )}

                    {post.matter.tags && post.matter.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {post.matter.tags.map((tag) => (
                                <Link key={tag} href={`/blog/tag/${tag.toLowerCase()}`}>
                                    <Badge variant="outline"
                                           className="hover:bg-primary hover:text-primary-foreground cursor-pointer">
                                        <Tag className="w-3 h-3 mr-1"/>
                                        {tag}
                                    </Badge>
                                </Link>
                            ))}
                        </div>
                    )}
                </header>

                {/* Article Content */}
                <article className="prose prose-lg max-w-none">
                    <MDXRemote source={post.content}/>
                </article>

                {/* Article Footer */}
                <footer className="mt-12 pt-8 border-t">
                    <div className="text-center">
                        <p className="text-muted-foreground mb-4">
                            Enjoyed this article? Share your thoughts or questions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                            <Button variant="outline" asChild>
                                <Link href="/blog">
                                    ← More Articles
                                </Link>
                            </Button>
                            <Button asChild>
                                <Link href="mailto:hello@accounted.app">
                                    Get in Touch
                                </Link>
                            </Button>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}