---
version: alpha
name: ClosingKing-design-system
description: "A near-black conversion surface for a commission-only sales-placement agency. Built on a four-step surface ladder (#08080B canvas → #101014 → #16161B → #1C1C22) with hairline borders, a single saturated red (#E5322F) used only on the wordmark, primary CTAs, focus rings and stat figures, and one atmospheric red bloom reserved for the hero VSL and the closing CTA. Type is a single geometric grotesque (Geist) from display to body with aggressive negative tracking; technical labels and eyebrows are set in Geist Mono at positive tracking, which carries the taxonomy voice. No serif, no italic display, no second accent, no decorative gradients."

colors:
  primary: "#E5322F"
  primary-hover: "#FF4A44"
  primary-press: "#C82724"
  on-primary: "#FFFFFF"
  ink: "#F5F5F7"
  ink-muted: "#A1A1AA"
  ink-subtle: "#71717A"
  ink-tertiary: "#52525B"
  canvas: "#08080B"
  surface-1: "#101014"
  surface-2: "#16161B"
  surface-3: "#1C1C22"
  hairline: "#232329"
  hairline-strong: "#2E2E36"
  inverse-canvas: "#FFFFFF"
  inverse-ink: "#08080B"
  bloom: "rgba(229,50,47,0.55)"

