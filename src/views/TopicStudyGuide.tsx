"use client";

import { usePathname } from 'next/navigation';
import { Navigate } from '@/components/Navigate';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { parseStudyGuideSlug, buildStudyGuide, generateStudyGuideContent } from '@/lib/topicStudyGuides';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from '@/components/RouterLink';
import { useDemoModal } from '@/components/DemoBookingModal';
import { BookOpen, ArrowRight, ChevronRight } from 'lucide-react';

export default function TopicStudyGuide() {
  const pathname = usePathname();
  const slug = pathname.replace(/^\//, '');
  const { openDemoModal } = useDemoModal();

  const info = parseStudyGuideSlug(slug);
  if (!info) return <Navigate to="/" replace />;

  const guide = buildStudyGuide(info);
  const content = generateStudyGuideContent(guide);

  return (
    <>
      <SEOHead
        title={`How to Study ${guide.topicName} for ${guide.exam} — Complete Guide`}
        description={`Learn how to study ${guide.topicName} for ${guide.exam}. Step-by-step plan, resources, common mistakes & practice questions.`}
        canonical={`https://mindpeakinstitute.com/${slug}`}
      />
      <Navbar />

      <main className="min-h-screen bg-background text-foreground">
        {/* Breadcrumbs */}
        <div className="max-w-4xl mx-auto px-4 pt-24 pb-2">
          <nav className="flex items-center gap-1 text-sm text-muted-foreground flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/${guide.exam.toLowerCase()}-coaching`} className="hover:text-primary transition-colors">{guide.exam} Coaching</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={guide.chapterLink} className="hover:text-primary transition-colors">{guide.chapter}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">{guide.topicName}</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 pb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">{guide.exam} {guide.subject} Study Guide</span>
              <h1 className="text-2xl md:text-3xl font-bold">How to Study {guide.topicName} for {guide.exam}</h1>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{guide.difficulty}</span>
            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent-foreground">{guide.weightage} weightage</span>
            <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">{guide.chapter}</span>
          </div>
        </section>

        {/* Content */}
        <article className="max-w-4xl mx-auto px-4 pb-16 prose prose-invert prose-amber max-w-none
          prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground
          prose-table:text-sm prose-th:text-primary prose-td:text-muted-foreground
          prose-a:text-primary hover:prose-a:text-primary/80">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </article>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 pb-20">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
            <h2 className="text-xl font-bold mb-3">Need Help With {guide.topicName}?</h2>
            <p className="text-muted-foreground mb-6">Get a dedicated mentor who will create a personalised study plan for {guide.chapter} — including {guide.topicName}.</p>
            <button onClick={openDemoModal} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
              Book Free Demo <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
