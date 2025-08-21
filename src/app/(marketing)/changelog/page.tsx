import Link from "next/link"
import {Badge} from "@/components/ui/badge"
import {formatDate, getAllPosts} from "@/lib/mdx"
import {Calendar, ExternalLink} from "lucide-react"
import { generateMetadata, pageMetadata } from "@/lib/metadata"

export const metadata = generateMetadata(pageMetadata.changelog)

export default function ChangelogPage() {
    const posts = getAllPosts('changelog')

    return (
        <div className="py-16">
            <div className="container mx-auto max-w-4xl px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-6">Changelog</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        Stay up to date with new features, improvements, and bug fixes.
                        We ship updates regularly to make your accounting workflow better.
                    </p>
                    <div className="flex items-center justify-center space-x-4">
                        <Link
                            href="/changelog/rss.xml"
                            className="text-sm text-muted-foreground hover:text-foreground flex items-center space-x-2"
                        >
                            <ExternalLink className="w-4 h-4"/>
                            <span>RSS Feed</span>
                        </Link>
                    </div>
                </div>

                {/* Changelog Entries */}
                {posts.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-muted-foreground mb-4">No changelog entries yet.</div>
                        <div className="text-sm text-muted-foreground">
                            Check back soon for updates on new features and improvements.
                        </div>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {posts.map((post) => (
                            <article
                                key={post.slug}
                                className="bg-background border rounded-2xl p-8 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <div className="flex items-center space-x-3 mb-2">
                                            <Calendar className="w-4 h-4 text-muted-foreground"/>
                                            <time className="text-sm text-muted-foreground">
                                                {formatDate(post.matter.date)}
                                            </time>
                                            {post.matter.category && (
                                                <Badge variant="secondary">{post.matter.category}</Badge>
                                            )}
                                        </div>
                                        <h2 className="text-2xl font-bold mb-2">
                                            <Link
                                                href={`/changelog/${post.slug}`}
                                                className="hover:text-primary transition-colors"
                                            >
                                                {post.matter.title}
                                            </Link>
                                        </h2>
                                    </div>
                                </div>

                                <p className="text-muted-foreground mb-4">
                                    {post.matter.description}
                                </p>

                                {post.matter.tags && post.matter.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.matter.tags.map((tag) => (
                                            <Badge key={tag} variant="outline" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                )}

                                <Link
                                    href={`/changelog/${post.slug}`}
                                    className="text-primary hover:underline text-sm font-medium"
                                >
                                    Read full changelog →
                                </Link>
                            </article>
                        ))}
                    </div>
                )}

                {/* Subscribe Section */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-muted/30 to-background border rounded-2xl p-8">
                        <h2 className="text-2xl font-bold mb-4">Stay updated</h2>
                        <p className="text-muted-foreground mb-6">
                            Get notified about new features and improvements via our RSS feed or follow us for updates.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                            <Link
                                href="/changelog/rss.xml"
                                className="text-primary hover:underline text-sm font-medium flex items-center space-x-2"
                            >
                                <ExternalLink className="w-4 h-4"/>
                                <span>Subscribe to RSS</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}