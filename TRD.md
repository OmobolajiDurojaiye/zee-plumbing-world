# TRD — Zee Plumbing World Nig Ltd Website

> **Audience:** AI coding agent + developer.
> **Read first:** `PRD.md` (what to build and how it must look). This document is **how to build it**.
> The Mendx screenshots are the visual source of truth. Do not redesign.

---

## 1. Tech Stack (decisions are final unless blocked)

| Concern | Choice | Notes |
|---|---|---|
| Framework | **Next.js (latest stable), App Router** | Server Components by default; SSG for all marketing pages |
| Language | **TypeScript (strict)** | `noUncheckedIndexedAccess` on |
| Styling | **Tailwind CSS v4** + CSS variables for tokens | Tokens defined in `@theme` in `globals.css` |
| UI primitives | **Radix UI** (Accordion, Tabs, Dialog, Dropdown/NavigationMenu) | Accessible behavior; styled by us to match Mendx |
| Icons | **lucide-react** (outline, rounded caps) | Matches the reference icon style; custom SVGs for squiggles/house-drop icon |
| Carousel | **embla-carousel-react** | Swipe, snap, peek-neighbors on mobile |
| Animation | **motion** (Framer Motion) | Small, lazy-loaded; respects reduced motion |
| Forms | **react-hook-form + zod** | Shared schema client/server |
| Form backend | **Next.js Server Action / Route Handler** → **Resend** (email) | Honeypot + rate limit |
| Rate limiting | **Upstash Redis** (`@upstash/ratelimit`) if available, else in-memory fallback | Env-driven |
| Fonts | `next/font/local` (Cabinet Grotesk) or `next/font/google` fallback | See PRD §2.3; zero layout shift |
| Images | `next/image`, AVIF/WebP | Blur placeholders for gallery |
| SEO | Metadata API, `sitemap.ts`, `robots.ts`, JSON-LD, `opengraph-image` | See §7 |
| Analytics | GA4 (via `@next/third-parties`) **or** Plausible | Custom events in §9 |
| Hosting | **Vercel** | Preview deploys per PR; production on custom domain |
| DNS/CDN (optional) | Cloudflare in front of the domain | |
| Package manager | **pnpm** | |
| Lint/format | ESLint (next config) + Prettier + `prettier-plugin-tailwindcss` | |
| Tests | **Playwright** (smoke/e2e), **axe** (a11y), **Lighthouse CI** | |
| Git | GitHub, conventional commits, GitHub Actions CI | |

No CMS in v1. Content is typed TypeScript in `/content`. Architecture must allow swapping in Sanity/Contentful later without touching components (components receive plain props).

---

## 2. Project Structure

