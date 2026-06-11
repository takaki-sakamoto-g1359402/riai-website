# Local QA Report

Date: 2026-06-12

This report records current local evidence for the Riai website before GitHub push and public deployment. It intentionally does not claim public availability.

## Verified Locally

- Repository path: `/Users/sakamototakaki/Documents/New project/riai-website`
- Latest local commit should be checked with `git log --oneline -1` before release.
- Working tree should be checked with `git status --short` before release.
- No Git remote was configured.
- Browser QA screenshots were captured:
  - `public/screenshots/riai-home.png`
  - `public/screenshots/riai-mobile.png`
- Static build artifacts existed under `dist/`.
- Built asset references use relative paths in `dist/index.html`.
- `dist/.nojekyll` exists for GitHub Pages compatibility.
- Hero asset is available as optimized WebP:
  - `public/assets/riai-core.webp`
  - approximately `108 KB`
- PNG fallback is optimized for static delivery:
  - `public/assets/riai-core.png`
  - below `750 KB`

## Command Evidence

These commands are the current local QA command set:

```bash
npm run lint
npm run build
npm run validate
npm run smoke
npm run qa
```

`npm run validate` now checks required source files, required package scripts, generated `dist/` output, relative build asset references, manual-only GitHub Pages workflow settings, accessibility regression gates, public-CTA guardrails, lightweight WebP size, PNG fallback size, and the preview smoke script.

`npm run smoke` starts a local Vite production preview, verifies the landing HTML, and confirms the WebP and PNG hero assets return `200 OK` with expected content types and size budgets. It does not open a browser and does not replace visual QA.

`npm run qa` is the preferred local release check because it runs lint, rebuilds `dist/`, validates release invariants, and then runs smoke checks in order.

The latest local `npm run qa` pass observed before this report update completed successfully with:

```text
eslint . && tsc -b && vite build && node ./scripts/validate.mjs && node ./scripts/smoke-preview.mjs
Validation passed: files, scripts, dist output, Pages workflow, accessibility gates, and hero asset are release-ready locally.
Smoke preview passed at http://127.0.0.1:4174
```

The latest observed build output was:

```text
dist/index.html                   0.66 kB | gzip:   0.39 kB
dist/assets/index-v83BkWPy.css   20.45 kB | gzip:   5.00 kB
dist/assets/index-sz-qz1K-.js   367.98 kB | gzip: 116.76 kB
```

## Feature Evidence From Source

- Premium landing page sections are implemented in `src/App.tsx`.
- Bilingual English/Japanese copy is centralized in `src/content.ts`.
- Command Center phase state uses React local state for `Plan`, `Act`, `Reflect`, and `Learn`.
- Dashboard content includes simulated active agents, safety checks, memory, rule panel, task timeline, and activity.
- Accessibility basics are present:
  - semantic landmarks
  - skip link
  - keyboard-focusable controls
  - phase tab arrow-key navigation
  - `aria-label`, `aria-expanded`, `aria-selected`, and tab roles where appropriate
  - progressbar semantics on agent progress indicators
  - localized document title, `html.lang`, and meta description updates
  - `prefers-reduced-motion` handling in CSS and Framer Motion config
- The GitHub Pages workflow is manual-only through `workflow_dispatch`.
- Browser QA opened `http://127.0.0.1:4175/` and verified:
  - page title: `Riai | Transparent Autonomous Agents`
  - no browser console warnings or errors
  - Japanese language toggle updates `html.lang`, document title, and meta description
  - Command Center tab click selects `Act`
  - Arrow-key tab navigation moves from `Act` to `Reflect`
  - mobile viewport exposes the menu button

## Not Yet Verified

These items require external publishing:

- Public GitHub repository creation or selection
- Git push
- GitHub Pages deployment
- Live URL verification
