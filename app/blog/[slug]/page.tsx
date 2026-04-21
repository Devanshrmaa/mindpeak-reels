import BlogPostClient from "./BlogPostClient";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAuthorForSubject } from "@/data/authorData";

const BASE = "https://mindpeakinstitute.com";

/**
 * Blog posts are ISR-rendered on first visit, then cached for 24 hours.
 * Dynamic imports inside the function body prevent the 20MB blogResolver
 * from being bundled at build time — no generateStaticParams = no build-time render.
 */
export const dynamicParams = true;
export const revalidate = 86400;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { resolvePostBySlug } = await import("@/lib/blogResolver");
  const post = resolvePostBySlug(slug);
  if (!post) return { title: "Blog | MindPeak Institute" };
  const canonical = `${BASE}/blog/${post.slug}`;

  // Resolve expert author the same way BlogPost.tsx does
  const tags = post.tags.map((t: string) => t.toLowerCase());
  const isNEET = post.category === 'NEET' || tags.includes('neet');
  const exam: 'JEE' | 'NEET' = isNEET ? 'NEET' : 'JEE';
  const subject = tags.includes('biology') ? 'Biology'
    : tags.includes('chemistry') ? 'Chemistry'
    : tags.includes('mathematics') || tags.includes('maths') ? 'Mathematics'
    : tags.includes('physics') ? 'Physics'
    : isNEET ? 'Biology' : 'Physics';
  const expertAuthor = getAuthorForSubject(exam, subject);

  return {
    title: `${post.title} | MindPeak Institute`,
    description: post.excerpt.slice(0, 160),
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: post.title,
      description: post.excerpt.slice(0, 160),
      publishedTime: post.publishDate,
      modifiedTime: post.publishDate,
      authors: [expertAuthor.name],
      images: [{ url: `${BASE}/hero-bg.jpg`, width: 1200, height: 630 }],
      siteName: "MindPeak Institute",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt.slice(0, 155),
      images: [`${BASE}/hero-bg.jpg`],
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
