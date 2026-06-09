import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    {
      name: 'figma-asset-resolver',
      resolveId(id) {
        if (id.startsWith('figma:asset/')) {
          // Return a placeholder for figma assets
          return '\0figma-asset-placeholder'
        }
      },
      load(id) {
        if (id === '\0figma-asset-placeholder') {
          // Return an empty string as default export for images
          return 'export default ""'
        }
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/app'),
    },
  },
  base: './',
})
