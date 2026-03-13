"use client";

import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/sections/HeroSection';

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

const Index = () => {
  return (
    <>
      <Navbar />

      <ScrollIndicator />
      <main id="main-content" className="bg-background">
        <HeroSection />
        <ProblemSection />
        <DiscoverySection />
        <TransformationTimeline />
        <BeforeAfterSection />
        <ResultSection />
        <SuccessGrid />
        <CourseFlashcards />
        <MethodologySection />
        <FAQSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
