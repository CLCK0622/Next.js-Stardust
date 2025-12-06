import RSS from 'rss';
import { getSortedPostsData } from '@/lib/posts';
import {siteConfig} from "@/config/site";

export async function GET() {
    const allPosts = getSortedPostsData();

    const feed = new RSS({
        title: siteConfig.title,
        description: siteConfig.description,
        site_url: siteConfig.siteUrl,
        feed_url: `${siteConfig.siteUrl}/rss.xml`,
        language: 'en',
        pubDate: new Date(),
        copyright: `All rights reserved ${new Date().getFullYear()}, ${siteConfig.author}`,
    });

    allPosts.forEach((post) => {
        feed.item({
            title: post.title,
            description: post.description,
            url: `${siteConfig.siteUrl}/blog/${post.id}`,
            date: post.date,
            author: siteConfig.author,
            categories: post.tags || [],
        });
    });

    return new Response(feed.xml({ indent: true }), {
        headers: {
            'Content-Type': 'text/xml',
            'Cache-Control': 's-maxage=60, stale-while-revalidate',
        },
    });
}