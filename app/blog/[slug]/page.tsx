import BlogPost from "@/views/BlogPost";
import { resolvePostBySlug } from "@/lib/blogResolver";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = resolvePostBySlug(slug);
  if (!post) return { title: "Blog Post" };
  return {
    title: `${post.title} — MindPeak Blog`,
    description: post.excerpt,
    alternates: { canonical: `https://mindpeakinstitute.com/blog/${slug}` },
    openGraph: { title: post.title, description: post.excerpt, url: `https://mindpeakinstitute.com/blog/${slug}`, siteName: "MindPeak Institute", type: "article" },
  };
}

export default function BlogPostPage() { return <BlogPost />; }
