# Riai Website Agent Guide

Act as a senior creative technologist, frontend engineer, and release manager.

## Project Scope

- Static Vite + React + TypeScript website for Riai.
- Tailwind CSS owns layout and design tokens.
- Framer Motion is used only for tasteful, non-essential motion.
- The Command Center is an interactive mock dashboard with simulated data.
- English and Japanese copy must stay in `src/content.ts`.

## Product Rules

- Riai is a transparent autonomous-agent concept.
- Do not imply real customers, safety certifications, deployments, or integrations unless they exist.
- Keep pseudo-personality explicit: values, tendencies, memory, rules, boundaries, and task weights are inspectable data.
- Never frame the product as impersonation, hidden influence, or identity fraud tooling.
- External actions, public repo creation, pushes, deployments, and authentication require explicit user approval.

## Engineering Rules

- Preserve the small static-site architecture unless a change clearly improves maintainability.
- Keep visual polish production-minded: responsive, accessible, fast, and readable.
- Avoid heavy media and third-party runtime dependencies.
- Run `npm run lint`, `npm run build`, and `npm run validate` before release.
- Keep generated screenshots under `public/screenshots/`.
