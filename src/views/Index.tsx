"use client";

import dynamic from 'next/dynamic';
import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { ScrollIndicator } from '@/components/ScrollIndicator';

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
      {/* Skip Navigation for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
      >
        Skip to main content
      </a>
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
