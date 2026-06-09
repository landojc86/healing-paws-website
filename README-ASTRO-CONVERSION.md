# Healing Paws Astro Site

This is an Astro multi-page/static-rendered conversion of the uploaded Figma Make React/Vite export.

## What changed

- Created real Astro routes in `src/pages/` for all 53 React routes from `src/app/App.tsx`.
- Added `src/layouts/Layout.astro` for per-page SEO titles, descriptions, canonical URLs, and social meta tags.
- Added `src/app/AstroPage.tsx`, which wraps the existing React page components in a router so existing `Link` components keep working.
- Cleaned the invalid Figma Make dependency aliases from `package.json` that were causing `EINVALIDPACKAGENAME` errors.
- Added `astro.config.mjs` with React and sitemap integrations.
- Added `netlify.toml` for Netlify deployment.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

The deployable output will be in:

```text
dist/
```

## Netlify settings

```text
Build command: npm run build
Publish directory: dist
```

## Vercel settings

```text
Framework preset: Astro
Build command: npm run build
Output directory: dist
```

## Important next SEO step

I generated starter titles/descriptions from the route names. Before launch, customize the page copy and metadata in each `src/pages/**/index.astro` file.