```
zee-plumbing-world/
├─ app/
│  ├─ (site)/
│  │  ├─ layout.tsx              # Navbar, Footer, FloatingActions, JSON-LD (LocalBusiness)
│  │  ├─ page.tsx                # Home
│  │  ├─ services/
│  │  │  ├─ page.tsx
│  │  │  └─ [slug]/page.tsx      # generateStaticParams from content/services
│  │  ├─ areas/
│  │  │  ├─ page.tsx
│  │  │  └─ [slug]/page.tsx      # generateStaticParams from content/areas
│  │  ├─ about/page.tsx
│  │  ├─ gallery/page.tsx
│  │  ├─ contact/page.tsx
│  │  ├─ faq/page.tsx
│  │  └─ privacy/page.tsx
│  ├─ api/quote/route.ts         # POST: validate → rate limit → Resend
│  ├─ opengraph-image.tsx        # Default OG (branded)
│  ├─ sitemap.ts
│  ├─ robots.ts
│  ├─ manifest.ts
│  ├─ not-found.tsx
│  ├─ icon.png / apple-icon.png  # from logo badge
│  └─ globals.css                # Tailwind + tokens
├─ components/
│  ├─ layout/    Navbar, MobileMenu, Footer, FloatingActions, Container
│  ├─ home/      Hero, ServiceFinder, BentoTrio, TopServices, EssentialsCarousel,
│  │             StatsBento, Testimonials, PopularServicesList, AreasStrip, CtaBand
│  ├─ ui/        Button, CircleArrowButton, Pill, TagPair, ColorCard, IconBadge,
│  │             Accordion, Tabs, Carousel, BeforeAfter, Lightbox, SectionHeading
│  ├─ seo/       JsonLd
│  └─ forms/     QuoteForm, fields
├─ content/
│  ├─ business.ts  contact.ts  social.ts  credentials.ts
│  ├─ services.ts  areas.ts  testimonials.ts  media.ts  faqs.ts  stats.ts
│  └─ schema.ts            # zod schemas validating all content at build time
├─ lib/
│  ├─ seo.ts               # metadata builders, JSON-LD builders
│  ├─ whatsapp.ts          # wa.me link builder
│  ├─ analytics.ts         # typed track() wrapper
│  ├─ ratelimit.ts  email.ts  env.ts (zod-validated env)
│  └─ utils.ts             # cn(), formatPhone(), etc.
├─ public/
│  ├─ brand/   logo-badge.png, logo-wordmark.(svg|png), favicons
│  ├─ images/  hero/, team/, services/, cutouts/, gallery/
│  └─ fonts/   (if self-hosting)
├─ tests/      e2e/*.spec.ts, a11y.spec.ts
├─ .github/workflows/ci.yml
├─ .env.example
├─ PRD.md  TRD.md  AGENTS.md
└─ next.config.ts  tailwind (v4 css-first)  tsconfig.json
```

---

## 3. Design Tokens (implement in `globals.css`)

```css
@import "tailwindcss";

@theme {
  /* Brand — eyedrop final values from logo, see PRD §2.1 */
  --color-navy:   #0B3F7A;
  --color-ink:    #06142B;
  --color-blue:   #1F6FD1;
  --color-sky:    #BFE3F7;
  --color-green:  #5FA83A;
  --color-mint:   #A7E8B8;
  --color-orange: #F59E1B;
  --color-coral:  #FF7A45;
  --color-cream:  #F5F0E8;
  --color-mist:   #EEF3F8;
  --color-text:   #0A1020;
  --color-muted:  #5B6475;

  --radius-card: 24px;
  --radius-img:  20px;
  --radius-btn:  12px;

  --font-sans: var(--font-grotesk), ui-sans-serif, system-ui, sans-serif;

  --container-site: 1240px;
}

:root { color-scheme: light; }
html { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } * { animation: none !important; transition: none !important; } }
```

Typographic utilities (examples):
- `.h1` → `text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] tracking-[-0.02em] font-semibold`
- `.h2` → `text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-[-0.02em] font-medium`

No dark mode in v1 (reference is light-only).

---

## 4. Component Specs (props + behavior)

Build these first; pages are just compositions.

