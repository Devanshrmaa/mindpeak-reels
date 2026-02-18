import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DemoModalProvider } from "@/components/DemoBookingModal";
import { SocialProofPopup } from "@/components/SocialProofPopup";
import { LanguagePopup } from "@/components/LanguagePopup";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundPolicy from "./pages/RefundPolicy";
import LocationPage from "./pages/LocationPage";
import SEOLandingPage from "./pages/SEOLandingPage";
import NotFound from "./pages/NotFound";
import JEECoaching from "./pages/JEECoaching";
import NEETCoaching from "./pages/NEETCoaching";
import FreeTrial from "./pages/FreeTrial";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import KotaAlternative from "./pages/KotaAlternative";
import OnlineVsOffline from "./pages/OnlineVsOffline";
import ComparisonPage from "./pages/ComparisonPage";
import SubjectPage, { SUBJECT_SLUGS } from "./pages/SubjectPage";
import ChapterPage, { CHAPTER_SLUGS } from "./pages/ChapterPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <GoogleAnalytics />
      <BrowserRouter>
        <DemoModalProvider>
          <SocialProofPopup />
          <LanguagePopup />
          <WhatsAppFloat />
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
            <Route path="/contact" element={<Contact />} />

            {/* SEO Landing Pages — exam, subject, and additional pages */}
            <Route path="/about" element={<SEOLandingPage />} />
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

            {/* Chapter-wise SEO pages — JEE/NEET chapters */}
            {CHAPTER_SLUGS.map((slug) => (
              <Route key={slug} path={`/${slug}`} element={<ChapterPage />} />
            ))}

            {/* Location Pages — SEO city pages for JEE/NEET */}
            <Route path="/:slug" element={<LocationPage />} />
            {/* Redirect old/invalid nested routes like /hi/booking to homepage */}
            <Route path="/:slug/:subpath" element={<Navigate to="/" replace />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </DemoModalProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
