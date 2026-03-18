"use client";

import dynamic from 'next/dynamic';
import { useEffect, useState, type ReactNode } from 'react';

/*
 * Navbar imports framer-motion at module level.  Lazy-loading it keeps
 * framer-motion OUT of the initial JS bundle, reducing main-thread parse
 * time on mobile and improving TBT / LCP.
 */
const Navbar = dynamic(
  () => import('@/components/sections/Navbar').then(m => ({ default: m.Navbar })),
  { ssr: true }
);

/* ScrollIndicator is a heavy framer-motion component — defer to idle */
const ScrollIndicator = dynamic(
  () => import('@/components/ScrollIndicator').then(m => ({ default: m.ScrollIndicator })),
  { ssr: false }
);

const ProblemSection = dynamic(() => import('@/components/storytelling/ProblemSection').then(m => ({ default: m.ProblemSection })), { ssr: false });
const DiscoverySection = dynamic(() => import('@/components/storytelling/DiscoverySection').then(m => ({ default: m.DiscoverySection })), { ssr: false });
const TransformationTimeline = dynamic(() => import('@/components/storytelling/TransformationTimeline').then(m => ({ default: m.TransformationTimeline })), { ssr: false });
const BeforeAfterSection = dynamic(() => import('@/components/storytelling/BeforeAfterSection').then(m => ({ default: m.BeforeAfterSection })), { ssr: false });
const ResultSection = dynamic(() => import('@/components/storytelling/ResultSection').then(m => ({ default: m.ResultSection })), { ssr: false });
const SuccessGrid = dynamic(() => import('@/components/sections/SuccessGrid').then(m => ({ default: m.SuccessGrid })), { ssr: false });
const CourseFlashcards = dynamic(() => import('@/components/sections/CourseFlashcards').then(m => ({ default: m.CourseFlashcards })), { ssr: false });
const MethodologySection = dynamic(() => import('@/components/sections/MethodologySection').then(m => ({ default: m.MethodologySection })), { ssr: false });
const FAQSection = dynamic(() => import('@/components/sections/FAQSection').then(m => ({ default: m.FAQSection })), { ssr: false });
const ContactSection = dynamic(() => import('@/components/sections/ContactSection').then(m => ({ default: m.ContactSection })), { ssr: false });
const StatsSection = dynamic(() => import('@/components/sections/StatsSection').then(m => ({ default: m.StatsSection })), { ssr: false });

const Index = ({ children }: { children?: ReactNode }) => {
  const [showDeferredSections, setShowDeferredSections] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if ('requestIdleCallback' in window) {
      const idleId = requestIdleCallback(() => setShowDeferredSections(true), { timeout: 1800 });
      return () => cancelIdleCallback(idleId);
    }

    const timeoutId = setTimeout(() => setShowDeferredSections(true), 1200);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Navbar />

      <main id="main-content" className="bg-background">
        {children}
        {showDeferredSections ? (
          <div
            style={{
              contentVisibility: 'auto',
              containIntrinsicSize: '3000px',
              contain: 'layout style paint',
            }}
          >
            <ProblemSection />
            <DiscoverySection />
            <TransformationTimeline />
            <BeforeAfterSection />
            <ResultSection />
            <StatsSection />
            <SuccessGrid />
            <CourseFlashcards />
            <MethodologySection />
            <FAQSection />
            <ContactSection />
          </div>
        ) : null}
      </main>
      {/* ScrollIndicator uses framer-motion (useScroll/useSpring/motion) —
          defer until idle to keep framer-motion out of the initial JS bundle */}
      {showDeferredSections && <ScrollIndicator />}
    </>
  );
};

export default Index;
