import BlogPostClient from "./BlogPostClient";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const BASE = "https://mindpeakinstitute.com";

/**
 * Blog posts are ISR-rendered on first visit, then cached for 24 hours.
 * Dynamic imports inside the function body prevent the 20MB blogResolver
 * from being bundled at build time — no build-time render.
 *
 * generateStaticParams returning [] is REQUIRED for ISR here: without it the
 * route renders fully dynamic (verified in prod: `cache-control: private,
 * no-store`, x-vercel-cache MISS on every hit), so each request — including
 * every Googlebot crawl across ~370 blog URLs — re-ran the 20MB resolver.
 * With [], paths are still rendered on demand but cached per `revalidate`.
 */
export const dynamicParams = true;
export const revalidate = 86400;

export function generateStaticParams(): Array<{ slug: string }> {
  return [];
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { resolvePostBySlug } = await import("@/lib/blogResolver");
  const post = resolvePostBySlug(slug);
  if (!post) return { title: "Blog | MindPeak Institute" };
  const canonical = `${BASE}/blog/${post.slug}`;
  const ogImage = "https://mindpeakinstitute.com/images/og/coaching.jpg";
  const desc = post.excerpt.slice(0, 155);
  return {
    title: `${post.title} | MindPeak Institute`,
    description: desc,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: post.title,
      description: desc,
      publishedTime: post.publishDate,
      authors: [post.author],
      siteName: "MindPeak Institute",
      locale: "en_IN",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: desc,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  
  // Dynamic import to prevent blogResolver (and its 20MB programmatic content)
  // from being included in the pre-rendered fallback bundle
  const { resolvePostBySlug } = await import("@/lib/blogResolver");
  const post = resolvePostBySlug(slug);
  if (!post) notFound();

  // Serialize: strip icon (React component can't be serialized)
  const serialized = {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    tags: post.tags,
    author: post.author,
    publishDate: post.publishDate,
    readTime: post.readTime,
    content: post.content,
    color: post.color,
  };

  return <BlogPostClient post={serialized} />;
}
