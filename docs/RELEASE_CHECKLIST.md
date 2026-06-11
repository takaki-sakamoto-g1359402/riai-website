# Riai Release Checklist

This checklist tracks the remaining approval-gated steps needed to turn the local Riai website into a public distribution.

## Current Local Evidence

- Repository path: `/Users/sakamototakaki/Documents/New project/riai-website`
- Public repository: https://github.com/takaki-sakamoto-g1359402/riai-website
- Live URL: https://takaki-sakamoto-g1359402.github.io/riai-website/
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

Status: completed after approval.

Completed:

1. Enabled GitHub Pages with GitHub Actions as the source in repository settings.
2. Reran `.github/workflows/pages.yml` from `main`.
3. Confirmed successful workflow run:
   - https://github.com/takaki-sakamoto-g1359402/riai-website/actions/runs/27371001274
4. Verified the live URL returns `200 OK`:
   - https://takaki-sakamoto-g1359402.github.io/riai-website/
5. Verified the live page in browser on desktop and mobile viewports.
6. Recorded live URL and deployment evidence in release documentation.

## Completion Evidence Needed

The goal is complete only when all of the following are proven:

- [x] Public live URL opens successfully.
- [x] GitHub repository URL is available.
- [x] Latest commit is pushed.
- [x] README contains setup, design direction, interactions, screenshot path, deployment URL, and legal note.
- [x] Community post contains English and Japanese devlog with screenshot and live URL references.
- [x] Local and CI checks pass.
- [x] Local preview smoke check passes.
- [x] Browser verification confirms the live site works.
