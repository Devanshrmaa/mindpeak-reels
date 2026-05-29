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
import { getSEOPage } from "@/data/seoPageData";
import { getExamInfoPage } from "@/data/examInfoData";
import { getDifferencePair } from "@/data/differenceBetweenData";
import { IMPORTANT_Q_SLUGS } from "@/views/ImportantQuestionsHub";
import { getCounsellingPage } from "@/data/counsellingData";
import { STATE_HUB_SLUG_SET } from "@/data/stateHubData";

const SubjectPage = dynamic(() => import("@/views/SubjectPage"), { loading: () => <Spinner /> });
const ChapterPage = dynamic(() => import("@/views/ChapterPage"), { loading: () => <Spinner /> });
const TopicPage = dynamic(() => import("@/views/TopicPage"), { loading: () => <Spinner /> });
const FormulaSheet = dynamic(() => import("@/views/FormulaSheet"), { loading: () => <Spinner /> });
const SEOLandingPage = dynamic(() => import("@/views/SEOLandingPage"), { loading: () => <Spinner /> });
const QuestionSlugRouter = dynamic(() => import("@/views/QuestionSlugRouter"), { loading: () => <Spinner /> });
const ExamInfoPage = dynamic(() => import("@/views/ExamInfoPage"), { loading: () => <Spinner /> });
const DifferenceBetweenPage = dynamic(() => import("@/views/DifferenceBetweenPage"), { loading: () => <Spinner /> });
const RevisionNotesPage = dynamic(() => import("@/views/RevisionNotesPage"), { loading: () => <Spinner /> });
const ImportantQuestionsHub = dynamic(() => import("@/views/ImportantQuestionsHub"), { loading: () => <Spinner /> });
const CounsellingGuidePage = dynamic(() => import("@/views/CounsellingGuidePage"), { loading: () => <Spinner /> });
const StateHubPage = dynamic(() => import("@/views/StateHubPage"), { loading: () => <Spinner /> });

const Spinner = () => (
  <div className="min-h-screen bg-[hsl(225,43%,7%)] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

type PageKind = "subject" | "chapter" | "topic" | "formula" | "seo-landing" | "exam-info" | "difference" | "notes" | "important-q" | "counselling" | "state-hub" | "question";

function resolve(slug: string): PageKind {
  // Two-segment paths
  if (slug.includes("/")) {
    // Revision notes: {chapter-slug}/notes
    if (slug.endsWith("/notes") && CHAPTER_SLUGS.includes(slug.replace(/\/notes$/, ""))) return "notes";
    if (TOPIC_PATHS.includes(slug)) return "topic";
    return "question";
  }
  // State regional hubs (e.g. jee-coaching-in-karnataka) — before generic city handling
  if (STATE_HUB_SLUG_SET.has(slug)) return "state-hub";
  // One-segment — check static arrays first
  if (SUBJECT_SLUGS.includes(slug)) return "subject";
  if (FORMULA_SLUGS.includes(slug)) return "formula";
  if (CHAPTER_SLUGS.includes(slug)) return "chapter";
  if (getExamInfoPage(slug)) return "exam-info";
  if (getDifferencePair(slug)) return "difference";
  if (IMPORTANT_Q_SLUGS.includes(slug)) return "important-q";
  if (getCounsellingPage(slug)) return "counselling";
  if (getSEOPage(slug)) return "seo-landing";
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
    case "seo-landing":
      return <SEOLandingPage />;
    case "exam-info":
      return <ExamInfoPage />;
    case "difference":
      return <DifferenceBetweenPage />;
    case "notes":
      return <RevisionNotesPage />;
    case "important-q":
      return <ImportantQuestionsHub />;
    case "counselling":
      return <CounsellingGuidePage />;
    case "state-hub":
      return <StateHubPage />;
    case "question":
      return <QuestionSlugRouter />;
  }
}
