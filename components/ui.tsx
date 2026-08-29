import type { ReactNode } from "react";

type HeadingParts = { pre: string; accent: string; post?: string };

/**
 * The signature pairing from the reference pages: heavy title-case sans with
 * a single italic-serif accent phrase. Used for every section heading so the
 * page keeps one rhythm top to bottom.
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
  return (
    <Tag className={`h-section text-balance ${className}`}>
      {parts.pre}
      {parts.pre && " "}
      <span className="serif text-gold">{parts.accent}</span>
      {parts.post}
    </Tag>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow flex items-center justify-center gap-2">
      <span aria-hidden className="h-px w-5 bg-gold/50" />
      {children}
      <span aria-hidden className="h-px w-5 bg-gold/50" />
    </p>
  );
}

/**
 * Every section shares this wrapper so horizontal gutters and vertical rhythm
 * stay identical across breakpoints. Gutters step up 20px → 24px → 32px.
 */
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
        tight ? "py-12 sm:py-14" : "py-14 sm:py-18 lg:py-24"
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
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
    <div className="mx-auto max-w-3xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <Heading parts={heading} className="mt-3.5" />
      {sub && (
        <p className="body-muted mx-auto mt-3.5 max-w-xl text-[14.5px] sm:text-[15.5px] text-pretty">
          {sub}
        </p>
      )}
    </div>
  );
}

export function CTA({
  children,
  href = "#apply",
  variant = "gold",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  variant?: "gold" | "ghost";
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`btn ${variant === "gold" ? "btn-gold" : "btn-ghost"} ${className}`}
    >
      {children}
      <svg
        aria-hidden
        viewBox="0 0 16 16"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
    </a>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      className={`h-4 w-4 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}
