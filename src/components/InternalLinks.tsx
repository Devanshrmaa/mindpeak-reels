import { Link } from '@/components/RouterLink';
import { MapPin, BookOpen, GraduationCap, ArrowRight } from 'lucide-react';
import { allCities } from '@/data/cityData';
import { chapters } from '@/data/chapterData';
import { INDEXABLE_CITY_SLUGS } from '@/lib/indexableCities';

/* ═══════════════════════════════════════════════════════════
   InternalLinks — hub-and-spoke internal linking component.
   Drop this into any page to boost topical authority flow.
   Displays: top city pages + popular chapter pages + hub links.
   ═══════════════════════════════════════════════════════════ */

interface InternalLinksProps {
  /** Current page slug — used to exclude self-link */
  currentSlug?: string;
  /** Show compact or full version */
  variant?: 'compact' | 'full';
}

/* Only link cities whose JEE *and* NEET pages are live and indexable —
   raw tier-1/2 cityData includes cities whose pages now 410 or redirect
   (e.g. /neet-coaching-in-chandigarh), and linking dead pages sitewide
   leaks crawl budget and trust. */
const isLinkableCity = (c: { slug: string }) =>
  INDEXABLE_CITY_SLUGS.has(`jee-coaching-in-${c.slug}`) &&
  INDEXABLE_CITY_SLUGS.has(`neet-coaching-in-${c.slug}`);
const topCities = allCities.filter(c => c.tier === 1 && isLinkableCity(c)).slice(0, 8);
const tier2Cities = allCities.filter(c => c.tier === 2 && isLinkableCity(c)).slice(0, 8);
const popularJEEChapters = chapters.filter(c => c.exam === 'JEE').slice(0, 6);
const popularNEETChapters = chapters.filter(c => c.exam === 'NEET').slice(0, 6);

const hubLinks = [
  { label: 'JEE Coaching Online', to: '/jee-coaching', icon: GraduationCap },
  { label: 'NEET Coaching Online', to: '/neet-coaching', icon: GraduationCap },
  { label: 'Free Trial Class', to: '/free-trial', icon: ArrowRight },
  { label: 'Pricing Plans', to: '/pricing', icon: ArrowRight },
  { label: 'All Courses', to: '/courses', icon: BookOpen },
  { label: 'Contact Us', to: '/contact', icon: ArrowRight },
];

export function InternalLinks({ currentSlug, variant = 'full' }: InternalLinksProps) {
  if (variant === 'compact') {
    return (
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Explore More</h3>
          <div className="flex flex-wrap gap-2">
            {hubLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="px-3 py-1.5 bg-card border rounded-full text-sm hover:border-primary/40 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {topCities.slice(0, 4).map(city => (
              <Link
                key={`jee-${city.slug}`}
                to={`/jee-coaching-in-${city.slug}`}
                className="px-3 py-1.5 bg-card border rounded-full text-sm hover:border-primary/40 hover:text-primary transition-colors"
              >
                JEE {city.city}
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <h2 className="text-2xl font-bold text-center mb-10">
          Explore MindPeak — India's #1 Personalized JEE & NEET Coaching
        </h2>

        {/* Hub Links */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {hubLinks.map(link => {
            const Icon = link.icon;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-medium text-sm hover:bg-primary/20 transition-colors"
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* City Pages Grid */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">JEE & NEET Coaching by City</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
            {[...topCities, ...tier2Cities]
              .filter(c => c.slug !== currentSlug)
              .slice(0, 18)
              .map(city => (
                <div key={city.slug} className="space-y-1">
                  <Link
                    to={`/jee-coaching-in-${city.slug}`}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    JEE Coaching {city.city}
                  </Link>
                  <Link
                    to={`/neet-coaching-in-${city.slug}`}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    NEET Coaching {city.city}
                  </Link>
                </div>
              ))}
          </div>
        </div>

        {/* Chapter Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">JEE Chapter Guides</h3>
            </div>
            <div className="space-y-1">
              {popularJEEChapters
                .filter(c => c.slug !== currentSlug)
                .map(chapter => (
                  <Link
                    key={chapter.slug}
                    to={`/${chapter.slug}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                  >
                    <ArrowRight className="w-3 h-3" />
                    {chapter.chapter} for JEE — {chapter.weightage}
                  </Link>
                ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">NEET Chapter Guides</h3>
            </div>
            <div className="space-y-1">
              {popularNEETChapters
                .filter(c => c.slug !== currentSlug)
                .map(chapter => (
                  <Link
                    key={chapter.slug}
                    to={`/${chapter.slug}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                  >
                    <ArrowRight className="w-3 h-3" />
                    {chapter.chapter} for NEET — {chapter.weightage}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
