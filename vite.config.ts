import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Required for GitHub Pages: assets served from /<repo-name>/
  base: '/RK_The_Techist_Website/',
})
