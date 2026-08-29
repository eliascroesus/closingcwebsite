import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Lead = Record<string, string>;

const REQUIRED = ["name", "email", "phone", "company"] as const;
const MAX_LEN = 2000;

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string,
  );

export async function POST(req: Request) {
  let body: Lead;
  try {
    body = (await req.json()) as Lead;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: silently accept so bots don't learn they were caught.
  if (body.company_website) {
    return NextResponse.json({ ok: true });
  }

  const lead: Lead = {};
  for (const [k, v] of Object.entries(body)) {
    if (typeof v === "string") lead[k] = v.trim().slice(0, MAX_LEN);
  }

  const missing = REQUIRED.filter((f) => !lead[f]);
  if (missing.length) {
    return NextResponse.json(
      { error: `Please fill in: ${missing.join(", ")}.` },
      { status: 400 },
    );
  }
  if (!isEmail(lead.email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Company / offer", lead.company],
    ["Needs", lead.role || "—"],
    ["Offer price", lead.price || "—"],
    ["Calls per month", lead.volume || "—"],
    ["Notes", lead.message || "—"],
  ];

  const html = `
    <h2 style="font-family:system-ui,sans-serif">New ClosingKing lead</h2>
    <table style="font-family:system-ui,sans-serif;border-collapse:collapse">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 14px 6px 0;color:#666;vertical-align:top"><strong>${esc(k)}</strong></td><td style="padding:6px 0">${esc(v)}</td></tr>`,
        )
        .join("")}
    </table>`;

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  const {
    RESEND_API_KEY,
    LEAD_NOTIFICATION_EMAIL,
    LEAD_FROM_EMAIL,
    LEAD_WEBHOOK_URL,
  } = process.env;

  const delivered: string[] = [];
  const failures: string[] = [];

  // 1) Email via Resend
  if (RESEND_API_KEY && LEAD_NOTIFICATION_EMAIL) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: LEAD_FROM_EMAIL || "ClosingKing <onboarding@resend.dev>",
          to: LEAD_NOTIFICATION_EMAIL.split(",").map((s) => s.trim()),
          reply_to: lead.email,
          subject: `New lead: ${lead.name} — ${lead.company}`,
          html,
          text,
        }),
      });
      if (res.ok) delivered.push("email");
      else failures.push(`resend:${res.status}`);
    } catch {
      failures.push("resend:network");
    }
  }

  // 2) Webhook (Zapier / Make / Slack / your CRM)
  if (LEAD_WEBHOOK_URL) {
    try {
      const res = await fetch(LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...lead,
          text,
          source: "closingking.com",
          receivedAt: new Date().toISOString(),
        }),
      });
      if (res.ok) delivered.push("webhook");
      else failures.push(`webhook:${res.status}`);
    } catch {
      failures.push("webhook:network");
    }
  }

  // Nothing configured: log it so the lead is still recoverable from Vercel logs,
  // and don't fail the submission on the visitor's side.
  if (!RESEND_API_KEY && !LEAD_WEBHOOK_URL) {
    console.warn(
      "[apply] No RESEND_API_KEY or LEAD_WEBHOOK_URL set — lead only logged:\n" + text,
    );
    return NextResponse.json({ ok: true, delivered: ["log"] });
  }

  // Every configured channel failed — tell the visitor so the lead isn't lost.
  if (!delivered.length) {
    console.error("[apply] delivery failed:", failures.join(", "), "\n" + text);
    return NextResponse.json(
      { error: "We couldn't submit that. Please email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, delivered });
}
