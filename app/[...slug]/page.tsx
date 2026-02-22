"use client";

/**
 * Catch-all route handler.
 *
 * Matches any path not handled by explicit routes above.
 * Dispatches to the appropriate page component based on slug patterns:
 *   - SUBJECT_SLUGS   → SubjectPage
 *   - FORMULA_SLUGS   → FormulaSheet
 *   - CHAPTER_SLUGS   → ChapterPage
 *   - TOPIC_PATHS     → TopicPage (two-segment paths like chapter/topic)
 *   - Question prefixes → QuestionSlugRouter (JEE/NEET practice + PYQ)
 *   - Location slugs  → LocationPage (via QuestionSlugRouter fallback)
 *   - Anything else    → redirect to /
 */

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";

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

export default function CatchAllPage() {
  const pathname = usePathname();
  const router = useRouter();
  const [resolved, setResolved] = useState<
    "subject" | "chapter" | "topic" | "formula" | "question" | "redirect" | null
  >(null);
  const slugDataRef = useRef<{
    SUBJECT_SLUGS: string[];
    CHAPTER_SLUGS: string[];
    TOPIC_PATHS: string[];
    FORMULA_SLUGS: string[];
  } | null>(null);

  const slug = pathname.replace(/^\//, "");

  useEffect(() => {
    // Lazy-load slug arrays only when needed (avoids importing ~15k lines of data eagerly)
    async function resolve() {
      if (!slugDataRef.current) {
        const [subjectMod, chapterMod, topicMod, formulaMod] = await Promise.all([
          import("@/views/SubjectPage"),
          import("@/data/chapterData"),
          import("@/data/chapterData"),
          import("@/views/FormulaSheet"),
        ]);
        slugDataRef.current = {
          SUBJECT_SLUGS: subjectMod.SUBJECT_SLUGS,
          CHAPTER_SLUGS: chapterMod.CHAPTER_SLUGS,
          TOPIC_PATHS: topicMod.TOPIC_PATHS,
          FORMULA_SLUGS: formulaMod.FORMULA_SLUGS,
        };
      }

      const { SUBJECT_SLUGS, CHAPTER_SLUGS, TOPIC_PATHS, FORMULA_SLUGS } = slugDataRef.current;

      // Two-segment paths → TopicPage
      if (slug.includes("/")) {
        if (TOPIC_PATHS.includes(slug)) {
          setResolved("topic");
        } else {
          router.replace("/");
        }
        return;
      }

      // One-segment paths — check static arrays first
      if (SUBJECT_SLUGS.includes(slug)) {
        setResolved("subject");
      } else if (FORMULA_SLUGS.includes(slug)) {
        setResolved("formula");
      } else if (CHAPTER_SLUGS.includes(slug)) {
        setResolved("chapter");
      } else {
        setResolved("question");
      }
    }
    resolve();
  }, [slug, router]);

  if (resolved === null) {
    return (
      <div className="min-h-screen bg-[hsl(225,43%,7%)] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

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
    case "redirect":
      return null; // router.replace already called
    default:
      return null;
  }
}
