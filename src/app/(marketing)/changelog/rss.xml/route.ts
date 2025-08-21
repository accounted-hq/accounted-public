import { NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/mdx'
import { site } from '@/lib/site-config'

export async function GET() {
  const posts = getAllPosts('changelog')
  
  const rssItems = posts.map((post) => {
    const url = `${site.baseUrl}/changelog/${post.slug}`
    const pubDate = new Date(post.matter.date).toUTCString()
    
    return `
    <item>
      <title><![CDATA[${post.matter.title}]]></title>
      <description><![CDATA[${post.matter.description || post.matter.title}]]></description>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      ${post.matter.category ? `<category><![CDATA[${post.matter.category}]]></category>` : ''}
      ${post.matter.tags ? post.matter.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join('\n      ') : ''}
      <author>noreply@accounted.app (${site.name} Team)</author>
    </item>`
  }).join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title><![CDATA[${site.name} Changelog]]></title>
    <description><![CDATA[Latest updates, features, and improvements to ${site.name}'s accounting platform.]]></description>
    <link>${site.baseUrl}/changelog</link>
    <language>en-US</language>
    <managingEditor>noreply@accounted.app (${site.name} Team)</managingEditor>
    <webMaster>noreply@accounted.app (${site.name} Team)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${site.baseUrl}/changelog/rss.xml" rel="self" type="application/rss+xml"/>
    <generator>${site.name} Marketing Site</generator>
    <ttl>60</ttl>
    <image>
      <url>${site.baseUrl}/logo.png</url>
      <title><![CDATA[${site.name} Changelog]]></title>
      <link>${site.baseUrl}/changelog</link>
      <width>144</width>
      <height>144</height>
    </image>
    ${rssItems}
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}