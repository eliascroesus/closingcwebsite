import type { ReactNode } from "react";

type HeadingParts = { pre: string; accent: string; post?: string };

/**
 * Sentence-case display type, one family, weight 600, negative tracking.
 * DESIGN.md bans the italic-serif accent word outright — the "accent" part of
 * a heading is now just the rest of the sentence, set in the same face.
 */
export function Heading({
  parts,
  as: Tag = "h2",
  className = "",
}: {
  parts: HeadingParts;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const text = [parts.pre, parts.accent, parts.post].filter(Boolean).join(" ").replace(/\s+([,.])/g, "$1");
  return <Tag className={`t-section text-balance ${className}`}>{text}</Tag>;
}

/** Mono, uppercase, positive tracking — taxonomy, not headline. Never red. */
export function Eyebrow({
  children,
  align = "center",
}: {
  children: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <p
      className={`t-eyebrow flex items-center gap-2.5 ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      <span aria-hidden className="h-px w-6 bg-hairline-strong" />
      {children}
    </p>
  );
}

export function Section({
  id,
  children,
  className = "",
  tight = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tight?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative px-5 sm:px-6 lg:px-8 ${
        tight ? "py-12 sm:py-14" : "py-14 sm:py-18 lg:py-22"
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-[1120px]">{children}</div>
    </section>
  );
}

export function SectionIntro({
  eyebrow,
  heading,
  sub,
}: {
  eyebrow: string;
  heading: HeadingParts;
  sub?: string;
}) {
  return (
    <div className="max-w-2xl">
      <Eyebrow align="left">{eyebrow}</Eyebrow>
      <Heading parts={heading} className="mt-4 !text-left" />
      {sub && (
        <p className="t-body mt-4 max-w-xl text-[15px] text-pretty">{sub}</p>
      )}
    </div>
  );
}

export function CTA({
  children,
  href = "#apply",
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`btn ${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`}
    >
      {children}
    </a>
  );
}

/** Neutral by default — DESIGN.md forbids tinting checkmarks with the accent. */
export function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      className={`h-3.5 w-3.5 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}