| Component | Key props | Behavior / style notes |
|---|---|---|
| `Button` | `variant: 'primary' \| 'dark' \| 'outline' \| 'orange' \| 'whatsapp'`, `size`, `href?`, `iconRight?` | Rounded-12; primary = blue; dark = ink; includes → arrow slot |
| `CircleArrowButton` | `tone: 'white' \| 'dark' \| 'blue'`, `size`, `href?` | 50% radius, ↗ lucide `ArrowUpRight`; hover translate(2px,-2px) |
| `Pill` / `TagPair` | `children` / `left,right` | 1px ink outline, rounded-full, small text; `TagPair` renders two joined pills with sparkle `✦` before |
| `SectionHeading` | `tags?`, `title`, `description?`, `action?` | Left: tags + H2; right: paragraph + dark button (matches "Check out our top services" layout) |
| `IconBadge` | `icon`, `tone` | 40px solid circle with centered outline icon |
| `ColorCard` | `tone`, `icon`, `title`, `description`, `href` | Tall card (min-h ~340px desktop), icon badge top-left, title mid-left, description bottom; whole card is link; text color auto-chosen per tone for contrast |
| `Hero` | from `content` | Mist panel, flanking illustrations (`<Illustration side="left\|right"/>` SVG components), H1 with inline `HouseDropIcon` |
| `ServiceFinder` | `areas`, `services` | Combobox inputs (Radix Popover + cmdk-style list or native `datalist` fallback); on submit `router.push` |
| `BentoTrio` | `items[3]`, `stat` | CSS grid; middle column stacks image + blue stat card; overlay gradient caption + `CircleArrowButton` |
| `EssentialsCarousel` | `services[]` | Embla; card = colored frame (padding 10–12px) around portrait image, label top-left; prev/next circle buttons overlayed |
| `StatsBento` | `tiles[]` | Grid: 12-col on desktop with explicit tile spans replicating the screenshot; inline SVG swirl decorations absolutely positioned and clipped (`overflow-hidden`); count-up via `useInView` + `motion` |
| `Testimonials` | `items[]` | Ink panel; left stacked-photo card motif (3 layers rotated −6°/0°/+6°); right quote; Embla fade/slide; arrows |
| `PopularServicesList` | `tabs[]`, `items[]` | Radix Tabs; tab triggers are huge text (active blue, inactive `text-black/20`); rows in cream rounded container, 2 cols md+, object cutout image right, dark `CircleArrowButton` |
| `AreasStrip` | `areas[]` | Wrapped outline chips linking to area pages |
| `CtaBand` | `title`, actions | Navy rounded panel with 3 buttons |
| `FloatingActions` | — | Fixed call + WhatsApp round buttons; hides on `/contact` form focus; `aria-label`s; z-index below menus |
| `BeforeAfter` | `before`, `after` | Pointer-drag slider with keyboard (arrow keys) support, `role="slider"` |
| `QuoteForm` | `defaultService?`, `defaultArea?` | See §6 |
| `JsonLd` | `data` | Renders `<script type="application/ld+json">` with escaped JSON |

Rules:
- Default to **Server Components**; add `"use client"` only for carousels, tabs, forms, finder, count-up, mobile menu, before/after.
- Components never import content directly (except page-level); pass props in.
- Every interactive element: visible focus ring (`outline-2 outline-offset-2 outline-blue`), min 44×44px touch target.
- Contrast check per `ColorCard` tone (white text on navy/blue/ink; dark text on sky/mint/cream/orange if white fails 4.5:1).

---

## 5. Content Layer

### 5.1 Types (excerpt, `content/schema.ts`)

```ts
import { z } from "zod";

export const ServiceSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string(),
  shortDesc: z.string().max(160),
  longDesc: z.string().min(200),
  icon: z.enum(["wrench","droplets","flame","waves","siren","bath","pipette","building"]),
  tone: z.enum(["navy","sky","blue","mint","orange","coral","cream"]),
  featured: z.boolean().default(false),
  featuredOrder: z.number().optional(),
  enabled: z.boolean().default(true),
  image: z.string(),            // portrait image for carousel
  cutout: z.string().optional(),// transparent object image for list rows
  process: z.array(z.object({ title: z.string(), text: z.string() })).min(3).max(5),
  faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  keywords: z.array(z.string()).default([]),
  category: z.enum(["popular","emergency","installation"]).default("popular"),
});

export const AreaSchema = z.object({
  slug: z.string(), name: z.string(), state: z.string(),
  intro: z.string().min(200), landmarks: z.array(z.string()).default([]),
  nearby: z.array(z.string()).default([]),
  geo: z.object({ lat: z.number(), lng: z.number() }).optional(),
});
// + BusinessSchema, ContactSchema, TestimonialSchema, MediaSchema, FaqSchema, StatSchema
```

- All content is **validated at build time** (`content/index.ts` parses with zod and throws on error) so bad data fails CI, not production.
- Unknown client data → `null`/omitted and the UI hides the block. Never ship fake phone numbers, reviews, or stats.

