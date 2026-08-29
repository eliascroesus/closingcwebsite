"use client";

import { useState } from "react";
import { brand, hero, stats } from "@/lib/content";

const videoUrl = process.env.NEXT_PUBLIC_VIDEO_URL || "";

export function Hero() {
  const [playing, setPlaying] = useState(false);

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
            <Crown className="h-[18px] w-[18px] text-accent" />
            <span>Closing<span className="text-accent">King</span></span>
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
          className="t-display rise mx-auto mt-8 max-w-3xl text-center text-balance"
          style={{ animationDelay: "110ms" }}
        >
          <span className="block">{hero.headline.pre}</span>
          <span className="t-hero-accent">{hero.headline.accent}</span>
        </h1>

        <p
          className="rise mx-auto mt-4 max-w-[52ch] text-center text-[14.5px] leading-relaxed text-ink-muted text-pretty sm:mt-5 sm:text-[16px]"
          style={{ animationDelay: "170ms" }}
        >
          {hero.sub}
        </p>


        {/* ── VSL: the protagonist. CTA lives underneath it, not above. ── */}
        <div className="rise relative mx-auto mt-4 max-w-xl" style={{ animationDelay: "230ms" }}>
          <div aria-hidden className="bloom left-1/2 top-[54%] h-[74%] w-[82%] -translate-x-1/2 -translate-y-1/2 opacity-70" />

          <div className="relative aspect-video overflow-hidden rounded-2xl border border-hairline-strong bg-gradient-to-b from-[#1A1230] to-[#0B0716] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9),0_0_70px_-16px_rgba(176,124,255,0.45),inset_0_1px_0_0_rgba(255,255,255,0.08)]">
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
                <span aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(176,124,255,0.3),transparent_68%)]" />

                <span className="absolute left-4 top-4 hidden items-center gap-1.5 rounded-md border border-hairline bg-canvas/70 px-2 py-1 backdrop-blur-sm sm:inline-flex">
                  <Crown className="h-3 w-3 text-accent" />
                  <span className="text-[10px] font-medium text-ink-muted">ClosingKing</span>
                </span>

                <span className="absolute inset-0 flex flex-col items-center justify-center px-6">
                  <span className="block text-center text-[clamp(1.35rem,4.2vw,2.35rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink">
                    install a closer
                    <br />
                    in 24 hours
                  </span>
                  <span className="mt-2.5 block text-center text-[11.5px] leading-relaxed text-ink-subtle">
                    {hero.videoKicker}
                  </span>
                  <span className="mt-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent shadow-[0_10px_40px_-6px_rgba(176,124,255,0.8)] transition-transform duration-300 group-hover:scale-105">
                    <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 text-[#120726]" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>

                {/* Founder inset, rounded-square as in the reference. Set
                    brand.founderImage in lib/content.ts to switch it on. */}
                {brand.founderImage && (
                  <span className="absolute bottom-4 right-4 hidden h-20 w-20 overflow-hidden rounded-2xl border border-hairline-strong bg-s3 sm:block">
                    <img src={brand.founderImage} alt="" className="h-full w-full object-cover" />
                  </span>
                )}

              </button>
            )}
          </div>
        </div>

        {/* CTA under the video — watch, then act */}
        <div className="rise mt-6 flex flex-col items-center" style={{ animationDelay: "290ms" }}>
          <a href="#apply" className="btn btn-primary w-full max-w-sm !text-[15.5px] sm:w-auto sm:!px-8">
            {hero.cta}
          </a>
        </div>

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

function Crown({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M3 8.5l3.4 3L12 4l5.6 7.5 3.4-3-1.7 9.5H4.7L3 8.5zM4.9 20h14.2v1.6H4.9V20z" />
    </svg>
  );
}
