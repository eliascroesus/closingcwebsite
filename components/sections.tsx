import {
  tools, problem, how, pillars, pricing, guarantee,
  testimonials, audience, closers, finalCta, brand, legal,
} from "@/lib/content";
import { Section, SectionIntro, Heading, Eyebrow, CTA, Check } from "./ui";

/* ---------------- Tool marquee (ref 2: two rows, opposite directions) --------- */

export function Marquee() {
  const row = (dir: "left" | "right") => (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
      <div className={`marquee-track marquee-${dir}`}>
        {[...tools, ...tools].map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex shrink-0 items-center gap-2.5 px-5 py-2 text-sm font-medium text-white/35 sm:px-7 sm:text-base"
          >
            <span aria-hidden className="h-1 w-1 rounded-full bg-accent/50" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="border-y border-hairline bg-s1/40 py-8 sm:py-10">
      <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white/30">
        Your reps plug into the stack you already run
      </p>
      <div className="space-y-3" aria-hidden>
        {row("left")}
        {row("right")}
      </div>
      <p className="sr-only">
        Compatible with {tools.join(", ")}.
      </p>
    </div>
  );
}

/* ---------------- Problem ---------------- */

export function Problem() {
  return (
    <Section id="problem">
      <SectionIntro eyebrow={problem.eyebrow} heading={problem.heading} sub={problem.sub} />
      <div className="mt-9 grid gap-3 sm:mt-11 sm:grid-cols-2">
        {problem.items.map((item) => (
          <div key={item.n} className="card card-hover p-5 sm:p-6">
            <span className="text-[10.5px] font-bold tracking-[0.2em] text-accent/60">
              {item.n}
            </span>
            <h3 className="t-card mt-2.5 text-[16.5px] sm:text-[17.5px]">{item.title}</h3>
            <p className="t-body mt-2 text-[13.5px] text-pretty">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- How it works (vertical timeline) ---------------- */

export function How() {
  return (
    <Section id="how" className="bg-s1/40">
      {/* Two columns so the heading fills the space the steps don't (ref 3's
          pattern). Single column on phones. */}
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="t-eyebrow">{how.eyebrow}</p>
          <Heading parts={how.heading} className="mt-3.5 !text-left" />
          <p className="t-body mt-3.5 max-w-sm text-[14.5px] text-pretty">{how.sub}</p>
          <div className="mt-6 hidden lg:block">
            <CTA>Start With A 30-Minute Intake</CTA>
          </div>
        </div>

        <ol className="relative space-y-3">
          {how.steps.map((step) => (
            <li key={step.n} className="card card-hover flex gap-4 p-5 sm:gap-5 sm:p-6">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/[0.08] text-[11px] font-bold text-accent">
                {step.n}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                  <h3 className="t-card text-[16.5px] sm:text-[17.5px]">{step.title}</h3>
                  <span className="rounded-full border border-accent/25 bg-accent/[0.07] px-2 py-0.5 text-[9.5px] font-semibold uppercase tracking-wider text-accent">
                    {step.time}
                  </span>
                </div>
                <p className="t-body mt-2 text-[13.5px] text-pretty">{step.body}</p>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                  {step.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-1.5 text-[12px] text-white/45">
                      <Check className="h-3 w-3 text-ink-subtle" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-8 flex justify-center lg:hidden">
        <CTA>Start With A 30-Minute Intake</CTA>
      </div>
    </Section>
  );
}

/* ---------------- Three pillars ---------------- */

export function Pillars() {
  return (
    <Section id="pillars">
      <SectionIntro eyebrow={pillars.eyebrow} heading={pillars.heading} sub={pillars.sub} />
      <div className="mt-9 grid gap-3 sm:mt-11 md:grid-cols-3">
        {pillars.items.map((p, i) => (
          <div key={p.title} className="card card-hover flex flex-col p-5 sm:p-6">
            <span className="text-[10.5px] font-bold tracking-[0.2em] text-accent/60">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="t-card mt-2.5 text-[19px] sm:text-xl">{p.title}</h3>
            <p className="t-body mt-2.5 flex-1 text-[13.5px] text-pretty">{p.body}</p>
            <ul className="mt-4 space-y-1.5 border-t border-hairline pt-4">
              {p.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2 text-[12.5px] text-white/55">
                  <Check className="mt-0.5 text-ink-subtle" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Pricing ---------------- */

export function Pricing() {
  return (
    <Section id="pricing" className="bg-s1/30">
      <SectionIntro eyebrow={pricing.eyebrow} heading={pricing.heading} sub={pricing.sub} />

      {/* Commission split */}
      <div className="mt-9 grid gap-3 sm:mt-11 md:grid-cols-3">
        {pricing.split.map((s, i) => (
          <div
            key={s.label}
            className={`card p-5 text-center sm:p-6 ${
              i === 2 ? "border-accent/35 bg-accent/[0.05]" : ""
            }`}
          >
            <p className="text-[12.5px] font-medium text-white/55">{s.label}</p>
            <p className="mt-1.5 text-[34px] font-extrabold leading-none tracking-tight text-accent sm:text-[42px]">
              {s.value}
            </p>
            <p className="t-body mx-auto mt-3 max-w-[26ch] text-[13px]">{s.note}</p>
          </div>
        ))}
      </div>

      {/* Comparison — a real table on tablet+, stacked cards on phones */}
      <div className="card mt-6 overflow-hidden">
        <div className="border-b border-hairline px-6 py-5 sm:px-8">
          <h3 className="t-card text-lg sm:text-xl">{pricing.compare.heading}</h3>
        </div>

        {/* Column headers, tablet and up */}
        <div className="hidden border-b border-hairline sm:grid sm:grid-cols-[1.1fr_1fr_1fr]">
          <div className="px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/30 sm:px-8" />
          <div className="px-4 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35">
            Hiring direct
          </div>
          <div className="bg-accent/[0.05] px-4 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
            ClosingKing
          </div>
        </div>

        <div className="divide-y divide-hairline">
          {pricing.compare.rows.map((row) => (
            <div key={row.label} className="sm:grid sm:grid-cols-[1.1fr_1fr_1fr] sm:items-stretch">
              <div className="px-6 pb-2 pt-5 text-[13px] font-semibold text-white/80 sm:flex sm:items-center sm:px-8 sm:py-4 sm:font-medium sm:text-white/60">
                {row.label}
              </div>
              <div className="flex items-center gap-2 px-6 py-1.5 text-[13.5px] text-white/45 sm:px-4 sm:py-4">
                <span aria-hidden className="text-white/25 sm:hidden">✕</span>
                <span className="line-through decoration-white/20 sm:no-underline">
                  {row.old}
                </span>
              </div>
              <div className="flex items-center gap-2 px-6 pb-5 pt-1.5 text-[13.5px] font-semibold text-white sm:bg-accent/[0.05] sm:px-4 sm:py-4">
                <Check className="text-ink-subtle" />
                <span>{row.ck}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <CTA>{pricing.cta}</CTA>
      </div>
    </Section>
  );
}

/* ---------------- Swap guarantee ---------------- */

export function Guarantee() {
  return (
    <Section id="guarantee">
      <div className="card relative overflow-hidden !rounded-2xl p-7 sm:!rounded-3xl sm:p-12 lg:p-16">
        <div aria-hidden className="bloom -right-24 -top-24 h-72 w-72" />
        <div className="relative grid items-center gap-9 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="t-eyebrow">{guarantee.eyebrow}</p>
            <Heading parts={guarantee.heading} className="mt-4 !text-left" />
            <p className="t-body mt-5 text-[15px] text-pretty sm:text-base">
              {guarantee.body}
            </p>
          </div>
          <ul className="space-y-3">
            {guarantee.points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-xl border border-hairline bg-white/[0.02] p-4"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                  <Check className="h-3 w-3 text-ink-subtle" />
                </span>
                <span className="text-[14px] text-white/75">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Testimonials ---------------- */

export function Testimonials() {
  if (!testimonials.length) return null;
  return (
    <Section id="results" className="bg-s1/30">
      <SectionIntro
        eyebrow="Client results"
        heading={{ pre: "What Offer Owners", accent: "Say", post: "" }}
      />
      {/* Swipe carousel on phones, grid from tablet up */}
      <div className="mt-9 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 sm:mt-11 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {testimonials.map((t, i) => (
          <figure
            key={i}
            className="card card-hover flex w-[82vw] shrink-0 snap-center flex-col p-6 sm:w-auto"
          >
            <div aria-hidden className="flex gap-0.5 text-accent">
              {Array.from({ length: 5 }).map((_, s) => (
                <svg key={s} viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor">
                  <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                </svg>
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-[14.5px] leading-relaxed text-white/80 text-pretty">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-hairline pt-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-[13px] font-bold text-accent">
                {t.name.trim().charAt(0)}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-[13px] font-semibold">{t.name}</span>
                <span className="block truncate text-[12px] text-white/40">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-6 text-center text-[11.5px] text-white/25 sm:hidden">
        Swipe to see more →
      </p>
    </Section>
  );
}

/* ---------------- Who it's for ---------------- */

export function Audience() {
  return (
    <Section id="audience">
      <SectionIntro eyebrow={audience.eyebrow} heading={audience.heading} sub={audience.sub} />
      {/* 2 cols on phones — a 9-item single column is dead scroll */}
      <div className="mt-9 grid grid-cols-2 gap-3 sm:mt-11 lg:grid-cols-3">
        {audience.items.map((a) => (
          <div key={a.title} className="card card-hover p-4 sm:p-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/12">
              <Check className="h-4 w-4 text-ink-subtle" />
            </div>
            <h3 className="mt-3.5 text-[14px] font-bold leading-snug tracking-tight sm:text-base">
              {a.title}
            </h3>
            <p className="mt-1.5 text-[12.5px] leading-snug text-white/45 sm:text-[13px]">
              {a.body}
            </p>
          </div>
        ))}
      </div>

      <div className="card mx-auto mt-6 max-w-3xl border-white/[0.06] p-6 text-center">
        <h3 className="text-[15px] font-bold">{audience.notFor.title}</h3>
        <p className="t-body mx-auto mt-2 max-w-xl text-[13.5px] text-pretty">
          {audience.notFor.body}
        </p>
      </div>
    </Section>
  );
}

/* ---------------- For closers (secondary audience) ---------------- */

export function ForClosers() {
  return (
    <Section id="closers" className="bg-s1/30">
      <div className="card relative overflow-hidden !rounded-2xl p-7 sm:!rounded-3xl sm:p-12">
        <div aria-hidden className="bloom -bottom-20 -left-20 h-64 w-64" />
        <div className="relative grid items-center gap-9 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <div>
            <p className="t-eyebrow">{closers.eyebrow}</p>
            <Heading parts={closers.heading} className="mt-4 !text-left" />
            <p className="t-body mt-5 text-[15px] text-pretty sm:text-base">
              {closers.body}
            </p>
            <div className="mt-7">
              <CTA href="#apply" variant="secondary">
                {closers.cta}
              </CTA>
            </div>
          </div>
          <ul className="space-y-2.5">
            {closers.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[14px] text-white/70">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                  <Check className="h-3 w-3 text-ink-subtle" />
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Final CTA (the one full-bleed contrast break) ------------- */

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-accent px-5 py-20 text-black sm:px-6 sm:py-28 lg:px-8">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:52px_52px]"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="t-section text-balance !text-black">{finalCta.heading}</h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-black/70 text-pretty sm:text-lg">
          {finalCta.sub}
        </p>
        <div className="mt-9 flex flex-col items-center">
          <a
            href="#apply"
            className="btn w-full max-w-sm bg-black !text-base text-white transition-transform hover:-translate-y-0.5 hover:bg-neutral-900 sm:w-auto"
          >
            {finalCta.cta}
          </a>
          <p className="mt-3.5 text-[13px] font-medium text-black/55">{finalCta.note}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

export function Footer() {
  return (
    <footer className="border-t border-hairline px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-9 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="flex items-center gap-2 text-base font-extrabold tracking-tight">
              <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 text-accent" fill="currentColor">
                <path d="M3 8.5l3.4 3L12 4l5.6 7.5 3.4-3-1.7 9.5H4.7L3 8.5zM4.9 20h14.2v1.6H4.9V20z" />
              </svg>
              Closing<span className="text-accent">King</span>
            </p>
            <p className="t-body mt-3 text-[13.5px]">{brand.tagline}</p>
            <a
              href={`mailto:${brand.email}`}
              className="mt-4 inline-block text-[13.5px] text-white/60 underline underline-offset-4 transition-colors hover:text-accent"
            >
              {brand.email}
            </a>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2.5 sm:gap-x-16">
            {[
              { label: "How It Works", href: "#how" },
              { label: "Pricing", href: "#pricing" },
              { label: "Calculator", href: "#calculator" },
              { label: "Results", href: "#results" },
              { label: "For Closers", href: "#closers" },
              { label: "FAQ", href: "#faq" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13.5px] text-white/50 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-hairline pt-7">
          <p className="text-[11px] leading-relaxed text-white/25 text-pretty">
            {legal.disclaimer}
          </p>
          <p className="mt-5 text-[11.5px] text-white/30">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
