"use client";

import { useState } from "react";
import { applyForm, brand } from "@/lib/content";
import { Section, SectionIntro, Check } from "./ui";

type Status = "idle" | "sending" | "done" | "error";

const field =
  "w-full rounded-xl border border-line-strong bg-white/[0.03] px-4 py-3.5 text-[15px] text-white placeholder:text-white/30 outline-none transition-colors focus:border-gold/60 focus:bg-white/[0.05]";
const labelCls = "mb-2 block text-[12.5px] font-medium text-white/60";

export function ApplyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json?.error || "Something went wrong.");
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <Section id="apply">
        <div className="card mx-auto max-w-xl p-8 text-center sm:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15">
            <Check className="h-6 w-6 text-gold" />
          </div>
          <h2 className="h-card mt-6 text-2xl sm:text-3xl">You&apos;re in the queue.</h2>
          <p className="body-muted mt-3.5 text-[15px] text-pretty">
            We&apos;ll review your offer and reply within one business day with whether we
            have reps matched to it.
          </p>
          {brand.calendarUrl && (
            <a
              href={brand.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold mt-7 w-full sm:w-auto"
            >
              Skip the wait — book your intake call
            </a>
          )}
        </div>
      </Section>
    );
  }

  return (
    <Section id="apply">
      <SectionIntro
        eyebrow={applyForm.eyebrow}
        heading={applyForm.heading}
        sub={applyForm.sub}
      />

      <form
        onSubmit={onSubmit}
        className="card mx-auto mt-12 max-w-2xl p-6 sm:mt-14 sm:p-9"
        noValidate={false}
      >
        {/* Honeypot — real people never fill this; bots do. */}
        <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="company_website">Do not fill this in</label>
          <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelCls}>Full name *</label>
            <input id="name" name="name" required autoComplete="name" placeholder="Jordan Reyes" className={field} />
          </div>
          <div>
            <label htmlFor="email" className={labelCls}>Work email *</label>
            <input
              id="email" name="email" type="email" required
              autoComplete="email" inputMode="email" placeholder="you@company.com"
              className={field}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelCls}>Phone *</label>
            <input
              id="phone" name="phone" type="tel" required
              autoComplete="tel" inputMode="tel" placeholder="+1 (555) 000-0000"
              className={field}
            />
          </div>
          <div>
            <label htmlFor="company" className={labelCls}>Company / offer name *</label>
            <input id="company" name="company" required autoComplete="organization" placeholder="Acme Coaching" className={field} />
          </div>

          <div>
            <label htmlFor="role" className={labelCls}>What do you need?</label>
            <select id="role" name="role" defaultValue={applyForm.roles[0]} className={field}>
              {applyForm.roles.map((r) => (
                <option key={r} value={r} className="bg-ink-2">{r}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="price" className={labelCls}>Your offer price</label>
            <select id="price" name="price" defaultValue={applyForm.priceBands[2]} className={field}>
              {applyForm.priceBands.map((p) => (
                <option key={p} value={p} className="bg-ink-2">{p}</option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="volume" className={labelCls}>Qualified calls booked per month</label>
            <select id="volume" name="volume" defaultValue={applyForm.volumeBands[1]} className={field}>
              {applyForm.volumeBands.map((v) => (
                <option key={v} value={v} className="bg-ink-2">{v}</option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className={labelCls}>
              Anything else about your offer? <span className="text-white/30">(optional)</span>
            </label>
            <textarea
              id="message" name="message" rows={3}
              placeholder="What you sell, where your leads come from, what's breaking down right now."
              className={`${field} resize-y`}
            />
          </div>
        </div>

        {status === "error" && (
          <p role="alert" className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-[13.5px] text-red-300">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-gold mt-7 w-full !text-base disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Get Matched With A Closer"}
        </button>

        <p className="mt-4 text-center text-[12px] leading-relaxed text-white/35">
          No retainer. No setup fee. You pay only when they close. We reply within one
          business day — and if your offer isn&apos;t a fit, we&apos;ll tell you straight.
        </p>
      </form>
    </Section>
  );
}
