# Riai Website

Premium bilingual landing site and interactive command-center mock dashboard for **Riai**, a calm and transparent autonomous-agent brand.

## Status

- Local build: passing
- Deployment URL: pending approval and deployment
- GitHub repository: pending approval and push
- Screenshot: pending browser capture
- GitHub Pages workflow: prepared locally

## Design Direction

Riai should feel warm, precise, futuristic, trustworthy, and quietly powerful. The visual system uses:

- Pearl and celadon surfaces with graphite typography
- A deep blue-green command rail for operational contrast
- Lightweight glass/depth panels and a generated computational-core hero asset
- Optimized WebP hero media with a compressed PNG fallback
- Editorial scale in marketing sections, denser operational UI inside the Command Center
- Visible state, memory, task, safety, and rule surfaces so the simulated agent behavior stays inspectable

Reference sites were used only for abstract patterns such as information architecture, pacing, typography hierarchy, dashboard density, material-state clarity, and launch polish. No protected layouts, assets, copy, logos, colors, trade dress, animations, or code were copied.

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Setup

Node.js 22 or newer is recommended. The CI workflow uses Node 22.

```bash
npm install
npm run dev
```

The local app runs through Vite. By default Vite prints the localhost URL in the terminal.

## Scripts

```bash
npm run dev       # Start development server
npm run build     # Type-check and create static dist/
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
npm run validate  # Confirm key files, scripts, dist output, Pages workflow, and hero asset budgets
npm run smoke     # Start production preview and verify HTML/assets over HTTP
npm run qa        # Run lint, build, validate, and smoke in release order
```

## Interactions

- `EN / JA` language toggle changes all primary copy.
- Command Center phase tabs switch between `Plan`, `Act`, `Reflect`, and `Learn`.
- Dashboard panels expose simulated active agents, safety checks, memory, rule status, task timeline, and activity.
- The community CTA currently returns visitors to the Command Center demo until a real public repository or discussion URL is approved.
- Navigation uses semantic anchors and keyboard-focusable controls.
- Motion respects `prefers-reduced-motion`.

## Screenshots

Screenshot capture is pending user approval to open a browser. Expected path:

```text
public/screenshots/riai-home.png
```

## Deployment

The site is static and can be deployed from `dist/` to GitHub Pages, Vercel, Netlify, or Cloudflare Pages.

`vite.config.ts` uses a relative build base so the generated assets work on GitHub Pages project URLs such as `/repository-name/` as well as custom domains.
Run `npm run build` before `npm run validate` because validation checks the generated `dist/` output.

Approval-gated release steps are tracked in [`docs/RELEASE_CHECKLIST.md`](docs/RELEASE_CHECKLIST.md).
Current non-browser QA evidence is tracked in [`docs/LOCAL_QA_REPORT.md`](docs/LOCAL_QA_REPORT.md).
`npm run smoke` verifies the local production preview without opening a browser; visual QA still requires the browser approval gate. Use `npm run qa` before release because it rebuilds `dist/` before validation and smoke checks.

Recommended GitHub Pages flow after approval:

1. Push this repository to GitHub.
2. Replace the internal community CTA with an approved public repository or discussion URL if that community destination is ready.
3. In the repository settings, enable GitHub Pages with **GitHub Actions** as the source.
4. Manually run `.github/workflows/pages.yml` after deployment approval. The workflow runs `npm ci`, `npm run lint`, `npm run build`, `npm run validate`, and `npm run smoke`.
5. Verify the public URL opens and the Command Center works.

## Legal Note

Riai is an original autonomous-agent concept. Demo content is simulated and does not represent real customers, production deployments, safety certification, or live account integrations.

The supplied reference URLs were studied only for abstract design and release patterns. This project must not copy protected layouts, text, logos, imagery, brand names, color systems, trade dress, animations, or source code from those references.
