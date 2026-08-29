import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// The italic serif that carries the accent word in every heading.
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument",
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
  themeColor: "#06060A",
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
    <html lang="en" className={`${inter.variable} ${instrument.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:font-semibold focus:text-black"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
