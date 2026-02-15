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
    <main className="bg-background">
      <Navbar />
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
  );
};

export default Index;
