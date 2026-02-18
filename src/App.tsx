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
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundPolicy from "./pages/RefundPolicy";
import LocationPage from "./pages/LocationPage";
import SEOLandingPage from "./pages/SEOLandingPage";
import NotFound from "./pages/NotFound";

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
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            {/* SEO Landing Pages — service, comparison, exam, subject pages */}
            <Route path="/about" element={<SEOLandingPage />} />
            <Route path="/jee-coaching" element={<SEOLandingPage />} />
            <Route path="/neet-coaching" element={<SEOLandingPage />} />
            <Route path="/pricing" element={<SEOLandingPage />} />
            <Route path="/contact" element={<SEOLandingPage />} />
            <Route path="/free-trial" element={<SEOLandingPage />} />
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
            <Route path="/kota-coaching-alternative" element={<SEOLandingPage />} />
            <Route path="/online-vs-offline-jee-coaching" element={<SEOLandingPage />} />
            <Route path="/batch-vs-personal-coaching" element={<SEOLandingPage />} />
            <Route path="/mindpeak-vs-allen" element={<SEOLandingPage />} />
            <Route path="/mindpeak-vs-resonance" element={<SEOLandingPage />} />
            <Route path="/mindpeak-vs-fiitjee" element={<SEOLandingPage />} />
            <Route path="/mindpeak-vs-byju" element={<SEOLandingPage />} />
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
