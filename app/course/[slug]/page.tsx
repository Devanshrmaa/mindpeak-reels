import CourseDetail from "@/views/CourseDetail";
import type { Metadata } from "next";
import { getCourseBySlug, courses } from "@/data/coursesData";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  const BASE = "https://mindpeakinstitute.com";
  const url = `${BASE}/course/${slug}`;

  if (!course) {
    return {
      title: "Course Not Found — MindPeak Institute",
      description: "The course you are looking for does not exist.",
      robots: { index: false, follow: true },
    };
  }

  const exam = course.targetExam;
  const title = `${course.name} — ${course.mode} ${exam} Coaching ${CURRENT_EXAM_YEAR} | MindPeak`;
  const description = `${course.description.slice(0, 140)}. Book free demo.`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { "en-IN": url, "x-default": url },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "MindPeak Institute",
      type: "website",
      images: [{ url: `${BASE}/images/hero-bg.jpg`, width: 1200, height: 630 }],
    },
  };
}

export default function CourseDetailPage() {
  return <CourseDetail />;
}
