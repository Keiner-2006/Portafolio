# Portfolio 2025 — Keiner David Arias Morales

Personal portfolio showcasing backend .NET expertise, Flutter mobile architecture, and full-stack solutions with interactive 3D experiences.

**Built with** Vue 3, TypeScript, and Vite. Motion via GSAP and Lenis, 3D via three.js, audio via Howler.  
**Languages:** English, Deutsch, Español.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server on port **3000** |
| `npm run build` | `vue-tsc -b && vite build` → `dist/` |
| `npm run preview` | Serve production build locally |
| `npm run typecheck` | Typecheck only (`vue-tsc -b`) |

## Content

- **Projects**: `src/content/projects/{en,de,es}/<slug>.ts` — copy, tags, media, links.
- **Previews**: `src/content/projects/previews/`.
- **Tags**: variants and labels in `src/components/tagVariants.ts`.

## Stack

- Vue 3 (`<script setup>`), SCSS with shared mixins
- i18n helpers under `src/i18n/` (en / de / es)
- WebGL / GLSL under `src/three/`

---

[keinerarias.dev](https://keinerarias.dev) · keinerariasmorales@gmail.com
