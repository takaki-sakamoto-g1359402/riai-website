import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const requiredFiles = [
  "index.html",
  "package.json",
  "src/App.tsx",
  "src/content.ts",
  "src/index.css",
  "public/assets/riai-core.webp",
  "public/.nojekyll",
  ".github/workflows/pages.yml",
  "README.md",
  "LICENSE",
  "CHANGELOG.md",
  "AGENTS.md",
  "docs/COMMUNITY_POST.md",
  "docs/RELEASE_CHECKLIST.md",
  "docs/LOCAL_QA_REPORT.md"
];

const root = process.cwd();
const missing = requiredFiles.filter((file) => !existsSync(join(root, file)));

if (missing.length > 0) {
  console.error("Missing required files:");
  for (const file of missing) {
    console.error(`- ${file}`);
  }
  process.exit(1);
}

const heroAsset = statSync(join(root, "public/assets/riai-core.webp"));
const maxAssetBytes = 180 * 1024;

if (heroAsset.size > maxAssetBytes) {
  console.error(`Hero asset is too large: ${heroAsset.size} bytes`);
  process.exit(1);
}

const packageJson = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const requiredScripts = ["dev", "build", "preview", "lint", "validate"];
const missingScripts = requiredScripts.filter((script) => !packageJson.scripts?.[script]);

if (missingScripts.length > 0) {
  console.error("Missing package scripts:");
  for (const script of missingScripts) {
    console.error(`- ${script}`);
  }
  process.exit(1);
}

const pagesWorkflow = readFileSync(join(root, ".github/workflows/pages.yml"), "utf8");

if (!pagesWorkflow.includes("workflow_dispatch:")) {
  console.error("GitHub Pages workflow must remain manually triggered with workflow_dispatch.");
  process.exit(1);
}

if (/^\s*push:/m.test(pagesWorkflow)) {
  console.error("GitHub Pages workflow must not deploy automatically on push before release approval.");
  process.exit(1);
}

if (!pagesWorkflow.includes("npm run lint") || !pagesWorkflow.includes("npm run build") || !pagesWorkflow.includes("npm run validate")) {
  console.error("GitHub Pages workflow must run lint, build, and validate.");
  process.exit(1);
}

const distFiles = [
  "dist/index.html",
  "dist/.nojekyll",
  "dist/assets/riai-core.webp"
];
const missingDist = distFiles.filter((file) => !existsSync(join(root, file)));

if (missingDist.length > 0) {
  console.error("Missing dist files. Run npm run build before npm run validate:");
  for (const file of missingDist) {
    console.error(`- ${file}`);
  }
  process.exit(1);
}

const distIndex = readFileSync(join(root, "dist/index.html"), "utf8");

if (!distIndex.includes('src="./assets/') || !distIndex.includes('href="./assets/')) {
  console.error("dist/index.html should use relative asset references for GitHub Pages project URLs.");
  process.exit(1);
}

console.log("Validation passed: files, scripts, dist output, Pages workflow, and hero asset are release-ready locally.");
