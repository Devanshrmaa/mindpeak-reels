import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { SuccessGrid } from '@/components/sections/SuccessGrid';
import { MethodologySection } from '@/components/sections/MethodologySection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <SuccessGrid />
      <MethodologySection />
      <ContactSection />
    </main>
  );
};

export default Index;
