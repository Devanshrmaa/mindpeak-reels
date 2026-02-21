import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { DemoModalProvider } from "@/components/DemoBookingModal";
import { SocialProofPopup } from "@/components/SocialProofPopup";
import { LanguagePopup } from "@/components/LanguagePopup";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ExitIntentModal } from "./components/ExitIntentModal";
import { ErrorBoundary } from "./components/ErrorBoundary";

/* ── Critical: loaded eagerly (homepage) ── */
import Index from "./pages/Index";

/* ── Lazy-loaded routes (code-split) ── */
const Courses = lazy(() => import("./pages/Courses"));
const CourseDetail = lazy(() => import("./pages/CourseDetail"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const LocationPage = lazy(() => import("./pages/LocationPage"));
const SEOLandingPage = lazy(() => import("./pages/SEOLandingPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const JEECoaching = lazy(() => import("./pages/JEECoaching"));
const NEETCoaching = lazy(() => import("./pages/NEETCoaching"));
const FreeTrial = lazy(() => import("./pages/FreeTrial"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));
const KotaAlternative = lazy(() => import("./pages/KotaAlternative"));
const OnlineVsOffline = lazy(() => import("./pages/OnlineVsOffline"));
const ComparisonPage = lazy(() => import("./pages/ComparisonPage"));
const RankPredictor = lazy(() => import("./pages/RankPredictor"));
const StudyPlan = lazy(() => import("./pages/StudyPlan"));
const JEEPracticeHub = lazy(() => import("./pages/JEEPracticeHub"));
const JEEPYQHub = lazy(() => import("./pages/JEEPYQHub"));
const NEETPYQHub = lazy(() => import("./pages/NEETPYQHub"));
const NEETPracticeHub = lazy(() => import("./pages/NEETPracticeHub"));

/* These are needed at route registration time, so import eagerly */
import SubjectPage, { SUBJECT_SLUGS } from "./pages/SubjectPage";
import ChapterPage, { CHAPTER_SLUGS } from "./pages/ChapterPage";
import TopicPage, { TOPIC_PATHS } from "./pages/TopicPage";
import FormulaSheet, { FORMULA_SLUGS } from "./pages/FormulaSheet";
import JEEPracticeQuestion, { PRACTICE_SLUGS } from "./pages/JEEPracticeQuestion";
import JEEPYQQuestion, { PYQ_SLUGS } from "./pages/JEEPYQQuestion";
import NEETPYQQuestion, { NEET_PYQ_SLUGS } from "./pages/NEETPYQQuestion";
import NEETPracticeQuestion, { NEET_PRACTICE_SLUGS } from "./pages/NEETPracticeQuestion";

const queryClient = new QueryClient();

/* Scroll to top on every route change (fixes footer-link issue) */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

/* Minimal loading fallback for lazy routes */
const LazyFallback = () => (
  <div className="min-h-screen bg-[hsl(225,43%,7%)] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <ErrorBoundary>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <GoogleAnalytics />
      <BrowserRouter>
        <ScrollToTop />
        <DemoModalProvider>
          <SocialProofPopup />
          <LanguagePopup />
          <WhatsAppFloat />
          <ExitIntentModal />
          <Suspense fallback={<LazyFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:slug" element={<CourseDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />

            {/* Core Service Pages */}
            <Route path="/jee-coaching" element={<JEECoaching />} />
            <Route path="/neet-coaching" element={<NEETCoaching />} />
            <Route path="/free-trial" element={<FreeTrial />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/study-plan" element={<StudyPlan />} />
            <Route path="/contact" element={<Contact />} />

            {/* SEO Landing Pages — exam, subject, and additional pages */}
            <Route path="/about" element={<SEOLandingPage />} />
            <Route path="/success-stories" element={<SEOLandingPage />} />
            <Route path="/methodology" element={<SEOLandingPage />} />
            <Route path="/mentors" element={<SEOLandingPage />} />
            <Route path="/jee-main-coaching" element={<SEOLandingPage />} />
            <Route path="/jee-advanced-coaching" element={<SEOLandingPage />} />
            <Route path="/neet-ug-coaching" element={<SEOLandingPage />} />
            <Route path="/jee-dropper-coaching" element={<SEOLandingPage />} />
            <Route path="/neet-dropper-coaching" element={<SEOLandingPage />} />
            <Route path="/foundation-coaching" element={<SEOLandingPage />} />
            <Route path="/jee-crash-course" element={<SEOLandingPage />} />
            <Route path="/neet-crash-course" element={<SEOLandingPage />} />
            <Route path="/jee-physics-coaching" element={<SEOLandingPage />} />
            <Route path="/jee-chemistry-coaching" element={<SEOLandingPage />} />
            <Route path="/jee-mathematics-coaching" element={<SEOLandingPage />} />
            <Route path="/neet-biology-coaching" element={<SEOLandingPage />} />
            <Route path="/neet-physics-coaching" element={<SEOLandingPage />} />
            <Route path="/neet-chemistry-coaching" element={<SEOLandingPage />} />
            <Route path="/batch-vs-personal-coaching" element={<SEOLandingPage />} />

            {/* JEE Chapter-Category Pages */}
            <Route path="/jee-physics-mechanics" element={<SEOLandingPage />} />
            <Route path="/jee-physics-electrodynamics" element={<SEOLandingPage />} />
            <Route path="/jee-physics-optics" element={<SEOLandingPage />} />
            <Route path="/jee-physics-thermodynamics" element={<SEOLandingPage />} />
            <Route path="/jee-physics-waves" element={<SEOLandingPage />} />
            <Route path="/jee-chemistry-physical" element={<SEOLandingPage />} />
            <Route path="/jee-chemistry-organic" element={<SEOLandingPage />} />
            <Route path="/jee-chemistry-inorganic" element={<SEOLandingPage />} />
            <Route path="/jee-math-algebra" element={<SEOLandingPage />} />
            <Route path="/jee-math-calculus" element={<SEOLandingPage />} />
            <Route path="/jee-math-trigonometry" element={<SEOLandingPage />} />
            <Route path="/jee-math-geometry" element={<SEOLandingPage />} />

            {/* JEE Practice Hub + Question Pages */}
            <Route path="/jee-practice" element={<JEEPracticeHub />} />
            {PRACTICE_SLUGS.map((slug) => (
              <Route key={slug} path={`/${slug}`} element={<JEEPracticeQuestion />} />
            ))}

            {/* JEE Previous Year Questions Hub + Question Pages */}
            <Route path="/jee-pyq" element={<JEEPYQHub />} />
            {PYQ_SLUGS.map((slug) => (
              <Route key={slug} path={`/${slug}`} element={<JEEPYQQuestion />} />
            ))}

            {/* NEET Practice Hub + Question Pages */}
            <Route path="/neet-practice" element={<NEETPracticeHub />} />
            {NEET_PRACTICE_SLUGS.map((slug) => (
              <Route key={slug} path={`/${slug}`} element={<NEETPracticeQuestion />} />
            ))}

            {/* NEET Previous Year Questions Hub + Question Pages */}
            <Route path="/neet-pyq" element={<NEETPYQHub />} />
            {NEET_PYQ_SLUGS.map((slug) => (
              <Route key={slug} path={`/${slug}`} element={<NEETPYQQuestion />} />
            ))}

            {/* Comparison Pages */}
            <Route path="/kota-coaching-alternative" element={<KotaAlternative />} />
            <Route path="/online-vs-offline-jee-coaching" element={<OnlineVsOffline />} />
            <Route path="/mindpeak-vs-allen" element={<ComparisonPage />} />
            <Route path="/mindpeak-vs-resonance" element={<ComparisonPage />} />
            <Route path="/mindpeak-vs-fiitjee" element={<ComparisonPage />} />
            <Route path="/mindpeak-vs-byjus" element={<ComparisonPage />} />

            {/* Content Cluster Pages — Subject-wise preparation */}
            {SUBJECT_SLUGS.map((slug) => (
              <Route key={slug} path={`/${slug}`} element={<SubjectPage />} />
            ))}

            {/* Free Tools — Rank Predictors */}
            <Route path="/jee-rank-predictor" element={<RankPredictor />} />
            <Route path="/neet-rank-predictor" element={<RankPredictor />} />

            {/* Formula Sheets — gated PDF downloads */}
            {FORMULA_SLUGS.map((slug) => (
              <Route key={slug} path={`/${slug}`} element={<FormulaSheet />} />
            ))}

            {/* Chapter-wise SEO pages — JEE/NEET chapters */}
            {CHAPTER_SLUGS.map((slug) => (
              <Route key={slug} path={`/${slug}`} element={<ChapterPage />} />
            ))}

            {/* Topic-level SEO pages — sub-topics within each chapter */}
            {TOPIC_PATHS.map((path) => (
              <Route key={path} path={`/${path}`} element={<TopicPage />} />
            ))}

            {/* Location Pages — SEO city pages for JEE/NEET */}
            <Route path="/:slug" element={<LocationPage />} />
            {/* Redirect old/invalid nested routes like /hi/booking to homepage */}
            <Route path="/:slug/:subpath" element={<Navigate to="/" replace />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          </Suspense>
        </DemoModalProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
