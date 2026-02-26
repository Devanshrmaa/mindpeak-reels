import CourseDetail from "@/views/CourseDetail";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${title} — MindPeak Coaching`,
    description: `Learn more about the ${title} course at MindPeak Institute. Personalized 1-on-1 coaching for JEE & NEET aspirants.`,
    alternates: { canonical: `https://mindpeakinstitute.com/course/${slug}` },
  };
}

export default function CourseDetailPage() { return <CourseDetail />; }