### 5.2 Phone & WhatsApp helpers
- Store numbers in **E.164** (`+234XXXXXXXXXX`). Display format helper converts to local (`0XXX XXX XXXX`).
- `whatsappLink({ number, text })` → `https://wa.me/${digitsOnly}?text=${encodeURIComponent(text)}`. Default text: "Hello Zee Plumbing World, I need help with {service} in {area}."

---

## 6. Quote Form & API

**Fields:** `name` (req), `phone` (req, Nigerian/intl validation), `email` (opt), `service` (req), `area` (req), `message` (opt, ≤ 1000), `urgent` (bool), `consent` (req true), `company` (honeypot, must be empty), `ts` (render timestamp for time-trap).

**Flow:**
1. Client validation with zod + RHF; inline errors with `aria-describedby`.
2. `POST /api/quote` (Route Handler, Node runtime):
   - Parse with same zod schema (server-side authority).
   - Reject if honeypot filled or submitted < 3s after render (return 200 silently).
   - Rate limit: 5 req / 10 min / IP (Upstash; fallback in-memory Map).
   - Send email via **Resend** to `QUOTE_TO_EMAIL` (subject: `[Quote] {service} – {area} – {name}`; mark `URGENT` in subject if flagged). Include reply-to = customer email if present.
   - Optionally send customer an auto-acknowledgement if email provided.
   - Return `{ ok: true }` or typed error.
3. UI success: confirmation + "Chat on WhatsApp" button with prefilled message. UI error: friendly message + Call / WhatsApp fallbacks. No data loss on failure (form retains values).
4. Track `submit_quote` on success.

No database in v1. (If the client wants a lead log later: add Postgres/Supabase table `leads`.)

---

## 7. SEO Implementation

### 7.1 Rendering
- All pages **statically generated** (`generateStaticParams` for services/areas). No client-side data fetching for content.
- `export const dynamicParams = false` on `[slug]` routes → unknown slugs 404.

### 7.2 Metadata
- `lib/seo.ts` exports `buildMetadata({ title, description, path, image })` returning `Metadata` with canonical (`alternates.canonical`), `openGraph`, `twitter`.
- Root `metadata.metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL)`; title template `"%s | Zee Plumbing World"`.
- Title patterns: Home `Plumber in {PrimaryCity} | Zee Plumbing World – 24/7 Plumbing Services`; Service `{Service} in {City} | Zee Plumbing World`; Area `Plumber in {Area} – Fast, Reliable Plumbing | Zee Plumbing World`.
- `opengraph-image.tsx` renders branded OG (navy background, badge, service line). Per-page override for services/areas via dynamic OG route using `ImageResponse`.

### 7.3 Structured data (JSON-LD)
- **Site-wide** in root layout: `Plumber` (subtype of `LocalBusiness`) with `name`, `legalName`, `url`, `logo`, `image`, `telephone`, `email`, `address` (PostalAddress), `geo`, `areaServed[]`, `openingHoursSpecification` (24/7 if confirmed), `sameAs[]` (social), `priceRange` only if client provides, `foundingDate`, `identifier` (RC no.).
- **Service pages:** `Service` (`provider` → business, `areaServed`, `serviceType`) + `FAQPage` (only if FAQs present) + `BreadcrumbList`.
- **Area pages:** `Plumber` with `areaServed` = area, `BreadcrumbList`, `FAQPage` if present.
- **Reviews:** `AggregateRating`/`Review` **only** with real, client-verified reviews that are visible on the page. Otherwise omit (policy-violation risk).
- Validate with Rich Results Test in CI step (manual checklist) before launch.

### 7.4 Crawl & indexing
- `app/sitemap.ts`: all static routes + services + areas with `lastModified`.
- `app/robots.ts`: allow all, disallow `/api/`, reference sitemap. Block indexing of preview deployments (`X-Robots-Tag: noindex` when `VERCEL_ENV !== 'production'`).
- Canonicals on every page; trailing-slash policy consistent (`trailingSlash: false`).
- Internal linking: service pages link to related services + top areas; area pages link to services + nearby areas; footer has all services and areas.
- 301 redirects configured in `next.config.ts` if client has an old site.

