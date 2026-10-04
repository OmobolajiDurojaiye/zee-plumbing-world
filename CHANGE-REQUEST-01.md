# CHANGE REQUEST 01 — Zee Plumbing World

> **For the coding agent.** Read `PRD.md` and `TRD.md` first. The landing page is **approved**. Do **not** redesign it. Apply only the changes below, keeping the Mendx-style visual language intact.
> Attached references: current build screenshots (hero, stats bento, services dropdown).

Complete the tasks in order, commit per task (conventional commits), and run `pnpm lint && pnpm typecheck && pnpm build` after each.

---

## 1. Location: switch everything from Lagos to **Abuja (FCT, Nigeria)**

The current build contains Lagos areas (Lekki Phase 1, Ikoyi, Magodo, Ikotedo...) and copy such as "standby across Lagos". All of it must go.

**Tasks**
1. Run a repo-wide search (case-insensitive) for: `Lagos`, `Lekki`, `Ikoyi`, `Magodo`, `Ikotedo`, `Victoria Island`, `Ikeja`, `Ajah`, `Surulere`, `Yaba`. Remove or replace every hit in content, components, metadata, JSON-LD, sitemap data, alt text, tests and README.
2. Replace `content/areas.ts` with Abuja areas. Starter list (agent: use these as slugs/names; **client must confirm which ones they actually cover**):
   - **Core city:** Maitama, Asokoro, Wuse 2, Wuse (Zone 1-7), Garki, Central Business District, Jabi, Utako, Guzape, Life Camp
   - **Fast-growing estates/districts:** Gwarinpa, Katampe, Jahi, Kado, Wuye, Apo, Gudu, Lokogoma, Durumi, Dawaki, Galadimawa, Games Village
   - **Satellite towns:** Lugbe, Kubwa, Karu, Nyanya, Mpape, Bwari, Kuje, Gwagwalada, Karsana, Airport Road
   - Slug format: `maitama`, `wuse-2`, `gwarinpa`, etc. State = "FCT", country = "Nigeria".
3. Each area still needs a unique intro (≥ 200 chars) per the content schema. Write **honest, generic-but-local** copy (e.g., typical building types, water-supply realities, common issues like tank/pump problems, leaks in older estates, drainage in rainy season). **Do not invent landmarks, estate names, response times or facts you can't verify.** Mark anything uncertain `// TODO(client)`.
4. SEO updates for Abuja:
   - Home title: `Plumber in Abuja | Zee Plumbing World – 24/7 Plumbing Services`
   - Area title pattern: `Plumber in {Area}, Abuja | Zee Plumbing World`
   - Service title pattern: `{Service} in Abuja | Zee Plumbing World`
   - JSON-LD `Plumber`: `address.addressLocality = "Abuja"`, `addressRegion = "FCT"`, `addressCountry = "NG"`; `areaServed` = list of `Place`/`AdministrativeArea` for each area plus `City: Abuja`.
   - Hero/CTA copy: replace any Lagos copy with e.g. "Leaks, burst pipes and blockages fixed fast across Abuja."
5. The "areas" chips (seen in screenshot 3) and `AreasStrip` must render the Abuja list. Show the first ~10 chips + a "View all areas →" chip.
6. **Stats tile "48":** it must equal `areas.length` (computed, not hardcoded), so the number is truthful. Caption stays: "That's how many areas we're serving (and counting!)".
7. Phone display/format: Nigerian numbers (`+234…`), unchanged logic.

---

## 2. Services dropdown → icon **mega-menu** (no long list)

Current: a single vertical list of 8 text rows with small arrows (see screenshot 3). Replace it.

