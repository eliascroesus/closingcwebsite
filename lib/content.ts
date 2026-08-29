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
  eyebrow: "Now placing — limited offers each month",
  headline: { pre: "Install Proven Closers", accent: "In 24 Hours", post: "" },
  headlineLine2: "Into Your Offer",
  sub: "Skip the job posts, the screening calls, and the two-week onboarding. We match a pre-vetted closer or setter to your offer, hand them a complete SOP and offer rundown, and they take live calls the next morning.",
  cta: "Get Matched With A Closer",
  ctaSub: "No retainer. No setup fee. You pay only when they close.",
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
  sub: "Every offer owner runs the same cycle. It costs weeks, and it ends in a coin flip.",
  items: [
    {
      n: "01",
      title: "The job post trap",
      body: "You post in three Facebook groups and get 200 applicants overnight. Almost none of them have closed a deal above $2,000. Now you're the filter.",
    },
    {
      n: "02",
      title: "The vetting tax",
      body: "Resume screens, interviews, mock calls, reference checks. Fifteen-plus hours of your time per hire — and at the end you're still guessing.",
    },
    {
      n: "03",
      title: "The onboarding dead zone",
      body: "Even a strong rep sits idle for a week while you write an SOP and explain your offer from scratch. Your booked calls go cold waiting.",
    },
    {
      n: "04",
      title: "The bad-hire reset",
      body: "Six weeks in, they can't close. You've eaten the lost pipeline and the base salary — and now you start the entire cycle again at zero.",
    },
  ],
};

export const how = {
  eyebrow: "How it works",
  heading: { pre: "Four Steps.", accent: "One Day.", post: "" },
  sub: "From first conversation to a rep taking live calls on your offer.",
  steps: [
    {
      n: "01",
      time: "30 minutes",
      title: "Offer Intake",
      body: "We map your offer, price point, ideal buyer, objections, and sales process into a rep-ready brief. One call — you talk, we build.",
      bullets: ["Offer & pricing breakdown", "Buyer profile and objections", "Your existing call flow and CRM"],
    },
    {
      n: "02",
      time: "Same day",
      title: "Rep Matched",
      body: "We pull from a bench of 300+ pre-vetted closers and setters and match reps who have already sold offers at your price point in your market.",
      bullets: ["Matched on price point and niche", "Track record already verified", "You approve before we install"],
    },
    {
      n: "03",
      time: "Next morning",
      title: "Installed & Closing",
      body: "Your rep receives the complete SOP and offer rundown, runs a mock call with our coaches, and is on live calls the next morning. No onboarding week.",
      bullets: ["Complete SOP delivered day one", "Mock call cleared before going live", "Plugged into your CRM and calendar"],
    },
    {
      n: "04",
      time: "Every month after",
      title: "Coached & Tracked",
      body: "Placement is where we start, not where we stop. Weekly call reviews, mock drills, and tracked KPIs so close rate climbs month over month.",
      bullets: ["Recorded call review and scoring", "Live mock drills with our coaches", "Dashboards you can see anytime"],
    },
  ],
};

export const pillars = {
  eyebrow: "What you actually get",
  heading: { pre: "A Sales Department You", accent: "Rent", post: ", Not Build" },
  sub: "Three things a recruiter will never give you.",
  items: [
    {
      title: "The Bench",
      body: "Hundreds of closers and setters, already vetted, already proven on real offers. You pick from a roster instead of screening strangers — and if you need a second rep next month, they're already there.",
      points: ["300+ active reps", "Verified close-rate history", "Matched to your price point"],
    },
    {
      title: "The Install",
      body: "Every rep gets a complete SOP and offer rundown written for your specific offer — product, buyer, objections, pitch, process. They understand it the day they're placed and close the next day.",
      points: ["Custom SOP per offer", "Same-day handoff", "Live on calls in 24 hours"],
    },
    {
      title: "The Management",
      body: "We coach our reps continuously — call reviews, mock drills, tactical feedback — and give you the tracking software to see it. Your rep is measurably better in month three than in month one.",
      points: ["Weekly coaching cadence", "Tracked KPIs and dashboards", "Swap on request, 24-hour turnaround"],
    },
  ],
};

export const calculator = {
  eyebrow: "Run the numbers",
  heading: { pre: "What A Better Closer Is", accent: "Worth", post: " To You" },
  sub: "Set your own assumptions. The math is yours, not ours.",
  disclaimer:
    "Illustrative only. This calculator uses the numbers you enter — it is not a projection, forecast, or guarantee of results.",
};

export const pricing = {
  eyebrow: "Pricing",
  heading: { pre: "You Pay", accent: "Nothing", post: " Until They Close" },
  sub: "No retainer. No setup fee. No monthly minimum. We earn a percentage of closed revenue — which means we only get paid when you do.",
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
  body: "If a rep isn't performing on your offer, you tell us and we replace them — from the same pre-vetted bench, onboarded and live within a day. You never restart a hiring process, and you never pay for the gap. That's only possible because we hold the roster, not a résumé pile.",
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
  heading: { pre: "If You Have An Offer And", accent: "Lead Flow", post: "" },
  sub: "We place reps onto offers that already work. If calls are getting booked and closing is the bottleneck, this is built for you.",
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
    body: "If you don't have an offer that's already converting, or you have no lead flow for a rep to work, a closer won't fix it. We'll tell you that on the intake call instead of taking the placement.",
  },
};

export const closers = {
  eyebrow: "For closers & setters",
  heading: { pre: "Get Placed On Offers", accent: "Worth Closing", post: "" },
  body: "We don't post jobs — we place reps. Get matched to vetted offers with real lead flow, a complete SOP on day one, and coaching that actually moves your close rate. You keep your full commission; we're paid separately by the business.",
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
  heading: { pre: "Everything You're About To", accent: "Ask", post: "" },
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
  heading: "Your Next Closer Could Be On Calls Tomorrow",
  sub: "One 30-minute intake call. If your offer is a fit, we match a rep today and they're live on your calls in the morning. If it isn't, we'll tell you straight.",
  cta: "Get Matched With A Closer",
  note: "No retainer. No setup fee. You pay only when they close.",
};

export const applyForm = {
  eyebrow: "Get started",
  heading: { pre: "Tell Us About Your", accent: "Offer", post: "" },
  sub: "Takes 60 seconds. We reply within one business day with whether we have reps matched to your offer.",
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
