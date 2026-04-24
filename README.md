# RK The Techist Website

Marketing and lead-generation website for RK The Techist, built with React, TypeScript, Tailwind, Framer Motion, and Vite.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- EmailJS (contact form)

## Local Development

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Build production bundle:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Environment Variables

Create a local `.env` file with:

```bash
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_FOUNDER_TEMPLATE_ID=your_founder_template_id
VITE_EMAILJS_CLIENT_TEMPLATE_ID=your_client_template_id
```

Notes:
- The contact form requires EmailJS variables to send messages.
- Only `VITE_*` variables are exposed to the frontend in Vite.

## Deployment (Vercel)

This project is configured for Vercel and client-side routing.

### Required project settings in Vercel

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install` (default is fine)

### Required Environment Variables in Vercel

Add these in **Project Settings -> Environment Variables**:

- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_FOUNDER_TEMPLATE_ID`
- `VITE_EMAILJS_CLIENT_TEMPLATE_ID`

### SPA Routing Support

`vercel.json` rewrites all paths to `index.html` so routes like:

- `/services`
- `/case-studies`
- `/about`
- `/contact`
- `/privacy-policy`
- `/terms`

work correctly on direct refresh and deep links.

## SEO Assets

- Main metadata + JSON-LD schema: `index.html`
- Crawler rules: `public/robots.txt`
- Sitemap: `public/sitemap.xml`
- LLM crawler context: `public/llms.txt`

## Project Structure

- `src/components/` reusable UI sections
- `src/pages/` route pages
- `src/App.tsx` route mapping + shared layout
- `public/` static assets and SEO files