**Desktop spec**
- Panel opens under "Services" (Radix NavigationMenu), rounded-24, white, soft border, subtle shadow, width ≈ 640–720px, anchored to the trigger, with a small entrance animation (fade + 8px slide, 150ms; none for reduced-motion).
- Header row: small caps label "OUR PLUMBING SERVICES" (keep) + "View all services →" link on the right (blue).
- Body: **2-column grid of service tiles** (8 services = 4 rows × 2 cols, or 3-column grid if it fits better). Each tile:
  - Left: **40–44px solid circle icon badge** in that service's brand tone (navy, blue, sky, mint, orange, coral), white or dark outline icon inside (pick for contrast).
  - Right: service **name** (medium weight) + **one-line description** (muted, 12–13px, max 1 line, truncate).
  - Hover: tile background `--surface-mist`, icon badge scales 1.05, tiny ↗ arrow fades in at far right.
  - Whole tile is a link to `/services/[slug]`; keyboard focus ring visible.
- Optional right-hand **featured column** (only if width allows): a navy rounded card "Plumbing emergency?" with 24/7 note and two buttons: **Call now** (orange) and **WhatsApp** (green, real WhatsApp glyph).
- "About us" and "Contact" dropdowns get the same treatment (smaller): icon + label + short description tiles (About / Gallery / FAQ; Contact page / Call / WhatsApp), same badge style.

**Icon map (lucide-react; verify names exist in the installed version, else pick the nearest and keep the same style):**

| Service | Icon | Tone |
|---|---|---|
| Leak Detection & Repair | `Droplets` | blue |
| Water Heater & Tank Setup | `Flame` / `Container` | orange |
| Pipe Repair & Re-piping | `Wrench` | navy |
| Drainage & Blockage Clearing | `Waves` | sky (dark icon) |
| 24/7 Emergency Plumbing | `Siren` | coral |
| Bathroom & Sanitary Fittings | `ShowerHead` / `Bath` | mint (dark icon) |
| Borehole & Water Treatment | `Gauge` / `FlaskConical` | green |
| Commercial & Estate Plumbing | `Building2` | navy |

Put icon + tone in `content/services.ts` (single source of truth) so navbar, home cards, service pages and footer all read the same data.

**Mobile spec**
- Full-screen menu. "Services" expands as an accordion revealing a **2-column grid of compact icon tiles** (icon badge above/left of name, no descriptions) instead of a long list. Bottom of menu: Call and WhatsApp buttons.

---

## 3. More icons + richer, bento-style backgrounds (like the stats section)

The stats bento (screenshot 2) is the favorite look: **flat saturated color blocks with big partially-cropped ring/swirl shapes**. Extend that language to the rest of the site without cluttering.

### 3.1 Reusable decoration kit
Create `components/ui/decor/`:
- `Ring` (thick circle stroke, cropped by card edge), `Swirl` (rounded loop stroke), `Blob`, `DotGrid`, `Wave` (water-wave SVG divider), `Droplet`.
- Props: `color`, `size`, `className` (for absolute positioning), `opacity`. Always `aria-hidden`, `pointer-events-none`, `overflow-hidden` on the parent.
- Colors come from tokens only (tone-on-tone, e.g. darker orange ring on orange card, as in the reference).

### 3.2 Where to apply
- **Section backgrounds (not just cards):** Give sections alternating backgrounds so the page isn't a flat white scroll:
  - Services/essentials: soft `--surface-mist` rounded panel with faint `Ring` + `DotGrid` shapes in the corners.
  - Testimonials: keep ink panel, add large low-opacity navy/blue `Swirl` and a few droplets.
  - Areas strip: `--surface-cream` rounded panel with a subtle `Wave` along the bottom.
  - Final CTA band: navy with large cropped `Ring`s (blue/orange) in the Mendx style.
  - Inner page hero panels (services, areas, about, contact): mist panel + one or two decor shapes; each page uses a different tone so they feel distinct.
- **Wave dividers** between major sections where a color change happens (keep subtle, 40–80px tall).
- **Service cards** (home "top services" and `/services`): add a large cropped icon watermark (same icon as the badge, 120–160px, 8–12% opacity) in the lower-right, plus the ring/swirl.
- Keep body text areas clean; decoration never overlaps text and never harms contrast.

