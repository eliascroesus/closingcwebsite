"use client";

import { useState } from "react";
import { closerForm } from "@/lib/content";
import { Section, SectionIntro, Check } from "./ui";

type Status = "idle" | "sending" | "done" | "error";

const field =
  "w-full rounded-xl border border-hairline-strong bg-s3 px-4 py-3.5 text-[15px] text-ink placeholder:text-ink-tertiary outline-none transition-colors focus:border-accent/60 focus:bg-s2";
const labelCls = "mb-2 block text-[12.5px] font-medium text-ink-subtle";

export function CloserForm() {
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
        body: JSON.stringify({ ...data, applicantType: "Closer / setter" }),
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
      <Section id="closers-apply">
        <div className="card mx-auto max-w-xl p-8 text-center sm:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
            <Check className="h-6 w-6 text-accent" />
          </div>
          <h2 className="t-card mt-6 text-2xl">Application received.</h2>
          <p className="t-body mt-3.5 text-[15px] text-pretty">
            We review every submission and reply on WhatsApp within two business days.
            If your track record fits an offer we are placing, we will set up a short call.
          </p>
        </div>
      </Section>
    );
  }

  return (
    <Section id="closers-apply">
      <SectionIntro
        eyebrow={closerForm.eyebrow}
        heading={closerForm.heading}
        sub={closerForm.sub}
      />

      <form onSubmit={onSubmit} className="card mx-auto mt-9 max-w-xl p-6 sm:p-8">
        {/* Honeypot */}
        <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="closer_site">Do not fill this in</label>
          <input id="closer_site" name="company_website" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid gap-5">
          <div>
            <label htmlFor="c-name" className={labelCls}>Full name *</label>
            <input id="c-name" name="name" required autoComplete="name" placeholder="Jordan Reyes" className={field} />
          </div>
          <div>
            <label htmlFor="c-email" className={labelCls}>Email *</label>
            <input
              id="c-email" name="email" type="email" required
              autoComplete="email" inputMode="email" placeholder="you@email.com"
              className={field}
            />
          </div>
          <div>
            <label htmlFor="c-whatsapp" className={labelCls}>WhatsApp number *</label>
            <input
              id="c-whatsapp" name="whatsapp" type="tel" required
              autoComplete="tel" inputMode="tel" placeholder="+1 (555) 000-0000"
              className={field}
            />
            <p className="mt-1.5 text-[11.5px] text-ink-tertiary">
              Include your country code. This is how we reach you.
            </p>
          </div>
          <div>
            <label htmlFor="c-loom" className={labelCls}>Loom video link *</label>
            <input
              id="c-loom" name="loom" type="url" required
              inputMode="url" placeholder="https://loom.com/share/..."
              className={field}
            />
            <p className="mt-1.5 text-[11.5px] text-ink-tertiary">
              Two minutes: what you have sold, at what price point, and your close rate.
            </p>
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
          className="btn btn-primary mt-7 w-full !text-[15px] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : closerForm.submit}
        </button>

        <p className="mt-4 text-center text-[12px] leading-relaxed text-ink-tertiary">
          {closerForm.note}
        </p>
      </form>
    </Section>
  );
}
