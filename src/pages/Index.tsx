import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/storytelling/ProblemSection';
import { DiscoverySection } from '@/components/storytelling/DiscoverySection';
import { TransformationTimeline } from '@/components/storytelling/TransformationTimeline';
import { BeforeAfterSection } from '@/components/storytelling/BeforeAfterSection';
import { ResultSection } from '@/components/storytelling/ResultSection';
import { SuccessGrid } from '@/components/sections/SuccessGrid';
import { CourseFlashcards } from '@/components/sections/CourseFlashcards';
import { MethodologySection } from '@/components/sections/MethodologySection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';

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
