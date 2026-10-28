"use client";

import { Navbar } from '@/components/sections/Navbar';
import { Link } from '@/components/RouterLink';
import { PageFooter } from '@/components/PageFooter';
import { BRAND_FACTS } from '@/data/brandFaqData';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

/** Bump whenever the policy text changes — shown to readers as "Last updated". */
const PRIVACY_POLICY_UPDATED = '29 October 2026';

const EMAIL = BRAND_FACTS.email;
const PHONE = BRAND_FACTS.phone;
const PHONE_HREF = `tel:${PHONE.replace(/\s/g, '')}`;

const sections = [
  { id: 'who-we-are', title: 'Who we are' },
  { id: 'information-we-collect', title: 'Information we collect' },
  { id: 'how-we-use-information', title: 'How we use your information' },
  { id: 'consent', title: 'Consent and withdrawing it' },
  { id: 'children', title: 'Students under 18' },
  { id: 'cookies', title: 'Cookies and browser storage' },
  { id: 'sharing', title: 'Who we share information with' },
  { id: 'storage-transfers', title: 'Where your data is stored' },
  { id: 'retention', title: 'How long we keep it' },
  { id: 'security', title: 'How we protect it' },
  { id: 'your-rights', title: 'Your rights' },
  { id: 'marketing', title: 'Calls, WhatsApp and marketing messages' },
  { id: 'third-party-links', title: 'Third-party websites' },
  { id: 'changes', title: 'Changes to this policy' },
  { id: 'contact', title: 'Contact and grievance officer' },
];

const h2 = 'font-display text-xl font-bold text-foreground mb-3';
const h3 = 'font-display text-base font-semibold text-foreground mt-5 mb-2';
const link = 'text-primary hover:underline';

const Section = ({ id, n, children }: { id: string; n: number; children: React.ReactNode }) => (
  <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28">
    <h2 id={`${id}-title`} className={h2}>
      {n}. {sections[n - 1].title}
    </h2>
    {children}
  </section>
);

