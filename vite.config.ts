import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// For GitHub Pages project sites the app is served from a sub-path
// (e.g. https://user.github.io/repo/). Set VITE_BASE_PATH accordingly.
// Defaults to a root base, which works for user/org pages and custom domains.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE_PATH || '/',
})