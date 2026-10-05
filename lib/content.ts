/**
 * ClosingCircle — all site copy in one place.
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
  name: "ClosingCircle",
  tagline: "Proven closers, installed into your offer.",
  email: "hello@closingcircle.com",
  calendarUrl: process.env.NEXT_PUBLIC_CALENDAR_URL || "",
  // Hero VSL. Loom embed URL; NEXT_PUBLIC_VIDEO_URL overrides it if set.
  videoUrl:
    process.env.NEXT_PUBLIC_VIDEO_URL ||
    "https://www.loom.com/embed/cd873a31473c49f9a6b96d3e0ce005fa",
  // Where to send people if the embed is blocked (strict CSP, ad blocker,
  // locked-down corporate network). Same video, opened on Loom directly.
  videoShareUrl: "https://www.loom.com/share/cd873a31473c49f9a6b96d3e0ce005fa",
};

/** Cal.com inline booking embed. It sits directly under the hero VSL, so the
 *  visitor watches and books without a second click. Every "Book A Call"
 *  button on the page just scrolls here. */
export const cal = {
  namespace: "closer-setter",
  link: "eliasminds/closer-setter",
  origin: "https://app.cal.com",
  script: "https://app.cal.com/embed/embed.js",
  // Escape hatch: strict CSP, an ad blocker or a locked-down network can
  // refuse the frame. Same booking page, opened directly.
  shareUrl: "https://cal.com/eliasminds/closer-setter",
};

/* !!! PLACEHOLDER — use numbers you can defend. */
export const stats = [
  { value: "300+", label: "Vetted reps on the bench" },
  { value: "24 hrs", label: "Match to first live call" },
  { value: "$0", label: "Upfront to get started" },
  { value: "5–7%", label: "Of closed deals, or $1,000 once" },
];

/** Every CTA points here: the Cal.com embed under the hero video. Set
 *  NEXT_PUBLIC_CALENDAR_URL to send them to an external booking page instead. */
export const ctaHref = process.env.NEXT_PUBLIC_CALENDAR_URL || "#book";

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
  cta: "Book A Call",
  ctaSub: "Commission only, or one flat access fee. Your choice.",
  videoLabel: "",
  videoTitle: "How we install a closer in 24 hours",
  bookingLabel: "Pick a time below",
  bookingSub: "30 minutes. Bring your offer and your numbers. If it fits, your rep is live tomorrow.",
  bookingFallback: "Calendar not loading?",
  bookingBlocked:
    "Your browser blocked the embedded calendar. Open it directly and pick a time there.",
  bookingFallbackCta: "Book on Cal.com",
};

export const tools = [
  "HubSpot", "GoHighLevel", "Close.io", "Salesforce", "Pipedrive",
  "Zoom", "Calendly", "Twilio", "Stripe", "Slack", "Aircall", "Notion",
];

/* 1 — What does it cost? The first question, so it gets the first section. */
export const pricing = {
  eyebrow: "What it costs",
  heading: { pre: "Two Ways To", accent: "Pay", post: "" },
  sub: "Give us a share of what closes, or buy access once and keep every deal after.",
  plans: [
    {
      name: "Commission",
      price: "5–7%",
      unit: "of collected revenue",
      lead: "$0 upfront",
      body: "We take 5 to 7% on deals your rep closes, on top of their standard ~10%. Nothing on deals that do not close.",
      points: [
        "No upfront cost, ever",
        "No retainer and no minimum",
        "We only earn when you do",
        "15 to 20% total per closed deal",
      ],
    },
    {
      name: "One-time access",
      price: "$1,000",
      unit: "once, then nothing",
      lead: "0% of your deals",
      body: "Pay once for lifetime access to the whole bench. We never take a percentage, so your rep's ~10% is your only cost per deal.",
      points: [
        "Lifetime access to every rep",
        "We take 0% of closed revenue",
        "Unlimited swaps at no cost",
        "You keep far more per deal",
      ],
      featured: true,
      badge: "Cheaper past a few deals",
    },
  ],
  compare: {
    heading: "Versus hiring direct",
    rows: [
      { label: "Upfront cost", old: "Job ads, your time", ck: "$0, or $1,000 once" },
      { label: "Monthly base salary", old: "$3,000 to $5,000", ck: "None" },
      { label: "Cut of your closed deals", old: "Recruiter fee per hire", ck: "5 to 7%, or 0%" },
      { label: "Time to first call", old: "2 to 4 weeks", ck: "24 hours" },
      { label: "Vetting", old: "15+ hours per hire", ck: "Already done" },
      { label: "Bad-hire risk", old: "Yours", ck: "Ours" },
      { label: "Swapping a rep", old: "Start over", ck: "24 hours, no fee" },
      { label: "Hiring your next rep", old: "Full cycle again", ck: "Free, forever" },
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
  body: "Tell us and we replace them from the same vetted bench, live within a day. Swaps are unlimited and cost nothing on either pricing option.",
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
    { q: "What does it cost me?", a: "Two options. Commission: nothing upfront, and we take 5 to 7% of collected revenue on deals your rep closes, on top of their standard ~10%. Or a one-time $1,000 access fee, after which we take 0% of your deals forever and your rep's ~10% is the only cost per deal." },
    { q: "Which option should I pick?", a: "Commission if you want to test with zero risk, since you pay nothing until a deal closes. The $1,000 access fee if you expect real volume, because past a few closed deals it works out far cheaper and you keep more of every deal after that." },
    { q: "What does the $1,000 include?", a: "Lifetime access to every closer and setter on the bench, the SOP build for your offer, onboarding, our ongoing coaching of your rep, and unlimited swaps. Pay it once and it never comes up again." },
    { q: "Can I switch between the two?", a: "Yes. Start on commission and move to the access fee whenever the volume justifies it. We will tell you when the maths tips over." },
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
  cta: "Are You A Closer? Apply Here",
};

export const closerForm = {
  eyebrow: "For closers & setters",
  heading: { pre: "Are You A Closer?", accent: "Apply Below", post: "" },
  sub: "If you want to get on an offer, fill the form out below. If your track record fits something we are placing, we will set up a short call.",
  submit: "Submit My Application",
  note: "We review every submission and reply on WhatsApp within two business days.",

  /* ── Google Form ────────────────────────────────────────────────
     Paste the embed URL here and submissions land straight in your
     Google Form responses sheet. In Google Forms: Send → < > → copy
     the src from the iframe (it ends in /viewform?embedded=true).
     Leave it empty and the native form below is used instead, which
     posts to /api/apply.
     NEXT_PUBLIC_GOOGLE_FORM_URL overrides it at build time.         */
  googleFormUrl: process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || "",
  // Google never resizes its own frame, so the height is ours to set.
  // Bump this if the form grows past four questions.
  googleFormHeight: 1050,
  googleFormHeightSm: 980,
  fallback: "Form not loading?",
  fallbackCta: "Open it in a new tab",
};

export const finalCta = {
  heading: "Ready To Stop Hiring Closers?",
  sub: "One 30-minute intake. If your offer is a fit, your rep is live tomorrow.",
  cta: "Book A Call",
  note: "Commission only, or one flat access fee. No retainer either way.",
};

export const legal = {
  disclaimer:
    "ClosingCircle places and manages independent sales representatives. Clients choose either a share of collected revenue on closed deals or a one-time access fee; under the access fee, ClosingCircle takes no percentage of closed revenue. Representative commission is paid by you direct to your representative. We are not a lead generation service and do not guarantee any specific result, revenue figure or close rate. Figures shown are illustrative and are not a promise of earnings.",
};
