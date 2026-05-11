"use client";

import { Phone, CheckCircle, MapPin, BookOpen, Target, Users, Award, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

const HP_EXAM_CENTERS = [
  { city: "Dharamshala", district: "Kangra", centers: ["Govt Degree College Dharamshala"] },
  { city: "Hamirpur", district: "Hamirpur", centers: ["Govt College Hamirpur"] },
  { city: "Shimla", district: "Shimla", centers: ["Multiple centers — HP University area"] },
  { city: "Mandi", district: "Mandi", centers: ["Govt Degree College Mandi"] },
  { city: "Solan", district: "Solan", centers: ["Govt College Solan"] },
  { city: "Kullu", district: "Kullu", centers: ["Govt College Kullu"] },
];

const STATE_BOARD_GAPS = [
  {
    subject: "Mathematics",
    gap: "HP Board Class 12 Maths omits several JEE-critical topics: 3D Geometry depth, Vector Algebra applications, and advanced Integral Calculus techniques.",
    fix: "MindPeak mentors identify your specific board-to-JEE gaps in the first week via diagnostic assessment and fill them systematically before mock tests begin.",
  },
  {
    subject: "Physics",
    gap: "HP Board covers Mechanics and Electricity but goes lighter on Modern Physics (Photoelectric Effect, Atomic Models) and Waves — which together account for 25–30% of JEE Physics marks.",
    fix: "Your MindPeak Physics mentor creates a bridging module covering every JEE topic missing from HP Board, starting from your current level.",
  },
  {
    subject: "Chemistry",
    gap: "Organic Chemistry depth in HP Board is significantly shallower than JEE requirements. Named reactions, reaction mechanisms, and GOC (General Organic Chemistry) are frequently underprepared.",
    fix: "MindPeak starts with a GOC foundation, builds named reactions systematically, and uses spaced repetition to make Organic Chemistry a scoring subject rather than a fear.",
  },
];

const HP_STUDENT_STORIES = [
  {
    name: "Arjun V.",
    from: "Palampur, Kangra District",
    story:
      "My family couldn't afford to send me to Kota, and the local coaching in Palampur didn't have qualified JEE faculty. I joined MindPeak in Class 11. My mentor figured out in the first week that my Calculus base was weak — something no local teacher had told me. We rebuilt it from scratch.",
    result: "JEE Advanced AIR 2,847. Joined IIT Roorkee — CSE.",
    year: "2025",
  },
  {
    name: "Meera S.",
    from: "Dharamshala, Kangra District",
    story:
      "I was preparing at a local coaching center in Dharamshala. The batch had 60 students and my doubts never got resolved. Switched to MindPeak in January of my Class 12 board year. The daily 1-on-1 sessions let me ask every question without fear.",
    result: "JEE Main 98.4 percentile. Secured NIT Hamirpur — ECE.",
    year: "2025",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://mindpeakinstitute.com/jee-coaching-himachal-pradesh#webpage",
      url: "https://mindpeakinstitute.com/jee-coaching-himachal-pradesh",
      name: "JEE Coaching Himachal Pradesh — 1-on-1 Online | MindPeak Institute",
      description:
        "Personalized online JEE coaching for students in Himachal Pradesh. Expert IIT mentors, no batch classes, 95% success rate. Based in Kangra, serving all of HP.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://mindpeakinstitute.com" },
          { "@type": "ListItem", position: 2, name: "JEE Coaching", item: "https://mindpeakinstitute.com/jee-coaching" },
          {
            "@type": "ListItem",
            position: 3,
            name: "JEE Coaching Himachal Pradesh",
            item: "https://mindpeakinstitute.com/jee-coaching-himachal-pradesh",
          },
        ],
      },
    },
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": "https://mindpeakinstitute.com/#organization",
      name: "MindPeak Institute",
      url: "https://mindpeakinstitute.com",
      telephone: "+91-82194-57704",
      email: "mindpeak@mindpeakinstitute.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Nehran Pukhar, Dehra Gopipur",
        addressLocality: "Dehra Gopipur",
        addressRegion: "Himachal Pradesh",
        postalCode: "177101",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 31.8358,
        longitude: 76.5312,
      },
      areaServed: { "@type": "Country", name: "India" },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "20:00",
        },
      ],
      priceRange: "₹₹",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is online JEE coaching effective for students in Himachal Pradesh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — and for HP students it is often superior to local options. The online 1-on-1 model gives access to IIT/NIT faculty who are not available locally in most HP districts. MindPeak students from Kangra, Hamirpur, Shimla, and Mandi have consistently achieved JEE ranks that outperform what local batch coaching could deliver.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to go to Kota for JEE preparation from Himachal Pradesh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Relocating to Kota costs ₹2–2.5 lakh per year and puts a 15–16 year old alone in an unfamiliar city. MindPeak delivers the same quality of JEE mentorship online — one expert per student, 6 days a week — without you leaving Himachal Pradesh. Our students have achieved AIR 42 in JEE Advanced without going to Kota.",
          },
        },
        {
          "@type": "Question",
          name: "How does MindPeak handle the gap between HP Board and JEE syllabus?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The HP Board syllabus has known gaps versus JEE requirements — particularly in Organic Chemistry, Modern Physics, and advanced Mathematics topics. Every MindPeak student starts with a diagnostic assessment that identifies these exact gaps. Your mentor then fills them systematically before advancing to JEE-level problem-solving.",
          },
        },
        {
          "@type": "Question",
          name: "Where are MindPeak's JEE coaching classes — online or offline?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MindPeak is 100% online, conducted via live 1-on-1 video sessions. The institute is physically based in Dehra Gopipur, Kangra district, Himachal Pradesh, but serves students across all states of India. All you need is a smartphone or laptop and a decent internet connection.",
          },
        },
      ],
    },
  ],
};

