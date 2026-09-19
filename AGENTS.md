# Alamo AFCEA Education Foundation (AAEF) Web App

React + Vite + Tailwind CSS v4 project for the Alamo AFCEA Education Foundation landing page and grant/scholarship portal.

## Quick Commands

- Install dependencies: `pnpm install`
- Start dev server: `pnpm dev`
- Build for production: `pnpm build`
- Preview production build: `pnpm preview`

## Project Structure

- `src/main.tsx` - React entrypoint; mounts `src/App.tsx` and loads `src/index.css`
- `src/App.tsx` - Main landing page, navigation, program tabs, impact metrics, and interactive previews
- `src/index.css` - Global theme variables, Inter font imports, and Tailwind CSS v4 config
- `index.html` - HTML shell with OpenGraph metadata and typography preconnects
- `vite.config.ts` - Vite configuration with React, Tailwind CSS v4, and `@` alias
- `package.json` - Dependencies and build scripts

## Tech Stack & Styling

- Runtime: React 19 + TypeScript
- Styling: Tailwind CSS v4 with custom theme palette (AFCEA Navy `#003366`, Tech Light Blue `#007BFF`, Slate `#F4F6F9`, Charcoal `#2C3E50`)
- Icons: `lucide-react`

