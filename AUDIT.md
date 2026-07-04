# VALDR STUDIO — Project Audit
*Read-only audit, generated 2026-07-03. No code was changed.*

## Stack summary

- **Framework:** Next.js `^16.2.6`, App Router (`app/` directory present, no `pages/`).
- **React:** `19.2.4` / `react-dom` `19.2.4`.
- **Language:** TypeScript `^5`, `tsconfig.json` present, strict App Router types (`next-env.d.ts`).
- **Styling:** Tailwind CSS v4 (`tailwindcss ^4`, `@tailwindcss/postcss ^4`). No `tailwind.config.js/ts` file exists — v4's CSS-first config is used via a single `@import "tailwindcss";` in [app/globals.css](app/globals.css). There are **no custom theme tokens defined anywhere** (no `@theme` block) — every color/spacing/radius value in the codebase is a raw Tailwind utility or an arbitrary-value bracket (`bg-[#0A0A0A]`, `blur-[140px]`, etc.).
- **Animation:** `framer-motion ^12.38.0` (used in [components/Reveal.tsx](components/Reveal.tsx) and the unused [components/FadeIn.tsx](components/FadeIn.tsx)). Plus hand-rolled CSS `@keyframes` injected via a `<style>` tag for the hero's binary-rain background.
- **Icons:** `lucide-react ^1.16.0`.
- **Payments:** `stripe ^22.1.1`, one API route at [app/api/checkout/route.ts](app/api/checkout/route.ts).
- **Chat widget:** Tawk.to, loaded via `next/script` in [components/TawkChat.tsx](components/TawkChat.tsx).
- **Fonts:** **No `next/font` usage anywhere**, despite the stock `README.md` still claiming the project "uses next/font... to load Geist." Actual font stack in [app/globals.css](app/globals.css) line 21: `font-family: Arial, Helvetica, sans-serif;` — this is a plain system fallback stack, not a loaded webfont.
- **Images:** `next/image` is used consistently for content images (work cards, case-study pages), always with either `fill` + `sizes`, or explicit `width`/`height`. The logo and nav use `next/image` too. Good adherence to Next's image component — no raw `<img>` tags found.
- **i18n:** No routing-based i18n (no `[lang]` segments, no `next-intl`/`next-i18next`). Bilingual EN/SR is implemented entirely client-side in [app/page.tsx](app/page.tsx): a single `copy` object keyed by `"en" | "sr"`, a `useState<Language>` in the `Home` component, and persistence via `window.localStorage.getItem("valdr-language")`. This means:
  - The homepage is **fully client-rendered** (`"use client"` at the top of `page.tsx` — the entire homepage, including all static marketing copy, ships as a client component).
  - No `lang` attribute switching (`<html lang="en">` is hardcoded in [app/layout.tsx](app/layout.tsx) regardless of selected language).
  - No SEO-visible language variants — a crawler only ever sees the `en` default before hydration flips it.
  - Language choice does not affect the `<title>`/`<meta>` in `layout.tsx` (all metadata is English-only, hardcoded).
- **`.claude/skills/`:** does **not exist** in this repo yet. Nothing to account for before installing the planned redesign skills.

## Folder structure

```
app/
  layout.tsx            — root layout, metadata, no fonts, no providers
  page.tsx              — the ENTIRE homepage (~1480 lines): all copy, all sections, 3 inline components
  globals.css           — 25 lines: Tailwind import + 2 CSS vars (unused) + body defaults
  favicon.ico
  api/checkout/route.ts — Stripe Checkout session creation (POST only)
  success/page.tsx      — Stripe success redirect page
  cancel/page.tsx       — Stripe cancel redirect page
  work/
    jovan-pt/page.tsx           — case-study page, own local GlowCard, English-only
    v-company/page.tsx          — case-study page, English-only, "In Progress" placeholder
    restoran-avlija/page.tsx    — case-study page, English-only, "In Progress" placeholder
components/
  CheckoutButton.tsx     — DEAD CODE: not imported anywhere
  FadeIn.tsx             — DEAD CODE: not imported anywhere
  Reveal.tsx             — ACTIVE: used 7x in page.tsx for scroll reveal
  ScrollReveal.tsx       — DEAD CODE: not imported anywhere (relies on a `.valdr-reveal` class that doesn't exist in the codebase)
  TawkChat.tsx           — ACTIVE: mounted once at the bottom of page.tsx
public/
  images/ (6 files, several 600KB–2MB unoptimized PNGs — see debt section)
  file.svg, globe.svg, next.svg, vercel.svg, window.svg — stock create-next-app assets, unused
```

