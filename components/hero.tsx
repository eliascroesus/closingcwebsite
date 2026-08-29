"use client";

import { useState } from "react";
import { brand, hero, stats } from "@/lib/content";

const videoUrl = process.env.NEXT_PUBLIC_VIDEO_URL || "";

export function Hero() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-floor" aria-hidden />

      <div className="relative mx-auto max-w-[1120px] px-5 pb-12 pt-20 sm:px-6 sm:pb-14 sm:pt-24 lg:pt-26">
        {/* Status chip — mono, neutral. The dot is the only red here. */}
        <div className="rise flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-md border border-hairline bg-s1 px-2.5 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="t-eyebrow !text-ink-muted">{hero.eyebrow}</span>
          </div>
        </div>

        <h1
          className="t-display rise mx-auto mt-5 max-w-3xl text-center text-balance sm:mt-6"
          style={{ animationDelay: "60ms" }}
        >
          {hero.headline.pre} {hero.headlineLine2} {hero.headline.accent}
        </h1>

        <p
          className="t-body rise mx-auto mt-4 max-w-[52ch] text-center text-[15px] text-pretty sm:text-[16.5px]"
          style={{ animationDelay: "130ms" }}
        >
          {hero.sub}
        </p>

        <div className="rise mt-6 flex flex-col items-center" style={{ animationDelay: "200ms" }}>
          <a href="#apply" className="btn btn-primary w-full max-w-xs sm:w-auto">
            {hero.cta}
          </a>
          <p className="mt-3 text-center text-[12.5px] text-ink-subtle">{hero.ctaSub}</p>
        </div>

        {/* ── VSL panel: a designed thumbnail, the section's protagonist ── */}
        <div className="rise relative mx-auto mt-9 max-w-3xl sm:mt-10" style={{ animationDelay: "270ms" }}>
          <div
            aria-hidden
            className="bloom left-1/2 top-[58%] h-[95%] w-[100%] -translate-x-1/2 -translate-y-1/2"
          />

          <div className="relative aspect-video overflow-hidden rounded-2xl border border-hairline-strong bg-s1 shadow-[0_0_70px_-14px_rgba(229,50,47,0.55)]">
            {playing && videoUrl ? (
              <iframe
                src={`${videoUrl}${videoUrl.includes("?") ? "&" : "?"}autoplay=1`}
                title={hero.videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => videoUrl && setPlaying(true)}
                aria-label={videoUrl ? `Play: ${hero.videoTitle}` : hero.videoTitle}
                className="group relative block h-full w-full text-left"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_118%,rgba(229,50,47,0.5),transparent_60%)]"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 opacity-[0.09] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_100%,#000,transparent)]"
                />

                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-md border border-hairline bg-canvas/70 px-2 py-1 backdrop-blur-sm sm:left-5 sm:top-5">
                  <Crown className="h-3 w-3 text-accent" />
                  <span className="text-[10px] font-medium tracking-tight text-ink-muted">
                    ClosingKing
                  </span>
                </span>

                <span className="absolute inset-x-0 top-1/2 -translate-y-[58%] px-6 text-center">
                  <span className="block text-[clamp(1.3rem,4.2vw,2.4rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-ink">
                    Install a closer
                    <br />
                    in 24 hours
                  </span>
                </span>

                <span className="absolute left-1/2 top-[72%] flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent shadow-[0_8px_32px_-6px_rgba(229,50,47,0.75)] transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
                  <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 text-white" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>

                <span className="t-eyebrow absolute inset-x-0 bottom-4 text-center !text-ink-tertiary sm:bottom-5">
                  {hero.videoLabel}
                </span>

                {brand.founderImage && (
                  <span className="absolute bottom-4 right-4 hidden h-16 w-16 overflow-hidden rounded-full border border-hairline-strong bg-s3 sm:block">
                    <img src={brand.founderImage} alt="" className="h-full w-full object-cover" />
                  </span>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Stat bar — figures red (permitted), labels neutral */}
        <dl className="rise mt-10 grid grid-cols-2 gap-3 sm:mt-12 lg:grid-cols-4" style={{ animationDelay: "340ms" }}>
          {stats.map((s) => (
            <div key={s.label} className="card px-4 py-5 sm:px-5 sm:py-6">
              <dt className="t-stat text-accent">{s.value}</dt>
              <dd className="mt-2 text-[12.5px] leading-snug text-ink-subtle">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Crown({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M3 8.5l3.4 3L12 4l5.6 7.5 3.4-3-1.7 9.5H4.7L3 8.5zM4.9 20h14.2v1.6H4.9V20z" />
    </svg>
  );
}
