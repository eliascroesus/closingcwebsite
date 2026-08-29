---
version: alpha
name: ClosingKing-design-system
description: "A near-black conversion surface for a commission-only sales-placement agency. Built on a four-step surface ladder (#0C0620 canvas → #150932 → #1B0D40 → #23124F) with hairline borders, a brighter purple (#B07CFF) used only on the wordmark, primary CTAs, focus rings and stat figures, and one atmospheric red bloom reserved for the hero VSL and the closing CTA. Type is a single geometric grotesque (Geist) from display to body with aggressive negative tracking; technical labels and eyebrows are set in Geist Mono at positive tracking, which carries the taxonomy voice. No serif, no italic display, no second accent, no decorative gradients."

colors:
  primary: "#B07CFF"
  primary-hover: "#C79EFF"
  primary-press: "#9457E8"
  on-primary: "#FFFFFF"
  ink: "#F5F1FC"
  ink-muted: "#AC9FCB"
  ink-subtle: "#8175A6"
  ink-tertiary: "#5B4E7D"
  canvas: "#0C0620"
  surface-1: "#150932"
  surface-2: "#1B0D40"
  surface-3: "#23124F"
  hairline: "#301C5C"
  hairline-strong: "#422880"
  inverse-canvas: "#FFFFFF"
  inverse-ink: "#0C0620"
  bloom: "rgba(176,124,255,0.45)"

typography:
  hero:       { fontFamily: Anton, fontSize: 128px, fontWeight: 400, lineHeight: 0.86, letterSpacing: -0.015em, textTransform: uppercase }
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
| canvas | `#0C0620` | Page ground |
| surface-1 | `#150932` | Default cards, panels |
| surface-2 | `#1B0D40` | Hovered / featured cards |
| surface-3 | `#23124F` | Inputs, chips, nested surfaces |

### Accent scarcity — the governing rule
`{colors.primary}` purple appears ONLY on:
1. the wordmark's crown,
2. primary CTA fills,
3. focus rings,
4. stat figures and the calculator's headline number,
5. the hero VSL bloom and the closing CTA band,
6. the second line of the H1 only — the hero's payoff phrase, mirroring the
   reference pages. Exactly one heading on the page may carry it.

It never appears on: section headings below the hero, body copy, card borders
at rest, checkmarks, list bullets, or icons. **If the accent is doing decoration, remove it.**

### Text
`ink` headlines · `ink-muted` body · `ink-subtle` captions and meta ·
`ink-tertiary` footnotes and legal.

## Typography

Two families, deliberately different registers:

- **Geist** — headlines only (`.t-display`, `.t-section`, `.t-headline`,
  `.t-card`, `.t-stat`). Tight, neutral, heavy.
- **Instrument Sans** — body, UI, form fields, everything else.
- **Geist Mono** — eyebrows and numeric labels only.
- **Instrument Serif italic** — the hero's accent line and nothing else.

- Display runs at **weight 680** in the hero, 600 for section headings. Never 800.
- Negative tracking scales with size: −2.4px at 60px (≈4%), −1.0px at 32px, 0 at body.
- Eyebrows invert this: Geist Mono, uppercase, **+1.2px positive tracking**. The
  contrast against negative-tracked display is what marks them as taxonomy.
- Sentence case for display and headlines. Uppercase only for mono eyebrows.

### Headline sizing

The H1 is Geist at `clamp(2.125rem, 4.6vw, 3.5rem)` — sized to carry a full
sentence. An earlier pass ran it at poster scale in a condensed face, which
looked striking but only fit two or three words; that left no room to say
anything, so it was reverted. A headline that states the whole offer beats a
bigger one that states a category.

### The one italic serif
`.t-hero-accent` — the second line of the H1 — is set in **Instrument Serif**
italic, matching how the reference page sets its own payoff phrase. Playfair
Display was tried first and rejected: it is a high-contrast didone with ball
terminals and reads decorative, where the reference uses a moderate-contrast
modern serif.

Its metrics have to be tuned, or the two headline lines drift apart. Current
values: `font-size: 1.52em`, `line-height: 0.84`, `margin-top: -0.02em`,
`padding-bottom: 0.1em`. At a 64px sans line that puts the serif at 97px with
a −2px gap between the two.

**The rule:** whenever the serif's size changes, its line-height must come
down with it. A larger font-size on its own opens the gap — the two moves are
a pair, not independent. `.t-display` sits at `line-height: 0.97` to match.

This is a deliberate, single-instance exception requested for the hero. An
italic serif used *anywhere else* — section headings, card titles, pull quotes
— is still the clearest tell of a generated page. One line, one place.