### 3.3 More icons (sweep the whole site)
Add an icon anywhere there is a list item, benefit, step, contact line or trust point:
- **Trust bullets** ("Safety-first approach", "Verified pros only", "Customer-first mindset"): replace orange dots with small circle icons (`ShieldCheck`, `BadgeCheck`, `HeartHandshake`).
- **Process steps** on service pages: numbered circle + icon (`PhoneCall`, `Search`, `Wrench`, `CheckCircle2`).
- **Contact cards:** `Phone`, `Clock`, `MapPin`, `Mail`, each in a colored circle badge.
- **FAQ rows**: `+`/`−` circle (already specced) plus category icon on FAQ page.
- **"Why choose us"** mini-row under hero or in About: 4 chips with icons (`Clock3` 24/7, `ShieldCheck` Verified pros, `Wallet` Fair pricing, `Zap` Fast response).
- **Footer:** icon next to each contact line and link group heading.
- **Gallery filters:** icon on each filter pill.
- **Service pages:** "Signs you need this" list with `AlertTriangle`/`Droplet` style icons per bullet.
- Consistent style: outline, 1.75 stroke, rounded caps, sizes 16/20/24/28 only.

---

## 4. Real brand icons for socials, WhatsApp and contact actions

Generic lucide icons (e.g., the plain chat bubble on the floating button) must be replaced with **original brand glyphs and brand colors**. lucide no longer ships brand logos, so:

- **Add dependency:** `react-icons` (import per-icon from `react-icons/fa6` or `react-icons/si` so it tree-shakes). This is an approved addition to the TRD stack, reason: official brand glyphs.
- Create `components/ui/BrandIcon.tsx` mapping `whatsapp | facebook | instagram | x | tiktok | youtube | linkedin | telegram` → glyph + brand color:

| Brand | Glyph (react-icons) | Color |
|---|---|---|
| WhatsApp | `FaWhatsapp` | `#25D366` |
| Facebook | `FaFacebookF` / `FaFacebook` | `#1877F2` |
| Instagram | `FaInstagram` | gradient (`#F58529 → #DD2A7B → #8134AF`) or `#E4405F` |
| X | `FaXTwitter` | `#000000` |
| TikTok | `FaTiktok` | `#000000` (accent `#FE2C55`/`#25F4EE` optional) |
| YouTube | `FaYoutube` | `#FF0000` |
| LinkedIn | `FaLinkedinIn` | `#0A66C2` |

- **Floating WhatsApp button:** green `#25D366` circle with the real `FaWhatsapp` glyph (white), replacing the chat-bubble icon. Floating **Call** button keeps the phone icon but is brand-orange. Both with `aria-label`, hover scale, and a gentle pulse ring (disabled for reduced-motion).
- WhatsApp CTAs everywhere (hero, contact, CTA band, footer, nav dropdown) use the WhatsApp glyph + green.
- **Footer socials:** circular buttons (40px), icon in brand color on white/cream circle by default, filling with the brand color + white icon on hover. Only render networks that have a URL in `content/social.ts`; the agent should **scaffold all of them** so we can fill in LinkedIn and others later (empty = hidden, no dead links).
- Add `social.linkedin`, `social.tiktok`, `social.youtube`, `social.telegram` keys to `content/social.ts` and its zod schema, and include non-empty ones in JSON-LD `sameAs`.

---

## 5. "Built by" credit (approved by the client)

The site must clearly credit the developer: **Omobolaji Durojaiye (Bolaji)**.

- **Links**
  - LinkedIn: `https://www.linkedin.com/in/omobolaji-durojaiye-527872294/`
  - Website: `https://bolaji.tech`
- **Footer bottom bar** (below a thin divider), left to right on desktop, stacked on mobile:
  - `© {year} Zee Plumbing World Nig Ltd. All rights reserved.`
  - `Designed & built by Bolaji` — "Bolaji" links to `https://bolaji.tech` (`target="_blank" rel="noopener noreferrer"`), followed by two small circular icon links: **LinkedIn** (brand glyph, `#0A66C2`) and a **globe/portfolio** icon pointing to bolaji.tech. Each icon has `aria-label` ("Bolaji on LinkedIn", "Bolaji's portfolio").
  - Keep it tasteful: small text, muted color, hover underline; not a banner.
