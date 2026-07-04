# CLAUDE.md — Valdr Studio (valdrstudio.com)

> Persistent project context for Claude Code. Read this first, every session. Update the "Current state" section at the end of every phase — this file is the source of truth for where the project stands, so future sessions don't re-audit or re-guess.

## What this project is

Valdr Studio's own marketing site — a premium web design/dev studio brand (owner: Davor Radivojevic). This is the site Davor uses to land his own clients, so it doubles as a live portfolio piece. Dark, premium, tech-forward aesthetic. Next.js App Router + TypeScript + Tailwind v4. Bilingual EN/SR (client-side, `lib/copy.ts`).

## Working rules (do not deviate without flagging)

- **One task per pass.** Never bundle unrelated changes into one uncommitted diff.
- **Verification gate:** `npm run lint` + `npm run build` after every task, before moving to the next. Never leave a broken build.
- **Don't redesign or refactor beyond what the current prompt asks.** If something looks wrong but is out of scope, flag it — don't silently "fix" it.
- **Don't touch unrelated files.**
- Davor reviews and pushes to Git manually between phases — don't assume a commit was made unless told.
- When a prompt says "your call," make the decision, implement it, and clearly state what you chose and why in the summary — don't ask mid-task, don't leave it half-done.
- End-of-phase summaries go in prompt-paste format (structured Markdown) so Davor can copy them directly into the planning conversation with Claude (chat).

## Reference docs in this repo

- `AUDIT.md` — the original Phase 1 read-only audit (stack, design-token reverse-engineering, section-by-section breakdown, technical debt list, open questions). Still accurate for anything not yet marked done below.

## Current state

**Phase 1 — Audit:** ✅ Done. See `AUDIT.md`.

