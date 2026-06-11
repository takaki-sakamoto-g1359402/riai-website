# Riai Release Checklist

This checklist tracks the remaining approval-gated steps needed to turn the local Riai website into a public distribution.

## Current Local Evidence

- Repository path: `/Users/sakamototakaki/Documents/New project/riai-website`
- Latest local commit: `c12a3d0 docs: add approval gated release checklist`
- Local checks passed:
  - `npm run lint`
  - `npm run build`
  - `npm run validate`
- Production preview HTTP check passed locally:
  - `GET /` returned `200 OK`
  - `GET /assets/riai-core.webp` returned `200 OK`
- Hero WebP size: about `108 KB`
- GitHub Pages workflow: prepared as manual `workflow_dispatch`

## Approval Gates

Do not perform these steps without explicit user approval.

### 1. Browser Screenshot QA

Required approval phrase:

```text
Approve browser: open local preview and capture Riai screenshots
```

After approval:

1. Start production preview.
2. Open the local preview in the browser.
3. Verify desktop and mobile responsive layout.
4. Verify `EN / JA` toggle.
5. Verify Command Center phase tabs: `Plan`, `Act`, `Reflect`, `Learn`.
6. Capture at least one screenshot to `public/screenshots/riai-home.png`.
7. Update `README.md` and `docs/COMMUNITY_POST.md` with the screenshot path.
8. Run `npm run lint`, `npm run build`, and `npm run validate`.
9. Commit the screenshot and documentation update.

### 2. GitHub Repository And Push

Required approval phrase:

```text
Approve GitHub: create/use public repo <owner>/<repo> and push Riai website
```

After approval:

1. Create or select the public GitHub repository.
2. Add the repository as `origin`.
3. Push `main`.
4. Record the repository URL in `README.md`.
5. Commit documentation changes if needed.

### 3. GitHub Pages Deployment

Required approval phrase:

```text
Approve deploy: run GitHub Pages workflow for <owner>/<repo>
```

After approval:

1. Enable GitHub Pages with GitHub Actions as the source if needed.
2. Run the manual `.github/workflows/pages.yml` workflow.
3. Wait for the workflow to complete.
4. Verify the live URL opens.
5. Verify the live page loads assets and Command Center interactions.
6. Record the live URL in `README.md` and `docs/COMMUNITY_POST.md`.
7. Commit and push final documentation updates.

## Completion Evidence Needed

The goal is complete only when all of the following are proven:

- Public live URL opens successfully.
- GitHub repository URL is available.
- Latest commit is pushed.
- README contains setup, design direction, interactions, screenshot path, deployment URL, and legal note.
- Community post contains English and Japanese devlog with screenshot and live URL references.
- Local and CI checks pass.
- Browser verification confirms the live site works.