## Design tokens actually in use (colors / type / spacing / radius / shadow / motion)

Nothing below is formally defined as a token — this is reverse-engineered from literal values across the codebase.

### Color
| Use | Value(s) | Where |
|---|---|---|
| Page background | `#0A0A0A` (also `#080808`, `#111111` in a 3-stop gradient) | `globals.css` body; `page.tsx` main `bg-[linear-gradient(to_bottom,#080808_0%,#0A0A0A_35%,#111111_100%)]` |
| Text primary | `#ffffff` / `text-white` | global |
| Text secondary | `text-neutral-400` | body copy, most descriptions |
| Text tertiary | `text-neutral-500` | eyebrows, captions, footnotes |
| Text quaternary | `text-white/40`, `text-white/45`, `text-white/60` | About section only — a different opacity-based scale than the `neutral-4xx/5xx` scale used elsewhere |
| Borders | `border-white/10` (default), `border-white/20`/`border-white/25` (hover) | near-universal card/section border treatment |
| Card fill | `bg-white/[0.03]` (most common), also `bg-white/[0.02]`, `bg-white/[0.025]`, `bg-white/[0.04]`, `bg-white/[0.045]` | cards, icon chips, section wrappers — **6 different near-identical white-opacity values used interchangeably with no naming**, effectively random micro-variance |
| Accent — Jovan PT (Live) | yellow `yellow-300/yellow-500` (border/bg/text at `/10`–`/25` opacity) | work card + case-study badge |
| Accent — V-Company | sky `sky-300/sky-400/sky-200` | work card + case-study badge |
| Accent — Restoran Avlija | amber `amber-300/amber-400/amber-200` | work card + case-study badge |
| CTA (primary button) | white bg / black text | every primary CTA site-wide — consistent |
| CTA (secondary button) | `border-white/10 bg-white/5` | consistent |

Two unused CSS custom properties exist in `globals.css` (`--background: #0A0A0A`, `--foreground: #ffffff`) — declared but never referenced via `var()` anywhere; all colors are hardcoded Tailwind arbitrary values instead.

The three "In Progress" project accent colors (yellow/sky/amber) appear to be **arbitrarily assigned per project** rather than semantically meaningful (e.g., not status-coded — Jovan PT is "Live" but still uses the same visual treatment class as the "In Progress" tag pattern).

### Typography
- **Font family:** Arial/Helvetica system stack only. No display/serif pairing, no variable font, no `next/font` optimization, no `font-display` control.
- **Headings:** `font-semibold` almost everywhere; case-study pages (`jovan-pt`, `v-company`, `restoran-avlija`) use `font-bold` instead — an inconsistency between homepage section headers and case-study `<h1>`s.
- **Type scale in use (ad hoc, not a defined scale):** `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`, `text-6xl`, `text-7xl`, plus raw pixel overrides `text-[44px]` (hero mobile H1) and `text-[38px]` (mobile contact H2). Hero H1 alone spans `text-[44px] sm:text-6xl lg:text-5xl` — **note `lg:text-5xl` is smaller than `sm:text-6xl`**, i.e., the heading shrinks going from tablet to desktop, which is almost certainly an unintended regression, not a deliberate choice.
- **Tracking:** `tracking-tight` on most headings; `tracking-[0.3em]` / `tracking-[0.25em]` / `tracking-[0.2em]` used interchangeably for "eyebrow" labels across sections with no single standard.
- **Line-height:** mixes Tailwind's `leading-relaxed`/`leading-tight`/`leading-7`/`leading-8` and arbitrary `leading-[0.98]`/`leading-[1.02]`/`leading-[0.95]` for hero/CTA headlines — again, ad hoc per section rather than a shared scale.

