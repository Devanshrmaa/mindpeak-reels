import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { DemoModalProvider } from "@/components/DemoBookingModal";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Index from "@/views/Index";
import "./index.css";

const queryClient = new QueryClient();

// Lazy-load all views
const Contact = React.lazy(() => import("@/views/Contact"));
const Courses = React.lazy(() => import("@/views/Courses"));
const CourseDetail = React.lazy(() => import("@/views/CourseDetail"));
const Pricing = React.lazy(() => import("@/views/Pricing"));
const FreeTrial = React.lazy(() => import("@/views/FreeTrial"));
const Blog = React.lazy(() => import("@/views/Blog"));
const BlogPost = React.lazy(() => import("@/views/BlogPost"));
const JEECoaching = React.lazy(() => import("@/views/JEECoaching"));
const NEETCoaching = React.lazy(() => import("@/views/NEETCoaching"));
const JEEPracticeHub = React.lazy(() => import("@/views/JEEPracticeHub"));
const JEEPracticeQuestion = React.lazy(() => import("@/views/JEEPracticeQuestion"));
const JEEPYQHub = React.lazy(() => import("@/views/JEEPYQHub"));
const JEEPYQQuestion = React.lazy(() => import("@/views/JEEPYQQuestion"));
const NEETPracticeHub = React.lazy(() => import("@/views/NEETPracticeHub"));
const NEETPracticeQuestion = React.lazy(() => import("@/views/NEETPracticeQuestion"));
const NEETPYQHub = React.lazy(() => import("@/views/NEETPYQHub"));
const NEETPYQQuestion = React.lazy(() => import("@/views/NEETPYQQuestion"));
const RankPredictor = React.lazy(() => import("@/views/RankPredictor"));
const StudyPlan = React.lazy(() => import("@/views/StudyPlan"));
const SubjectPage = React.lazy(() => import("@/views/SubjectPage"));
const ChapterPage = React.lazy(() => import("@/views/ChapterPage"));
const TopicPage = React.lazy(() => import("@/views/TopicPage"));
const FormulaSheet = React.lazy(() => import("@/views/FormulaSheet"));
const QuestionSlugRouter = React.lazy(() => import("@/views/QuestionSlugRouter"));
const ComparisonPage = React.lazy(() => import("@/views/ComparisonPage"));
const KotaAlternative = React.lazy(() => import("@/views/KotaAlternative"));
const OnlineVsOffline = React.lazy(() => import("@/views/OnlineVsOffline"));
const LocationPage = React.lazy(() => import("@/views/LocationPage"));
const SEOLandingPage = React.lazy(() => import("@/views/SEOLandingPage"));
const NotFound = React.lazy(() => import("@/views/NotFound"));
const RefundPolicy = React.lazy(() => import("@/views/RefundPolicy"));
const TermsAndConditions = React.lazy(() => import("@/views/TermsAndConditions"));

const Fallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <DemoModalProvider>
            <BrowserRouter>
              <React.Suspense fallback={<Fallback />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/course/:slug" element={<CourseDetail />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/free-trial" element={<FreeTrial />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/jee-coaching" element={<JEECoaching />} />
                  <Route path="/neet-coaching" element={<NEETCoaching />} />
                  <Route path="/jee-practice" element={<JEEPracticeHub />} />
                  <Route path="/jee-practice/:slug" element={<JEEPracticeQuestion />} />
                  <Route path="/jee-pyq" element={<JEEPYQHub />} />
                  <Route path="/jee-pyq/:slug" element={<JEEPYQQuestion />} />
                  <Route path="/neet-practice" element={<NEETPracticeHub />} />
                  <Route path="/neet-practice/:slug" element={<NEETPracticeQuestion />} />
                  <Route path="/neet-pyq" element={<NEETPYQHub />} />
                  <Route path="/neet-pyq/:slug" element={<NEETPYQQuestion />} />
                  <Route path="/jee-rank-predictor" element={<RankPredictor />} />
                  <Route path="/neet-rank-predictor" element={<RankPredictor />} />
                  <Route path="/study-plan" element={<StudyPlan />} />
                  <Route path="/refund-policy" element={<RefundPolicy />} />
                  <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                  <Route path="/kota-coaching-alternative" element={<KotaAlternative />} />
                  <Route path="/online-vs-offline-jee-coaching" element={<OnlineVsOffline />} />
                  <Route path="/mindpeak-vs-allen" element={<ComparisonPage />} />
                  <Route path="/mindpeak-vs-fiitjee" element={<ComparisonPage />} />
                  <Route path="/mindpeak-vs-byjus" element={<ComparisonPage />} />
                  <Route path="/mindpeak-vs-resonance" element={<ComparisonPage />} />
                  <Route path="*" element={<CatchAllRoute />} />
                </Routes>
              </React.Suspense>
            </BrowserRouter>
          </DemoModalProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

/** Catch-all mirrors the Next.js [...slug] logic */
function CatchAllRoute() {
  return (
    <React.Suspense fallback={<Fallback />}>
      <QuestionSlugRouter />
    </React.Suspense>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
