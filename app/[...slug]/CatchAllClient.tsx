"use client";

/**
 * CatchAllClient — Client-side slug router (moved from page.tsx).
 *
 * Dispatches to the appropriate page component based on slug patterns.
 */

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { CHAPTER_SLUGS, TOPIC_PATHS } from "@/data/chapterData";
import { SUBJECT_SLUGS } from "@/views/SubjectPage";
import { FORMULA_SLUGS } from "@/views/FormulaSheet";

const SubjectPage = dynamic(() => import("@/views/SubjectPage"), { loading: () => <Spinner /> });
const ChapterPage = dynamic(() => import("@/views/ChapterPage"), { loading: () => <Spinner /> });
const TopicPage = dynamic(() => import("@/views/TopicPage"), { loading: () => <Spinner /> });
const FormulaSheet = dynamic(() => import("@/views/FormulaSheet"), { loading: () => <Spinner /> });
const QuestionSlugRouter = dynamic(() => import("@/views/QuestionSlugRouter"), { loading: () => <Spinner /> });

const Spinner = () => (
  <div className="min-h-screen bg-[hsl(225,43%,7%)] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

function resolve(slug: string): "subject" | "chapter" | "topic" | "formula" | "question" {
  // Two-segment paths → TopicPage
  if (slug.includes("/")) {
    return TOPIC_PATHS.includes(slug) ? "topic" : "question";
  }
  // One-segment — check static arrays first
  if (SUBJECT_SLUGS.includes(slug)) return "subject";
  if (FORMULA_SLUGS.includes(slug)) return "formula";
  if (CHAPTER_SLUGS.includes(slug)) return "chapter";
  return "question";
}

export default function CatchAllClient() {
  const pathname = usePathname();
  const slug = pathname.replace(/^\//, "");
  const resolved = resolve(slug);

  switch (resolved) {
    case "subject":
      return <SubjectPage />;
    case "chapter":
      return <ChapterPage />;
    case "topic":
      return <TopicPage />;
    case "formula":
      return <FormulaSheet />;
    case "question":
      return <QuestionSlugRouter />;
  }
}