const PrivacyPolicy = () => {
  return (
    <>
      <main className="bg-background min-h-screen">
        <Navbar />
        <div className="max-w-3xl mx-auto px-6 pt-28 pb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <h1 className="font-display font-bold text-foreground text-3xl sm:text-4xl mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-8">
            MindPeakInstitute.com · Last updated {PRIVACY_POLICY_UPDATED}
          </p>

          {/* Plain-language summary for parents and students who won't read the full policy */}
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 sm:p-6 mb-10">
            <p className="flex items-center gap-2 font-display font-bold text-foreground mb-3">
              <ShieldCheck className="w-5 h-5 text-primary" aria-hidden /> The short version
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-foreground/90 leading-relaxed">
              <li>We collect only what we need to reply to your enquiry and to teach you — mainly your name, phone number and email.</li>
              <li>We never sell your personal data or share it with other coaching institutes.</li>
              <li>Live classes are recorded so students can revise. We never post a recording publicly without the family&apos;s permission.</li>
              <li>For students under 18, a parent or guardian gives consent and can see, correct or delete the child&apos;s data.</li>
              <li>You can ask us to access, correct or delete your data at any time by emailing <a href={`mailto:${EMAIL}`} className={link}>{EMAIL}</a>.</li>
            </ul>
          </div>

          {/* Table of contents */}
          <nav aria-label="Privacy policy sections" className="mb-12 rounded-xl border border-border bg-card p-5 sm:p-6">
            <p className="font-display font-bold text-foreground text-sm uppercase tracking-[0.12em] mb-3">On this page</p>
            <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm list-decimal pl-5 marker:text-muted-foreground">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-muted-foreground hover:text-primary transition-colors">{s.title}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="max-w-none space-y-10 text-foreground/90 text-sm leading-relaxed">
            <Section id="who-we-are" n={1}>
              <p>
                MindPeak Institute (&quot;MindPeak&quot;, &quot;we&quot;, &quot;us&quot;) is an online coaching institute for JEE, NEET and school
                foundation courses, registered as an MSME ({BRAND_FACTS.udyam}) and based at {BRAND_FACTS.address}.
              </p>
              <p className="mt-3">
                This Privacy Policy explains what personal data we collect when you visit mindpeakinstitute.com, fill in a form, contact us,
                or enrol in our classes; why we collect it; who we share it with; and the choices and rights you have. We process personal
                data in line with India&apos;s Digital Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;) and the Information Technology
                Act, 2000 and the rules made under them. For the purposes of these laws, MindPeak is the &quot;Data Fiduciary&quot; for the data
                described here.
              </p>
              <p className="mt-3">
                This policy should be read together with our{' '}
                <Link to="/terms-and-conditions" className={link}>Terms &amp; Conditions</Link> and{' '}
                <Link to="/refund-policy" className={link}>Refund Policy</Link>.
              </p>
            </Section>

            <Section id="information-we-collect" n={2}>
              <h3 className={h3}>Information you give us</h3>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>Demo-class and enquiry forms:</strong> your name, phone number, email address, the course or exam you are
                  interested in, and any message you write.
                </li>
                <li>
                  <strong>Free resources and practice tests:</strong> when you download a formula sheet or NCERT book, or unlock more
                  practice questions, we ask for your name, phone number and email address.
                </li>
                <li>
                  <strong>Calls, WhatsApp and email:</strong> the details you share when you speak or write to us.
                </li>
                <li>
                  <strong>Enrolment:</strong> the student&apos;s and parent or guardian&apos;s names and contact details, including a
                  WhatsApp number if you opt in to WhatsApp updates, the student&apos;s class, target exam, preferred class timings, and
                  the academic background and goals you share with your mentor, plus the billing details we need to issue invoices.
                </li>
              </ul>

              <h3 className={h3}>Information created while you learn with us</h3>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  Recordings of live 1-on-1 classes, which we keep so the student can revise any session. We will not use a recording
                  publicly (for example, on social media) without permission from the student, or from a parent or guardian if the
                  student is under 18.
                </li>
                <li>Test scores, assignment results, attendance, mentor notes and the weekly progress reports we send to parents.</li>
              </ul>

              <h3 className={h3}>Information collected automatically</h3>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>Usage analytics:</strong> we use Google Analytics to understand how the website is used — pages viewed, time
                  spent, approximate location (city level), device and browser type, and the website that referred you. Analytics loads
                  only after you first interact with a page.
                </li>
                <li>
                  <strong>Advertising measurement:</strong> we use Google Ads conversion tracking to record that a form was submitted after
                  someone clicked one of our ads. This tells us which ads work; it does not send the contents of your form to Google.
                </li>
                <li>
                  <strong>Server logs:</strong> our hosting provider records technical data such as IP address, browser user-agent, the page
                  requested and the time of the request, which we use for security and troubleshooting.
                </li>
              </ul>

              <h3 className={h3}>Payments</h3>
              <p>
                Our website does not collect or store card numbers or bank login details. Fees paid by card or bank transfer are
                processed by your bank or payment provider, and we receive only the information needed to confirm the payment, such as
                the amount, date and transaction reference.
              </p>

              <p className="mt-4">
                We do not ask for sensitive information such as Aadhaar numbers, health records or religious or caste details on our
                website. Please don&apos;t include them in the message box of our forms.
              </p>
            </Section>

            <Section id="how-we-use-information" n={3}>
              <p className="mb-3">We use personal data only for the purposes below:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>To reply to your enquiry and call or WhatsApp you to schedule a free demo class.</li>
                <li>To deliver your classes — matching you with a mentor, scheduling sessions, and sharing recordings and study material.</li>
                <li>To track progress and send parents or guardians weekly progress reports.</li>
                <li>To manage fees, invoices and refunds under our Refund Policy.</li>
                <li>To send service messages such as class reminders, schedule changes and class summaries, including on WhatsApp if you have opted in.</li>
                <li>With your consent, to tell you about new courses, test series or offers (you can opt out at any time).</li>
                <li>To understand how visitors use our website and improve our content, using aggregated analytics.</li>
                <li>To measure how well our advertising works.</li>
                <li>To keep our website and services secure, prevent fraud and misuse, and meet our legal obligations.</li>
              </ul>
            </Section>

            <Section id="consent" n={4}>
              <p>
                We process your personal data on the basis of the consent you give when you submit a form, contact us or enrol, and,
                where the law allows it, for legitimate uses such as complying with a legal obligation. You may withdraw your consent at
                any time by writing to <a href={`mailto:${EMAIL}`} className={link}>{EMAIL}</a>. Withdrawing consent does not affect
                processing that already took place, but we may not be able to continue providing classes that depend on that data.
              </p>
            </Section>

            <Section id="children" n={5}>
              <p>
                Many of our students are school students under 18, who are treated as children under the DPDP Act. We require a parent or
                legal guardian to consent to the collection and use of a child&apos;s personal data, and we expect enquiry forms for
                students under 18 to be filled in by, or with the knowledge of, a parent or guardian. Weekly progress reports and class
                recordings are shared with the parent or guardian.
              </p>
              <p className="mt-3">
                A parent or guardian can ask to see, correct or delete their child&apos;s data at any time. We do not knowingly use a
                child&apos;s personal data for targeted advertising or behavioural profiling. If we learn that we have collected a
                child&apos;s data without the required consent, we will delete it.
              </p>
            </Section>

            <Section id="cookies" n={6}>
              <p className="mb-3">
                Cookies are small files that websites store in your browser. We use a small number of them, plus your browser&apos;s
                local storage, for the purposes below.
              </p>
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">Cookies and browser storage used on mindpeakinstitute.com</caption>
                  <thead className="bg-muted/60 text-foreground">
                    <tr>
                      <th scope="col" className="px-4 py-2.5 font-semibold">What</th>
                      <th scope="col" className="px-4 py-2.5 font-semibold">Why</th>
                      <th scope="col" className="px-4 py-2.5 font-semibold whitespace-nowrap">How long</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-2.5 align-top">Google Analytics cookies (<code>_ga</code>, <code>_ga_*</code>)</td>
                      <td className="px-4 py-2.5 align-top">Count visits and see which pages are useful, without identifying you by name.</td>
                      <td className="px-4 py-2.5 align-top">Up to 2 years</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 align-top">Google Ads cookies (<code>_gcl_*</code>)</td>
                      <td className="px-4 py-2.5 align-top">Measure whether a visit from one of our ads led to a demo booking.</td>
                      <td className="px-4 py-2.5 align-top">Up to 90 days</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 align-top">Theme preference (local storage)</td>
                      <td className="px-4 py-2.5 align-top">Remember whether you chose the light or dark theme.</td>
                      <td className="px-4 py-2.5 align-top">Until you clear it</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 align-top">Practice-test access (local storage)</td>
                      <td className="px-4 py-2.5 align-top">
                        Remember that you have unlocked practice questions, along with the name and phone number you entered, so you are
                        not asked again. This stays on your device.
                      </td>
                      <td className="px-4 py-2.5 align-top">Until you clear it</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2.5 align-top">Pop-up and session flags (local and session storage)</td>
                      <td className="px-4 py-2.5 align-top">Remember that you closed a pop-up so we don&apos;t show it again.</td>
                      <td className="px-4 py-2.5 align-top">Session, or until you clear it</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                You can block or delete cookies and site data in your browser settings; the website will still work. You can also
                install Google&apos;s{' '}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className={link}>
                  Google Analytics opt-out browser add-on
                </a>{' '}
                and manage ad personalisation in{' '}
                <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className={link}>
                  Google&apos;s ad settings
                </a>.
              </p>
            </Section>

            <Section id="sharing" n={7}>
              <p className="mb-3">
                <strong>We do not sell, rent or trade your personal data.</strong> We share it only with:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Your mentor and our support team</strong>, who need it to teach and support you.</li>
                <li>
                  <strong>Service providers who process data on our behalf</strong>, under contract and only for our purposes: Google
                  (Analytics, Ads measurement and Google Workspace, where enquiry form submissions are stored), Vercel (website hosting),
                  the video-conferencing platform used for live classes, WhatsApp (see below), and banks or payment providers for fee
                  collection.
                </li>
                <li>
                  <strong>Frost&amp;co</strong>, our technology provider for the WhatsApp Business Platform, and{' '}
                  <strong>Meta Platforms (WhatsApp)</strong>, which we use to send class summaries and schedule updates to students and
                  parents who have agreed to receive them on WhatsApp. Frost&amp;co processes this data only to deliver these messages on
                  our behalf.
                </li>
                <li>
                  <strong>Government or law-enforcement authorities</strong>, when required by law or a court order, or when necessary
                  to protect the rights, property or safety of our students, staff or others.
                </li>
                <li>
                  <strong>A successor organisation</strong>, if MindPeak is ever merged or acquired, which must continue to protect your
                  data under this policy.
                </li>
              </ul>
            </Section>

            <Section id="storage-transfers" n={8}>
              <p>
                Our service providers may store data on servers located outside India. Where personal data is transferred outside
                India, we do so in accordance with Indian law, including any restrictions notified by the Government of India under the
                DPDP Act.
              </p>
            </Section>

            <Section id="retention" n={9}>
              <p className="mb-3">We keep personal data only for as long as we need it:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Enquiries that don&apos;t lead to enrolment:</strong> up to 24 months after our last contact, or until you ask us to delete them.</li>
                <li><strong>Student records</strong> (progress reports, test results, mentor notes): for the duration of the course and up to 3 years afterwards.</li>
                <li><strong>Class recordings:</strong> for the duration of the course and up to 12 months after it ends.</li>
                <li><strong>Invoices and payment records:</strong> for as long as Indian tax and accounting laws require (generally up to 8 years).</li>
                <li><strong>Analytics data:</strong> up to 14 months, in aggregated form.</li>
              </ul>
              <p className="mt-3">After these periods, data is deleted or anonymised so that it can no longer identify you.</p>
            </Section>

            <Section id="security" n={10}>
              <p>
                Our website is served only over encrypted HTTPS connections. Access to student data is limited to the staff and mentors
                who need it, and we use established providers with strong security practices. No method of transmission or storage is
                completely secure, but we work to protect your data, and if a personal data breach occurs we will inform the affected
                users and the Data Protection Board of India as required by law.
              </p>
            </Section>

            <Section id="your-rights" n={11}>
              <p className="mb-3">Under the DPDP Act, you (or a parent or guardian, for a child) have the right to:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Get a summary of the personal data we hold about you and how we use it.</li>
                <li>Have inaccurate or incomplete data corrected, completed or updated.</li>
                <li>Have your data erased when it is no longer needed, unless we are required by law to keep it.</li>
                <li>Withdraw consent you have given us.</li>
                <li>Have your grievances addressed.</li>
                <li>Nominate another person to exercise these rights on your behalf in the event of death or incapacity.</li>
              </ul>
              <p className="mt-3">
                To make a request, email <a href={`mailto:${EMAIL}`} className={link}>{EMAIL}</a> with the subject &quot;Privacy
                request&quot; from the email address or phone number you registered with. We may need to verify your identity before
                acting on the request, and we aim to respond within 30 days. If you are not satisfied with our response, you may
                complain to the Data Protection Board of India.
              </p>
            </Section>

            <Section id="marketing" n={12}>
              <p>
                When you submit a form, our team may call or WhatsApp you about the demo class you asked for. We send messages about
                new courses or offers only if you have agreed to receive them. You can opt out at any time by replying &quot;STOP&quot; on
                WhatsApp, asking us during a call, or emailing <a href={`mailto:${EMAIL}`} className={link}>{EMAIL}</a>. Enrolled
                students will still receive service messages about their classes.
              </p>
              <p className="mt-3">
                With your consent, we send class summaries and schedule updates to your registered WhatsApp number through the WhatsApp
                Business Platform. Reply STOP to stop these messages and START to resume them.
              </p>
            </Section>

            <Section id="third-party-links" n={13}>
              <p>
                Our website links to other websites and apps, such as YouTube, Instagram, Facebook, LinkedIn, X and WhatsApp, and to
                official exam websites. Their own privacy policies apply when you use them, and we are not responsible for how they
                handle your data.
              </p>
            </Section>

            <Section id="changes" n={14}>
              <p>
                We may update this policy as our services or the law change. The &quot;Last updated&quot; date at the top shows when it was
                last revised. If we make a significant change, we will let enrolled students and parents know by email or WhatsApp.
              </p>
            </Section>

            <Section id="contact" n={15}>
              <p className="mb-3">
                For any question, request or complaint about your personal data, contact our Grievance Officer:
              </p>
              <address className="not-italic rounded-xl border border-border bg-card p-5 space-y-1.5">
                <p className="font-semibold text-foreground">Grievance Officer, MindPeak Institute</p>
                <p>{BRAND_FACTS.address}</p>
                <p>
                  Email: <a href={`mailto:${EMAIL}`} className={link}>{EMAIL}</a>
                </p>
                <p>
                  Phone: <a href={PHONE_HREF} className={link}>{PHONE}</a>
                </p>
                <p className="text-muted-foreground">{BRAND_FACTS.hours}</p>
              </address>
              <p className="mt-3">We aim to resolve grievances within 30 days of receiving them.</p>
            </Section>
          </div>
        </div>
      </main>
      <PageFooter />
    </>
  );
};

export default PrivacyPolicy;
