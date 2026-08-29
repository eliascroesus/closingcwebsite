"use client";

import { useEffect, useState } from "react";
import { brand, nav } from "@/lib/content";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // The hero carries its own wordmark, so the nav stays out of the way until
  // the visitor has scrolled past it — then it slides in as a sticky CTA bar.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the mobile sheet so it can't scroll underneath.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-all duration-500 sm:px-5 sm:pt-4 ${
          scrolled || open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex w-full max-w-[1080px] items-center justify-between gap-3 rounded-full border border-hairline-strong bg-canvas/80 px-4 py-2.5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:px-5"
        >
          <a
            href="#top"
            className="flex shrink-0 items-center gap-2 text-[15px] font-extrabold tracking-tight sm:text-base"
          >
            <Crown />
            <span>
              Closing<span className="text-accent">King</span>
            </span>
          </a>

          {/* Desktop links — hidden below lg where they'd wrap */}
          <ul className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[13.5px] font-medium text-ink-subtle transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            {/* The CTA pill never collapses into the hamburger — it stays
                reachable at every width, including 320px. */}
            <a
              href="#apply"
              className="btn btn-primary !min-h-0 !px-4 !py-2 !text-[13px] sm:!px-5 sm:!py-2.5 sm:!text-sm"
            >
              Get Matched
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline-strong text-ink lg:hidden"
            >
              <span className="relative block h-3.5 w-4">
                <span
                  className={`absolute left-0 block h-0.5 w-4 rounded bg-current transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-0.5 w-4 rounded bg-current transition-all duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-4 rounded bg-current transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-40 bg-canvas/97 backdrop-blur-xl lg:hidden"
      >
        <div className="flex h-full flex-col justify-center px-6 pb-20">
          <ul className="space-y-1">
            {nav.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{ animationDelay: `${i * 45}ms` }}
                  className="rise block border-b border-hairline py-5 text-2xl font-bold tracking-tight text-ink/90 sm:text-3xl"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#apply"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-9 w-full !text-base"
          >
            Get Matched With A Closer
          </a>
          <p className="mt-4 text-center text-xs text-ink-subtle">
            No retainer. You pay only when they close.
          </p>
          <a
            href={`mailto:${brand.email}`}
            className="mt-6 text-center text-sm text-ink/50 underline underline-offset-4"
          >
            {brand.email}
          </a>
        </div>
      </div>
    </>
  );
}

function Crown() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px] text-accent sm:h-5 sm:w-5"
      fill="currentColor"
    >
      <path d="M3 8.5l3.4 3L12 4l5.6 7.5 3.4-3-1.7 9.5H4.7L3 8.5zM4.9 20h14.2v1.6H4.9V20z" />
    </svg>
  );
}
