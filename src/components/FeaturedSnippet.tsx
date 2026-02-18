import { CheckCircle } from 'lucide-react';

interface FeaturedSnippetProps {
  /** The search-query question this answers (matches H2) */
  question: string;
  /** 40-60 word paragraph answer — Google's ideal featured snippet length */
  answer: string;
  /** Optional bullet-list variant for listicle snippets */
  bullets?: string[];
}

/**
 * Semantic featured-snippet block optimised for Google's paragraph /
 * listicle snippet extraction.  Uses clean HTML: <section> → <h2> → <p>
 * (no extra wrappers), which is exactly what the snippet parser expects.
 */
export const FeaturedSnippet = ({ question, answer, bullets }: FeaturedSnippetProps) => (
  <section
    className="max-w-3xl mx-auto my-5 sm:my-8 rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-6 md:p-8"
    aria-label="Quick answer"
  >
    <h2 className="font-display font-bold text-foreground text-base sm:text-lg md:text-xl mb-2 sm:mb-3">{question}</h2>
    <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">{answer}</p>

    {bullets && bullets.length > 0 && (
      <ol className="mt-4 space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
            <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-0.5" />
            <span>{b}</span>
          </li>
        ))}
      </ol>
    )}
  </section>
);
