import { CheckCircle } from 'lucide-react';

interface FeaturedSnippetProps {
  /** The search-query question this answers (matches H2) */
  question: string;
  /** 40-60 word paragraph answer — Google's ideal featured snippet length */
  answer: string;
  /** Optional list items (numbered when ordered=true). */
  bullets?: string[];
  /**
   * Render bullets as a numbered <ol> ("how-to" / "steps" / "tips" intent)
   * instead of a flex checklist. Numbered lists are the preferred format
   * for "how to X" listicle snippets in Google's AI Overview retriever.
   */
  ordered?: boolean;
  /**
   * Optional E-E-A-T closer rendered after the list. Use to add a
   * "In our one-on-one classes..." sentence with a specific number —
   * the pattern that cited competitor pages reliably include.
   */
  authorityNote?: string;
}

/**
 * Semantic featured-snippet block optimised for Google's paragraph /
 * listicle snippet extraction. The H2 carries the literal query phrasing,
 * the immediate <p> is the 40-60 word direct answer, and the list (when
 * present) is rendered as native <ol>/<ul> with readable foreground text
 * so the extractor sees primary-content signals, not muted decoration.
 */
export const FeaturedSnippet = ({ question, answer, bullets, ordered, authorityNote }: FeaturedSnippetProps) => {
  const List = ordered ? 'ol' : 'ul';
  return (
    <section
      className="max-w-3xl mx-auto my-5 sm:my-8 rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-6 md:p-8"
      aria-label="Quick answer"
    >
      <h2 className="font-display font-bold text-foreground text-base sm:text-lg md:text-xl mb-2 sm:mb-3">{question}</h2>
      <p className="text-foreground/85 text-sm sm:text-base leading-relaxed">{answer}</p>

      {bullets && bullets.length > 0 && (
        <List
          className={
            ordered
              ? 'mt-4 list-decimal pl-5 sm:pl-6 space-y-2 marker:text-primary marker:font-semibold'
              : 'mt-4 space-y-2'
          }
        >
          {bullets.map((b, i) => (
            <li
              key={i}
              className={
                ordered
                  ? 'text-sm sm:text-base text-foreground/85 leading-relaxed pl-1'
                  : 'flex items-start gap-2 text-sm sm:text-base text-foreground/85 leading-relaxed'
              }
            >
              {!ordered && <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />}
              <span>{b}</span>
            </li>
          ))}
        </List>
      )}

      {authorityNote && (
        <p className="mt-4 text-foreground/70 text-sm sm:text-base leading-relaxed italic">{authorityNote}</p>
      )}
    </section>
  );
};
