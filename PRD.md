# PRD — Zee Plumbing World Nig Ltd Website

> **Audience:** AI coding agent + developer (Bolaji).
> **Companion doc:** `TRD.md` (stack, architecture, SEO implementation).
> **Reference assets supplied with this brief:**
> 1. `ref-desktop-home.png` — Mendx desktop landing (hero, bento image trio, top services cards)
> 2. `ref-desktop-lower.png` — Mendx desktop lower page (Home care essentials carousel, stats bento, testimonial, Popular Services list)
> 3. `ref-mobile.png` — Mendx mobile screens (hero, essentials, popular services)
> 4. `zee-logo.png` — Client logo (circular badge)
>
> **Prime directive:** The Mendx screenshots are the **visual source of truth**. The site must look *absolutely like them*: same layout system, typography feel, card styles, icon style, spacing, radii, section order, and interaction patterns. Only the **brand colors, copy, imagery subject matter, and plumbing-specific content** change. When in doubt, match the screenshots, not your own taste.

---

## 1. Product Overview

**Client:** Zee Plumbing World Nig Ltd (Nigeria).
**What it is:** A conversion-focused marketing website for a plumbing company. It must rank on Google for plumbing searches in the client's service areas and turn visitors into **phone calls, WhatsApp chats, and quote requests**.

