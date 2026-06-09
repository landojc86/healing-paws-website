import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  build: { format: 'file' },
  site: 'https://www.healingpawscenter.com',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src/app'),
        'react-router-dom/server': path.resolve('./src/app/router-shim.tsx'),
        'react-router-dom': path.resolve('./src/app/router-shim.tsx'),
      },
    },
  },
});
