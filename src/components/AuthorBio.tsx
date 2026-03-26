"use client";

/**
 * AuthorBio — E-E-A-T signal component.
 * Displays expert author credentials, experience, and qualifications
 * with Person schema.org markup for Google's Quality Rater guidelines.
 *
 * Usage:
 *   <AuthorBio slug="dr-ananya-sharma" />
 *   <AuthorBio slug="dr-ananya-sharma" variant="compact" />
 */

import { getAuthorBySlug, type Author } from '@/data/authorData';
import { Award, BookOpen, GraduationCap, Users } from 'lucide-react';

interface AuthorBioProps {
  /** Author slug from authorData */
  slug: string;
  /** "full" = extended bio + qualifications, "compact" = short inline byline */
  variant?: 'full' | 'compact';
}

/* ── Compact variant: byline shown in article headers ── */
function CompactBio({ author }: { author: Author }) {
  return (
    <div className="flex items-center gap-4 py-3" itemScope itemType="https://schema.org/Person">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0 text-white font-display font-bold text-sm">
        {author.name.split(' ').map(n => n[0]).join('')}
      </div>
      <div className="min-w-0">
        <p className="text-foreground font-medium text-sm" itemProp="name">{author.name}</p>
        <p className="text-muted-foreground text-xs" itemProp="jobTitle">{author.credential}</p>
        <meta itemProp="worksFor" content="MindPeak Institute" />
      </div>
    </div>
  );
}

/* ── Full variant: shown at article bottom or author page ── */
function FullBio({ author }: { author: Author }) {
  return (
    <aside
      className="rounded-2xl border border-border bg-card/30 p-6 sm:p-8 my-10"
      aria-label={`About the author: ${author.name}`}
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Header */}
      <div className="flex items-start gap-5 mb-6">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0 text-white font-display font-bold text-lg sm:text-xl">
          {author.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h3 className="font-display font-bold text-foreground text-lg" itemProp="name">
            {author.name}
          </h3>
          <p className="text-primary text-sm font-medium" itemProp="jobTitle">
            {author.credential}
          </p>
          <meta itemProp="worksFor" content="MindPeak Institute" />
          <meta itemProp="alumniOf" content={author.institution} />
          {author.linkedIn && (
            <a
              href={author.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
              itemProp="sameAs"
            >
              LinkedIn Profile →
            </a>
          )}
        </div>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <Stat icon={<GraduationCap className="w-4 h-4" />} label="Experience" value={`${author.experienceYears} years`} />
        <Stat icon={<Users className="w-4 h-4" />} label="Students" value={`${author.studentsMentored}+`} />
        <Stat icon={<BookOpen className="w-4 h-4" />} label="Subjects" value={author.subjects.join(', ')} />
        <Stat icon={<Award className="w-4 h-4" />} label="Exams" value={author.exams.join(' & ')} />
      </div>

      {/* Extended bio */}
      <div className="space-y-3 mb-6">
        {author.extendedBio.split('\n\n').map((para, i) => (
          <p key={i} className="text-muted-foreground text-sm leading-relaxed" itemProp={i === 0 ? 'description' : undefined}>
            {para}
          </p>
        ))}
      </div>

      {/* Qualifications */}
      <div className="mb-6">
        <h4 className="font-display font-semibold text-foreground text-sm mb-3">Qualifications & Credentials</h4>
        <ul className="space-y-2">
          {author.qualifications.map((q, i) => (
            <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
              <span className="text-primary mt-0.5">✓</span>
              {q}
            </li>
          ))}
        </ul>
      </div>

      {/* Notable results */}
      <div>
        <h4 className="font-display font-semibold text-foreground text-sm mb-3">Notable Student Results</h4>
        <ul className="space-y-2">
          {author.notableResults.map((r, i) => (
            <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
              <Award className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              {r}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 bg-secondary/30 rounded-lg px-3 py-2">
      <span className="text-primary">{icon}</span>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-foreground text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}

export default function AuthorBio({ slug, variant = 'full' }: AuthorBioProps) {
  const author = getAuthorBySlug(slug);
  if (!author) return null;
  return variant === 'compact' ? <CompactBio author={author} /> : <FullBio author={author} />;
}
