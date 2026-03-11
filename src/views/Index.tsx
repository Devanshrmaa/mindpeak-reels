"use client";

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';

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
  const [navVisible, setNavVisible] = useState(false);

  return (
    <>
      {/* Navbar slides in after hero text finishes */}
      <AnimatePresence>
        {navVisible && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Navbar />
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollIndicator />
      <main id="main-content" className="bg-background">
        <HeroSection onReady={() => setNavVisible(true)} />
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
