import {Metadata} from "next"
import Link from "next/link"
import {Badge} from "@/components/ui/badge"
import {formatDate, getAllCategories, getAllPosts, getAllTags} from "@/lib/mdx"
import {Calendar, Tag, User} from "lucide-react"

export const metadata: Metadata = {
    title: "Blog",
    description: "Insights on accounting, financial management, and building with Accounted. Technical articles and industry best practices."
}

export default function BlogPage() {
    const posts = getAllPosts('blog')
    const categories = getAllCategories('blog')
    const tags = getAllTags('blog')

    return (
        <div className="py-16">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-6">Blog</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Insights on accounting, financial management, and building with Accounted.
                        Technical articles and industry best practices.
                    </p>
                </div>

                {/* Categories and Tags */}
                {(categories.length > 0 || tags.length > 0) && (
                    <div className="mb-12">
                        <div className="bg-muted/30 rounded-2xl p-6">
                            {categories.length > 0 && (
                                <div className="mb-4">
                                    <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide">Categories</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {categories.map((category) => (
                                            <Link key={category} href={`/blog/category/${category.toLowerCase()}`}>
                                                <Badge variant="secondary"
                                                       className="hover:bg-primary hover:text-primary-foreground cursor-pointer">
                                                    {category}
                                                </Badge>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {tags.length > 0 && (
                                <div>
                                    <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide">Popular Tags</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {tags.slice(0, 10).map((tag) => (
                                            <Link key={tag} href={`/blog/tag/${tag.toLowerCase()}`}>
                                                <Badge variant="outline"
                                                       className="hover:bg-primary hover:text-primary-foreground cursor-pointer">
                                                    <Tag className="w-3 h-3 mr-1"/>
                                                    {tag}
                                                </Badge>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Blog Posts */}
                {posts.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-muted-foreground mb-4">No blog posts yet.</div>
                        <div className="text-sm text-muted-foreground">
                            Check back soon for insights on accounting and financial management.
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <article
                                key={post.slug}
                                className="bg-background border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group"
                            >
                                <div className="p-6">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <Calendar className="w-4 h-4 text-muted-foreground"/>
                                        <time className="text-sm text-muted-foreground">
                                            {formatDate(post.matter.date)}
                                        </time>
                                        {post.matter.category && (
                                            <Badge variant="secondary" className="text-xs">
                                                {post.matter.category}
                                            </Badge>
                                        )}
                                    </div>

                                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.matter.title}
                                        </Link>
                                    </h2>

                                    <p className="text-muted-foreground mb-4 line-clamp-3">
                                        {post.matter.description}
                                    </p>

                                    {post.matter.author && (
                                        <div className="flex items-center space-x-2 mb-4">
                                            <User className="w-4 h-4 text-muted-foreground"/>
                                            <span className="text-sm text-muted-foreground">
                        {post.matter.author}
                      </span>
                                        </div>
                                    )}

                                    {post.matter.tags && post.matter.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-1 mb-4">
                                            {post.matter.tags.slice(0, 3).map((tag) => (
                                                <Badge key={tag} variant="outline" className="text-xs">
                                                    {tag}
                                                </Badge>
                                            ))}
                                            {post.matter.tags.length > 3 && (
                                                <Badge variant="outline" className="text-xs">
                                                    +{post.matter.tags.length - 3}
                                                </Badge>
                                            )}
                                        </div>
                                    )}

                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Read article →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {/* Newsletter Signup */}
                <div className="mt-16 text-center">
                    <div
                        className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">Stay in the loop</h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Get notified about new articles, product updates, and accounting best practices.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <button
                                className="w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}