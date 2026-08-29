# Deploying ClosingKing to Vercel

Next.js 16 (App Router). Vercel auto-detects everything — no `vercel.json`
needed, no build settings to change.

---

## 1. Push the branch and import the repo

1. Go to **https://vercel.com/new**
2. **Import** `eliascroesus/closingcwebsite`
3. Vercel detects **Next.js** and fills in the build settings automatically:
   - Framework Preset: `Next.js`
   - Build Command: `next build`
   - Output Directory: `.next`
   - Install Command: `npm install`

   Leave all of them alone.
4. Set **Production Branch** under *Settings → Git*. It defaults to `main`.
   This site currently lives on `claude/sales-staffing-agency-overview-x9k0o7`,
   so either merge that branch into `main` first, or point the production
   branch at it.

---

## 2. Environment variables

*Settings → Environment Variables.* Add each one to **Production**,
**Preview**, and **Development** unless noted.

### The site deploys and looks perfect with ZERO env vars set.

Everything below only affects **where form submissions go** and whether the
**hero video** plays. Without them the page still builds, renders, and
submits — leads just land in your Vercel runtime logs instead of your inbox.

### Required to actually receive leads — pick at least one

| Variable | Example | What it does |
|---|---|---|
| `RESEND_API_KEY` | `re_ab12...` | Emails you each lead. Get it free at [resend.com](https://resend.com) → API Keys. |
| `LEAD_NOTIFICATION_EMAIL` | `you@closingking.com` | Where leads are sent. Comma-separate for several people. |

**or**

| Variable | Example | What it does |
|---|---|---|
| `LEAD_WEBHOOK_URL` | `https://hooks.zapier.com/...` | POSTs each lead as JSON. Use for Zapier, Make, Slack, GoHighLevel, or your CRM. |

You can set both — the route delivers to every channel that's configured and
only returns an error to the visitor if *all* of them fail.

### Optional

| Variable | Example | What it does |
|---|---|---|
| `LEAD_FROM_EMAIL` | `ClosingKing <leads@closingking.com>` | Sender address. Must be on a domain verified in Resend. Falls back to Resend's shared `onboarding@resend.dev`. |
| `NEXT_PUBLIC_SITE_URL` | `https://closingking.com` | Canonical URL for SEO tags and social preview cards. Set this once your domain is live. |
| `NEXT_PUBLIC_VIDEO_URL` | `https://www.youtube.com/embed/abc123` | Turns the hero video card into a real player. Must be an **embed** URL. Unset = designed placeholder. |
| `NEXT_PUBLIC_CALENDAR_URL` | `https://calendly.com/closingking/intake` | Shows a "book your intake call" button on the form's success screen. |

> `NEXT_PUBLIC_*` variables are compiled into the browser bundle and are
> publicly visible. Never put a secret behind that prefix. `RESEND_API_KEY`,
> `LEAD_WEBHOOK_URL`, and `LEAD_NOTIFICATION_EMAIL` have no prefix on purpose —
> they stay server-side only.

**Changing an env var does not update the live site on its own.** Vercel bakes
them in at build time, so after editing any variable go to *Deployments → ⋯ →
Redeploy*.

---

## 3. Setting up Resend (5 minutes)

1. Sign up at [resend.com](https://resend.com).
2. *Domains → Add Domain* → enter `closingking.com`.
3. Add the DNS records it gives you (SPF/DKIM) at your registrar. Verification
   usually lands within a few minutes.
4. *API Keys → Create API Key* → copy it into `RESEND_API_KEY` on Vercel.
5. Set `LEAD_FROM_EMAIL` to an address on that verified domain.

Skipping domain verification still works for testing — leave `LEAD_FROM_EMAIL`
unset and Resend sends from its shared address. Do verify before you drive real
traffic; unverified senders land in spam.

---

## 4. Custom domain

1. *Settings → Domains → Add* → `closingking.com`
2. At your registrar, add what Vercel shows:
   - Apex `closingking.com` → `A` record → `76.76.21.21`
   - `www` → `CNAME` → `cname.vercel-dns.com`
3. HTTPS is provisioned automatically once DNS resolves.
4. Set `NEXT_PUBLIC_SITE_URL=https://closingking.com` and redeploy so the SEO
   and social tags point at the real domain.

---

## 5. Before you drive traffic — required content edits

All copy lives in **`lib/content.ts`**. Two blocks are marked
`!!! PLACEHOLDER` and must be replaced:

1. **`stats`** — `300+`, `24 hrs`, `5–7%`. Replace with numbers you can defend.
2. **`testimonials`** — every entry is an illustrative example, not a real
   client. Replace them with genuine, permissioned quotes, or set the array to
   `[]` and the whole section stops rendering.

Publishing invented testimonials or earnings claims is deceptive and, in most
markets, illegal. The footer disclaimer in `legal.disclaimer` is a starting
point, not legal advice — have a lawyer review it.

Also worth doing:
- Set `brand.email` to a real inbox.
- Add `/public/founder.jpg` and set `brand.founderImage = "/founder.jpg"` to
  show the headshot inset on the hero video.
- Update `public/robots.txt` if your domain isn't `closingking.com`.

---

## 6. Local development

```bash
npm install
cp .env.example .env.local   # fill in what you need
npm run dev                  # http://localhost:3000
```

```bash
npm run build && npm run start   # production build locally
```

---

## Troubleshooting

**Form says "couldn't submit that"** — every configured delivery channel
failed. Check *Vercel → Deployments → Runtime Logs* for `[apply]`. Usually a
bad `RESEND_API_KEY` or an unverified `LEAD_FROM_EMAIL` domain.

**Leads vanish** — no `RESEND_API_KEY` and no `LEAD_WEBHOOK_URL` set. They're
in the runtime logs under `[apply]`, but nothing is emailing them to you.

**Hero video shows the placeholder** — `NEXT_PUBLIC_VIDEO_URL` is unset, or
it's a watch URL rather than an embed URL. Use
`https://www.youtube.com/embed/VIDEO_ID`, not `https://youtube.com/watch?v=...`.

**Env var change had no effect** — redeploy. `NEXT_PUBLIC_*` values are
compiled into the bundle at build time.