### Forbidden
- No serif outside `.t-hero-accent`.
- No second chromatic accent.

## Layout

- Content max width **1080px**; prose columns cap at 60ch.
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

**`btn-primary`** — purple fill, near-black ink, pill, 12px/24px padding, min 48px tap
height, colored glow at `0 8px 30px -8px rgba(176,124,255,0.55)`.

**`btn-secondary`** — `surface-2` fill, `ink` text, 1px `hairline-strong`, pill.

**`card`** — `surface-1`, 1px `hairline`, `rounded.lg`. Hover lifts to
`surface-2` with `hairline-strong`; no transform beyond −2px, no red border.

**`vsl-panel`** — `rounded.xl`, 1px `hairline-strong`, a designed thumbnail
(brand chip, display headline, play button, optional founder inset) over a
accent rim, wrapped in the hero bloom. Its interior is lifted with a
gradient so it sits inside the hero field rather than punching a hole in it.
Never an empty frame. The primary CTA sits **below** this panel — the video is
the pitch, so the ask comes after it.

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

## Section order

The page follows the buyer's decision sequence, not our org chart. A visitor
deciding whether to book a call asks, in this order:

1. **What is this?** — hero, VSL, stat bar
2. **What does it cost me?** — pricing. First question for a commission-only
   offer, so it gets the first section after the fold.
3. **How does it work?** — the four-step install
4. **What if it goes wrong?** — the swap guarantee
5. **What's it worth to me?** — the calculator, once cost and risk are settled
6. **Am I a fit?** — who this is for
7. **Anything left?** — FAQ, then the form

Problem-agitation sections were removed: the visitor already knows hiring
closers is painful, so restating it spends attention without buying trust.

## The fold's copy structure

Taken from BEC Growth. The pill above the headline is not a label — it is the
**first clause of a sentence the headline finishes**:

> *pill:* in 24 hours, you will
> *line 1:* Have A Proven Closer
> *line 2:* On Your Offer

Rules that follow:
- The pill is **lowercase sentence case**, in the accent colour — not a mono
  uppercase eyebrow. It only works if it reads as speech.
- **Line 2 is larger than line 1** (1.14em) and carries the accent plus a soft
  text-glow (`.t-hero-accent`). The reference sets it in an italic serif; we
  get the same hierarchy from size, colour and glow, because the italic-serif
  accent is banned elsewhere in this document.
- The subhead is **one line** that qualifies the claim, never a paragraph.
- The CTA carries scarcity, not just an action.

## Working with a light accent

The accent sits high in the luminance range, so **anything placed on it
takes near-black ink** (`on-primary` `#120726`), never white. The CTA measures
6.6:1 that way.

Purple over a near-black ground has no colour-mixing problem, so the hero wash
may carry the accent rather than being held to a rim.

### Palette history
Gold, red, violet, electric blue, neon yellow and amber were each tried and
rejected. Two lessons worth keeping: an under-saturated accent on a same-hue
ground reads as mud (the `#F0B23C` gold), and a near-white accent over a
saturated ground mixes toward a third colour (yellow over navy went green).
The ground must be **both dark and saturated**, which took three passes to
land. `#1B0F38` at 0.34 spotlight read as washed lavender. Dropping to
`#150929` at 0.20 fixed the brightness but went grey-purple — desaturated, not
dark purple. `#240E5E` restored the saturation but was too light again. The
resting values are gradient `#190A42` with the spotlight at 0.17 over a
`#0C0620` canvas: saturated enough to read purple, dark enough to stay dark. Purple on a dark purple
ground is the current direction: same-family ground
and accent, separated by luminance rather than hue, which avoids both failure
modes above.

## The hero field

Five stacked layers, in paint order. None is a stock mesh gradient, and the
grain is what keeps the rest from reading as flat CSS:

1. `field-wash` — violet-to-canvas vertical wash with a cooler blue offset
2. `field-spot` — a broad spotlight the headline sits inside
3. `field-dots` — fine dot texture, radially masked
4. `field-grain` — inline SVG turbulence at low opacity, `soft-light`
5. `field-vignette` — pulls the corners down so the centre reads as lit

A concentric-ring layer was tried here and removed: it drew attention to the
background instead of the headline.

Keep the wash luminous. An earlier pass based it on `#0D0A1A` with grain at
0.34 `overlay`; it read as murk. Light should look like it falls onto the
content, never like the page is dim.

The nav is hidden over the hero and slides in past 560px, so the hero carries
its own wordmark — on one row with the status chip, to start the fold higher.
