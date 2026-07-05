# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # dev server (next dev --turbopack)
npm run build   # production build
npm run start   # serve production build
npm run lint    # eslint (next core-web-vitals)
```

No test suite exists. Both `package-lock.json` and `pnpm-lock.yaml` are checked in; scripts run under either.

## Architecture

Next.js 16 **App Router**, **plain JavaScript/JSX** (not TypeScript, despite the README). Path alias `@/*` → `src/*` (`jsconfig.json`).

**Global chrome lives in `src/app/layout.js`, not per-page.** The root layout renders `<DotGrid>` (animated three.js/react-three-fiber dot background) and `<Presence>` behind every route. Individual pages are `"use client"`, set `backgroundColor: transparent` and `zIndex: 2`, and float on top of that background. Don't add a background to a page — it belongs in the layout.

Pages are **fully self-contained client components** (`src/app/page.js`, `src/app/projects/page.js`) that compose small presentational components from `src/components/`. There is no data layer or API — the projects list is static (`src/app/projects/projects.json`, whose `description` fields contain inline HTML rendered via `dangerouslySetInnerHTML`).

**Shared conventions (reuse these, don't inline new copies):**
- `src/lib/ui.js` — design tokens (`INK`, `ACCENT`) and `SOFT_BUTTON_CLASS` / `SOFT_BUTTON_BORDER` used by CTA buttons across pages.
- `src/lib/animations.js` — the `pageContainerAnimation` / `pageItemAnimation` Framer variants that drive staggered page entrances. Every page uses these on its `<motion.main>`.
- `src/lib/utils.js` — `cn()` (clsx + tailwind-merge), the standard shadcn class merger.
- The `cursor-target` className marks elements the custom `Presence` cursor reacts to.

**shadcn/ui** (`components.json`, new-york style, base color zinc) generates into `src/components/ui/` as `.jsx` (`"tsx": false`). Icons: lucide-react. A `@magicui` registry is configured.

**Animation stack is intentionally plural:** `motion` (imported as `motion/react`) for page/UI animation, `gsap` for imperative timelines, `@react-three/fiber` + `three` for the DotGrid, and `rough-notation` for the highlighter effects. Match the library already used by the component you're editing.

**Styling:** Tailwind (v3) with HSL CSS-variable theme tokens in `tailwind.config.mjs`; custom `xs` breakpoint at 430px; fonts `Gowun_Batang` and `Inconsolata` loaded via `next/font` and exposed as `--font-gowun-batang` / `--font-inconsolata`. A few page-level layout styles use CSS Modules (`Page.module.css`, `*.module.css`).
