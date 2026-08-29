import {
  tools, how, pricing, guarantee, testimonials,
  audience, closers, finalCta, brand, legal,
} from "@/lib/content";
import { Section, SectionIntro, Heading, CTA, Check } from "./ui";

/* ---------------- Tool marquee — two rows, opposite directions ------------- */

export function Marquee() {
  const row = (dir: "left" | "right") => (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_14%,#000_86%,transparent)]">
      <div className={`marquee-track marquee-${dir}`}>
        {[...tools, ...tools].map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex shrink-0 items-center gap-2.5 px-6 py-2 text-[14px] text-ink-tertiary"
          >
            <span aria-hidden className="h-1 w-1 rounded-full bg-hairline-strong" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="border-y border-hairline py-7">
      <p className="t-eyebrow mb-5 text-center">Works with your existing stack</p>
      <div className="space-y-2" aria-hidden>
        {row("left")}
        {row("right")}
      </div>
      <p className="sr-only">Compatible with {tools.join(", ")}.</p>
    </div>
  );
}

/* ---------------- 1. What it costs ---------------- */

export function Pricing() {
  return (
    <Section id="pricing">
      <SectionIntro eyebrow={pricing.eyebrow} heading={pricing.heading} sub={pricing.sub} />

      <div className="mt-9 grid gap-3 md:grid-cols-3">
        {pricing.split.map((s, i) => (
          <div
            key={s.label}
            className={`card p-5 text-center ${i === 2 ? "border-accent/35 bg-s2" : ""}`}
          >
            <p className="text-[12.5px] text-ink-subtle">{s.label}</p>
            <p className="t-stat mt-1.5 text-accent">{s.value}</p>
            <p className="mt-2 text-[12.5px] text-ink-subtle">{s.note}</p>
          </div>
        ))}
      </div>

      <div className="card mt-3 overflow-hidden">
        <div className="border-b border-hairline px-5 py-4 sm:px-7">
          <h3 className="t-card">{pricing.compare.heading}</h3>
        </div>

        <div className="hidden border-b border-hairline sm:grid sm:grid-cols-[1.1fr_1fr_1fr]">
          <div className="px-5 py-3 sm:px-7" />
          <div className="t-eyebrow px-4 py-3">Hiring direct</div>
          <div className="t-eyebrow bg-s2 px-4 py-3 !text-ink">ClosingKing</div>
        </div>

        <div className="divide-y divide-hairline">
          {pricing.compare.rows.map((row) => (
            <div key={row.label} className="sm:grid sm:grid-cols-[1.1fr_1fr_1fr] sm:items-stretch">
              <div className="px-5 pb-1.5 pt-4 text-[13px] font-medium text-ink sm:flex sm:items-center sm:px-7 sm:py-3.5 sm:font-normal sm:text-ink-muted">
                {row.label}
              </div>
              <div className="flex items-center px-5 py-1 text-[13px] text-ink-tertiary line-through decoration-ink-tertiary/40 sm:px-4 sm:py-3.5 sm:no-underline">
                {row.old}
              </div>
              <div className="flex items-center gap-2 px-5 pb-4 pt-1 text-[13px] font-medium text-ink sm:bg-s2 sm:px-4 sm:py-3.5">
                <Check className="text-ink-subtle" />
                {row.ck}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <CTA>{pricing.cta}</CTA>
      </div>
    </Section>
  );
}

/* ---------------- 2. Does it work ---------------- */

export function Testimonials() {
  if (!testimonials.length) return null;
  return (
    <Section id="results" className="bg-s1/40">
      <SectionIntro
        eyebrow="Client results"
        heading={{ pre: "What Clients", accent: "Say", post: "" }}
      />
      <div className="mt-9 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {testimonials.map((t, i) => (
          <figure key={i} className="card card-hover flex w-[80vw] shrink-0 snap-center flex-col p-5 sm:w-auto">
            <blockquote className="flex-1 text-[13.5px] leading-relaxed text-ink-muted text-pretty">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-2.5 border-t border-hairline pt-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-s3 text-[12px] font-medium text-ink-subtle">
                {t.name.trim().charAt(0)}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-[12.5px] font-medium">{t.name}</span>
                <span className="block truncate text-[11.5px] text-ink-subtle">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- 3. How it works ---------------- */

export function How() {
  return (
    <Section id="how">
      <div className="grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionIntro eyebrow={how.eyebrow} heading={how.heading} sub={how.sub} />
          <div className="mt-6 hidden lg:block">
            <CTA>Book A 30-Minute Intake</CTA>
          </div>
        </div>

        <ol className="space-y-2.5">
          {how.steps.map((step) => (
            <li key={step.n} className="card card-hover flex items-start gap-4 p-5">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-s3 font-mono text-[11px] text-ink-subtle">
                {step.n}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                  <h3 className="t-card">{step.title}</h3>
                  <span className="rounded-md bg-s3 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-subtle">
                    {step.time}
                  </span>
                </div>
                <p className="t-body mt-1.5 text-[13.5px] text-pretty">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-8 flex justify-center lg:hidden">
        <CTA>Book A 30-Minute Intake</CTA>
      </div>
    </Section>
  );
}

/* ---------------- 4. Risk reversal ---------------- */

export function Guarantee() {
  return (
    <Section id="guarantee" tight>
      <div className="card grid items-center gap-7 p-6 sm:p-9 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className="t-eyebrow">{guarantee.eyebrow}</p>
          <Heading parts={guarantee.heading} className="mt-3.5 !text-left" />
          <p className="t-body mt-3.5 text-[14.5px] text-pretty">{guarantee.body}</p>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2">
          {guarantee.points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 rounded-lg bg-s2 p-3.5 text-[13px] text-ink-muted">
              <Check className="mt-0.5 text-ink-subtle" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ---------------- 6. Who it's for ---------------- */

export function Audience() {
  return (
    <Section id="audience">
      <SectionIntro eyebrow={audience.eyebrow} heading={audience.heading} sub={audience.sub} />
      <div className="mt-9 grid grid-cols-2 gap-2.5 lg:grid-cols-3">
        {audience.items.map((a) => (
          <div key={a.title} className="card card-hover p-4">
            <h3 className="text-[13.5px] font-semibold leading-snug tracking-tight">{a.title}</h3>
            <p className="mt-1 text-[12px] leading-snug text-ink-subtle">{a.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-xl border border-dashed border-hairline-strong p-5 text-center">
        <h3 className="text-[13.5px] font-semibold">{audience.notFor.title}</h3>
        <p className="t-body mx-auto mt-1.5 max-w-lg text-[13px] text-pretty">
          {audience.notFor.body}
        </p>
      </div>
    </Section>
  );
}

/* ---------------- For closers (secondary audience) ---------------- */

export function ForClosers() {
  return (
    <Section id="closers" tight>
      <div className="card flex flex-col items-start gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="max-w-xl">
          <p className="t-eyebrow">{closers.eyebrow}</p>
          <Heading parts={closers.heading} className="mt-3 !text-left !text-[1.5rem]" />
          <p className="t-body mt-2.5 text-[13.5px] text-pretty">{closers.body}</p>
        </div>
        <CTA href="#apply" variant="secondary" className="shrink-0">
          {closers.cta}
        </CTA>
      </div>
    </Section>
  );
}

/* ---------------- Closing CTA ---------------- */

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-y border-hairline px-5 py-20 sm:px-6 sm:py-24">
      <div aria-hidden className="bloom left-1/2 top-full h-[26rem] w-[42rem] -translate-x-1/2 -translate-y-1/2" />
      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="t-section text-balance">{finalCta.heading}</h2>
        <p className="t-body mx-auto mt-4 max-w-md text-[15px] text-pretty">{finalCta.sub}</p>
        <div className="mt-8 flex flex-col items-center">
          <a href="#apply" className="btn btn-primary w-full max-w-xs sm:w-auto">
            {finalCta.cta}
          </a>
          <p className="mt-3 text-[12.5px] text-ink-subtle">{finalCta.note}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

export function Footer() {
  return (
    <footer className="px-5 py-12 sm:px-6">
      <div className="mx-auto max-w-[1080px]">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <p className="flex items-center gap-2 text-[15px] font-semibold tracking-tight">
              <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 text-accent" fill="currentColor">
                <path d="M3 8.5l3.4 3L12 4l5.6 7.5 3.4-3-1.7 9.5H4.7L3 8.5zM4.9 20h14.2v1.6H4.9V20z" />
              </svg>
              Closing<span className="text-accent">King</span>
            </p>
            <p className="t-body mt-2.5 text-[13px]">{brand.tagline}</p>
            <a
              href={`mailto:${brand.email}`}
              className="mt-3 inline-block text-[13px] text-ink-subtle underline underline-offset-4 transition-colors hover:text-ink"
            >
              {brand.email}
            </a>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-2">
            {[
              { label: "Pricing", href: "#pricing" },
              { label: "Results", href: "#results" },
              { label: "How It Works", href: "#how" },
              { label: "Calculator", href: "#calculator" },
              { label: "For Closers", href: "#closers" },
              { label: "FAQ", href: "#faq" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] text-ink-subtle transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-hairline pt-6">
          <p className="text-[11px] leading-relaxed text-ink-tertiary text-pretty">
            {legal.disclaimer}
          </p>
          <p className="mt-4 text-[11.5px] text-ink-tertiary">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
