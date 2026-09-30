import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// For GitHub Pages project sites the app is served from a sub-path
// (e.g. https://user.github.io/repo/). Set VITE_BASE_PATH accordingly.
// TEMPORARY: defaulted to /hostel.consulting/ for testing on the project-site
// URL; revert to '/' (root base) once the site is on a custom domain.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE_PATH || '/hostel.consulting/',
})