export default function JEECoachingHimachalPradesh() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-background text-foreground min-h-screen">
        {/* Hero */}
        <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border/40">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <MapPin className="w-3.5 h-3.5 text-primary/60" strokeWidth={1.5} />
              <span>Based in Dehra Gopipur, Kangra, Himachal Pradesh — Serving all of HP & India</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              JEE Coaching for{" "}
              <span className="text-primary">Himachal Pradesh</span>{" "}
              Students — Without Going to Kota
            </h1>

            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-8 max-w-3xl">
              MindPeak Institute is founded in Kangra, HP — and we know exactly what JEE preparation looks like here.
              Limited local faculty, distance to exam centers, HP Board curriculum gaps, and the pressure to go to Kota.
              We built the alternative: expert 1-on-1 online coaching that delivers IIT-level mentorship from your home in HP.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/free-trial"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display text-sm uppercase tracking-[0.1em] rounded-full hover:bg-primary/90 transition-colors"
              >
                Book Free Trial Class <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+918219457704"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-display text-sm uppercase tracking-[0.1em] rounded-full hover:border-primary hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" /> Call +91 82194 57704
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { stat: "95%", label: "Selection Rate" },
                { stat: "AIR 42", label: "Best JEE Advanced Rank" },
                { stat: "2,300+", label: "Students Coached" },
                { stat: "Kangra, HP", label: "Our Home District" },
              ].map((item) => (
                <div key={item.label} className="border border-border/50 rounded-xl p-4 text-center">
                  <div className="font-display font-bold text-xl sm:text-2xl text-primary mb-1">{item.stat}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The HP Student Problem */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-4">
              The Real Challenge for JEE Aspirants in Himachal Pradesh
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-3xl">
              Students from HP districts like Kangra, Hamirpur, Mandi, Shimla, Kullu, and Solan face a set of
              challenges that students in Delhi or Mumbai simply don't. Here's what we see every year from HP
              students who come to MindPeak.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: Users,
                  title: "No Quality Local Faculty",
                  desc: "Most coaching institutes in HP towns hire faculty with B.Sc. or M.Sc. backgrounds — not IIT/NIT alumni who have actually solved JEE problems. The result: students learn the wrong approach to JEE-level questions.",
                },
                {
                  icon: BookOpen,
                  title: "HP Board Curriculum Gaps",
                  desc: "The HP Board Class 11–12 syllabus is lighter than CBSE in several JEE-critical areas: Organic Chemistry depth, advanced Calculus, and Modern Physics. Students don't know what they don't know — until the first mock test.",
                },
                {
                  icon: MapPin,
                  title: "Distance to Exam Centers",
                  desc: "JEE exam centers in HP are limited to Dharamshala, Hamirpur, Shimla, Mandi, and a few others. Many students travel 2–4 hours on exam day — adding avoidable stress to the most important test of their life.",
                },
                {
                  icon: Target,
                  title: "The Kota Dilemma",
                  desc: "Kota costs ₹2–2.5 lakh per year. Many HP families cannot afford it — or won't send a 15-year-old to live alone 1,500 km away. Those who go often return disillusioned after the batch-coaching reality hits.",
                },
                {
                  icon: Clock,
                  title: "Late Start Due to Awareness",
                  desc: "Many HP students discover the importance of JEE coaching only in Class 12 — a year late. Batch institutes won't accommodate this; their syllabus is already mid-way. 1-on-1 coaching starts from wherever you are.",
                },
                {
                  icon: Award,
                  title: "Underestimating Competition",
                  desc: "JEE is a national exam. Students from Kota, Delhi, and Hyderabad are preparing 8+ hours daily with the best faculty. HP students in batch classes covering state-level content are at a structural disadvantage.",
                },
              ].map((item) => (
                <div key={item.title} className="border border-border/50 rounded-xl p-5 hover:border-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary/70 mb-3" strokeWidth={1.5} />
                  <h3 className="font-display font-semibold text-sm text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HP Board vs JEE Gaps */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border/40 bg-foreground/[0.01]">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-4">
              HP Board to JEE: Subject-Wise Gap Analysis
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-3xl">
              Based on experience coaching hundreds of HP students, here are the most common curriculum gaps —
              and exactly how MindPeak fills them.
            </p>

            <div className="space-y-5">
              {STATE_BOARD_GAPS.map((item) => (
                <div key={item.subject} className="border border-border/50 rounded-xl p-5 sm:p-6">
                  <h3 className="font-display font-bold text-base text-foreground mb-3">
                    {item.subject}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-display uppercase tracking-wider text-muted-foreground/60 mb-2">
                        The Gap
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.gap}</p>
                    </div>
                    <div>
                      <p className="text-xs font-display uppercase tracking-wider text-primary/70 mb-2">
                        How MindPeak Fixes It
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.fix}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JEE Exam Centers in HP */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-4">
              JEE Exam Centers in Himachal Pradesh
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-3xl">
              NTA allocates JEE Main exam centers across HP. While you can request a preferred city,
              final center allotment is subject to availability. Book your admit card early and plan
              your travel well in advance — especially for mountain districts where weather can affect routes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {HP_EXAM_CENTERS.map((center) => (
                <div key={center.city} className="border border-border/50 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary/60 mt-0.5 shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="font-display font-semibold text-sm text-foreground">{center.city}</p>
                      <p className="text-xs text-muted-foreground mb-1">{center.district} District</p>
                      {center.centers.map((c) => (
                        <p key={c} className="text-xs text-muted-foreground/70">{c}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-primary/20 bg-primary/5 rounded-xl p-5">
              <p className="text-sm text-foreground/80 leading-relaxed">
                <strong className="text-foreground">MindPeak Tip for HP Students:</strong> If your town doesn't have
                a JEE center, identify the nearest city (usually Dharamshala or Shimla) and plan your
                accommodation in advance. NTA typically releases center lists 10–15 days before the exam.
                Your MindPeak mentor will help you prepare a travel-day checklist so exam logistics
                never distract from your preparation.
              </p>
            </div>
          </div>
        </section>

        {/* Student Stories from HP */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border/40 bg-foreground/[0.01]">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-10">
              HP Students Who Cracked JEE with MindPeak
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {HP_STUDENT_STORIES.map((story) => (
                <div key={story.name} className="border border-border/50 rounded-xl p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-primary/60" strokeWidth={1.5} />
                    <span className="text-xs text-muted-foreground">{story.from}</span>
                  </div>
                  <blockquote className="text-sm text-muted-foreground leading-relaxed mb-4 italic">
                    "{story.story}"
                  </blockquote>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary/70 mt-0.5 shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-display font-semibold text-foreground">{story.result}</p>
                      <p className="text-xs text-muted-foreground">JEE {story.year}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground/60 mt-3">— {story.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why MindPeak for HP Students */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-10">
              Why MindPeak Works Especially Well for HP Students
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  title: "We're From Here",
                  desc: "MindPeak was founded in Dehra Gopipur, Kangra District. Our founder grew up navigating the same limited local coaching ecosystem that you're dealing with. This isn't a metro-city company that added 'HP' to a landing page — we built MindPeak because we lived this problem.",
                },
                {
                  title: "No Kota Relocation, No Compromise",
                  desc: "You get IIT/NIT faculty, daily live sessions, adaptive curriculum, and unlimited doubt resolution — all from home. The teaching quality matches or exceeds Kota's best institutes, at a fraction of the cost and without removing you from your family and support system during the most stressful years of your life.",
                },
                {
                  title: "HP Board to JEE Bridge Module",
                  desc: "Every new HP student gets a free diagnostic in Week 1 that maps their HP Board preparation against the JEE syllabus. Your mentor creates a personalized bridge module covering every gap before advancing to JEE-level problem-solving. No HP student starts blind.",
                },
                {
                  title: "Flexible Scheduling for Mountain Realities",
                  desc: "Power cuts, weather disruptions, network fluctuations — HP students deal with these. MindPeak sessions can be rescheduled within 12 hours, all sessions are recorded for review, and your mentor works around your local conditions rather than enforcing rigid timetables.",
                },
                {
                  title: "Hindi & English Both Welcome",
                  desc: "HP state board students often think in Hindi during problem-solving. Our mentors are bilingual — if you're more comfortable asking doubts in Hindi, that's perfectly fine. Understanding the concept matters more than the language of delivery.",
                },
                {
                  title: "Parents Stay Informed",
                  desc: "Weekly progress reports go to parents with specifics: which chapters were covered, mock test scores, and the mentor's honest assessment. For HP families who want accountability without a hostel warden, this is it.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <CheckCircle className="w-5 h-5 text-primary/70 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-display font-semibold text-sm text-foreground mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border/40 bg-foreground/[0.01]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-10">
              Frequently Asked Questions — HP Students
            </h2>

            <div className="space-y-5">
              {[
                {
                  q: "Is online JEE coaching effective for students in Himachal Pradesh?",
                  a: "Yes — and for HP students it is often superior to local options. The online 1-on-1 model gives you access to IIT/NIT faculty who simply aren't available in most HP districts. MindPeak students from Kangra, Hamirpur, Shimla, and Mandi have consistently achieved JEE ranks that outperform what local batch coaching could deliver.",
                },
                {
                  q: "Do I need to relocate to Kota for JEE from Himachal Pradesh?",
                  a: "No. Relocating to Kota costs ₹2–2.5 lakh per year and puts a 15–16 year old alone in an unfamiliar city. MindPeak delivers equivalent teaching quality online — one expert per student, 6 days a week. Our students have achieved AIR 42 in JEE Advanced without leaving HP.",
                },
                {
                  q: "What if I have slow internet or frequent power cuts in my area?",
                  a: "This is a real concern in many HP districts and we plan for it. Sessions are conducted at lower video bandwidth if needed, all sessions are recorded and accessible for 30 days, and sessions can be rescheduled with 12 hours' notice. We also recommend offline practice sets that can be completed during network downtime.",
                },
                {
                  q: "I studied HP Board — is it very different from CBSE for JEE?",
                  a: "There are gaps, particularly in Organic Chemistry depth, advanced Calculus, and certain Physics units. But these are fillable gaps — not unfixable disadvantages. Your first week at MindPeak includes a diagnostic that maps exactly where your HP Board preparation stands versus JEE requirements, and your mentor addresses each gap systematically.",
                },
                {
                  q: "Can I join MindPeak in Class 12 if I missed Class 11 coaching?",
                  a: "Yes. Unlike batch institutes that have already covered Class 11 topics, your MindPeak mentor assesses your current level and designs a schedule that covers all JEE-relevant Class 11 content alongside Class 12 — efficiently, without overwhelm. Many of our HP students have joined in Class 12 and achieved strong ranks.",
                },
              ].map((faq) => (
                <div key={faq.q} className="border border-border/50 rounded-xl p-5">
                  <h3 className="font-display font-semibold text-sm text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-4">
              Start Your JEE Journey — From Right Here in HP
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Book a free trial class. Meet your mentor. See what 1-on-1 JEE coaching from a Kangra-founded
              institute feels like. No commitment, no pressure.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <Link
                href="/free-trial"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display text-sm uppercase tracking-[0.1em] rounded-full hover:bg-primary/90 transition-colors"
              >
                Book Free Trial Class <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/918219457704?text=Hello%20MindPeak!%20I%27m%20a%20JEE%20aspirant%20from%20Himachal%20Pradesh%20and%20want%20to%20learn%20more."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-display text-sm uppercase tracking-[0.1em] rounded-full hover:border-primary hover:text-primary transition-colors"
              >
                WhatsApp Us
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary/60" strokeWidth={1.5} />
                Free first class — no payment required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary/60" strokeWidth={1.5} />
                Diagnostic assessment included
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary/60" strokeWidth={1.5} />
                HP Board gap analysis
              </div>
            </div>

            <p className="mt-8 text-xs text-muted-foreground/60">
              MindPeak Institute · Nehran Pukhar, Dehra Gopipur, Kangra, Himachal Pradesh 177101 ·{" "}
              <a href="tel:+918219457704" className="hover:text-primary transition-colors">
                +91 82194 57704
              </a>{" "}
              ·{" "}
              <a href="mailto:mindpeak@mindpeakinstitute.com" className="hover:text-primary transition-colors">
                mindpeak@mindpeakinstitute.com
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
