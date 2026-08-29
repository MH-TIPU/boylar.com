# boylar

Marketing site and CMS for boylar, a full-service IT firm.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Payload CMS 3 · PostgreSQL

The public site and the CMS run as one application. Content is edited at
`/admin` and rendered by the same Next.js server, so there is no separate
backend to deploy or keep in sync.

---

## Quick start

Requires Node 20.9+, pnpm, and a PostgreSQL database.

```bash
pnpm install
cp .env.example .env        # then fill in DATABASE_URI and PAYLOAD_SECRET
createdb boylar_dev
pnpm seed                   # services, site settings, navigation, legal pages
pnpm dev
```

The seed prints a generated admin password on first run. **Change it immediately
after signing in at http://localhost:3000/admin.**

Generate a `PAYLOAD_SECRET` with:

```bash
openssl rand -base64 32
```

---

## Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Development server on :3000 |
| `pnpm build` | Production build (runs without a database) |
| `pnpm start` | Serve the production build |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm lint` | ESLint |
| `pnpm seed` | Real content — safe to re-run, matches on slug |
| `pnpm seed:demo` | **Placeholder** case studies, testimonials, articles, jobs |
| `pnpm seed:demo:clear` | Removes everything `seed:demo` created |
| `pnpm generate:types` | Regenerate `src/payload-types.ts` after schema changes |

After changing any collection or global, run `pnpm generate:types` — the
frontend is typed against that file.

---

## ⚠️ Before going live

The site currently contains placeholder content that **must not ship**:

```bash
pnpm seed:demo:clear
```

That removes the invented case studies (Northwind Logistics, Apex Financial,
Nova Health), the three fabricated testimonials, the two sample articles, and
the two sample job openings. Publishing invented client work is misleading, and
fabricated testimonials are unlawful in most jurisdictions.

Also still needed:

- **Company details.** Site Settings → Contact: phone, registered address, legal
  name, and company registration number. The footer and JSON-LD read from there.
- **Legal review.** `/privacy`, `/terms`, and `/cookies` are structural templates
  with a placeholder notice at the top. Have a qualified adviser review them and
  remove that notice.
- **SMTP credentials.** Without `SMTP_HOST`, contact emails are logged to the
  console instead of sent. Submissions are still saved to the CMS either way.

---

## Project structure

```
src/
├── app/
│   ├── (frontend)/       Public site — one directory per route
│   ├── (payload)/        CMS admin UI and its REST API (mounted at /cms-api)
│   └── api/              Public endpoints: contact, subscribe, revalidate
├── collections/          Payload collections, one file each
├── globals/              Site Settings and Navigation
├── components/
│   ├── ui/               Primitives — Button, Card, Field, RichText…
│   ├── layout/           Header, Footer, Logo
│   └── sections/         Composed page sections — Hero, ServicesGrid…
├── lib/
│   ├── payload.ts        Cached data access via Payload's Local API
│   ├── seed/             Seed scripts and their content
│   └── validation.ts     Zod schemas shared by forms and API routes
└── styles/globals.css    Design tokens (Tailwind v4 `@theme`)
```

### Two route groups, two root layouts

`(frontend)` and `(payload)` each own a root layout. This is deliberate: the CMS
admin must not inherit the site's fonts, header, or dark palette.

Payload's REST API is mounted at **`/cms-api`**, not the default `/api`, so its
catch-all route does not shadow the site's own endpoints. This is set in
`src/payload.config.ts` under `routes.api` — if you change it, move
`src/app/(payload)/cms-api/` to match.

---

## Brand

The source of truth is **`boylar-kit/`** — logo files, fonts, colour
specification, and usage rules. `boylar-kit/BRAND-GUIDE.md` governs; this section
only records how the site applies it.

Assets in use:

| Where | File |
| --- | --- |
| Header and footer | `public/brand/boylar-lockup-horizontal-white.svg` |
| Favicons, touch icon, PWA icons | `public/favicon.*`, `public/apple-touch-icon.png`, `public/android-chrome-*.png` |
| Social sharing | `public/og-image.png` |

Typography is **Poppins** throughout, loaded via `next/font/google` and
self-hosted at build. The kit ships Medium/SemiBold/Bold as TTF but not Regular,
which body copy needs — same SIL OFL licence either way.

The brand name is **always lowercase**, including at the start of a sentence.

### Colour on a dark background

The brand palette is specified for light backgrounds. Purple `#534AB7` scores
6.93:1 on white but only **2.6–2.9:1 on this site's dark surfaces**, which fails
WCAG AA and even the 3:1 floor for large text. So:

| Token | Value | Role | Contrast |
| --- | --- | --- | --- |
| `--color-accent` | `#7F77DD` | Text, icons, links on dark | 4.77–5.30:1 |
| `--color-accent-solid` | `#6157C7` | Button fills, always with white | 5.68:1 white-on-fill |
| `--color-accent-solid-hover` | `#6D66CE` | Hover state | 4.73:1 |
| `--color-brand` | `#534AB7` | The brand purple, unaltered — light surfaces, print, logo | 6.93:1 on white |

`#7F77DD` is the guide's own **Purple light**, which it sanctions for accents.
`#6157C7` sits between it and the brand purple so fills still read as brand
purple while carrying white text. The unaltered `#534AB7` is kept as
`--color-brand` and is what the logo files and `theme-color` use.

Every token pair on the site passes WCAG AA for normal text; the lowest is
4.57:1.

> If the site ever moves to a light design, use `--color-brand` directly as the
> accent — it is the correct choice there, and these substitutions become
> unnecessary.

## Design system

All tokens live in `src/styles/globals.css` under `@theme`. Tailwind v4 generates
utilities from them automatically — `--color-accent` becomes `text-accent`,
`--text-display-lg` becomes `text-display-lg`.

The site commits to a single dark look; there is no light palette to maintain.

Motion respects `prefers-reduced-motion` throughout.

---

## Content model

| Collection | Purpose |
| --- | --- |
| `services` | The six service pillars, with features, deliverables, FAQs |
| `service-categories` | Grouping for services |
| `projects` | Case studies — challenge, solution, results, metrics |
| `testimonials` | Client quotes, optionally linked to a case study |
| `awards` | Recognition, shown on About |
| `careers` | Job openings, with drafts |
| `posts` | Insights articles, with drafts |
| `pages` | Legal and ad-hoc pages, resolved at `/[slug]` |
| `contact-submissions` | Enquiries from the contact and quote forms |
| `subscribers` | Newsletter signups |
| `media` | Uploads with generated responsive sizes |
| `users` | CMS accounts — `admin` or `editor` |

Globals: **Site Settings** (brand, contact, social, analytics) and
**Navigation** (header and footer menus, header CTA).

---

## Forms and spam handling

`/api/contact` handles both the contact and quote forms; `/api/subscribe`
handles the footer signup. Each applies, in order:

1. Rate limiting — 5 requests per IP per 10 minutes (`src/lib/rate-limit.ts`)
2. Zod validation, using the same schema the browser used
3. A honeypot field, accepted silently so bots learn nothing
4. Persistence to the CMS **before** any email is attempted

A mail failure never loses an enquiry — the record is already saved, and the
error is logged rather than shown to the sender.

> The rate limiter holds counts in process memory. If you ever run more than one
> replica, move it to Redis — each replica currently keeps its own counts.

---

## Deployment

See **[DEPLOYMENT.md](DEPLOYMENT.md)** for the Docker Compose setup, TLS,
backups, and the launch checklist.

---

## Previous implementation

This site replaced a Laravel 12 + Blade + Filament application. That codebase is
preserved in full on the **`legacy-laravel`** branch.
