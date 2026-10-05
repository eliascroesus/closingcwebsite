import { brand, hero, stats } from "@/lib/content";
import { CalEmbed } from "./cal-embed";

const videoUrl = brand.videoUrl;

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Layered field — see .field-* in globals.css */}
      <div className="field" aria-hidden>
        <div className="field-wash" />
        <div className="field-spot" />
        <div className="field-grain" />
        <div className="field-vignette" />
        <div className="field-fade" />
      </div>

      <div className="relative mx-auto max-w-[1080px] px-5 pb-14 pt-8 sm:px-6 sm:pt-10">
        {/* Wordmark and status share one row so the fold starts higher.
            The nav only arrives on scroll, so this is the only branding here. */}
        <div className="rise flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
          <a href="#top" className="flex items-center gap-2 text-[15px] font-semibold tracking-tight">
            <Mark className="h-[18px] w-[18px] text-accent" />
            <span>Closing<span className="text-accent">Circle</span></span>
          </a>
          <span aria-hidden className="hidden h-4 w-px bg-hairline-strong sm:block" />
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.08] px-3.5 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="text-[13px] font-medium tracking-tight text-accent">
              {hero.eyebrow}
            </span>
          </div>
        </div>

        <h1
          className="t-display rise mx-auto mt-6 max-w-3xl text-center text-balance"
          style={{ animationDelay: "110ms" }}
        >
          <span className="block">{hero.headline.pre}</span>
          <span className="t-hero-accent">{hero.headline.accent}</span>
        </h1>

        <p
          className="rise mx-auto mt-4 max-w-[58ch] text-center text-[14.5px] leading-relaxed text-ink-muted text-balance sm:mt-6 sm:text-[16px]"
          style={{ animationDelay: "170ms" }}
        >
          {hero.sub}
        </p>


        {/* ── VSL: the protagonist. CTA lives underneath it, not above. ── */}
        <div className="rise relative mx-auto mt-4 max-w-xl lg:max-w-[63rem]" style={{ animationDelay: "230ms" }}>
          <div aria-hidden className="bloom left-1/2 top-[54%] h-[74%] w-[82%] -translate-x-1/2 -translate-y-1/2 opacity-70" />

          <div className="relative aspect-video overflow-hidden rounded-2xl border border-hairline-strong bg-gradient-to-b from-[#0C2028] to-[#050C10] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9),0_0_70px_-16px_rgba(34,211,238,0.4),inset_0_1px_0_0_rgba(255,255,255,0.08)]">
            {/* The player is the preview: it mounts on load rather than
                sitting behind a poster, so the first thing in the hero is
                the video itself. Loom's chrome is stripped so only the
                player shows. */}
            <iframe
              src={`${videoUrl}${videoUrl.includes("?") ? "&" : "?"}hideEmbedTopBar=true&hide_owner=true&hide_share=true&hide_title=true&hide_reactions=true`}
              title={hero.videoTitle}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              allowFullScreen
              loading="eager"
              className="h-full w-full"
            />
          </div>
        </div>

        {/* Permanent escape hatch. A CSP-blocked frame and a real
            cross-origin load both report contentDocument === null, so the
            block cannot be detected reliably; a visible link always works. */}
        <p className="rise mt-3 text-center text-[12.5px] text-ink-subtle">
          Video not loading?{" "}
          <a
            href={brand.videoShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-4 transition-colors hover:text-accent-hover"
          >
            Watch it on Loom
          </a>
        </p>

        {/* The calendar, not a button, sits under the video: watch, then book
            in the same scroll. Every other CTA on the page scrolls here. */}
        <CalEmbed />

        <dl className="rise mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4" style={{ animationDelay: "350ms" }}>
          {stats.map((s) => (
            <div key={s.label} className="card px-4 py-5 backdrop-blur-sm sm:px-5">
              <dt className="t-stat text-accent">{s.value}</dt>
              <dd className="mt-2 text-[13px] font-medium leading-snug text-ink">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Mark({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="12" r="8.2" fill="none" stroke="currentColor" strokeWidth="2.6" />
      <circle cx="12" cy="12" r="2.6" fill="currentColor" />
    </svg>
  );
}
