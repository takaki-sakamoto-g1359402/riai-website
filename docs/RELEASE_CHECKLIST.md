# Riai Release Checklist

This checklist tracks the remaining approval-gated steps needed to turn the local Riai website into a public distribution.

## Current Local Evidence

- Repository path: `/Users/sakamototakaki/Documents/New project/riai-website`
- Latest local commit: run `git log --oneline -1` in this repository before release.
- Required local release check:
  - `npm run qa`
- Production preview HTTP check is covered by `npm run smoke` inside `npm run qa`:
  - `GET /` returned `200 OK`
  - `GET /assets/riai-core.webp` returned `200 OK`
  - `GET /assets/riai-core.png` returned `200 OK`
- Browser screenshot QA: completed locally at `http://127.0.0.1:4175/`
  - `public/screenshots/riai-home.png`
  - `public/screenshots/riai-mobile.png`
- Hero WebP size: about `108 KB`
- GitHub Pages workflow: approved for `main` pushes and manual `workflow_dispatch`

## Approval Gates

Do not perform these steps without explicit user approval.

### 1. Browser Screenshot QA

Status: completed after approval.

Original approval phrase:

```text
Approve browser: open local preview and capture Riai screenshots
```

Completed:

1. Started production preview.
2. Opened the local preview in the browser.
3. Verified desktop and mobile responsive layout.
4. Verified `EN / JA` toggle.
5. Verified Command Center phase tabs and arrow-key navigation.
6. Captured screenshots to `public/screenshots/`.
7. Updated `README.md` and `docs/COMMUNITY_POST.md` with screenshot paths.

### 2. GitHub Repository And Push

Status: completed after approval.

Original approval phrase:

```text
Approve GitHub: create/use public repo <owner>/<repo> and push Riai website
```

Completed:

1. Created public repository `takaki-sakamoto-g1359402/riai-website`.
2. Added the repository as `origin`.
3. Pushed `main`.
4. Kept the internal community CTA until a real public discussion destination is ready.

### 3. GitHub Pages Deployment

Required approval phrase for repository settings:

```text
Approve GitHub Settings: enable GitHub Pages Actions for <owner>/<repo>
```

Deployment workflow status: approved through the user's blanket approval.

Original approval phrase for deployment workflow:

```text
Approve deploy: run GitHub Pages workflow for <owner>/<repo>
```

Required approval phrase for live browser verification:

```text
Approve browser: open live Riai URL <url> and verify deployment
```

Required approval phrase for final documentation push:

```text
Approve GitHub: push final Riai deployment docs to <owner>/<repo>
```

After approval:

1. Enable GitHub Pages with GitHub Actions as the source only after the GitHub Settings approval phrase.
2. Run `.github/workflows/pages.yml` after approval through `main` push or manual dispatch.
3. Wait for the workflow to complete.
4. Open and verify the live URL only after the live browser verification approval phrase.
5. Verify the live page loads assets and Command Center interactions.
6. Record the live URL in `README.md` and `docs/COMMUNITY_POST.md`.
7. Commit final documentation updates locally.
8. Push final documentation updates only after the final documentation push approval phrase.

## Completion Evidence Needed

The goal is complete only when all of the following are proven:

- Public live URL opens successfully.
- GitHub repository URL is available.
- Latest commit is pushed.
- README contains setup, design direction, interactions, screenshot path, deployment URL, and legal note.
- Community post contains English and Japanese devlog with screenshot and live URL references.
- Local and CI checks pass.
- Local preview smoke check passes.
- Browser verification confirms the live site works.
