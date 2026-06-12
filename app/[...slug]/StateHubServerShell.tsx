/**
 * StateHubServerShell — server-rendered content + JSON-LD for the indexable
 * state hub pages (/jee-coaching-in-<state>, /neet-coaching-in-<state>).
 *
 * Renders the FULL page substance (cutoff tables, board-bridge analysis,
 * coaching landscape, FAQs, internal links) from the same
 * buildStateHubModel() the client view uses, so crawlers get every word in
 * the initial HTML without JS execution — and the two can never drift.
 *
 * JSON-LD is emitted here (server) and ONLY here; StateHubPage.tsx must not
 * duplicate it.
 */

import type { StateHub } from "@/data/stateHubData";
import { buildStateHubModel, buildStateHubJsonLd } from "@/lib/stateHubContent";

interface Props {
  exam: "JEE" | "NEET";
  hub: StateHub;
}

export default function StateHubServerShell({ exam, hub }: Props) {
  const m = buildStateHubModel(exam, hub);
  const jsonLd = buildStateHubJsonLd(m);

  return (
    <>
      {jsonLd.map((ld, i) => (
        <script
          key={`state-hub-jsonld-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}
      <div className="sr-only" aria-hidden="true" suppressHydrationWarning>
        <nav aria-label="Breadcrumb">
          <ol>
            <li><a href="/">Home</a></li>
            <li><a href={`/${exam.toLowerCase()}-coaching`}>{exam} Coaching</a></li>
            <li>{m.state}</li>
          </ol>
        </nav>
        <h1>{m.h1}</h1>
        <p>{m.intro}</p>
        <section>
          <h2>{exam} prep built for {m.state} students</h2>
          <p>
            From the {m.board} syllabus to {m.examFull}, with {m.examRoute} handled in one 1-on-1 plan.
          </p>
          {m.stats.map((s) => (
            <p key={s.label}>{s.label}: {s.value}</p>
          ))}
          {m.stateExam && (
            <p>
              {m.stateExam.name}: {m.stateExam.seats}. {m.stateExam.overlap}.
            </p>
          )}
        </section>
        <section>
          <h2>Colleges {m.state} students target — and what they take</h2>
          <ul>
            {m.colleges.map((c) => (
              <li key={c.name}>
                {c.name}
                {c.cutoff ? ` — ${c.cutoff}` : ""}
                {c.branch ? ` (${c.branch})` : ""}
              </li>
            ))}
          </ul>
        </section>
        {m.boardBridge && (
          <section>
            <h2>The {m.board.split(" &")[0]} to {exam} gap, and how we bridge it</h2>
            <p>{m.boardBridge}</p>
          </section>
        )}
        {(m.competition || m.regionalChallenge) && (
          <section>
            <h2>The coaching reality in {m.state}</h2>
            {m.competition && <p>{m.competition}</p>}
            {m.regionalChallenge && <p>{m.regionalChallenge}</p>}
          </section>
        )}
        {m.fact && (
          <section>
            <h2>{m.state} fact every aspirant should know</h2>
            <p>{m.fact}</p>
          </section>
        )}
        {m.career && (
          <section>
            <h2>Where a {m.state} {exam === "JEE" ? "engineering" : "medical"} seat leads</h2>
            <p>{m.career}</p>
          </section>
        )}
        <section>
          <h2>Serving students across {m.state}</h2>
          <p>{m.cities.map((c) => c.name).join(", ")}</p>
          {m.premierInstitutes.length > 0 && (
            <p>Premier institutes in and around {m.state}: {m.premierInstitutes.join(", ")}.</p>
          )}
          <nav>
            {m.cities
              .filter((c) => c.href)
              .map((c) => (
                <a key={c.name} href={c.href}>{exam} coaching in {c.name}</a>
              ))}
          </nav>
        </section>
        <section>
          <h2>{exam} in {m.state}: frequently asked questions</h2>
          <dl>
            {m.faqs.map((f) => (
              <div key={f.q}>
                <dt>{f.q}</dt>
                <dd>{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section>
          <h2>Useful {exam} resources for {m.state} students</h2>
          <nav>
            <a href={m.twin.href}>{m.twin.label}</a>
            {m.related.map((r) => (
              <a key={r.href} href={r.href}>{r.label}</a>
            ))}
            {m.nearbyHubs.map((n) => (
              <a key={n.href} href={n.href}>{n.label}</a>
            ))}
          </nav>
        </section>
      </div>
    </>
  );
}
