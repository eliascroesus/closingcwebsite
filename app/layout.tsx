import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Sans, Newsreader } from "next/font/google";
import "./globals.css";

// Body and UI. Geist carries headlines; this carries everything else, so the
// two registers read as deliberately different voices.
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// The hero's accent line only — a high-contrast italic serif, matching the
// reference page's treatment of its own payoff phrase.
const accentSerif = Newsreader({
  subsets: ["latin"],
  weight: "600",
  style: "italic",
  variable: "--font-accent-serif",
  display: "swap",
});


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://closingking.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ClosingKing — Proven Closers & Setters, Installed In 24 Hours",
    template: "%s | ClosingKing",
  },
  description:
    "We install pre-vetted closers and setters onto your offer with a complete SOP — live on calls in 24 hours. No retainer, no setup fee. You pay only when they close.",
  keywords: [
    "hire closers", "sales closers for hire", "appointment setters",
    "commission only sales reps", "remote closers", "high ticket closers",
    "sales team outsourcing", "ClosingKing",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "ClosingKing",
    title: "ClosingKing — Proven Closers & Setters, Installed In 24 Hours",
    description:
      "Pre-vetted closers and setters installed onto your offer with a complete SOP. Live on calls in 24 hours. Commission only — you pay when they close.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClosingKing — Proven Closers & Setters, Installed In 24 Hours",
    description:
      "Pre-vetted closers installed onto your offer in 24 hours. Commission only.",
  },
  robots: { index: true, follow: true },
};

// Dark-only site: tell the UA so form controls and scrollbars render dark too.
export const viewport: Viewport = {
  themeColor: "#04090C",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSans.variable} ${accentSerif.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:font-medium focus:text-[#04191F]"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