### 7.5 Content quality guardrails for programmatic pages
- Each service/area page must have unique intro text and at least one local/service-specific detail; CI script `scripts/check-content.ts` fails build if two pages share > 70% identical intro text or are under minimum word counts.

---

## 8. Performance

**Budgets (mobile, 4G, mid-range Android):** LCP < 2.5s, CLS < 0.05, INP < 200ms, TBT < 200ms, JS on home ≤ 170 KB gzipped.

- Hero LCP element: the H1 text (no image blocking). Illustrations as inline SVG or optimized WebP with `priority` only if above the fold and visible.
- Bento trio images: `priority` for the first visible one only; `sizes` accurately set; AVIF/WebP via `next/image`.
- Fonts: `display: swap`, subset to Latin, preload the primary weights only (≤ 3 weights).
- Lazy-load below-the-fold sections' heavy client code with `next/dynamic` (carousels, motion, before/after, lightbox).
- Avoid layout shift: explicit `width/height` or `aspect-ratio` on all images and carousel slides.
- No third-party scripts beyond analytics (load `afterInteractive`/lazyOnload). Map embed loads on user interaction (click-to-load facade).
- Image pipeline guidance for client uploads: max 2000px longest edge, convert to WebP/AVIF, strip EXIF; script `scripts/optimize-images.mjs` using `sharp`.
- Caching: static assets immutable (Vercel default); set `Cache-Control` for `/public/images` if self-hosted elsewhere.

---

## 9. Analytics & Events

`lib/analytics.ts`: `track(event: EventName, params?: Record<string,string|number>)` (no-ops in dev).

Events:
- `click_call` `{ location: 'header'|'floating'|'footer'|'cta'|'contact' }`
- `click_whatsapp` `{ location, service?, area? }`
- `submit_quote` `{ service, area, urgent }`
- `search_services` `{ service, area }`
- `cta_click` `{ label, location }`

Mark `click_call`, `click_whatsapp`, `submit_quote` as conversions in GA4. Respect consent if required; default to cookieless (Plausible) if the client prefers no banner.

---

## 10. Accessibility Implementation

- Use semantic landmarks: `<header>`, `<nav aria-label>`, `<main id="content">`, `<footer>`; "Skip to content" link first in DOM.
- Carousels: container `role="region" aria-roledescription="carousel" aria-label="…"`, slides `role="group" aria-roledescription="slide"`, buttons labelled, no autoplay; pause control if autoplay is ever enabled.
- Tabs/accordion via Radix (correct ARIA).
- Images: meaningful `alt`; decorative `alt=""`. Illustrations/swirls `aria-hidden`.
- Forms: associated labels, error summary with focus management on failed submit, `autocomplete` attributes (`name`, `tel`, `email`).
- Color is never the only indicator; focus states visible on colored cards.
- CI: Playwright + `@axe-core/playwright` on `/`, a service page, an area page, `/contact`; fail on serious/critical violations.

---

## 11. Environment Variables (`.env.example`)

```
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_GA_ID=            # or NEXT_PUBLIC_PLAUSIBLE_DOMAIN
RESEND_API_KEY=
QUOTE_FROM_EMAIL="Zee Plumbing World <quotes@yourdomain.com>"
QUOTE_TO_EMAIL=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```
Validated in `lib/env.ts` with zod; server-only vars never exposed to client. Never commit secrets.

---

## 12. Security

