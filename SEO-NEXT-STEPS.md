# SEO next steps before launch

This Astro conversion gives every route its own static HTML URL, but the copy and metadata should still be reviewed before launch.

## Highest-priority fixes

1. Update the `site` URL in `astro.config.mjs` if the final domain is different from `https://www.healingpawscenter.com`.
2. Edit each `src/pages/**/index.astro` file so every page has a unique, human-written:
   - `title`
   - `description`
   - `canonical`
3. Make sure the homepage and major service pages include real crawlable text, not only images.
4. Add descriptive `alt` text for important images inside the React components.
5. After deployment, submit the generated sitemap in Google Search Console.

## Deployment

Netlify:

```text
Build command: npm run build
Publish directory: dist
```

Vercel:

```text
Framework preset: Astro
Build command: npm run build
Output directory: dist
```
