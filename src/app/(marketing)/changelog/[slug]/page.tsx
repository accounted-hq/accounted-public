import {Metadata} from "next"
import {notFound} from "next/navigation"
import Link from "next/link"
import {MDXRemote} from "next-mdx-remote/rsc"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {formatDate, getAllPosts, getPostBySlug} from "@/lib/mdx"
import {ArrowLeft, Calendar, Tag} from "lucide-react"

interface ChangelogPostPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    const posts = getAllPosts('changelog')
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({params}: ChangelogPostPageProps): Promise<Metadata> {
    const {slug} = await params
    const post = getPostBySlug('changelog', slug)

    if (!post) {
        return {}
    }

    return {
        title: post.matter.title,
        description: post.matter.description,
    }
}

export default async function ChangelogPostPage({params}: ChangelogPostPageProps) {
    const {slug} = await params
    const post = getPostBySlug('changelog', slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="py-16">
            <div className="container mx-auto max-w-4xl px-4">
                {/* Back Link */}
                <div className="mb-8">
                    <Button variant="ghost" asChild>
                        <Link href="/changelog">
                            <ArrowLeft className="w-4 h-4 mr-2"/>
                            Back to Changelog
                        </Link>
                    </Button>
                </div>

                {/* Release Header */}
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

                    {post.matter.tags && post.matter.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {post.matter.tags.map((tag) => (
                                <Badge key={tag} variant="outline"
                                       className="hover:bg-primary hover:text-primary-foreground">
                                    <Tag className="w-3 h-3 mr-1"/>
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}
                </header>

                {/* Release Content */}
                <article className="prose prose-lg max-w-none">
                    <MDXRemote source={post.content}/>
                </article>

                {/* Release Footer */}
                <footer className="mt-12 pt-8 border-t">
                    <div className="text-center">
                        <p className="text-muted-foreground mb-4">
                            Stay updated with the latest features and improvements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                            <Button variant="outline" asChild>
                                <Link href="/changelog">
                                    ← All Updates
                                </Link>
                            </Button>
                            <Button asChild>
                                <Link href="/changelog/rss.xml">
                                    Subscribe to RSS
                                </Link>
                            </Button>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}