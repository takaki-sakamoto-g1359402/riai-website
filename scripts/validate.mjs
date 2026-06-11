import { existsSync, statSync } from "node:fs";
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
  "docs/COMMUNITY_POST.md"
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

console.log("Validation passed: required files exist and hero asset is lightweight.");
