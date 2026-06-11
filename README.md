# Riai Website

Premium bilingual landing site and interactive command-center mock dashboard for **Riai**, a calm and transparent autonomous-agent brand.

## Status

- Local build: passing
- Deployment URL: pending approval and deployment
- GitHub repository: pending approval and push
- Screenshot: pending browser capture

## Design Direction

Riai should feel warm, precise, futuristic, trustworthy, and quietly powerful. The visual system uses:

- Pearl and celadon surfaces with graphite typography
- A deep blue-green command rail for operational contrast
- Lightweight glass/depth panels and a generated computational-core hero asset
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
npm run validate  # Confirm key files and lightweight hero asset
```

## Interactions

- `EN / JA` language toggle changes all primary copy.
- Command Center phase tabs switch between `Plan`, `Act`, `Reflect`, and `Learn`.
- Dashboard panels expose simulated active agents, safety checks, memory, rule status, task timeline, and activity.
- Navigation uses semantic anchors and keyboard-focusable controls.
- Motion respects `prefers-reduced-motion`.

## Screenshots

Screenshot capture is pending user approval to open a browser. Expected path:

```text
public/screenshots/riai-home.png
```

## Deployment

The site is static and can be deployed from `dist/` to GitHub Pages, Vercel, Netlify, or Cloudflare Pages.

Recommended GitHub Pages flow after approval:

1. Push this repository to GitHub.
2. Configure Pages to deploy from a GitHub Actions workflow or from the generated static output.
3. Verify the public URL opens and the Command Center works.

## Legal Note

Riai is an original autonomous-agent concept. Demo content is simulated and does not represent real customers, production deployments, safety certification, or live account integrations.

The supplied reference URLs were studied only for abstract design and release patterns. This project must not copy protected layouts, text, logos, imagery, brand names, color systems, trade dress, animations, or source code from those references.
