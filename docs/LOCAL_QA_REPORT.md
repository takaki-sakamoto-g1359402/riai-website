# Local QA Report

Date: 2026-06-12

This report records current local evidence for the Riai website before browser screenshot QA, GitHub push, and public deployment. It intentionally does not claim public availability or browser visual sign-off.

## Verified Locally

- Repository path: `/Users/sakamototakaki/Documents/New project/riai-website`
- Latest local commit at time of report creation: `b776101 docs: avoid stale release checklist sha`
- Working tree was clean before this report was added.
- No Git remote was configured.
- No screenshot file existed under `public/screenshots/`.
- Static build artifacts existed under `dist/`.
- Built asset references use relative paths in `dist/index.html`.
- `dist/.nojekyll` exists for GitHub Pages compatibility.
- Hero asset is available as optimized WebP:
  - `public/assets/riai-core.webp`
  - approximately `108 KB`

## Command Evidence

These commands passed in the current local environment before this report was committed:

```bash
npm run lint
npm run build
npm run validate
```

The latest observed build output was:

```text
dist/index.html                   0.66 kB | gzip:   0.39 kB
dist/assets/index-vGZbVxtF.css   20.64 kB | gzip:   5.01 kB
dist/assets/index-BFB6Bqs8.js   365.24 kB | gzip: 115.80 kB
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
  - `aria-label`, `aria-expanded`, `aria-selected`, and tab roles where appropriate
  - `prefers-reduced-motion` handling in CSS and Framer Motion config
- The GitHub Pages workflow is manual-only through `workflow_dispatch`.

## Not Yet Verified

These items require explicit approval because they involve browser use or external publishing:

- Browser visual QA
- Desktop and mobile screenshot capture
- README/community screenshot reference update
- Public GitHub repository creation or selection
- Git push
- GitHub Pages deployment
- Live URL verification

Required approval phrase for the next step:

```text
Approve browser: open local preview and capture Riai screenshots
```
