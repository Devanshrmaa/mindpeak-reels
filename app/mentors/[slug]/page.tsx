import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAuthorBySlug, getAllAuthors } from '@/data/authorData';
import AuthorBio from '@/components/AuthorBio';
import { Navbar } from '@/components/sections/Navbar';
import { Link } from '@/components/RouterLink';

const BASE = 'https://mindpeakinstitute.com';

export const revalidate = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllAuthors().map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) return { title: 'Mentor | MindPeak Institute' };
  const canonical = `${BASE}/mentors/${slug}`;
  return {
    title: `${author.name} — ${author.credential} | MindPeak Institute`,
    description: `${author.bio} ${author.experienceYears} years of experience. ${author.studentsMentored}+ students mentored.`,
    alternates: { canonical },
    openGraph: {
      type: 'profile',
      url: canonical,
      title: `${author.name} | JEE/NEET Expert — MindPeak Institute`,
      description: author.bio,
      images: [{ url: `${BASE}/images/logo.jpeg`, width: 400, height: 400 }],
      siteName: 'MindPeak Institute',
    },
    twitter: {
      card: 'summary',
      title: `${author.name} | MindPeak Institute`,
      description: author.bio,
    },
  };
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${BASE}/mentors/${slug}`,
    name: author.name,
    jobTitle: author.credential,
    url: `${BASE}/mentors/${slug}`,
    image: `${BASE}/images/logo.jpeg`,
    description: author.extendedBio,
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: author.institution,
    },
    worksFor: {
      '@type': 'EducationalOrganization',
      '@id': `${BASE}/#organization`,
      name: 'MindPeak Institute',
      url: BASE,
    },
    knowsAbout: [
      ...author.subjects.map(s => ({ '@type': 'Thing', name: s })),
      ...author.exams.map(e => ({ '@type': 'Thing', name: `${e} Coaching` })),
    ],
    hasCredential: author.qualifications.map(q => ({
      '@type': 'EducationalOccupationalCredential',
      name: q,
    })),
    ...(author.linkedIn ? { sameAs: [author.linkedIn] } : {}),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Our Mentors', item: `${BASE}/mentors` },
      { '@type': 'ListItem', position: 3, name: author.name, item: `${BASE}/mentors/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main className="bg-background min-h-screen pt-20 sm:pt-24">
        <div className="max-w-4xl mx-auto px-6 pb-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="py-4 mb-2">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <span>/</span>
              <li><Link to="/mentors" className="hover:text-primary transition-colors">Our Mentors</Link></li>
              <span>/</span>
              <li className="text-foreground">{author.name}</li>
            </ol>
          </nav>

          <AuthorBio slug={slug} variant="full" />

          {/* Back link */}
          <div className="mt-6">
            <Link to="/mentors" className="text-primary hover:underline text-sm flex items-center gap-1">
              ← Back to all mentors
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
