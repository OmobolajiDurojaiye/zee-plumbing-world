# Zee Plumbing World Nig Ltd — Marketing Website

A conversion-focused, modern plumbing website engineered to match the visual language, bento card hierarchy, and aesthetic polish of the **Mendx** reference design, adapted to the **Zee Plumbing World** brand identity with an **Abuja (Federal Capital Territory, Nigeria)** service focus.

Designed and engineered by **Omobolaji Durojaiye (Bolaji)** · [bolaji.tech](https://bolaji.tech) · [LinkedIn](https://www.linkedin.com/in/omobolaji-durojaiye-527872294/).

---

## Stack & Architecture

- **Framework**: Next.js App Router (React 19, TypeScript strict, `noUncheckedIndexedAccess: true`)
- **Styling**: Tailwind CSS v4 with custom tokens in `@theme` (`app/globals.css`)
- **Typography**: Space Grotesk (headings) & Plus Jakarta Sans (body) via `next/font/google`
- **UI Primitives**: Radix UI + Lucide React + `react-icons/fa6` for official brand glyphs
- **Mendx Visual System**: Reusable decoration kit (`components/ui/decor/DecorKit.tsx`) providing signature rings, swirls, droplet decors, dot grids, and wave dividers
- **Carousels & Interactions**: Embla Carousel (`embla-carousel-react`)
- **Navigation**: 2-column icon mega-menu with instant emergency call/WhatsApp dispatch bar and mobile drawer accordion
- **Forms & Validation**: React Hook Form + Zod (shared client/server validation, honeypot protection, and WhatsApp prefill integration)
- **Content Layer**: Pure typed content under `/content` validated by Zod schemas at build time
- **SEO & Structured Data**: Dynamic OpenGraph, Twitter cards, XML sitemaps, robots.txt, and JSON-LD (`Plumber`, `LocalBusiness`, `Service`, `FAQPage`) covering all 32 Abuja districts and satellite towns

---

## Getting Started

### Installation
```bash
npm install
# or
pnpm install
```

### Environment Configuration
Copy `.env.example` to `.env.local` and provide your production variables:
```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (e.g. `https://zeeplumbingworld.com`) |
| `NEXT_PUBLIC_GA_ID` | Google Analytics Measurement ID (optional) |
| `RESEND_API_KEY` | Resend API Key for quote delivery |
| `QUOTE_FROM_EMAIL` | Verified sender address (e.g. `quotes@zeeplumbingworld.com`) |
| `QUOTE_TO_EMAIL` | Recipient inbox for quote leads |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis URL for rate limiting (optional) |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis Token (optional) |

### Development
```bash
npm run dev
# or
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### Verification Commands
```bash
# Typecheck
npm run typecheck

# Linting
npx eslint .

# Production Build (54 static pages)
npm run build
```

---

## Project Structure

```
zee-plumbing-world/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata, developer credit, nav, footer, floating actions
│   ├── page.tsx                # Home page (Hero, WhyChooseUs, Bento trio, Top services, Essentials, Stats bento, Testimonials, Popular services, Areas, CTA)
│   ├── services/
│   │   ├── page.tsx            # Services overview with icon mega-cards & decor
│   │   └── [slug]/page.tsx     # Programmatic static service pages with 4-step precision process
│   ├── areas/
│   │   ├── page.tsx            # Coverage areas overview across all 32 Abuja districts
│   │   └── [slug]/page.tsx     # Programmatic static area pages with coordinates & landmarks
│   ├── about/page.tsx          # About company, craft, principles & developer attribution
│   ├── gallery/page.tsx        # Before & after slider + portfolio
│   ├── contact/page.tsx        # Direct contact lines & quote form
│   ├── faq/page.tsx            # Interactive FAQ accordion
│   ├── privacy/page.tsx        # Privacy policy
│   ├── api/quote/route.ts      # Quote API with honeypot & rate limit
│   ├── sitemap.ts              # XML Sitemap generator (all services & 32 Abuja areas)
│   ├── robots.ts               # Search crawler instructions
│   ├── not-found.tsx           # Custom branded 404
│   └── globals.css             # Tailwind v4 theme tokens
├── components/
│   ├── home/                   # Home sections (Hero, WhyChooseUs, BentoTrio, TopServices, etc.)
│   ├── layout/                 # Navbar (Icon mega-menu), Footer, FloatingActions (brand WhatsApp)
│   ├── ui/                     # Button, Pill, TagPair, ColorCard, IconBadge, BeforeAfter, BrandIcon
│   │   └── decor/              # DecorKit (Ring, Swirl, DropletDecor, DotGrid, WaveDivider)
│   ├── forms/                  # QuoteForm with RHF + Zod + prefilled WhatsApp
│   └── seo/                    # JsonLd structured data component
├── content/                    # All site copy & data (zero JSX edits needed)
│   ├── business.ts             # Legal name, Abuja address, license
│   ├── contact.ts              # Abuja phone & WhatsApp numbers, hours
│   ├── services.ts             # Service definitions, icons, process, FAQs
│   ├── areas.ts                # 32 Abuja districts with intros & coordinates
│   ├── testimonials.ts         # Abuja customer testimonials
│   ├── stats.ts                # Dynamic stats bound to areas count
│   ├── faqs.ts                 # Category-grouped FAQs
│   ├── credits.ts              # Developer info (Bolaji / bolaji.tech)
│   └── schema.ts               # Strict Zod schemas
└── public/
    ├── brand/logo-badge.png    # Circular logo badge
    └── humans.txt              # Standard humans.txt team credit
```

---

## Content Management (Zero-JSX Changes)

All content is driven by typed TypeScript files in [`content/`](content/):

- **Adding a new Service**:
  Open `content/services.ts` and add an entry matching `ServiceSchema`. A new dedicated, SEO-optimized page will automatically be generated at `/services/{slug}` with full JSON-LD markup and sitemap inclusion.
- **Adding a new Coverage Area**:
  Open `content/areas.ts` and add an area entry with its Abuja district details. `stats.areasCount` will dynamically reflect the new total.
- **Updating Business Contact Info**:
  Edit `content/contact.ts` to update the phone number, WhatsApp link, and working hours site-wide.

---

## Deployment on Vercel

1. Push the repository to GitHub: `git@github.com:OmobolajiDurojaiye/zee-plumbing-world.git`.
2. Import the project in the [Vercel Dashboard](https://vercel.com).
3. Framework Preset will automatically be detected as **Next.js**.
4. Configure Environment Variables matching `.env.example` in the project settings.
5. Deploy. The site generates static HTML pages at build time with fast edge CDN caching.

---

## Author & Credits

Designed & Engineered with craft by **Omobolaji Durojaiye (Bolaji)**:
- **Portfolio**: [https://bolaji.tech](https://bolaji.tech)
- **LinkedIn**: [https://www.linkedin.com/in/omobolaji-durojaiye-527872294/](https://www.linkedin.com/in/omobolaji-durojaiye-527872294/)
- **Contact**: `bolaji@bolaji.tech`

Client: **Zee Plumbing World Nig Ltd** (Abuja, FCT, Nigeria).
All rights reserved © 2026.
