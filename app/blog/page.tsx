import Blog from "@/views/Blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — JEE & NEET Preparation Tips",
  description: "Expert tips and strategies for JEE and NEET preparation. Get study guides, exam strategies, time management tips, and subject-specific advice from our experts.",
  alternates: { canonical: "https://mindpeakinstitute.com/blog" },
};
export default function BlogPage() { return <Blog />; }