- Server-side validation on all inputs; escape output (React default) and JSON-LD (`<` → `\u003c`).
- Security headers in `next.config.ts` `headers()`: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY` (or CSP `frame-ancestors`), `Permissions-Policy` (camera/mic/geolocation off), HSTS (Vercel handles). Add a CSP in report-only first, then enforce.
- Spam protection: honeypot + time-trap + rate limit. Optional Cloudflare Turnstile if spam appears.
- Dependencies: `pnpm audit` in CI; Dependabot enabled.
- Privacy page states what the form collects and why.

---

## 13. CI/CD & Environments

- **GitHub Actions** (`ci.yml`): install (pnpm cache) → `lint` → `typecheck` → `content:check` → `build` → Playwright smoke + axe → Lighthouse CI (assert budgets on `/`, one service, one area).
- **Vercel:** connect repo; preview per PR (noindex), production from `main`. Set env vars per environment.
- Branching: `main` (prod), feature branches via PR. Conventional commits.
- Launch checklist: domain + SSL, redirects, sitemap submitted to Google Search Console, GA4 conversions, Rich Results validation, 404 test, mobile device test on real Android, form delivery test to the client's inbox, OG preview test (WhatsApp/Facebook), favicon/manifest.

---

## 14. Build Plan for the Agent (execute in order, commit per phase)

1. **Scaffold:** `create-next-app` (TS, App Router, Tailwind, ESLint), pnpm, Prettier, absolute imports `@/*`, env validation, base CI.
2. **Tokens + fonts + globals:** implement §3, pick/verify the font against screenshots, build `Container`, `Button`, `Pill/TagPair`, `CircleArrowButton`, `IconBadge`, `ColorCard`, `SectionHeading`.
3. **Layout:** Navbar (desktop dropdowns + mobile menu), Footer, FloatingActions, skip link.
4. **Content layer:** zod schemas, content files with realistic placeholder data clearly flagged `// TODO(client)`.
5. **Home sections** in screenshot order: Hero + ServiceFinder → BentoTrio → TopServices → EssentialsCarousel → StatsBento → Testimonials → PopularServicesList → AreasStrip → CtaBand. After each, **compare against the reference at 1440px and 390px and fix discrepancies** before moving on.
6. **Inner pages:** services index + `[slug]`, areas index + `[slug]`, about, gallery (BeforeAfter, Lightbox), contact (QuoteForm), faq, privacy, 404.
7. **Forms/API:** quote route, Resend, rate limit, success/error states, WhatsApp link builder, analytics events.
8. **SEO:** metadata builders, JSON-LD, sitemap, robots, OG images, canonicals, internal links, content guard script.
9. **Quality pass:** a11y (axe), performance (Lighthouse), responsive QA at 360/390/768/1024/1280/1536, reduced-motion, keyboard-only walkthrough.
10. **Handover:** `README.md` (how to edit content, add a service/area, optimize images, deploy), list of open `TODO(client)` items, `AGENTS.md` kept current.

### Agent rules
- Do not change the visual design or section order without explicit approval. Match the screenshots first, improve second.
- Don't invent business facts (phone, address, RC number, reviews, stats, awards, prices). Use flagged placeholders and hide empty blocks.
- Don't add libraries beyond §1 without a written reason in the PR.
- Keep components small and typed; no `any`; no inline hardcoded copy in components.
- After each phase, run lint, typecheck, build; fix before proceeding.
- Ask for missing assets via the TODO list rather than generating misleading ones (stock/AI imagery allowed only as clearly temporary placeholders).

---

## 15. Suggested `AGENTS.md` (drop in repo root)

```md
# Agent Guide — Zee Plumbing World
- Read PRD.md and TRD.md before any change. Visual source of truth: /design-reference/*.png (Mendx screenshots) + logo.
- Stack: Next.js App Router, TS strict, Tailwind v4, Radix, Embla, motion, RHF+zod, Resend.
- All copy/data lives in /content (validated by zod). Components receive props.
- Never fabricate client facts. Use TODO(client) placeholders; hide empty sections.
- Before finishing a task: pnpm lint && pnpm typecheck && pnpm build, then compare UI to the reference at 1440px and 390px.
- A11y and perf budgets in TRD §8 and §10 are release blockers.
```

Place the reference images in `/design-reference/` (`ref-desktop-home.png`, `ref-desktop-lower.png`, `ref-mobile.png`, `zee-logo.png`) so the agent can view them while building.
