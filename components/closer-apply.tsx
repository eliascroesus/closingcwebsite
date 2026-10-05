import { closerForm } from "@/lib/content";
import { CloserForm } from "./closer-form";
import { Section, SectionIntro } from "./ui";

/**
 * Closer applications.
 *
 * With a Google Form URL configured, the form is embedded straight from
 * Google so every submission lands in the responses sheet with no backend
 * of ours in the path. Without one, we fall back to the native form, which
 * posts to /api/apply. See `closerForm.googleFormUrl` in lib/content.ts.
 */
export function CloserApply() {
  const src = closerForm.googleFormUrl;
  if (!src) return <CloserForm />;

  // The embed URL carries ?embedded=true; the share URL for the fallback
  // link is the same page without it.
  const openUrl = src.replace(/([?&])embedded=true&?/, "$1").replace(/[?&]$/, "");

  return (
    <Section id="closers-apply">
      <SectionIntro
        eyebrow={closerForm.eyebrow}
        heading={closerForm.heading}
        sub={closerForm.sub}
      />

      <div className="mx-auto mt-9 max-w-xl">
        {/* No border and no panel: Google paints its own surface, and a
            second frame around it reads as a box inside a box. Rounding the
            corners is the only thing we impose on it. */}
        <div className="overflow-hidden rounded-2xl">
          <iframe
            src={src}
            title="Closer application form"
            loading="lazy"
            className="block h-[var(--gform-h-sm)] w-full border-0 sm:h-[var(--gform-h)]"
            style={
              {
                "--gform-h-sm": `${closerForm.googleFormHeightSm}px`,
                "--gform-h": `${closerForm.googleFormHeight}px`,
              } as React.CSSProperties
            }
          >
            Loading the form…
          </iframe>
        </div>

        <p className="mt-3 text-center text-[12.5px] text-ink-subtle">
          {closerForm.fallback}{" "}
          <a
            href={openUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-4 transition-colors hover:text-accent-hover"
          >
            {closerForm.fallbackCta}
          </a>
        </p>

        <p className="mt-4 text-center text-[12px] leading-relaxed text-ink-tertiary">
          {closerForm.note}
        </p>
      </div>
    </Section>
  );
}
