import { resolvePostBySlug } from "@/lib/blogResolver";
import BlogPostClient from "./BlogPostClient";
import { notFound } from "next/navigation";

/** Force dynamic — avoids 20MB ISR fallback */
export const dynamic = 'force-dynamic';

type Props = { params: Promise<{ slug: string }> };

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
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
