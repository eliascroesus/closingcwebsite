"use client";

import { useState } from "react";
import { faq } from "@/lib/content";
import { Section, SectionIntro } from "./ui";

export function Faq() {
  // Single-open accordion keeps the mobile scroll short.
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <SectionIntro eyebrow={faq.eyebrow} heading={faq.heading} />

      <div className="mx-auto mt-12 max-w-3xl divide-y divide-hairline border-y border-hairline sm:mt-14">
        {faq.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full items-start justify-between gap-5 py-5 text-left"
                >
                  <span
                    className={`text-[15px] font-semibold leading-snug tracking-tight transition-colors sm:text-[17px] ${
                      isOpen ? "text-accent" : "text-white"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-accent/50 bg-accent/15 text-accent"
                        : "border-hairline-strong text-white/50"
                    }`}
                  >
                    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M8 3v10M3 8h10" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id={`faq-panel-${i}`}
                hidden={!isOpen}
                className="pb-6 pr-10"
              >
                <p className="t-body text-[14px] text-pretty sm:text-[15px]">
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
