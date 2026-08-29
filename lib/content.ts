/**
 * ClosingKing — all site copy in one place.
 *
 * Section order follows the buyer's decision sequence, not our org chart:
 * cost → proof → process → risk → value → fit → objections → book.
 * Keep every string short. If a card needs three sentences, the card is wrong.
 *
 * ─────────────────────────────────────────────────────────────
 *  BEFORE LAUNCH — replace the two `!!! PLACEHOLDER` blocks below
 *  with real numbers and real, permissioned testimonials.
 * ─────────────────────────────────────────────────────────────
 */

export const brand = {
  name: "ClosingKing",
  tagline: "Proven closers, installed into your offer.",
  email: "hello@closingking.com",
  calendarUrl: process.env.NEXT_PUBLIC_CALENDAR_URL || "",
  founderImage: "", // e.g. "/founder.jpg" to show the hero inset
};

/* !!! PLACEHOLDER — use numbers you can defend. */
export const stats = [
  { value: "300+", label: "Vetted reps on the bench" },
  { value: "24 hrs", label: "Match to first live call" },
  { value: "$0", label: "Upfront cost" },
  { value: "5–7%", label: "Our cut of closed deals" },
];

/** Every CTA points here. Set NEXT_PUBLIC_CALENDAR_URL to a Calendly or
 *  Cal.com link; without it the buttons fall back to an email. */
export const ctaHref =
  process.env.NEXT_PUBLIC_CALENDAR_URL ||
  "mailto:hello@closingking.com?subject=Booking%20an%20intake%20call";

export const nav = [
  { label: "Pricing", href: "#pricing" },
  { label: "How It Works", href: "#how" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  // The pill opens a sentence the headline finishes:
  // "in 24 hours, you will / have a proven closer / on your offer"
  eyebrow: "in 24 hours, you will",
  headline: { pre: "Have A Proven Closer", accent: "On Your Offer", post: "" },
  headlineLine2: "",
  sub: "Select from 300+ vetted closers. Trained on your offer. Taking calls tomorrow.",
  cta: "Book A Call. 4 Spots Left",
  ctaSub: "You pay only when they close.",
  videoLabel: "",
  videoTitle: "How we install a closer in 24 hours",
  videoKicker: "300+ vetted reps. Commission only.",
};

export const tools = [
  "HubSpot", "GoHighLevel", "Close.io", "Salesforce", "Pipedrive",
  "Zoom", "Calendly", "Twilio", "Stripe", "Slack", "Aircall", "Notion",
];

/* 1 — What does it cost? The first question, so it gets the first section. */
export const pricing = {
  eyebrow: "What it costs",
  heading: { pre: "You Pay", accent: "Nothing", post: " Until They Close" },
  sub: "No retainer. No setup fee. No minimum.",
  split: [
    { label: "Your closer takes", value: "~10%", note: "Standard rep commission" },
    { label: "ClosingKing takes", value: "5–7%", note: "Placement, coaching, tracking" },
    { label: "Total per closed deal", value: "15–20%", note: "Nothing on deals that don't close" },
  ],
  compare: {
    heading: "Versus hiring direct",
    rows: [
      { label: "Upfront cost", old: "Job ads, your time", ck: "$0" },
      { label: "Monthly base salary", old: "$3,000–$5,000", ck: "None" },
      { label: "Time to first call", old: "2–4 weeks", ck: "24 hours" },
      { label: "Vetting", old: "15+ hours per hire", ck: "Already done" },
      { label: "Bad-hire risk", old: "Yours", ck: "Ours" },
      { label: "Replacing a rep", old: "Start over", ck: "24 hours" },
      { label: "Coaching", old: "Your job", ck: "Included" },
    ],
  },
  cta: "See If Your Offer Qualifies",
};

/* 2 — How does it actually work? */
export const how = {
  eyebrow: "How it works",
  heading: { pre: "How We Install", accent: "Your Closer", post: "" },
  sub: "First call to live calls, in one day.",
  steps: [
    { n: "01", time: "30 min", title: "Offer intake", body: "We map your offer, buyer and objections into a rep-ready brief." },
    { n: "02", time: "Same day", title: "Rep matched", body: "Matched from 300+ vetted reps who've sold at your price point. You approve." },
    { n: "03", time: "Next morning", title: "Live on calls", body: "Your rep gets the SOP, clears a mock, and takes live calls." },
    { n: "04", time: "Ongoing", title: "Coached monthly", body: "Call reviews, mock drills and tracked KPIs. Close rate climbs." },
  ],
};

/* 3 — What if it goes wrong? */
export const guarantee = {
  eyebrow: "Zero risk",
  heading: { pre: "Wrong Fit?", accent: "Swapped In 24 Hours", post: "" },
  body: "Tell us and we replace them from the same vetted bench. No fee, no gap, no restarting a hiring process.",
  points: [
    "Swap any time, any reason",
    "Replacement live within 24 hours",
    "No fee, no penalty",
    "Your offer brief carries over",
  ],
};

/* 4 — Remaining objections */
export const faq = {
  eyebrow: "Questions",
  heading: { pre: "Frequently Asked", accent: "Questions", post: "" },
  items: [
    { q: "What does it cost me?", a: "5–7% of collected revenue on deals your rep closes, on top of the ~10% the closer takes. No retainer, no setup fee, no minimum, and nothing on deals that don't close." },
    { q: "Do I pay anything upfront?", a: "No. Not for placement, onboarding, the SOP build or coaching. If your rep closes nothing, you pay nothing." },
    { q: "How fast can a rep start?", a: "Intake today, matched the same day, live on your calls the next morning. Vetting is already done and we write the SOP for you." },
    { q: "What if the rep isn't a fit?", a: "Tell us and we swap them. A replacement from the same bench is live within 24 hours. No fee, no penalty." },
    { q: "Do I need my own leads?", a: "Yes. We supply and manage sales talent, not leads. You need an offer that converts and calls getting booked." },
    { q: "Are reps exclusive to my offer?", a: "Full-time closers work your offer exclusively. Part-time and setter placements can go either way, and we set that during intake." },
    { q: "Who manages and trains them?", a: "We do. Call reviews, mock drills and coaching run on our side weekly. You keep full say over your offer and process." },
    { q: "How do you vet closers?", a: "Verified close-rate history on comparable offers, live mocks against real objections, and references with previous offer owners." },
    { q: "What tools do you work with?", a: "Whatever you already run: HubSpot, GoHighLevel, Close, Salesforce, Zoom, Calendly. No migration." },
    { q: "What's the minimum commitment?", a: "None. No contract term, no notice period. You're only ever paying a share of closed revenue." },
  ],
};

export const closers = {
  eyebrow: "For closers & setters",
  heading: { pre: "Get Placed On Offers", accent: "Worth Closing", post: "" },
  body: "Vetted offers with real lead flow, a full SOP on day one, and coaching that moves your close rate. You keep your full commission.",
  points: [],
  cta: "Apply To The Bench",
};

export const finalCta = {
  heading: "Ready To Stop Hiring Closers?",
  sub: "One 30-minute intake. If your offer is a fit, your rep is live tomorrow.",
  cta: "Book A Call",
  note: "No retainer. You pay only when they close.",
};

export const legal = {
  disclaimer:
    "ClosingKing places and manages independent sales representatives. Compensation is a percentage of collected revenue on closed deals. We are not a lead generation service and do not guarantee any specific result, revenue figure or close rate. Figures shown are illustrative and are not a promise of earnings.",
};
