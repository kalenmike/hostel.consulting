# Hostel Consulting

A static-rendered React site replicating [hostel.consulting](https://hostel.consulting/), built with Vite, React, TypeScript, Tailwind CSS and pnpm. Supports static site generation (SSG) and automated GitHub Pages deployment.

## Pages

- **Home** — `/`
- **Contact Us** — `/contact-us/`
- **HostelLife Hub** — `/hostellife-hub/`

## Getting started

```bash
pnpm install
pnpm dev
```

## Scripts

| Command          | Description                                      |
| ---------------- | ------------------------------------------------ |
| `pnpm dev`       | Start the Vite dev server with HMR               |
| `pnpm build`     | Type-check, build the client and prerender pages |
| `pnpm ssg`       | Prerender routes to static HTML in `dist/`       |
| `pnpm lint`      | Run Oxlint                                       |
| `pnpm preview`   | Serve the built `dist/` output                   |

## How static rendering works

1. `vite build` compiles the client bundle and copies assets into `dist/`.
2. `scripts/prerender.mjs` boots Vite in middleware mode, loads `src/entry-server.tsx`, and renders each route in `src/App.tsx` to static HTML using `react-dom/server`.
3. Each route is written as `dist/<route>/index.html`, so the site works without JavaScript execution.

Routes are defined in `src/App.tsx`. Add new routes there and to the `routes` array in `scripts/prerender.mjs`.

## GitHub Pages deployment

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the site and publishes `dist/` to GitHub Pages on every push to `main`.

For **project sites** (served from a sub-path like `https://user.github.io/repo/`), set `VITE_BASE_PATH=/repo/` in the build step of the workflow — this is already wired up automatically using the repository name. For **user/org pages** or a custom domain, the default root base works as-is.

Once pushed, enable Pages in the repo settings: **Settings → Pages → Source: GitHub Actions**.

## Styling

Tailwind CSS v4 is configured via the `@tailwindcss/vite` plugin. Design tokens (brand colors and fonts) live in the `@theme` block in `src/index.css`, with reusable component classes (`.btn`, `.field`, etc.) defined in `@layer components`.