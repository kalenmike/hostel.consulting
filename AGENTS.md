# AGENTS.md

## What this project is

A small marketing site for **hostel.consulting** (a consultancy for hostels). It is a static, content-driven site with no backend — there is no server, database, or API. Every page is rendered to plain HTML at build time, so "deploying" just means uploading static files.

The person this site belongs to is a **non-technical business owner**, so changes are usually simple content updates: wording, testimonials, services, links, or images. Keep changes minimal, and keep the visual style consistent with the rest of the site.

## Stack

- **React 19 + TypeScript** (Vite).
- **pnpm** for package management — use `pnpm install`, `pnpm build`, `pnpm lint`, `pnpm preview`.
- **Tailwind CSS v4** — styling via utility classes and theme tokens in `src/index.css`. No separate CSS files per component.
- **react-icons** (the `fa6` set) for all icons — registered once in `src/components/icon-registry.ts`.
- **react-router-dom** for the three routes.
- Static prerendering via `scripts/prerender.mjs` (runs during `pnpm build`), which also generates `sitemap.xml` and `robots.txt`.

## Conventions — follow these

- **DRY**: if the same markup or data appears twice, extract it. There are shared components and a single source of truth for content.
- **Separation of concerns**:
  - `src/pages/*` = page composition only (which sections render).
  - `src/sections/home/*` = the home page sections.
  - `src/components/*` = shared, reusable UI (Container, SectionHeading, PageHero, buttons, etc.).
  - `src/data/*` = **all editable content** (nav, services, testimonials, social links, hostel comparison). Most content changes happen here and nowhere else.
  - `src/hooks/*` = shared logic (carousel, page visibility).
- Icons must be declared in `src/components/icon-registry.ts` before use; render them with `<Icon name="..." />`.
- Assets live in `public/images/` and must be referenced through `asset('/images/...')` (from `src/lib/assets.ts`) so they work when the site is served from a GitHub Pages sub-path. Never hard-code `/images/...` paths.

## Entry points

- `src/pages/Home.tsx` — home page; composes the six sections from `src/sections/home/`.
- `src/sections/home/Hero.tsx` — hero carousel (slides are a `SLIDES` array at the top of the file).
- `src/pages/Contact.tsx` + `src/components/ContactForm.tsx` — contact page and form (posts to FormSubmit; **no backend**).
- `src/pages/HostelLifeHub.tsx` — the HostelLife Hub page (headings use Poppins/Michroma; data arrays `BENEFITS`/`PILLARS` at the top of the file).
- `src/data/` — edit testimonials, services, nav links, social links here.
- `src/components/Header.tsx` / `Footer.tsx` — global navigation and footer.
- `src/index.css` — theme tokens (colors, fonts, animation keyframes), shared component classes (`.btn`, `.field`, `.media-frame`, `.hero-scrim`), and the Google Fonts import.
- `src/App.tsx` / `src/main.tsx` — routes and the router (basename derives from the build base path).

## Working with the project

- **Local dev**: `pnpm dev`.
- **Verify a change**: `pnpm build` (type-checks + builds + prerenders), `pnpm lint`.
- **Preview the built site**: `pnpm preview` (serves the static output).
- **Deploy**: `pnpm deploy:gh-pages` builds and publishes the static site to the `gh-pages` branch. GitHub Actions also deploys on pushes to `main`.

## Gotchas

- The site is served from a sub-path (`/hostel.consulting/`) when testing without a custom domain — the base path in `vite.config.ts` is temporarily set to `/hostel.consulting/`. Revert to `'/'` if the site moves to a custom domain.
- The Contact form is wired to FormSubmit for `info@hostel.consulting`; the first submission triggers a one-time activation email that must be confirmed before mail flows.
- No backend means nothing stores form data locally — the form only sends email via FormSubmit.