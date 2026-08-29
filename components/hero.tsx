"use client";

import { useState } from "react";
import { brand, hero, stats } from "@/lib/content";

// Set NEXT_PUBLIC_VIDEO_URL to a YouTube/Vimeo *embed* URL to activate the VSL.
const videoUrl = process.env.NEXT_PUBLIC_VIDEO_URL || "";

export function Hero() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-floor" aria-hidden />
      <div
        aria-hidden
        className="bloom left-1/2 top-[-13rem] h-[20rem] w-[24rem] -translate-x-1/2 opacity-45 sm:h-[26rem] sm:w-[34rem]"
      />

      <div className="relative mx-auto max-w-5xl px-5 pb-12 pt-20 sm:px-6 sm:pb-14 sm:pt-24 lg:pt-24">
        {/* Scarcity pill */}
        <div className="rise flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/[0.08] px-3 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gold sm:text-[11px]">
              {hero.eyebrow}
            </span>
          </div>
        </div>

        {/* Headline — sans line, then the italic serif payoff line, larger */}
        <h1
          className="rise mx-auto mt-4 max-w-3xl text-center sm:mt-5"
          style={{ animationDelay: "70ms" }}
        >
          <span className="h-display block text-balance">
            {hero.headline.pre} {hero.headlineLine2}
          </span>
          <span className="serif mt-1 block text-gold" style={{ fontSize: "clamp(2.2rem, 5.6vw, 3.8rem)", lineHeight: 1.05 }}>
            {hero.headline.accent}
          </span>
        </h1>

        <p
          className="body-muted rise mx-auto mt-3.5 max-w-xl text-center text-[14.5px] text-pretty sm:mt-4 sm:text-[15.5px]"
          style={{ animationDelay: "140ms" }}
        >
          {hero.sub}
        </p>

        {/* ── VSL card: a designed thumbnail, not an empty frame ── */}
        <div
          className="rise relative mx-auto mt-7 max-w-3xl sm:mt-8"
          style={{ animationDelay: "210ms" }}
        >
          {/* The heavy accent bloom that surrounds the video in the references */}
          <div
            aria-hidden
            className="bloom left-1/2 top-[58%] h-[75%] w-[85%] -translate-x-1/2 -translate-y-1/2 opacity-80"
          />

          <div className="relative aspect-video overflow-hidden rounded-xl border border-gold/25 bg-[#0C0A08] shadow-[0_0_60px_-12px_rgba(240,178,60,0.45)] sm:rounded-2xl">
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
                {/* Thumbnail art: warm floor glow + fine grid, like the refs */}
                <span
                  aria-hidden
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_115%,rgba(240,178,60,0.42),transparent_62%)]"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(to_right,#F0B23C_1px,transparent_1px),linear-gradient(to_bottom,#F0B23C_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_100%,#000,transparent)]"
                />

                {/* Brand chip, top-left — mirrors the refs' branded thumbnails */}
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-black/45 px-2 py-1 backdrop-blur-sm sm:left-5 sm:top-5">
                  <svg aria-hidden viewBox="0 0 24 24" className="h-3 w-3 text-gold" fill="currentColor">
                    <path d="M3 8.5l3.4 3L12 4l5.6 7.5 3.4-3-1.7 9.5H4.7L3 8.5zM4.9 20h14.2v1.6H4.9V20z" />
                  </svg>
                  <span className="text-[9px] font-bold tracking-tight text-white/80 sm:text-[10px]">
                    ClosingKing
                  </span>
                </span>

                {/* The big thumbnail headline */}
                <span className="absolute inset-x-0 top-[19%] px-5 text-center sm:top-[21%]">
                  <span className="block text-[clamp(1.35rem,4.6vw,2.6rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.03em] text-white">
                    Install a closer
                  </span>
                  <span className="serif block text-gold" style={{ fontSize: "clamp(1.5rem,5vw,2.9rem)", lineHeight: 1.05 }}>
                    in 24 hours
                  </span>
                </span>

                {/* Play button */}
                <span className="absolute left-1/2 top-[63%] flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold shadow-[0_8px_36px_-6px_rgba(240,178,60,0.9)] transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                  <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 text-black sm:h-6 sm:w-6" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>

                <span className="absolute inset-x-0 bottom-3 text-center text-[10px] font-medium uppercase tracking-[0.16em] text-white/45 sm:bottom-5 sm:text-[11px]">
                  {hero.videoLabel}
                </span>

                {/* Founder inset (ref 4's picture-in-picture device) */}
                {brand.founderImage && (
                  <span className="absolute bottom-3 right-3 hidden h-16 w-16 overflow-hidden rounded-full border-2 border-gold/70 bg-ink-3 sm:block sm:h-[4.5rem] sm:w-[4.5rem]">
                    <img src={brand.founderImage} alt="" className="h-full w-full object-cover" />
                  </span>
                )}
              </button>
            )}
          </div>
        </div>

        {/* CTA sits under the video, as in the references */}
        <div className="rise mt-7 flex flex-col items-center" style={{ animationDelay: "280ms" }}>
          <a href="#apply" className="btn btn-gold w-full max-w-sm !text-[15px] sm:w-auto">
            {hero.cta}
          </a>
          <p className="mt-3 text-center text-[12.5px] text-white/45">{hero.ctaSub}</p>
        </div>

        {/* Stat bar */}
        <dl
          className="rise mt-11 grid grid-cols-2 gap-3 sm:mt-14 lg:grid-cols-4"
          style={{ animationDelay: "350ms" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="card px-3 py-5 text-center sm:px-4 sm:py-6">
              <dt className="text-[26px] font-extrabold leading-none tracking-tight text-gold sm:text-[32px]">
                {s.value}
              </dt>
              <dd className="mx-auto mt-2 max-w-[18ch] text-[11.5px] leading-snug text-white/45 sm:text-[12.5px]">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
