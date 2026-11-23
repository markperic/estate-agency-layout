# estate — Layout Showcase

A high-end property / estate-agency landing page layout — a reusable Capote
Design starting point for the next project with a cinematic, scroll-driven
brief, kept as its own standalone repo so it's easy to clone instead of
digging it out of the larger agency showcase project.

Scroll architecture: cinematic curtain opener, chapter pill navigation, drag
slider, pinned stat columns, counter-scroll case index, services rotator,
perspective expand, dual marquee, sticky partnership split, team slider,
contact statement, and tabbed locations. Built with Next.js App Router,
Tailwind CSS v4, [Motion](https://motion.dev) and
[Lenis](https://lenis.darkroom.engineering/) smooth scrolling.

Live demo: [estate.capote.design](https://estate.capote.design)

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3456](http://localhost:3456) — the homepage *is* the
layout (no separate `/preview` route).

## Using this as a starting point for a new project

1. Clone this repo (or use it as a GitHub template).
2. Swap the brand: replace the "Sterling Gate" wordmark in
   `src/components/site-nav.tsx` / `site-footer.tsx`, and the copy defaults on
   each section under `src/registry/modules/`.
3. Replace the photography in `public/images/library/` — or remap entries in
   `src/registry/lib/placeholder-images.ts` (one file change covers every
   section that reuses a given photo).
4. Tune colour accents (the hero curtain defaults to `#7a0c07`) and chapter
   labels in `src/app/page.tsx`.

## Licensing note

Photography in `public/images/library/` is placeholder stock from the Capote
Design module catalog — fine for layout demos and early client drafts; swap
for the client's real photography before launch. Archivo Black (via
`next/font/google`, used only on the dual-marquee showcase beat) is a free
Google Font standing in for a licensed display face.

## Stack

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · Motion · Lenis ·
TypeScript.

---

Part of the Capote Design agency's layout collection — see
[showcase.capote.design](https://showcase.capote.design) for the full
catalog.
