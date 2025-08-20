import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PostMatter {
    title: string
    description: string
    date: string
    slug: string
    author?: string
    tags?: string[]
    category?: string
    published?: boolean
}

export interface Post {
    slug: string
    content: string
    matter: PostMatter
}

const contentDirectory = path.join(process.cwd(), 'content')

export function getPostSlugs(type: 'blog' | 'changelog'): string[] {
    const postsDirectory = path.join(contentDirectory, type)

    if (!fs.existsSync(postsDirectory)) {
        return []
    }

    return fs.readdirSync(postsDirectory)
        .filter((name) => name.endsWith('.mdx'))
        .map((name) => name.replace(/\.mdx$/, ''))
}

export function getPostBySlug(type: 'blog' | 'changelog', slug: string): Post | null {
    const postsDirectory = path.join(contentDirectory, type)
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)

    if (!fs.existsSync(fullPath)) {
        return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const {data, content} = matter(fileContents)

    return {
        slug,
        content,
        matter: {
            ...data,
            slug,
            published: data.published !== false, // Default to true if not specified
        } as PostMatter
    }
}

export function getAllPosts(type: 'blog' | 'changelog'): Post[] {
    const slugs = getPostSlugs(type)
    const posts = slugs
        .map((slug) => getPostBySlug(type, slug))
        .filter((post): post is Post => post !== null && (post.matter.published ?? false))
        .sort((a, b) => (new Date(b.matter.date).getTime() - new Date(a.matter.date).getTime()))

    return posts
}

export function getPostsByTag(type: 'blog' | 'changelog', tag: string): Post[] {
    const posts = getAllPosts(type)
    return posts.filter((post) => post.matter.tags?.includes(tag))
}

export function getPostsByCategory(type: 'blog' | 'changelog', category: string): Post[] {
    const posts = getAllPosts(type)
    return posts.filter((post) => post.matter.category === category)
}

export function getAllTags(type: 'blog' | 'changelog'): string[] {
    const posts = getAllPosts(type)
    const tagSet = new Set<string>()

    posts.forEach((post) => {
        post.matter.tags?.forEach((tag) => tagSet.add(tag))
    })

    return Array.from(tagSet).sort()
}

export function getAllCategories(type: 'blog' | 'changelog'): string[] {
    const posts = getAllPosts(type)
    const categorySet = new Set<string>()

    posts.forEach((post) => {
        if (post.matter.category) {
            categorySet.add(post.matter.category)
        }
    })

    return Array.from(categorySet).sort()
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}