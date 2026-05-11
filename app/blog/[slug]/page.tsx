import BlogPostClient from "./BlogPostClient";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSourceLastModified } from "@/lib/contentFreshness";

const BASE = "https://mindpeakinstitute.com";

/**
 * Blog posts are ISR-rendered on first visit, then cached for 24 hours.
 * Dynamic imports inside the function body prevent the 20MB blogResolver
 * from being bundled at build time — no generateStaticParams = no build-time render.
 */
export const dynamicParams = true;
export const revalidate = 86400;

type Props = { params: Promise<{ slug: string }> };

/**
 * Resolve `dateModified` for a blog post.
 *
 * Returns the git last-modified date of the data file that owns this post.
 * If a programmatic generator was last touched more recently than the
 * post's stated publishDate, we report the generator commit as the
 * modification date — that's the most honest signal we have without
 * per-post git history (which programmatic posts don't have because
 * they're synthesised at build time).
 */
function resolveDateModified(post: { publishDate: string }): string {
  const candidates = [
    getSourceLastModified('src/data/blogData.ts'),
    getSourceLastModified('src/lib/programmaticBlogs.ts'),
    getSourceLastModified('src/data/chapterData.ts'),
    getSourceLastModified('src/lib/examEventBlogs.ts'),
    post.publishDate,
  ];
  return candidates.sort()[candidates.length - 1];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { resolvePostBySlug } = await import("@/lib/blogResolver");
  const post = resolvePostBySlug(slug);
  if (!post) return { title: "Blog | MindPeak Institute" };
  const canonical = `${BASE}/blog/${post.slug}`;
  const modifiedTime = resolveDateModified(post);
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
      modifiedTime,
      authors: [post.author],
      siteName: "MindPeak Institute",
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

  const dateModified = resolveDateModified(post);
  const canonical = `${BASE}/blog/${post.slug}`;
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt.slice(0, 160),
    datePublished: post.publishDate,
    dateModified,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'EducationalOrganization',
      name: 'MindPeak Institute',
      url: BASE,
      logo: { '@type': 'ImageObject', url: `${BASE}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    url: canonical,
    articleSection: post.category,
    keywords: post.tags.join(', '),
  };

  // Serialize: strip icon (React component can't be serialized)
  const serialized = {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    tags: post.tags,
    author: post.author,
    publishDate: post.publishDate,
    dateModified,
    readTime: post.readTime,
    content: post.content,
    color: post.color,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BlogPostClient post={serialized} />
    </>
  );
}
