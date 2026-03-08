import type { Metadata } from "next";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Blog — JEE & NEET Preparation Tips",
  description: "Expert tips and strategies for JEE and NEET preparation. Get study guides, exam strategies, time management tips, and subject-specific advice from our experts.",
  alternates: { canonical: "https://mindpeakinstitute.com/blog" },
};

export default async function BlogPage() {
  // Dynamic import to prevent 20MB programmatic blog content from being in the fallback
  const { getAllPostsSummary } = await import("@/lib/blogResolver");
  const posts = getAllPostsSummary();

  // Only send summaries (no content) to the client
  const { default: BlogClient } = await import("./BlogClient");
  return <BlogClient posts={posts} />;
}
