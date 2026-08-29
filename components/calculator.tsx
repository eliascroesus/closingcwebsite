"use client";

import { useMemo, useState } from "react";
import { calculator } from "@/lib/content";
import { Section, SectionIntro, CTA } from "./ui";

const CLOSER_RATE = 0.1; // ~10% to the rep
const CK_RATE = 0.06; // midpoint of our 5–7%

const money = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(n)));

function Slider({
  label,
  value,
  set,
  min,
  max,
  step,
  format,
  hint,
}: {
  label: string;
  value: number;
  set: (n: number) => void;
  min: number;
  max: number;
  step: number;
  format: (n: number) => string;
  hint?: string;
}) {
  const id = label.replace(/\W+/g, "-").toLowerCase();
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-[13px] font-medium text-white/70 sm:text-sm">
          {label}
        </label>
        <output htmlFor={id} data-ck={`out-${id}`} className="text-lg font-bold tabular-nums text-accent sm:text-xl">
          {format(value)}
        </output>
      </div>
      <input
        id={id}
        type="range"
        data-ck={`in-${id}`}
        className="range mt-3.5"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => set(Number(e.target.value))}
      />
      {hint && <p className="mt-2 text-[11.5px] text-white/35">{hint}</p>}
    </div>
  );
}

export function Calculator() {
  const [price, setPrice] = useState(3000);
  const [calls, setCalls] = useState(80);
  const [current, setCurrent] = useState(18);
  const [projected, setProjected] = useState(30);

  const r = useMemo(() => {
    const currentRev = price * calls * (current / 100);
    const projectedRev = price * calls * (projected / 100);
    const closerCut = projectedRev * CLOSER_RATE;
    const ckCut = projectedRev * CK_RATE;
    return {
      currentRev,
      projectedRev,
      closerCut,
      ckCut,
      youKeep: projectedRev - closerCut - ckCut,
      added: projectedRev - currentRev,
    };
  }, [price, calls, current, projected]);

  return (
    <Section id="calculator">
      <SectionIntro
        eyebrow={calculator.eyebrow}
        heading={calculator.heading}
        sub={calculator.sub}
      />

      <div className="card mt-9 overflow-hidden !rounded-2xl sm:mt-11">
        <div className="grid lg:grid-cols-[1.05fr_1fr]">
          {/* RESULT — rendered first on mobile so the number stays visible
              above the thumb while sliders are dragged; moves right on desktop. */}
          <div className="order-1 border-b border-hairline bg-[radial-gradient(ellipse_at_50%_0%,rgba(240,178,60,0.18),transparent_65%)] p-5 sm:p-7 lg:order-2 lg:border-b-0 lg:border-l lg:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
              Added revenue per month
            </p>
            <p data-ck="added" className="mt-2 text-[2.5rem] font-extrabold leading-none tracking-tight text-accent tabular-nums sm:text-[3.25rem]">
              {r.added >= 0 ? "+" : "−"}
              {money(Math.abs(r.added))}
            </p>
            <p data-ck="vs" className="mt-2.5 text-[13px] text-white/45">
              vs. {money(r.currentRev)}/mo at your current close rate
            </p>

            <dl className="mt-6 space-y-0 divide-y divide-hairline border-y border-hairline">
              <Row hook="projected" label="Projected monthly revenue" value={money(r.projectedRev)} />
              <Row hook="closer" label="Closer commission (10%)" value={`− ${money(r.closerCut)}`} muted />
              <Row hook="ck" label="ClosingKing (6%)" value={`− ${money(r.ckCut)}`} muted />
              <Row hook="keep" label="You keep" value={money(r.youKeep)} strong />
            </dl>

            <div className="mt-6 flex items-center justify-between gap-4 rounded-xl border border-accent/25 bg-accent/[0.07] px-4 py-3.5">
              <span className="text-[13px] font-medium text-white/75">
                Upfront cost to start
              </span>
              <span className="text-xl font-extrabold text-accent sm:text-2xl">$0</span>
            </div>

            <p className="mt-5 text-[11px] leading-relaxed text-white/30">
              {calculator.disclaimer}
            </p>
          </div>

          {/* INPUTS */}
          <div className="order-2 space-y-6 p-5 sm:space-y-7 sm:p-7 lg:order-1 lg:p-8">
            <Slider
              label="Your offer price"
              value={price}
              set={setPrice}
              min={500}
              max={25000}
              step={100}
              format={money}
            />
            <Slider
              label="Qualified calls per month"
              value={calls}
              set={setCalls}
              min={10}
              max={300}
              step={5}
              format={(n) => String(n)}
            />
            <Slider
              label="Your close rate today"
              value={current}
              set={setCurrent}
              min={1}
              max={60}
              step={1}
              format={(n) => `${n}%`}
            />
            <Slider
              label="Close rate with a ClosingKing rep"
              value={projected}
              set={setProjected}
              min={1}
              max={70}
              step={1}
              format={(n) => `${n}%`}
              hint="You set this assumption — we don't. Model it conservatively."
            />

            <div className="pt-1">
              <CTA className="w-full sm:w-auto">See If Your Offer Qualifies</CTA>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Row({
  label,
  value,
  muted,
  strong,
  hook,
}: {
  label: string;
  value: string;
  muted?: boolean;
  strong?: boolean;
  hook?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <dt className={`text-[13px] ${muted ? "text-white/40" : "text-white/65"}`}>
        {label}
      </dt>
      <dd
        data-ck={hook}
        className={`tabular-nums ${
          strong
            ? "text-base font-bold text-white sm:text-lg"
            : muted
              ? "text-[13px] text-white/40"
              : "text-sm font-semibold text-white/85"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}
