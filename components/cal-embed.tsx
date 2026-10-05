"use client";

import { useEffect, useState } from "react";
import { cal, hero } from "@/lib/content";

const CONTAINER_ID = "cal-inline-closer-setter";

/* Cal's loader is an untyped global queue. Keep the surface we touch
   narrow rather than reaching for `any` across the file. */
type CalApi = ((...args: unknown[]) => void) & {
  loaded?: boolean;
  ns?: Record<string, (...args: unknown[]) => void>;
  q?: unknown[][];
};
declare global {
  interface Window {
    Cal?: CalApi;
  }
}

/** Cal.com's official inline loader, transcribed. It installs a queue so the
 *  calls below are safe before embed.js has finished downloading. */
function installLoader(C: Window, A: string, L: string) {
  const p = (a: { q?: unknown[][] }, ar: unknown[]) => {
    (a.q = a.q || []).push(ar);
  };
  const d = C.document;
  C.Cal =
    C.Cal ||
    function (...ar: unknown[]) {
      const c = C.Cal as CalApi;
      if (!c.loaded) {
        c.ns = {};
        c.q = c.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        c.loaded = true;
      }
      if (ar[0] === L) {
        const api = function (...inner: unknown[]) {
          p(api, inner);
        } as CalApi;
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === "string") {
          c.ns![namespace] = c.ns![namespace] || api;
          p(c.ns![namespace] as CalApi, ar);
          p(c, ["initNamespace", namespace]);
        } else {
          p(c, ar);
        }
        return;
      }
      p(c, ar);
    };
}

/* Strict Mode runs effects twice in development; Cal would then mount two
   calendars into the same node. Module scope outlives the remount. */
let booted = false;

type Status = "loading" | "ready" | "blocked";

export function CalEmbed() {
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    if (booted) {
      setStatus("ready");
      return;
    }
    booted = true;

    installLoader(window, cal.script, "init");
    const Cal = window.Cal!;

    Cal("init", cal.namespace, { origin: cal.origin });
    Cal.ns![cal.namespace]("inline", {
      elementOrSelector: `#${CONTAINER_ID}`,
      config: {
        layout: "month_view",
        useSlotsViewOnSmallScreen: "true",
        theme: "dark",
        "ui.color-scheme": "dark",
      },
      calLink: cal.link,
    });
    Cal.ns![cal.namespace]("ui", {
      // The page is dark at every breakpoint, so pin the embed to dark
      // rather than letting it follow the visitor's OS preference.
      theme: "dark",
      cssVarsPerTheme: {
        light: { "cal-brand": "#292929" },
        dark: { "cal-brand": "#6ee4ff" },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });

    // The calendar paints into an iframe Cal injects; watch for it so the
    // placeholder only clears once something real is there.
    const host = document.getElementById(CONTAINER_ID);
    if (!host) return;
    if (host.childElementCount > 0) {
      setStatus("ready");
      return;
    }
    const obs = new MutationObserver(() => {
      if (host.childElementCount > 0) {
        setStatus("ready");
        obs.disconnect();
        clearTimeout(timer);
      }
    });
    obs.observe(host, { childList: true });

    // embed.js can be refused outright (strict CSP, ad blocker, corporate
    // proxy). Nothing fires in that case, so give up on a clock and hand
    // over a plain link rather than spinning forever.
    const timer = setTimeout(() => {
      if (host.childElementCount === 0) setStatus("blocked");
    }, 8000);

    return () => {
      obs.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div id="book" className="rise mx-auto mt-10 max-w-xl scroll-mt-24 lg:max-w-[63rem]">
      <p className="text-center text-[12px] font-medium uppercase tracking-[0.16em] text-ink-subtle">
        {hero.bookingLabel}
      </p>
      <p className="mx-auto mt-2.5 max-w-[46ch] text-center text-[14px] leading-relaxed text-ink-muted text-pretty">
        {hero.bookingSub}
      </p>

      <div className="relative mt-5">
        {/* The placeholder sits behind the embed, so the panel reads as a
            calendar-shaped surface while Cal paints into it. */}
        {status === "loading" && (
          <div
            aria-hidden
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6"
          >
            <span className="h-6 w-6 animate-spin rounded-full border-2 border-hairline-strong border-t-accent" />
            <span className="text-[13px] text-ink-subtle">Loading the calendar…</span>
          </div>
        )}

        {status === "blocked" && (
          <div className="flex flex-col items-center justify-center px-6 py-12 text-center sm:py-14">
            <p className="max-w-[34ch] text-[14.5px] leading-relaxed text-ink-muted text-pretty">
              {hero.bookingBlocked}
            </p>
            <a
              href={cal.shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-6 w-full max-w-xs !text-[15px] sm:w-auto sm:!px-8"
            >
              {hero.bookingFallbackCta}
            </a>
          </div>
        )}

        <div
          id={CONTAINER_ID}
          /* No fixed height: Cal measures its own content and resizes the
             frame. The min-height keeps the panel from collapsing while it
             loads, and is tuned per breakpoint to the month view's size. It
             is dropped once we know nothing is coming. */
          className={`relative w-full overflow-x-hidden ${
            status === "blocked"
              ? ""
              : "min-h-[560px] sm:min-h-[620px] lg:min-h-[680px]"
          }`}
        />
      </div>

      {status !== "blocked" && (
        <p className="mt-3 text-center text-[12.5px] text-ink-subtle">
          {hero.bookingFallback}{" "}
          <a
            href={cal.shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-4 transition-colors hover:text-accent-hover"
          >
            {hero.bookingFallbackCta}
          </a>
        </p>
      )}
    </div>
  );
}