### Spacing / layout
- Container: `max-w-7xl` used almost everywhere (`max-w-5xl` and `max-w-6xl` used once each, for Contact and Hero respectively — inconsistent max-width across sections with otherwise identical visual rhythm).
- Section vertical padding: mostly `py-32`, Contact uses `py-36`, Proof strip uses `py-14` — again ad hoc, not a spacing scale.
- Grid gaps: `gap-6`, `gap-8`, `gap-10`, `gap-14`, `gap-16` used across different sections with no evident system (e.g. Services grid uses `gap-6`, Work grid `gap-8`, About grid `gap-16` — for visually comparable card grids).

### Border-radius
- Cards/sections: `rounded-[28px]`, `rounded-[32px]`, `rounded-[36px]`, `rounded-2xl` (16px), `rounded-3xl` all appear across supposedly similar card components. `GlowCard` (homepage) uses `rounded-[28px]`/`rounded-[36px]`; the **separate, duplicated `GlowCard` in `jovan-pt/page.tsx`** uses `rounded-[28px]` only and has a visually different glow technique (see Component patterns below).
- Buttons: `rounded-full` — this one is consistent site-wide.

### Shadows / glows
No shared shadow tokens. Every glow/shadow is a bespoke `blur-[Npx]` radial or `shadow-[0_Npx_Npx_rgba(...)]` arbitrary value, hand-tuned per section (hero atmosphere blobs, work-card hover shadows, GlowCard border glow, case-study hero image glow). At least 15 distinct blur radii (`blur-[90px]` through `blur-[150px]`) are used across the homepage alone.

### Motion
- **Framer Motion** via [components/Reveal.tsx](components/Reveal.tsx): a `whileInView` wrapper with 4 direction variants (up/down/left/right), `viewport={{ once: false, amount: 0.22 }}` — note `once: false`, meaning every section **re-animates every time it re-enters the viewport** (scrolling back up retriggers it). Applied to 7 of 9 homepage sections (Proof, Services, Work, Process, About, Testimonials, Booking, Payment, Contact — Hero and Nav are not wrapped).
- **Dead alternative implementation:** [components/FadeIn.tsx](components/FadeIn.tsx) is a second, more elaborate Framer Motion wrapper (mobile/desktop-aware variants, `once: true`) that is never imported — an abandoned iteration left in the tree.
- **Dead alternative implementation #2:** [components/ScrollReveal.tsx](components/ScrollReveal.tsx) is a third, IntersectionObserver-based (non-Framer) reveal system targeting a `.valdr-reveal` class that doesn't exist anywhere in the CSS or markup — fully non-functional even if it were imported.
- **Hero binary-rain effect:** `BinaryCodeRain`, a ~200-line inline component in `page.tsx` (lines 486–670) rendering 8 column-groups × 4 streams of animated binary-digit strings via raw CSS `@keyframes` (`valdrBinaryDownA`–`D`, `valdrBinaryUpA`–`D`) injected through a `<style>` tag. `hidden xl:block` — desktop-only (≥1280px), a valid perf/scope decision (avoids paying its cost on mobile), but it's substantial bespoke code for what's a background flourish, and it's unique to the hero with no reuse elsewhere.
- Standard hover transitions (`transition duration-300/500/700`, `hover:scale-105`, `hover:-translate-y-2`) are the site-wide interaction pattern — consistent.

## Section-by-section breakdown

All sections below are rendered from the single file [app/page.tsx](app/page.tsx) — there is **no per-section component decomposition** on the homepage. Content is data-driven (from the `copy` object, `t.<section>`), but markup/JSX is fully duplicated per section.

