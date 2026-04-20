import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Custom domain serves the site from root.
  base: '/',
  server: {
    allowedHosts: ['d528-2405-201-2016-e9a0-91ba-c49c-f3ff-2f58.ngrok-free.app'],
  },
})