typography:
  display-xl: { fontFamily: Geist, fontSize: 60px, fontWeight: 600, lineHeight: 1.02, letterSpacing: -2.4px }
  display-lg: { fontFamily: Geist, fontSize: 44px, fontWeight: 600, lineHeight: 1.06, letterSpacing: -1.6px }
  display-md: { fontFamily: Geist, fontSize: 32px, fontWeight: 600, lineHeight: 1.12, letterSpacing: -1.0px }
  headline:   { fontFamily: Geist, fontSize: 24px, fontWeight: 600, lineHeight: 1.20, letterSpacing: -0.6px }
  card-title: { fontFamily: Geist, fontSize: 17px, fontWeight: 600, lineHeight: 1.30, letterSpacing: -0.3px }
  body-lg:    { fontFamily: Geist, fontSize: 17px, fontWeight: 400, lineHeight: 1.55, letterSpacing: -0.1px }
  body:       { fontFamily: Geist, fontSize: 15px, fontWeight: 400, lineHeight: 1.60, letterSpacing: 0 }
  body-sm:    { fontFamily: Geist, fontSize: 13.5px, fontWeight: 400, lineHeight: 1.55, letterSpacing: 0 }
  caption:    { fontFamily: Geist, fontSize: 12px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  button:     { fontFamily: Geist, fontSize: 14.5px, fontWeight: 500, lineHeight: 1.20, letterSpacing: -0.1px }
  eyebrow:    { fontFamily: Geist Mono, fontSize: 11px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 1.2px }
  stat:       { fontFamily: Geist, fontSize: 34px, fontWeight: 600, lineHeight: 1.0, letterSpacing: -1.2px }

rounded: { xs: 4px, sm: 6px, md: 8px, lg: 12px, xl: 16px, pill: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 88px }
---

# ClosingKing DESIGN.md

Derived from `design-md/linear.app` (surface ladder, accent scarcity, negative
tracking, hairline elevation) applied to the conversion structure of the
reference landing pages in `DESIGN-RESEARCH.md` (VSL hero, glow, stat bar,
calculator, FAQ, full-bleed closing CTA).

## Color

### Surfaces
The canvas IS the whitespace. Sections separate by lifting onto `surface-1`,
never by white gaps. Four steps only — do not skip levels.

| Level | Value | Use |
|---|---|---|
| canvas | `#08080B` | Page ground |
| surface-1 | `#101014` | Default cards, panels |
| surface-2 | `#16161B` | Hovered / featured cards |
| surface-3 | `#1C1C22` | Inputs, chips, nested surfaces |

### Accent scarcity — the governing rule
`{colors.primary}` red appears ONLY on:
1. the wordmark's crown,
2. primary CTA fills,
3. focus rings,
4. stat figures and the calculator's headline number,
5. the hero VSL bloom and the closing CTA band.

It never appears on: section headings, body copy, card borders at rest,
checkmarks, list bullets, or icons. **If red is doing decoration, remove it.**

### Text
`ink` headlines · `ink-muted` body · `ink-subtle` captions and meta ·
`ink-tertiary` footnotes and legal.

## Typography

One family, Geist, from 60px display to 12px caption. Geist Mono carries
eyebrows and numeric labels only.

- Display ceiling is **weight 600**. Never 700+, never 800.
- Negative tracking scales with size: −2.4px at 60px (≈4%), −1.0px at 32px, 0 at body.
- Eyebrows invert this: Geist Mono, uppercase, **+1.2px positive tracking**. The
  contrast against negative-tracked display is what marks them as taxonomy.
- Sentence case for display and headlines. Uppercase only for mono eyebrows.

### Forbidden
- No serif face anywhere.
- No italic display type. An italic-serif accent word inside a sans headline is
  the single clearest tell of a generated page — it is banned outright.
- No second chromatic accent.

## Layout

- Content max width **1120px**; prose columns cap at 60ch.
- Section rhythm `{spacing.section}` 88px desktop, 56px mobile.
- Card grids 3-up desktop → 2-up tablet → 1-up mobile. Nine-item grids stay
  2-up on mobile; a nine-card single column is dead scroll.
- Card interior padding 20–24px. Testimonials 24px. CTA banners 48px.

## Elevation

Depth comes from the surface ladder plus 1px hairlines — not shadows.
The only shadows permitted are the red bloom behind the hero VSL and the
closing CTA band, and the CTA button's own colored glow.

## Shapes

Buttons and pills `{rounded.pill}` — this matches the reference pages, which
all use pill CTAs. Cards `{rounded.lg}` 12px. The VSL panel `{rounded.xl}` 16px.
Inputs `{rounded.md}` 8px. Chips `{rounded.sm}` 6px.

## Components

**`btn-primary`** — red fill, white text, pill, 12px/24px padding, min 48px tap
height, colored glow at `0 8px 30px -8px rgba(229,50,47,0.5)`.

**`btn-secondary`** — `surface-2` fill, `ink` text, 1px `hairline-strong`, pill.

**`card`** — `surface-1`, 1px `hairline`, `rounded.lg`. Hover lifts to
`surface-2` with `hairline-strong`; no transform beyond −2px, no red border.

**`vsl-panel`** — `rounded.xl`, 1px `hairline-strong`, a designed thumbnail
(brand chip, display headline, play button, optional founder inset) over a red
floor-glow, wrapped in the hero bloom. Never an empty frame.

**`eyebrow`** — Geist Mono, 11px, uppercase, +1.2px tracking, `ink-subtle`.
Optional 1px hairline rule to its left. Not red.

**`stat`** — figure in `{typography.stat}` red, label in `body-sm` `ink-subtle`.

## Do's and Don'ts

### Do
- Keep the accent scarce enough that removing it would barely change the page.
- Lead the hero with a designed VSL panel — it is the protagonist.
- Set eyebrows in mono; it is the cheapest signal of a real product team.
- Use one repeated CTA down the page with escalating copy.
- Let the surface ladder, not glow, carry hierarchy everywhere except the hero.

### Don't
- Don't use an italic serif accent word. Ever.
- Don't tint headings, checkmarks, or icons with the accent.
- Don't exceed display weight 600.
- Don't add a bloom to any section other than the hero VSL and closing CTA.
- Don't ship a light mode.
- Don't let a card grid collapse to a single column of more than four items.

## Responsive

| Breakpoint | Changes |
|---|---|
| ≥1280 | Default; grids 3-up |
| 1024 | Grids 3-up → 2-up; two-column sections stay split |
| 768 | Nav → hamburger with CTA persisting outside it; two-column → stacked |
| 480 | display-xl 60px → 34px; stat grid 2×2; comparison table → stacked rows |

Touch targets ≥48px for CTAs and inputs. Range inputs get a 26px thumb.
