"use client";

import { Link } from '@/components/RouterLink';
import { ArrowRight } from 'lucide-react';

type PostCategory = 'JEE' | 'NEET' | 'Study Tips' | 'Exam Strategy' | 'General';

const jeeLinks = [
  { to: '/jee-coaching', label: 'JEE 1-on-1 Coaching — Dedicated Mentor', tag: 'Main Course' },
  { to: '/jee-physics-coaching', label: 'JEE Physics Coaching — IIT Alumni Mentor', tag: 'Physics' },
  { to: '/jee-chemistry-coaching', label: 'JEE Chemistry Coaching — Organic & Physical', tag: 'Chemistry' },
  { to: '/jee-mathematics-coaching', label: 'JEE Maths Coaching — Calculus & Algebra', tag: 'Maths' },
  { to: '/jee-practice', label: 'Free JEE Practice Questions', tag: 'Free Tool' },
  { to: '/jee-rank-predictor', label: 'JEE Rank Predictor', tag: 'Free Tool' },
  { to: '/mentors', label: 'Meet Our IIT-Alumni JEE Mentors', tag: 'Team' },
  { to: '/free-trial', label: 'Book a Free Demo Class', tag: 'Try Free' },
];

const neetLinks = [
  { to: '/neet-coaching', label: 'NEET 1-on-1 Coaching — Dedicated Mentor', tag: 'Main Course' },
  { to: '/neet-biology-coaching', label: 'NEET Biology Coaching — NCERT Deep Dive', tag: 'Biology' },
  { to: '/neet-chemistry-coaching', label: 'NEET Chemistry Coaching — Physical & Organic', tag: 'Chemistry' },
  { to: '/neet-physics-coaching', label: 'NEET Physics Coaching — Score 155+', tag: 'Physics' },
  { to: '/neet-practice', label: 'Free NEET Practice Questions', tag: 'Free Tool' },
  { to: '/neet-rank-predictor', label: 'NEET Rank Predictor', tag: 'Free Tool' },
  { to: '/mentors', label: 'Meet Our AIIMS-Alumni NEET Mentors', tag: 'Team' },
  { to: '/free-trial', label: 'Book a Free Demo Class', tag: 'Try Free' },
];

const generalLinks = [
  { to: '/jee-coaching', label: 'JEE Personalized Coaching Program', tag: 'JEE' },
  { to: '/neet-coaching', label: 'NEET Personalized Coaching Program', tag: 'NEET' },
  { to: '/study-plan', label: 'Free Study Plan Generator', tag: 'Free Tool' },
  { to: '/courses', label: 'All Coaching Programs & Pricing', tag: 'Explore' },
  { to: '/mentors', label: 'Meet Our Expert JEE & NEET Mentors', tag: 'Team' },
  { to: '/free-trial', label: 'Book a Free Demo Class', tag: 'Try Free' },
];

export function CourseLinks({ category }: { category: PostCategory }) {
  const links = category === 'JEE' ? jeeLinks : category === 'NEET' ? neetLinks : generalLinks;
  return (
    <div className="rounded-xl border border-border bg-secondary/20 p-5 my-8">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-medium">Related Courses & Tools</p>
      <div className="space-y-2">
        {links.map(l => (
          <Link
            key={l.to}
            to={l.to}
            className="flex items-center justify-between p-3 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{l.tag}</span>
              <span className="text-sm text-foreground group-hover:text-primary transition-colors">{l.label}</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}