- **Contact/About (optional, subtle):** one-line "Website by Bolaji · bolaji.tech" in the About page footer area is enough; do not add it to every page body.
- **Metadata/credit signals**
  - In root `metadata`: `authors: [{ name: "Omobolaji Durojaiye", url: "https://bolaji.tech" }]`, `creator: "Omobolaji Durojaiye"`.
  - Add `public/humans.txt` with name, site, LinkedIn, and stack.
  - Put the values in `content/credits.ts` (`developer: { name, shortName: "Bolaji", website, linkedin }`) so they are not hardcoded in JSX.
  - Do **not** put the developer credit inside LocalBusiness JSON-LD `sameAs` or the business `author` fields (that belongs to the client).

---

## 6. Small cleanups spotted in the screenshots
- A red dev badge ("N · 1 Issue") appears bottom-left in the screenshots: that is the Next.js dev overlay. Open it, fix whatever issue is reported (likely a hydration/image/console warning) so the production build is clean.
- Keep the nav logo lockup exactly as is (badge + "ZEE · NIG LTD · PLUMBING WORLD"); it looks right.
- Make sure the floating buttons never overlap the footer social icons on mobile (add bottom padding to the footer on small screens).
- Re-check text contrast on the orange, mint and sky tiles after adding decor shapes.

---

## 7. Acceptance criteria
1. No occurrences of Lagos or Lagos neighborhoods anywhere (`grep -ri lagos` returns nothing outside git history); Abuja pages render and appear in the sitemap.
2. Services dropdown is an icon tile grid (desktop) and 2-column icon grid in the mobile accordion; no long text-only list remains.
3. Visible new decoration and icon coverage across home and inner pages, matching the stats-bento style, with no contrast or layout-shift regressions.
4. Real brand glyphs/colors for WhatsApp and all social icons; floating WhatsApp uses the WhatsApp logo.
5. Footer credits Bolaji with working LinkedIn and bolaji.tech links; metadata `authors/creator` and `humans.txt` present.
6. Lint, typecheck, build pass; Lighthouse and axe budgets from `TRD.md` still met.

---

## 8. Ship to GitHub

Remote: `git@github.com:OmobolajiDurojaiye/zee-plumbing-world.git` (branch `main`).

Before pushing:
1. Make sure `.gitignore` covers `node_modules`, `.next`, `.env*` (keep `.env.example`), `.DS_Store`, `*.log`, `.vercel`, `/test-results`, `/playwright-report`.
2. Confirm no secrets are tracked (`git ls-files | grep -i env`).
3. Replace the placeholder README with a real one: project overview, stack, `pnpm install` / `pnpm dev` / `pnpm build`, env vars (from `.env.example`), how to edit content in `/content`, how to add a service or area, deploy notes (Vercel), and a "Built by Bolaji" line.
4. Put the design references in `/design-reference/` (compressed PNGs) and keep `PRD.md`, `TRD.md`, `CHANGE-REQUEST-01.md`, `AGENTS.md` in the repo root.

Then run (the project likely already has a git repo from `create-next-app`, so this is written to be safe either way):

```bash
# if not already a repo
git init 2>/dev/null || true

git add -A
git status            # review: no .env files, no node_modules
git commit -m "feat: initial Zee Plumbing World website (Next.js, Abuja focus)"

git branch -M main

# add origin, or fix it if it already exists
git remote add origin git@github.com:OmobolajiDurojaiye/zee-plumbing-world.git 2>/dev/null \
  || git remote set-url origin git@github.com:OmobolajiDurojaiye/zee-plumbing-world.git

git push -u origin main
```

If the push is rejected because the GitHub repo was created with a README/license, run `git pull origin main --rebase --allow-unrelated-histories`, resolve conflicts, then push again. If SSH auth fails, check `ssh -T git@github.com` and that the SSH key is added to the GitHub account.

After this change set, commit with focused messages, for example:
`feat(areas): switch coverage to Abuja`, `feat(nav): icon mega-menu`, `feat(ui): decor kit and section backgrounds`, `feat(social): brand icons`, `feat(footer): developer credit`, and push to `main`.