| Section | Renders from | Content source | Responsiveness | Notes / shortcuts |
|---|---|---|---|---|
| **Navbar** | inline in `Home()`, lines 694–758 | `t.nav` | Nav links hidden below `md`; no mobile menu/hamburger at all — nav links simply disappear on mobile with no replacement | No mobile navigation exists. Language switcher and "Start Project" CTA remain visible on mobile; the 5 anchor links (Services/Work/Process/Booking/Contact) are **only reachable by scrolling** on small screens. |
| **Hero** | inline, lines 761–812 | `t.hero` | `text-[44px] sm:text-6xl lg:text-5xl` — see typography bug above (desktop H1 smaller than tablet) | 6 stacked absolutely-positioned gradient/blur decorative layers plus `BinaryCodeRain`; heavy visual layering for one hero. |
| **Proof strip** | inline, wrapped in `<Reveal direction="up">`, lines 815–828 | `t.proof` (array of 3) | `grid md:grid-cols-3`, stacks on mobile | Simple, no issues. |
| **Services** | inline, wrapped in `Reveal`, lines 831–867 | `t.services.items` (4, with `lucide-react` icon components stored directly in the data object) | `md:grid-cols-2 lg:grid-cols-4` | Icons stored as component references inside the bilingual `copy` object is a slightly unusual pattern (icons duplicated identically in both `en` and `sr` blocks — icon has no locale, so this is redundant data, though harmless). |
| **Selected Work** | inline, wrapped in `Reveal`, lines 870–1081 | Mix: **hardcoded** external links/images for Bor Bus App & Pesmarica (2 fully static cards with no data object, hrefs hardcoded to Netlify URLs), **hardcoded** internal `Link`s to `/work/jovan-pt`, `/work/v-company`, `/work/restoran-avlija`; copy per-card comes from `t.work.*` | `lg:grid-cols-3`, 5 cards total (uneven grid: 5 items in a 3-col grid leaves a dangling last row of 2) | Most technical debt in the file: 5 near-identical card blocks (~230 lines) copy-pasted with only image/href/tag/accent-color changed — a clear candidate for a `WorkCard` component. Tag/accent colors (yellow/sky/amber) are hardcoded per card, not derived from data. |
| **Process** | inline, wrapped in `Reveal direction="left"`, lines 1084–1123 | `t.process.items` (4, with icons) | `lg:grid-cols-4` | Reuses homepage `GlowCard`, consistent. |
| **About** | inline, wrapped in `Reveal`, lines 1126–1182 | `t.about.*` | `lg:grid-cols-2` | Founder name "Davor Radivojevic" is hardcoded in JSX (line 1145) rather than in the `copy` object, so it's not part of the translation data even though it's interpolated mid-sentence with translated text around it. |
| **Testimonials** | inline, wrapped in `Reveal`, lines 1185–1216 | `t.testimonials.items` (3) | `lg:grid-cols-3` | Testimonials are attributed to **projects** (Bor Bus App, Pesmarica App, Jovan PT), not named clients/people — worth flagging for the design conversation: these read as project blurbs, not third-party social proof. |
| **Booking** | inline, wrapped in `Reveal direction="left"`, lines 1219–1299 | `t.booking.*` | `lg:grid-cols-[1.1fr_0.9fr]` | Calendly URL is a **hardcoded constant** (`CALENDLY_URL`, line 28) pointing directly to `https://calendly.com/radivojevicdavor79/30min` — opened via plain `<a target="_blank">`, not an embedded Calendly widget/iframe. "Booking" section is a link-out card, not an in-page scheduler. |
| **Client Payments** | inline, wrapped in `Reveal direction="right"`, lines 1302–1417 | `t.payment.*` | `lg:grid-cols-[1.05fr_0.95fr]` | This section **does not use** [components/CheckoutButton.tsx](components/CheckoutButton.tsx) or the `/api/checkout` route at all — every CTA in this section links to the same Calendly URL, not to Stripe Checkout. The Stripe integration ([app/api/checkout/route.ts](app/api/checkout/route.ts), `/success`, `/cancel` pages) exists and is presumably functional, but it is **currently unreachable from the live homepage UI** — dead integration from the visitor's perspective. `t.payment.step1/2/3` and `t.payment.button` labels literally describe "Secure payment" but the button behavior is "book a call," which is a content/behavior mismatch worth resolving before redesign. |
| **Contact** | inline, wrapped in `Reveal`, lines 1420–1476 | `t.contact.*` | separate mobile (`sm:hidden`) vs desktop (`hidden sm:block`) heading markup — a duplicated-content pattern rather than pure CSS reflow | WhatsApp number (`381611509121`) and email (`valdrstudio@gmail.com`) are hardcoded twice each (once in `href`, once as visible text for email) directly in JSX, not in the `copy` object — same untranslated-hardcoded-value pattern as the About section's founder name. |
| **Work case-study pages** (`/work/jovan-pt`, `/work/v-company`, `/work/restoran-avlija`) | 3 separate `page.tsx` files | Fully hardcoded English strings in each file (no `copy`/bilingual object at all) | Each independently responsive via its own grid | Each file **redefines its own local `GlowCard`** (structurally different from the homepage's `GlowCard` — different glow technique, no `p-[1px]` gradient border trick, uses `shadow-[...]` instead) — 3 more duplicated, drifted copies of the same concept, for 4 total `GlowCard` implementations across the codebase counting the homepage's. These pages are **entirely English-only**, breaking the bilingual promise the moment a Serbian-language visitor clicks into a case study from the homepage's SR-language Work section. |

## Inconsistencies / technical debt flagged

1. **Homepage is a single ~1480-line client component.** No section-level component extraction; all 9 sections, the navbar, and 3 inline helper components (`GlowCard`, `BinaryCodeRain`) live in one file. Makes incremental redesign work (the stated goal of the next phase) riskier — any section edit touches the same file as every other section.
2. **Three dead components** ([FadeIn.tsx](components/FadeIn.tsx), [ScrollReveal.tsx](components/ScrollReveal.tsx), [CheckoutButton.tsx](components/CheckoutButton.tsx)) are never imported anywhere. `ScrollReveal` additionally targets a CSS class (`.valdr-reveal`) that doesn't exist in the codebase — it would do nothing even if wired up.
3. **Stripe Checkout flow is fully built but disconnected from the UI.** `/api/checkout`, `/success`, `/cancel`, and `CheckoutButton` all exist and appear complete, but nothing on the homepage calls them — the "Client Payments" section's copy talks about "secure payment links" while every button in it links to Calendly instead.
4. **Bilingual coverage is inconsistent.** The homepage is fully bilingual (EN/SR) via the `copy` object, but all three `/work/*` case-study pages are English-only, and two hardcoded content fragments on the homepage itself (founder name in About, WhatsApp/email in Contact) sit outside the translation object.
5. **No `<html lang>` switching** — stays `lang="en"` regardless of selected UI language; no SEO/accessibility-correct language signaling.
6. **Entire homepage is `"use client"`.** All marketing copy (which is static per language) is client-rendered rather than server-rendered, meaning search engines and no-JS clients see only the English default with no content until hydration. Given this is a marketing site where SEO/LCP likely matters commercially, this is worth deciding on deliberately during the redesign (e.g., server-render default copy, hydrate language switch client-side).
7. **Font stack is not what the README claims.** README says the project uses `next/font` to load Geist; actual CSS is a plain `Arial, Helvetica, sans-serif` stack. Either the font setup regressed at some point or the README was never updated after bootstrapping — either way, a premium visual identity riding on system Arial is a likely redesign target.
8. **No design tokens / Tailwind v4 `@theme` block defined.** Every color, radius, shadow, and spacing value is a one-off arbitrary value. Near-identical values are used interchangeably with no naming (6+ different white-opacity fills for "card background," 4+ different border-radius values for "large rounded card," 15+ distinct blur radii for glow effects). This is the single biggest lever for the redesign: introducing an actual token layer would collapse most of the flagged inconsistencies at once.
9. **`GlowCard` is implemented 4 separate times** with drifted visual details: once in `page.tsx` (gradient-border-glow technique), and once each independently re-implemented in `jovan-pt`, `v-company`... actually only `jovan-pt/page.tsx` defines its own `GlowCard`; `v-company` and `restoran-avlija` don't use a card component at all for their layout. Still, homepage vs. `jovan-pt` alone is a confirmed drift between two "same concept" components.
10. **Missing metadata assets.** [app/layout.tsx](app/layout.tsx) references `/apple-touch-icon.png` and `/og-image.png` in its `metadata` export; **neither file exists in `public/`**. Social share previews and iOS home-screen icons are currently broken/missing.
11. **Typography scale bug:** hero `<h1>` is `text-[44px] sm:text-6xl lg:text-5xl` — the desktop breakpoint (`lg:`) renders smaller (`text-5xl` = 48px) than the tablet breakpoint (`sm:` = `text-6xl` = 60px), which looks like an unintended step-down rather than an intentional design choice.
12. **Work grid has an odd item count.** 5 cards in a `lg:grid-cols-3` grid leaves a dangling incomplete final row on large screens.
13. **Testimonials are all attributed to Valdr's own projects**, not named third-party clients — reads more as "project highlights" than independent social proof, which may undercut the section's purpose.
14. **Unoptimized image assets.** Several files in `public/images/` are large for web delivery (`avlije-preview.png` 1.7MB, `v-company-preview.png` 838KB, `ValdrStudio.png` logo 2.1MB) — `next/image` will resize/serve responsively at runtime, but the large source originals still cost build size and first-load transfer for the largest breakpoints.
15. **Stock `create-next-app` SVGs** (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`) remain in `public/` unused — harmless but not cleaned up.
16. **Two unused CSS custom properties** (`--background`, `--foreground` in `globals.css`) are declared but never consumed via `var()` — all colors are hardcoded Tailwind arbitrary values instead, so these variables are vestigial.
17. **`next.config.ts` contains a personal LAN IP** (`allowedDevOrigins: ["192.168.1.210"]`) — a local dev convenience left in the committed config; not a bug, but worth a mental note that it's environment-specific.
18. **Stray development comments left in source**: multiple `//OVDE JE DODANO//` ("ADDED HERE" in Serbian) markers remain in [app/page.tsx](app/page.tsx) and at the top of both `v-company/page.tsx` and `restoran-avlija/page.tsx` — harmless but indicates these were recent, fast-follow additions rather than planned-in from the start (consistent with the git log: "Added two more cards with clickable options to show full view").

## Open questions for the redesign conversation

1. **Scope of decomposition:** Should the redesign pass split `page.tsx` into per-section components (Hero, Services, Work, etc.) as part of the visual work, or is that considered separate refactoring to sequence before/after the design pass?
2. **Payments section intent:** Is "Client Payments" meant to actually link to Stripe Checkout going forward (reconnecting the existing dead integration), or should that section be re-scoped/rewritten to honestly describe the current Calendly-first flow?
3. **Case-study page bilingual parity:** Should `/work/jovan-pt`, `/work/v-company`, `/work/restoran-avlija` get the same EN/SR treatment as the homepage, or are they intentionally English-only (e.g., because the target clients for those case studies are English-reading)?
4. **Font direction:** Since there's currently no real typeface (system Arial), is choosing a display/body font pairing in scope for this redesign pass, or should the audit's finding just be logged for a later phase?
5. **Rendering strategy:** Is moving the homepage off `"use client"` (server-rendering copy, client-hydrating only the language switcher/animations) something you want addressed for SEO, or is that out of scope for a visual redesign?
6. **Design tokens:** Given there's no `@theme` layer today, do you want the redesign to establish one (formal color/spacing/radius/shadow scale in Tailwind v4 `@theme`) as part of this pass, or layer the new visual direction on top of the existing ad hoc arbitrary-value approach?
7. **Testimonials content:** Are real third-party client testimonials expected to replace the current project-attributed quotes at some point, and should the redesigned component be built to accommodate that (name/photo/company) even before that content exists?
8. **Dead code disposition:** Confirm it's safe to delete `FadeIn.tsx`, `ScrollReveal.tsx`, and `CheckoutButton.tsx` (or the Stripe route entirely) during the redesign, or is any of it intended for near-term reuse?
9. **Mobile navigation:** The current nav has no mobile menu — anchor links are simply invisible below `md`. Is a mobile nav/hamburger in scope for this redesign, or is mobile intentionally kept minimal (logo + language + CTA only)?
