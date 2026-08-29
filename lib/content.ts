/**
 * ClosingKing — all site copy in one place.
 * Edit this file to change the page. Nothing else needs to be touched.
 *
 * ─────────────────────────────────────────────────────────────
 *  BEFORE YOU LAUNCH — replace the two blocks marked
 *  `!!! PLACEHOLDER` below with real numbers and real testimonials.
 *  They are illustrative only and must not go live as-is.
 * ─────────────────────────────────────────────────────────────
 */

export const brand = {
  name: "ClosingKing",
  tagline: "Proven closers and setters, installed into your offer.",
  email: "hello@closingking.com",
  calendarUrl: process.env.NEXT_PUBLIC_CALENDAR_URL || "",
  // Drop a headshot in /public and point here (e.g. "/founder.jpg") to show
  // the picture-in-picture inset on the hero video. Empty = hidden.
  founderImage: "",
};

/* !!! PLACEHOLDER — swap these for your real, defensible numbers.
   Every reference page leads with proof; wrong proof is worse than none. */
export const stats = [
  { value: "300+", label: "Vetted closers & setters on the bench" },
  { value: "24 hrs", label: "From match to first live call" },
  { value: "$0", label: "Upfront cost. Commission only." },
  { value: "5–7%", label: "Our share of what they close" },
];