**Phase 2a — Decomposition + cleanup:** ✅ Done.
- `page.tsx` decomposed into `components/sections/*` (Navbar, Hero + HeroBackground, ProofStrip, Services, SelectedWork, Process, About, SelectedWorkHighlights, Booking, Payments, Contact)
- `lib/copy.ts` holds all bilingual copy
- `WorkCard.tsx`, `GlowCard.tsx` extracted as shared components
- Dead code removed (`FadeIn.tsx`, `ScrollReveal.tsx`)
- Testimonials reframed as "Selected Work Highlights" (Valdr's own projects, not third-party quotes — intentional)
- Payments section copy rewritten to be mechanism-agnostic (Stripe code exists but is intentionally NOT wired up yet — `api/checkout/route.ts`, `CheckoutButton.tsx` are dormant, keep them, don't connect or delete)
- Mobile nav drawer added (Framer Motion, right-side slide-in)
- `og-image.png` / `apple-touch-icon.png` generated from the real logo
- Known limitation: `<html lang>` defaults to `en` on SSR, updates client-side post-hydration via `useEffect`. Real SSR locale detection is a bigger scope item, not yet planned.

**Phase 2b — Design tokens + font:** ✅ Done.
- `geist` package installed; Geist Sans/Mono wired via `app/layout.tsx` (`GeistSans.variable`/`GeistMono.variable` on `<html>`) and mapped to `--font-sans`/`--font-mono` in `app/globals.css`'s `@theme`. Geist Mono applied deliberately to eyebrows, Proof strip stat titles, Booking/Payments key-value spec rows, and the hero binary-rain (already `font-mono`).
- Full Tailwind v4 `@theme` token system now lives in `app/globals.css`: `--color-bg`/`-top`/`-elevated`, `--color-text-primary/secondary/tertiary`, `--color-border`/`-hover`, `--color-surface`, `--color-cta-primary-*`/`-secondary-*`, `--color-accent-{jovan,vcompany,avlija}`, `--radius-card` (28px) / `--radius-control` (16px), `--shadow-card-hover`, `--blur-glow-{sm,md,lg}` (100/130/150px).
- Applied across every file in `components/sections/*` + `GlowCard.tsx`/`WorkCard.tsx`. Case-study pages under `app/work/*` were NOT touched (out of scope, still using raw Tailwind values).
- Old `--background`/`--foreground` vars retired in favor of `--color-bg`/`--color-text-primary`.
- Small deltas from consolidation (all confirmed visually, none flagged as concerning): Hero eyebrow brightness (neutral-400→tertiary/neutral-500, now matches every other section), WorkCard/About-card radius 32px→28px, Payments trust-card radius 24px→16px, per-project accent badges shifted to their lightest shade (yellow-500→300, sky/amber 400→200) for text-legibility reasons, Contact section padding py-36→py-32, Services + About-inner-grid gaps 6→8 to match the other card grids.
- `--color-accent-*` values were deliberately picked as each project's *lightest* shade (best for solid text use) rather than the shade used for badge border/bg — at 10-20% opacity the hue difference is imperceptible, so this was a safe way to avoid a legibility regression on the badge text.

**Phase 3 — Content fix + design skills + audit pass:** ✅ Done (Parts 0-2; no code changes from Part 2's findings yet — that's the next decision point).
- **Part 0:** Restoran Avlija removed from the Selected Work grid (`components/sections/SelectedWork.tsx`) and from `lib/copy.ts`'s `work.items` (both EN/SR) — client project on hold indefinitely. `/work/restoran-avlija` case-study route left in place, just unlinked from the homepage. Selected Work is now 4 items (Bor Bus, Pesmarica, Jovan PT, V-Company) in a clean `lg:grid-cols-2` 2×2 grid; the old `lg:col-span-2` 5-card hack is gone. `--color-accent-avlija` token left defined but unused (cheap to keep in case the client returns). **Flag:** grid column logic will need revisiting again whenever a 5th+ item is added — don't assume `lg:grid-cols-2` is permanent.
- **Part 1:** Installed `impeccable` (→ `.claude/skills/impeccable/`), `design-taste-frontend` (→ symlinked into `.claude/skills/` from `.agents/skills/design-taste-frontend/` — a cross-tool convention, both paths need to be committed for the symlink to resolve on another machine), and a `getdesign vercel` reference (→ `DESIGN.md` at root). Wrote `PRODUCT.md` via the init interview (register: brand; audience: small/mid businesses + B2B/industrial clients evaluating Valdr as a studio; personality: serious/technical/premium/quietly confident; anti-references: generic AI-template SaaS, corporate agency polish, playful startup aesthetic; no formal WCAG target set, by choice). **Flag:** `DESIGN.md` describes Vercel's actual *light-mode* palette (white canvas, dark ink) — the literal opposite polarity of this site's dark theme. That's expected (explicitly a taste reference, not a literal target) but will misread as contradictory if a future session takes it at face value. `DESIGN.md` also doesn't reflect this project's real tokens (those live in `app/globals.css`'s `@theme`); running `/impeccable document` later would regenerate it from the actual codebase — not done yet, wasn't asked for this phase.
- **Part 2:** Full audit + critique pass complete, findings delivered to Davor as a prioritized list (not yet acted on). Two independent critique assessments were run: Assessment A (design review) completed fully via sub-agent; Assessment B (detector + browser evidence) hit a session/API limit mid-run and only returned a debug fragment — rather than re-spawn it, the deterministic measurement work (contrast ratios, touch targets, focus indicators, alt text, heading hierarchy, responsive overflow, reduced-motion behavior) was done directly via Playwright instead, since that part of the task is factual measurement, not independent judgment. **Headline findings** (see chat for the full report): eyebrow-label pattern on 9 of 10 sections (both installed rule sets flag this as the top AI-tell, and `PRODUCT.md` itself already named it as a known problem before this pass even ran); `--color-text-tertiary` (neutral-500 on `--color-bg`) measures 4.18:1 contrast, below the 4.5:1 AA minimum for normal text — used sitewide (every eyebrow, captions, notes); zero `prefers-reduced-motion` handling anywhere (confirmed empirically, not just by code-reading — the hero binary-rain keeps animating with reduced-motion emulated); 8 em-dashes in `lib/copy.ts` (6 introduced during Phase 2a's Highlights reframe, 2 pre-existing in Contact copy); "premium" appears 17× in the English copy (mirrored 17× in Serbian) against `PRODUCT.md`'s own "quiet confidence, not hype language" principle; nested cards in `About.tsx`; Services/Process share one card-grid template, Booking/Payments share another; literal "Step 1/2/3" labels in `Payments.tsx`; language-toggle and hamburger touch targets measure below the 44×44px minimum on mobile.

**Phase 4 — Hero background effects:** 🔲 Not started. Plan: combined cursor-reactive grid + WebGL shader mesh background layer in `HeroBackground.tsx` (alongside the existing matrix-rain effect, not replacing it). Waiting on Davor's decision on which Phase 3 Part 2 findings to act on first, and his go-ahead to start.

**Open items waiting on Davor (not blocking, just flagged):**
- Confirm `payment` copy block in `lib/copy.ts` matches his actual manual payment process.
- Case-study pages (`/work/jovan-pt`, `/work/v-company`, `/work/restoran-avlija`) remain English-only — bilingual parity deferred, not in scope yet. They also don't use the new design tokens yet (never brought into scope across any phase).
- Decide which Phase 3 Part 2 findings to implement, and in what order — nothing from that findings list has been touched yet.
