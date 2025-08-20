import {MetadataRoute} from 'next'
import {site} from '@/lib/site-config'
import {getAllPosts} from '@/lib/mdx'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = site.baseUrl

    // Static marketing pages
    const staticRoutes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/features`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/open-source`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/api`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/security`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/changelog`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/docs`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
        {
            url: `${baseUrl}/imprint`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
    ]

    // Blog posts
    const blogPosts = getAllPosts('blog').map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.matter.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    // Changelog entries
    const changelogPosts = getAllPosts('changelog').map((post) => ({
        url: `${baseUrl}/changelog/${post.slug}`,
        lastModified: new Date(post.matter.date),
        changeFrequency: 'yearly' as const,
        priority: 0.5,
    }))

    return [...staticRoutes, ...blogPosts, ...changelogPosts]
}