**Positioning (adapted from Mendx's "Home Experts at Your Door"):**
Reliable, fast, professional plumbing delivered to the customer's doorstep.

### 1.1 Goals
1. Look premium and modern (Mendx-level polish), so the client stands out from typical plumber sites.
2. Rank locally (Next.js SSR/SSG, structured data, area + service landing pages).
3. Maximize contact conversions: Call, WhatsApp, Quote form.
4. Be fast on mid-range Android phones over mediocre mobile data.
5. Be easy to update (content lives in typed data files, not hardcoded in JSX).

### 1.2 Success Metrics
- Lighthouse (mobile): Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO = 100.
- LCP < 2.5s, CLS < 0.05, INP < 200ms on mobile.
- Tracked events firing: `click_call`, `click_whatsapp`, `submit_quote`.
- Every service and every coverage area has its own indexable page.

### 1.3 Non-Goals (v1)
- No online payments, no user accounts, no booking calendar, no CMS admin panel, no blog (blog can be v2).

---

## 2. Brand System (from the supplied logo)

The logo is a circular navy badge ("ZEE PLUMBING WORLD · NIG LTD") with a white inner ring edged in green, a water droplet containing a globe (Africa visible) with a wave and a pipe wrench, and a wordmark "ZEE / PLUMBING WORLD" where the "Z" has an orange stripe.

### 2.1 Color tokens
Hex values below are **estimates from the logo**. The agent must **eyedrop the real values from `zee-logo.png`** and update the tokens. If the client later sends official brand colors, those override.

| Token | Role | Approx. hex |
|---|---|---|
| `--brand-navy` | Primary dark, headings, dark buttons, footer, testimonial panel | `#0B3F7A` |
| `--brand-ink` | Near-black text/background (deepest navy) | `#06142B` |
| `--brand-blue` | Primary action blue (nav CTA, active tab, links) | `#1F6FD1` |
| `--brand-sky` | Light water blue (soft cards, highlights) | `#BFE3F7` |
| `--brand-green` | Secondary (success, "mint" card, Africa green) | `#5FA83A` |
| `--brand-mint` | Light green for bento cards | `#A7E8B8` |
| `--brand-orange` | Accent (Z stripe, "coral" card, urgent CTAs) | `#F59E1B` |
| `--brand-coral` | Warm orange-red for bento cards | `#FF7A45` |
| `--surface-cream` | Warm off-white cards (as in Mendx beige cards) | `#F5F0E8` |
| `--surface-mist` | Hero panel / page light gray-blue (Mendx `#F1F2F6`) | `#EEF3F8` |
| `--text-primary` | Body/heading text | `#0A1020` |
| `--text-muted` | Secondary text | `#5B6475` |

### 2.2 Mapping Mendx's palette to Zee's brand
Mendx uses a playful multi-color card system. **Keep that system**, recolored:

| Mendx color | Zee equivalent |
|---|---|
| Maroon/plum card | `--brand-navy` (deep) |
| Soft pink card | `--brand-sky` (light blue) |
| Indigo/periwinkle card + nav button | `--brand-blue` |
| Mint green card | `--brand-mint` / `--brand-green` |
| Coral/orange card | `--brand-orange` / `--brand-coral` |
| Dark navy testimonial panel | `--brand-ink` |
| Cream/beige card | `--surface-cream` (unchanged) |

Result: top-services cards = navy, sky, blue, green; stats bento mixes blue, orange, sky, mint, navy, cream; same rhythm as the reference.

### 2.3 Typography
- Reference font is a **modern geometric grotesque with slightly quirky letterforms** (see the "Home Experts at Your Door" headline: tight tracking, heavy-medium weight, distinctive "y", "r", "k").
- **Agent task:** try to identify the closest match. Recommended order: **Cabinet Grotesk** (Fontshare, self-host via `next/font/local`) → **Familjen Grotesk** → **Space Grotesk** (`next/font/google`). Pick whichever visually matches the screenshots best and keep one family site-wide.
- Scale (desktop): H1 ~64–72px / line-height 1.0 / tracking −0.02em; H2 ~44–52px / 1.05; H3 ~24–28px; body 16px; small/caption 12–14px.
- Mobile: H1 ~40–44px; H2 ~32–36px.
- Weights: headings 500–600, body 400, buttons 500.

### 2.4 Logo usage
- Nav: use the **wordmark portion** (Z-stripe "ZEE / PLUMBING WORLD") or a simplified horizontal lockup, at the top-left (mirrors "Mendx" logo placement). Ask the client for an SVG or transparent PNG; until then, crop from `zee-logo.png` with a transparent background.
- Footer + About + favicon/OG: use the **full circular badge**.
- Legal name to display in footer: **Zee Plumbing World Nig Ltd**.

---

## 3. Visual Design Language (match the screenshots exactly)

### 3.1 Global look
- Clean, airy, lots of white; **big rounded cards** in saturated flat colors; thin outlined "pills" for tags; **circular arrow buttons** (↗) as the universal "go" affordance.
- Page background white; hero sits on a **rounded light panel** (`--surface-mist`).
- Radii: large cards `24px`, image cards `20–24px`, buttons `10–12px` (nav CTA/search) , pills `999px`, circular icon buttons `50%`.
- No heavy shadows. Flat color blocks; at most a very subtle shadow on light list rows.
- Decorative **thick squiggle/loop swirl shapes** (rounded strokes, green/blue/orange) inside stats cards, partially cropped by the card edge. Build as inline SVG.
- Flat vector **people illustrations** flank the hero (left: person holding a sign/board; right: person seated with laptop on a green blob). Create plumbing-themed flat illustrations in the same style (e.g., left: plumber holding a "Fast Fix" sign; right: customer on laptop/phone booking). If illustrations aren't available, use simplified flat SVG placeholders and flag them in the TODO list.

### 3.2 Iconography
- Single consistent **outline icon style, rounded line caps** (Lucide or Phosphor "regular"). Icons for service cards sit inside **solid circles** (e.g., 40px circle, contrasting color) at top-left of each colored card.
- Sparkle "✦" glyph precedes section tag pills.
- The hero headline contains an **inline outlined house icon** between "Your" and "Door". For Zee, keep the pattern: an inline outlined icon in the headline (a house with a water drop or faucet) tinted `--brand-blue`.
- Arrow icons: ↗ diagonal arrow inside circles (white circle on images, dark navy circle in lists); → arrow in text buttons.

### 3.3 Buttons & inputs
- **Primary nav CTA:** filled `--brand-blue`, white text, rounded-12, label + → arrow. (Mendx: "Join Waitlist →" → Zee: **"Get a Quote →"**.)
- **Dark button:** `--brand-ink` fill, white text (Search, Explore Now →).
- **Search bar (hero):** one row: outlined pill/box with pin icon + "Location" label, a text input ("What service are you looking for?"), and a dark "Search" button with magnifier icon. Treated as a **service finder** (see 5.1).
- **Pills/tags:** 1px dark outline, rounded-full, small text, e.g. `[Popular] [New]`, `[Our] [Services]` (two adjacent outlined pills sharing a border style).
- **Circular carousel arrows:** 36–40px circles; prev = translucent/light, next = filled brand-blue or white depending on background.

### 3.4 Motion (subtle, from a "polished landing page" vibe)
- Section reveal: fade-up 16–24px, 400–500ms ease-out, once.
- Cards: hover lifts 4px and arrow circle rotates/slides slightly.
- Carousels: drag/swipe + arrow buttons, snap scrolling.
- Stat numbers: count-up on first view (48, 24/7 static, 2k+).
- Respect `prefers-reduced-motion` (disable all of the above).

---

## 4. Sitemap & Routes

| Route | Purpose |
|---|---|
| `/` | Home (the Mendx-style landing; see §5) |
| `/services` | All services overview (grid of cards) |
| `/services/[slug]` | One page per service (SEO landing) |
| `/areas` | All coverage areas |
| `/areas/[slug]` | One page per area (SEO landing, "Plumber in {Area}") |
| `/about` | Company story, certifications/awards, team, workshop |
| `/gallery` | Before/after, vehicles, tools, team photos |
| `/contact` | Quote form, phone, WhatsApp, email, address, map |
| `/faq` | FAQ (also feeds FAQ schema) |
| `/privacy` | Privacy policy (short) |
| `/404` | Branded not-found |

Global: sticky navbar, footer, **floating Call + WhatsApp buttons** (mobile bottom-right).

---

## 5. Page Specifications

### 5.1 Home (`/`) — section by section (follow the screenshots top to bottom)

**A. Navbar** (desktop)
- Left: logo. Center-right: `Services ▾`, `About us ▾`, `Contact ▾` (small text, chevrons). Right: **Get a Quote →** blue button.
- Dropdowns: Services → list of services; About us → About, Gallery, FAQ; Contact → Contact page, Call, WhatsApp.
- Sticky with light blur background after scroll.
- **Mobile:** logo left, hamburger (three lines, right-aligned shorter bottom line, brand-blue) on the rounded mist panel; opens a full-screen menu with big links and Call/WhatsApp buttons.

**B. Hero** (rounded mist panel with flanking illustrations)
- H1 (centered, huge, 2 lines): **"Plumbing Experts at Your [icon] Door"** (keep the inline icon trick; alt: "Home Plumbing Experts at Your Door").
- Subtext (small, centered, muted): "Fast, reliable plumbing, delivered to your doorstep. Leak repairs, installations and emergency fixes by trained professionals."
- Service finder bar: `[📍 Location] [What service are you looking for?] [🔍 Search]`.
  - Location: dropdown/autocomplete of coverage areas.
  - Input: autocomplete over service names.
  - Submit navigates to `/services/[slug]` if matched, else `/contact?service=...&area=...`.
- Left and right flat illustrations (hidden or reduced on mobile; on mobile the hero is a left-aligned stack inside the mist panel, per the mobile screenshot).

**C. Bento image trio** (directly under hero)
- Three image cards in a row, rounded-24, equal height; **the middle card is split**: large image on top with overlay caption and a small white circular ↗ button; below it a **solid brand-blue stat card** with two overlapping circular avatars and "**98%** · Customer satisfaction" (use real number only if client confirms; otherwise a placeholder flagged in TODO).
- Left card: image of a tradesperson at work, bottom-left overlay text "Fast booking, instant help" + ↗ circle.
- Middle caption: "Skilled experts, reliable service".
- Right card: "Safe, easy, on-demand" + ↗ circle.
- Overlay text: white, medium weight, over a bottom gradient for legibility.
- **Mobile:** horizontal peek carousel (middle card centered, neighbors partially visible), with the 98% card attached under the middle card.

**D. Top services ("Check out our top services for you.")**
- Left: tag pills `✦ [Popular] [New]` above H2 "**Check out our top services for you.**"
- Right: short paragraph naming the featured services + dark **Explore Now →** button.
- Below: **4 tall colored cards** in a row (the client's "3 to 5 main services to emphasize" map here; if client gives 3 or 5, adapt: 3 → 3 cards, 5 → 5 cards or 4 + "View all").
  - Each card: top-left solid circle icon badge; title (white or dark depending on bg, ~28px, 2-line); description at the bottom (small).
  - Colors in order: navy, sky, blue, mint (text white on navy/blue; dark on sky/mint).
  - Whole card is a link to the service page; arrow appears on hover.
- Default service content (replace with client's chosen top 4): Leak Detection & Repair · Water Heater / Tank Installation · Pipe Repair & Replacement · Drainage & Blockage Clearing. (Emergency Plumbing handled as a persistent 24/7 element.)

**E. "Home care essentials" → "Plumbing essentials" carousel**
- Tag `✦ [Our] [Services]`, H2 "**Plumbing essentials**", short description at right.
- Horizontal carousel of **portrait image cards**, each with a **colored frame** (thick colored padding around the photo, like the screenshot: brown, blue, pink, coral, light blue) and the service label at top-left in white/dark text. Circular prev/next arrows overlay on the left/right edges.
- Each card = one service photo (people working) → links to service page.
- Frame colors cycle: navy, blue, sky, orange/coral, mint.

**F. Stats / trust bento** (mixed-size rounded tiles, tight 12–16px gaps)
Replicate the exact grid from the screenshot (2 rows of 2-3 tiles + a final row), with Zee content:
1. Cream tile (wide): "**The secret to happy customers? Speed and reliability.**" + small caption "Fast response, every time".
2. Blue tile with huge number + green squiggle: "**{N}**" + "That's how many areas we're serving (and counting!)" — N = client's number of areas.
3. Orange/coral tile (wide): huge "**24/7**" + "Available anytime, anywhere we reach you" with a darker orange arc decoration.
4. Sky tile: huge "**{X}+**" + "Jobs completed" (client-confirmed number; Mendx shows "2k+ Homes Revitalised").
5. Green tile (wide) with navy/blue swirl: "**Top-rated pros, fast response, & fair pricing**".
6. Navy tile with orange swirl: "**Trust over everything**" + 3 bullets: "Safety-first approach", "Verified pros only", "Customer-first mindset".
- Numbers count up. Use real numbers only; placeholders flagged `TODO(client)`.

**G. Testimonials**
- Small heading row: `✦ People like you trust our service ✦`.
- One large **dark (`--brand-ink`) rounded panel**: left, a portrait photo on a rounded orange card with two rotated cards (sky, blue) stacked behind it; right, a quote (large, white), then name (bold) + location (muted). Circular prev/next arrows bottom-right.
- Multiple testimonials slide; auto-advance off by default.
- If the client has no photos of customers, use initials avatars on the same stacked-card motif.

**H. Popular Services list** (tabbed)
- Tabs as big text: **Popular Services** (active, brand-blue) · Top Skills · Trending Skills (light gray). For Zee rename to: **Popular Services · Emergency Services · Installations** (tabs filter the list).
- Below: **2-column grid of rows** on cream rounded containers; each row: service name (left), a **cut-out product/object image** (right: wrench, faucet, water heater, pipe, toilet, plunger, etc.), and a **dark navy circular ↗ button**.
- Mobile: single column, same row style (see mobile screenshot: label left, object image center-right, dark circle arrow far right).
- Object images: transparent-background PNG/WebP cutouts of plumbing items. If unavailable, use clean 3D-style or flat icons and flag in TODO.

**I. Coverage areas strip** (new, same visual language)
- Heading "**Areas we serve**", pill chips for each area (outlined, rounded-full), each linking to `/areas/[slug]`. Optional embedded map.

**J. Final CTA band** (new, same language)
- Full-width rounded `--brand-navy` panel, large H2 "**Got a leak? We're a call away.**", buttons: **Call now** (orange), **WhatsApp us** (green), **Get a quote** (white outline).

**K. Footer**
- Dark `--brand-ink`, rounded top corners. Logo (circular badge), short description, quick links (Services, Areas, About, Gallery, FAQ, Contact), contact details (phone, WhatsApp, email, address), social icons, "© {year} Zee Plumbing World Nig Ltd" + registration number (RC no. if provided).

### 5.2 Service pages (`/services/[slug]`)
- Hero in the same mist-panel style with H1 "{Service} in {Primary City/Region}", short intro, CTAs (Call, WhatsApp, Quote).
- Sections: What we do · Signs you need this · Our process (3–5 numbered steps in colored cards) · Before/after (if available) · FAQs (service-specific, feeds FAQ schema) · Related services (reuse colored card component) · Areas served (chips) · Final CTA band.
- Unique copy per page (≥ 400 words), no duplicate boilerplate.

### 5.3 Area pages (`/areas/[slug]`)
- H1 "Plumber in {Area}" / "Plumbing Services in {Area}". Local intro, list of services offered there (cards), local FAQs, CTA, nearby areas chips. Must not be thin/duplicate content: include area-specific details supplied by the client (landmarks, estates, typical issues).

### 5.4 About
- Company story (year established, who started it, mission), the **team photos**, **workshop/office photos**, vehicles and tools, certifications/awards badges, registration details (CAC/RC number), values (reuse "Trust over everything" tile pattern).

### 5.5 Gallery
- Masonry/grid with filter pills: All · Before & After · Team · Vehicles & Tools · Workshop. **Before/after slider** component (drag handle). Lightbox on click. All images lazy-loaded with blur placeholders.

### 5.6 Contact
- Left: quote form. Right: contact cards (Phone, WhatsApp, Email, Address, Hours) in the colored-card style + embedded map (static map image link or lightweight iframe, loaded on interaction).
- Form fields: Full name*, Phone*, Email (optional), Service* (select), Area* (select), Message, Urgency toggle ("This is an emergency"), consent checkbox. Success state with WhatsApp follow-up button.

### 5.7 FAQ
- Accordion in cream rounded rows, circular +/− icon. Questions about pricing, response time, emergency, warranties, payment methods, areas.

---

## 6. Functional Requirements

| ID | Requirement |
|---|---|
| F1 | Header "Get a Quote" opens `/contact` (scrolls to form). |
| F2 | `tel:` links on all phone numbers; `https://wa.me/<number>?text=<prefilled>` for WhatsApp with a prefilled message including service/area when known. |
| F3 | Floating action buttons (Call, WhatsApp) fixed bottom-right on mobile, bottom-right small on desktop; must not cover footer links or cookie banner. |
| F4 | Quote form: client-side + server validation, honeypot spam field, rate limit, email notification to the client (+ optional copy to WhatsApp link). Must never lose a submission silently: show error + fallback WhatsApp/call buttons. |
| F5 | Hero service finder: autocomplete and routing described in §5.1B. |
| F6 | Carousels: touch swipe, keyboard arrows, accessible labels, no autoplay by default. |
| F7 | Tabs in Popular Services list filter without full reload and are keyboard accessible. |
| F8 | Analytics events: `click_call`, `click_whatsapp`, `submit_quote`, `search_services`, `cta_click` with location param. |
| F9 | 24/7 / opening hours indicator in footer + contact page (driven by data). |
| F10 | Cookie/consent notice only if analytics requires it; keep minimal. |

---

## 7. Content Model (maps to the checklist sent to the client)

All content lives in typed files under `/content` (see TRD). **Never hardcode copy in components.** Missing client data is stored as `null` and rendered with a safe fallback; each gap is listed in the TODO table (§11).

| Checklist item | Content field(s) | Used in |
|---|---|---|
| Official business name | `business.legalName` = "Zee Plumbing World Nig Ltd", `business.brandName` = "Zee Plumbing World" | Header, footer, schema, titles |
| Registration (CAC/RC) | `business.rcNumber` | Footer, About, schema (`identifier`) |
| Business address | `business.address{street,city,state,country,postalCode,geo}` | Footer, Contact, schema, map |
| Year established | `business.foundedYear` | About, schema, "X years experience" copy |
| Short description | `business.shortDescription`, `business.longDescription` | Meta description, About, hero subtext |
| Phone number | `contact.phone` (E.164, e.g. `+234…`) | tel links, schema |
| WhatsApp number | `contact.whatsapp` (E.164, digits only for wa.me) | WhatsApp CTAs |
| Email | `contact.email` | Contact, footer, form recipient |
| Service areas | `areas[]` (`slug,name,state,intro,landmarks,nearby`) | Areas pages, search dropdown, schema `areaServed` |
| Logo | `/public/brand/logo-*.{svg,png}` | Header, footer, favicon, OG |
| Brand colors | design tokens (§2.1) | Global |
| Preferred style/theme | Mendx-inspired (this PRD) | Global |
| Team photos | `media.team[]` | About, Gallery, bento images |
| Workshop/office photos | `media.workshop[]` | About, Gallery |
| Before/after photos | `media.beforeAfter[]` (`before,after,caption,service`) | Gallery, service pages |
| Vehicles/tools photos | `media.vehiclesTools[]` | Gallery, About |
| Services list | `services[]` (`slug,name,shortDesc,longDesc,icon,color,image,cutoutImage,faqs,process,keywords`) | Everything services-related |
| Certifications/awards | `credentials[]` (`name,issuer,year,image`) | About, footer badges |
| Social links | `social{facebook,instagram,x,tiktok,youtube,linkedin}` | Footer, schema `sameAs` |
| Website inspiration | Already provided: Mendx screenshots | Design |
| Coverage areas (SEO) | `areas[]` (same as above) | Area pages |
| 3–5 main services | `services[].featured = true` + `featuredOrder` | Home section D |
| Testimonials | `testimonials[]` (`name,location,quote,photo,rating,service,date`) | Home G, About, service pages |

### 7.1 Default service catalogue (until the client sends theirs)
Pipe Repair & Replacement · Leak Detection & Repair · Water Heater / Tank Installation · Drainage & Blockage Clearing · Emergency Plumbing (24/7) · Bathroom & Kitchen Plumbing (toilets, sinks, showers, taps) · Borehole & Water Supply Plumbing (if applicable) · New Building / Estate Plumbing (if applicable). Mark optional ones `enabled: false` until confirmed.

### 7.2 Copy tone
Confident, friendly, plain English. Short sentences. Benefit first ("Fixed fast, priced fairly"). No jargon. No fake claims: **no invented statistics, awards, reviews, or prices**.

---

## 8. SEO Requirements (product level; implementation in TRD)

- One H1 per page, logical heading hierarchy.
- Unique `<title>` (≤ 60 chars) and meta description (≤ 155) per page; pattern: `{Service} in {Area} | Zee Plumbing World`.
- Dedicated pages for every service and area (programmatic from content files) with unique intros.
- LocalBusiness/**Plumber** JSON-LD site-wide, FAQ + Breadcrumb JSON-LD where applicable, Review markup **only** for real, verifiable reviews.
- XML sitemap, robots.txt, canonical URLs, clean slugs, internal linking (service ↔ area ↔ related).
- Open Graph + Twitter cards with branded images.
- NAP consistency (Name, Address, Phone) identical everywhere; recommend the client create/verify Google Business Profile (outside scope; note in handover).
- Images: descriptive alt text, modern formats, correct sizes.

---

## 9. Accessibility & Quality

- WCAG 2.2 AA: contrast ≥ 4.5:1 (verify white text on orange/mint/sky cards; use dark text where needed), visible focus rings, full keyboard support, semantic landmarks, aria labels for icon buttons, carousel a11y patterns, form labels and error messages.
- Responsive breakpoints: 360, 390, 768, 1024, 1280, 1536. Mobile-first. No horizontal scroll.
- Works on low-end Android (Chrome), Safari iOS, Chrome/Edge/Firefox desktop.
- Page weight: home ≤ 1.2 MB transferred on first load (excluding lazy images).

---

## 10. Responsive Behavior Cheatsheet (from the mobile screenshots)

| Section | Mobile behavior |
|---|---|
| Navbar | Logo + hamburger inside rounded mist panel |
| Hero | Left-aligned stack: H1 (4 lines allowed), subtext, search row (location icon box + input + dark square search button). Illustrations hidden |
| Bento trio | Horizontal snap carousel with peeking neighbors; 98% card under center image |
| Top services | Horizontal scroll or 2×2 stack of colored cards |
| Essentials | Large single portrait card with the next card peeking on the right |
| Stats bento | Single column stack, same tile styles |
| Testimonial | Panel stacks: photo on top, quote below |
| Popular Services | Tabs as stacked big text list (active in blue, others gray bullets as in screenshot); single-column rows with dark circular arrow |

---

## 11. Open Items / TODO(client) — render safe fallbacks, never fake data

- [ ] Real brand hex values (confirm vs. logo eyedrop)
- [ ] Logo as SVG / transparent PNG
- [ ] Phone, WhatsApp, email, address, hours
- [ ] CAC/RC number, year established
- [ ] Final service list + 3–5 featured services
- [ ] Coverage areas list (each with 2–3 local details)
- [ ] Team, workshop, vehicle/tools, before/after photos
- [ ] Testimonials with permission to publish
- [ ] Certifications/awards
- [ ] Social links
- [ ] Real stats (jobs completed, satisfaction %, number of areas)
- [ ] Domain name and email sender domain

Until supplied: use clearly marked placeholders (neutral images, `Lorem` is NOT allowed; use realistic generic copy), and hide any block whose data is `null` (e.g., awards section, social icons).

---

## 12. Acceptance Criteria (definition of done)

1. Side-by-side with the Mendx screenshots, desktop and mobile, the layout, typography feel, card styles, radii, icon style and section order are visually the same (only colors/content differ per §2.2).
2. Every section in §5 exists and works at all breakpoints.
3. All content is driven by `/content` files; changing a file updates the site with no component edits.
4. Quote form delivers an email and shows success/error states; WhatsApp/tel links work on a phone.
5. Lighthouse targets in §1.2 met on the deployed preview.
6. Structured data validates in Google's Rich Results Test; sitemap + robots live.
7. No console errors, no layout shift from fonts/images, no broken links, keyboard-navigable.
8. TODO(client) fields are documented and the site degrades gracefully with them empty.