export const nav = [
  { label: "How It Works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "Results", href: "#results" },
  { label: "For Closers", href: "#closers" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "Now placing — limited spots this month",
  headline: { pre: "Closers Installed", accent: "In 24 Hours", post: "" },
  headlineLine2: "",
  sub: "Pre-vetted closers and setters, placed on your offer with a full SOP. No hiring, no onboarding week, no retainer.",
  cta: "Get Matched Today",
  ctaSub: "You pay only when they close.",
  videoLabel: "Watch the 2-minute breakdown",
  videoTitle: "How we install a closer in 24 hours",
};

export const tools = [
  "HubSpot", "GoHighLevel", "Close.io", "Salesforce", "Pipedrive",
  "Zoom", "Calendly", "Twilio", "Stripe", "Slack", "Aircall", "Notion",
];

export const problem = {
  eyebrow: "The real problem",
  heading: { pre: "Hiring Closers Is", accent: "Broken", post: "" },
  sub: "Every offer owner runs the same cycle. It costs weeks and ends in a coin flip.",
  items: [
    {
      n: "01",
      title: "The job post trap",
      body: "Post in three Facebook groups, get 200 applicants overnight. Almost none have closed a deal above $2,000.",
    },
    {
      n: "02",
      title: "The vetting tax",
      body: "Screens, interviews, mocks, references. 15+ hours per hire — and you're still guessing at the end.",
    },
    {
      n: "03",
      title: "The onboarding dead zone",
      body: "A good rep sits idle for a week while you write an SOP. Your booked calls go cold waiting.",
    },
    {
      n: "04",
      title: "The bad-hire reset",
      body: "Six weeks in, they can't close. You've eaten the pipeline and the salary — and you start over at zero.",
    },
  ],
};

export const how = {
  eyebrow: "How it works",
  heading: { pre: "How We Install", accent: "Your Closer", post: "" },
  sub: "First call to live calls, in one day.",
  steps: [
    {
      n: "01",
      time: "30 minutes",
      title: "Offer Intake",
      body: "We map your offer, buyer, objections and process into a rep-ready brief. You talk, we build.",
      bullets: ["Offer & pricing breakdown", "Buyer profile and objections", "Your existing call flow and CRM"],
    },
    {
      n: "02",
      time: "Same day",
      title: "Rep Matched",
      body: "We match from 300+ pre-vetted reps who have already sold at your price point, in your market.",
      bullets: ["Matched on price point and niche", "Track record already verified", "You approve before we install"],
    },
    {
      n: "03",
      time: "Next morning",
      title: "Installed & Closing",
      body: "Your rep gets the SOP, clears a mock with our coaches, and takes live calls the next morning.",
      bullets: ["Complete SOP delivered day one", "Mock call cleared before going live", "Plugged into your CRM and calendar"],
    },
    {
      n: "04",
      time: "Every month after",
      title: "Coached & Tracked",
      body: "Weekly call reviews, mock drills and tracked KPIs, so close rate climbs month over month.",
      bullets: ["Recorded call review and scoring", "Live mock drills with our coaches", "Dashboards you can see anytime"],
    },
  ],
};

export const pillars = {
  eyebrow: "What you get",
  heading: { pre: "What You", accent: "Actually Get", post: "" },
  sub: "Three things a recruiter will never give you.",
  items: [
    {
      title: "The Bench",
      body: "Hundreds of closers and setters, already vetted and proven on real offers. Pick from a roster instead of screening strangers.",
      points: ["300+ active reps", "Verified close-rate history", "Matched to your price point"],
    },
    {
      title: "The Install",
      body: "A complete SOP written for your offer — product, buyer, objections, pitch. They understand it day one and close on day two.",
      points: ["Custom SOP per offer", "Same-day handoff", "Live on calls in 24 hours"],
    },
    {
      title: "The Management",
      body: "Continuous coaching and tracking software you can see. Your rep is measurably better in month three than month one.",
      points: ["Weekly coaching cadence", "Tracked KPIs and dashboards", "Swap on request, 24-hour turnaround"],
    },
  ],
};

export const calculator = {
  eyebrow: "Run the numbers",
  heading: { pre: "How Much Revenue You're", accent: "Losing", post: " Each Month" },
  sub: "Set your own assumptions. The math is yours, not ours.",
  disclaimer:
    "Illustrative only. This calculator uses the numbers you enter — it is not a projection, forecast, or guarantee of results.",
};

export const pricing = {
  eyebrow: "Pricing",
  heading: { pre: "You Pay", accent: "Nothing", post: " Until They Close" },
  sub: "No retainer. No setup fee. No minimum. We get paid when you get paid.",
  split: [
    { label: "Your closer takes", value: "~10%", note: "Standard industry commission, paid to the rep" },
    { label: "ClosingKing takes", value: "5–7%", note: "Placement, coaching, management, and tracking software" },
    { label: "Total per closed deal", value: "15–20%", note: "Of collected revenue. Nothing on deals that don't close." },
  ],
  compare: {
    heading: "The real comparison",
    rows: [
      { label: "Upfront cost", old: "Job ads, your time, onboarding", ck: "$0" },
      { label: "Monthly base salary", old: "$3,000–$5,000, paid regardless", ck: "None" },
      { label: "Time to first live call", old: "2–4 weeks", ck: "24 hours" },
      { label: "Vetting", old: "15+ hours of your time per hire", ck: "Already done" },
      { label: "Who carries bad-hire risk", old: "You do", ck: "We do" },
      { label: "Replacing a rep", old: "Start the whole cycle over", ck: "Swapped in 24 hours" },
      { label: "Ongoing coaching", old: "Your job", ck: "Included" },
    ],
  },
  cta: "See If Your Offer Qualifies",
};

export const guarantee = {
  eyebrow: "Zero risk",
  heading: { pre: "Wrong Fit?", accent: "Swapped In 24 Hours.", post: "" },
  body: "Not performing? Tell us and we replace them from the same pre-vetted bench — live within a day. No fee, no gap, no restarting a hiring process.",
  points: [
    "Request a swap any time, for any reason",
    "Replacement rep live within 24 hours",
    "No fee, no penalty, no renegotiation",
    "Your SOP and offer brief carry straight over",
  ],
};

/* !!! PLACEHOLDER TESTIMONIALS — these are illustrative examples, NOT real
   clients. Replace every entry with a genuine, permissioned quote before you
   put this site in front of traffic. Publishing invented testimonials or
   earnings claims is deceptive and, in most markets, illegal.
   Set this to an empty array `[]` and the section will not render. */
export const testimonials = [
  {
    quote: "We had two setters and no closer. ClosingKing had someone on our calls the next day with a full rundown of our offer. I didn't write a single onboarding doc.",
    name: "PLACEHOLDER — replace",
    role: "Founder, coaching offer",
  },
  {
    quote: "The part I didn't expect was the coaching. Our rep's close rate moved every month because someone was actually reviewing his calls. That never happened when I hired direct.",
    name: "PLACEHOLDER — replace",
    role: "Owner, B2B agency",
  },
  {
    quote: "First rep wasn't the right fit for our price point. Said so on a Tuesday, had a replacement on live calls Wednesday. No invoice, no argument.",
    name: "PLACEHOLDER — replace",
    role: "Director, education offer",
  },
  {
    quote: "Commission-only was the whole reason we tried it. There was no scenario where we lost money on the test, so there was nothing to decide.",
    name: "PLACEHOLDER — replace",
    role: "Co-founder, SaaS",
  },
];

export const audience = {
  eyebrow: "Who this is for",
  heading: { pre: "Who This Is", accent: "For", post: "" },
  sub: "If calls are getting booked and closing is the bottleneck, this is built for you.",
  items: [
    { title: "Coaches & Consultants", body: "High-ticket programs sold on a call." },
    { title: "Marketing Agencies", body: "Retainer and performance deals." },
    { title: "Info & Education", body: "Courses, cohorts, and masterminds." },
    { title: "B2B Services", body: "Long cycles that need real follow-up." },
    { title: "SaaS & Software", body: "Demo-to-close motions at any ACV." },
    { title: "Real Estate & Investing", body: "Investor and buyer conversations." },
    { title: "Financial Services", body: "Compliance-aware, consultative selling." },
    { title: "Med Spas & Aesthetics", body: "High-ticket consults and packages." },
    { title: "Home Services", body: "In-home and phone-closed estimates." },
  ],
  notFor: {
    title: "Who this isn't for",
    body: "No converting offer or no lead flow? A closer won't fix that. We'll say so on the intake call instead of taking the placement.",
  },
};

export const closers = {
  eyebrow: "For closers & setters",
  heading: { pre: "Get Placed On Offers", accent: "Worth Closing", post: "" },
  body: "We don't post jobs — we place reps. Vetted offers with real lead flow, a full SOP on day one, and coaching that moves your close rate. You keep your full commission.",
  points: [
    "Placed on offers with existing lead flow",
    "Complete SOP and offer brief before your first call",
    "Weekly call reviews and live mock drills",
    "Keep 100% of your standard commission",
  ],
  cta: "Apply To The Bench",
};

export const faq = {
  eyebrow: "Questions",
  heading: { pre: "Frequently Asked", accent: "Questions", post: "" },
  items: [
    {
      q: "What does this actually cost me?",
      a: "A percentage of collected revenue on deals your rep closes — 5–7% to ClosingKing, on top of the ~10% the closer takes. So 15–20% total per closed deal. There is no retainer, no setup fee, no monthly minimum, and nothing charged on deals that don't close.",
    },
    {
      q: "Do I pay anything upfront?",
      a: "No. Not for placement, not for onboarding, not for the SOP build, not for coaching. If your rep closes nothing, you pay nothing. The risk of a bad placement sits with us — that's the whole model.",
    },
    {
      q: "How fast can a rep actually start?",
      a: "Intake call today, matched the same day, live on your calls the next morning. The reason it's fast is that vetting already happened and we write the SOP for you — you're not training anyone from scratch.",
    },
    {
      q: "What if the rep isn't a good fit?",
      a: "Tell us and we swap them. A replacement from the same pre-vetted bench is onboarded and taking calls within 24 hours. No fee, no penalty, no renegotiation, and your offer brief carries straight over.",
    },
    {
      q: "Do I need my own leads?",
      a: "Yes. We supply and manage the sales talent — we are not a lead generation agency. You need an offer that converts and calls getting booked. If you don't have that yet, we'll say so on the intake call rather than take the placement.",
    },
    {
      q: "Are the reps exclusive to my offer?",
      a: "Reps placed as full-time closers work your offer exclusively. Part-time and setter placements can be structured either way — we'll set expectations clearly during intake so there are no surprises.",
    },
    {
      q: "Who manages and trains the rep?",
      a: "We do. Call reviews, mock drills, and tactical coaching run on our side every week, and you get dashboards to see performance without managing it yourself. You keep full say over your offer, pricing, and process.",
    },
    {
      q: "How do you vet your closers?",
      a: "Verified close-rate history on comparable offers, live mock calls against real objections, and reference checks with previous offer owners. Reps who stop performing come off the bench — the roster is maintained, not just collected.",
    },
    {
      q: "What tools do you work with?",
      a: "Whatever you already run. HubSpot, GoHighLevel, Close, Salesforce, Pipedrive, Zoom, Calendly and the rest — your rep plugs into your existing stack. We don't ask you to migrate anything.",
    },
    {
      q: "What's the minimum commitment?",
      a: "There isn't one. No contract term, no notice period. Since you're only ever paying a share of closed revenue, stopping costs you nothing — which means we have to keep earning it every month.",
    },
  ],
};

export const finalCta = {
  heading: "Ready To Stop Hiring Closers?",
  sub: "One 30-minute intake. If your offer is a fit, your rep is live tomorrow. If it isn't, we'll tell you straight.",
  cta: "Get Matched Today",
  note: "No retainer. You pay only when they close.",
};

export const applyForm = {
  eyebrow: "Get started",
  heading: { pre: "Tell Us About Your", accent: "Offer", post: "" },
  sub: "60 seconds. We reply within one business day.",
  roles: ["A closer", "A setter", "Both", "Not sure yet"],
  priceBands: [
    "Under $1,000",
    "$1,000 – $2,999",
    "$3,000 – $4,999",
    "$5,000 – $9,999",
    "$10,000+",
  ],
  volumeBands: [
    "Under 20",
    "20 – 49",
    "50 – 99",
    "100 – 199",
    "200+",
  ],
};

export const legal = {
  disclaimer:
    "ClosingKing places and manages independent sales representatives. Compensation is a percentage of collected revenue on closed deals. We are not a lead generation service and we do not guarantee any specific result, revenue figure, or close rate — outcomes depend on your offer, pricing, lead quality, and market. Any figures shown on this page are illustrative and are not a promise of earnings.",
};
