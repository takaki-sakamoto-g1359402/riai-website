import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const requiredFiles = [
  "index.html",
  "package.json",
  "src/App.tsx",
  "src/content.ts",
  "src/index.css",
  "public/assets/riai-core.png",
  "public/assets/riai-core.webp",
  "public/.nojekyll",
  ".github/workflows/pages.yml",
  "README.md",
  "LICENSE",
  "CHANGELOG.md",
  "AGENTS.md",
  "docs/COMMUNITY_POST.md",
  "docs/RELEASE_CHECKLIST.md",
  "docs/LOCAL_QA_REPORT.md",
  "scripts/smoke-preview.mjs"
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

const heroFallbackAsset = statSync(join(root, "public/assets/riai-core.png"));
const maxFallbackBytes = 750 * 1024;

if (heroFallbackAsset.size > maxFallbackBytes) {
  console.error(`Hero PNG fallback is too large: ${heroFallbackAsset.size} bytes`);
  process.exit(1);
}

const packageJson = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const requiredScripts = ["dev", "build", "preview", "lint", "validate", "smoke", "qa"];
const missingScripts = requiredScripts.filter((script) => !packageJson.scripts?.[script]);

if (missingScripts.length > 0) {
  console.error("Missing package scripts:");
  for (const script of missingScripts) {
    console.error(`- ${script}`);
  }
  process.exit(1);
}

const pagesWorkflow = readFileSync(join(root, ".github/workflows/pages.yml"), "utf8");

function getTopLevelYamlBlock(source, key) {
  const lines = source.split(/\r?\n/);
  const startIndex = lines.findIndex((line) => line === `${key}:`);

  if (startIndex === -1) {
    return "";
  }

  const block = [];
  for (const line of lines.slice(startIndex + 1)) {
    if (line.length > 0 && !/^\s/.test(line)) {
      break;
    }
    block.push(line);
  }

  return block.join("\n");
}

const workflowTriggerBlock = getTopLevelYamlBlock(pagesWorkflow, "on");
const workflowTriggers = [...workflowTriggerBlock.matchAll(/^\s{2}([A-Za-z_][\w-]*):/gm)].map((match) => match[1]);
const allowedWorkflowTriggers = ["push", "workflow_dispatch"];
const unexpectedWorkflowTriggers = workflowTriggers.filter((trigger) => !allowedWorkflowTriggers.includes(trigger));

if (!workflowTriggers.includes("workflow_dispatch") || !workflowTriggers.includes("push") || unexpectedWorkflowTriggers.length > 0) {
  console.error(`GitHub Pages workflow must use approved push and workflow_dispatch triggers only. Found triggers: ${workflowTriggers.join(", ") || "none"}`);
  process.exit(1);
}

if (!/^\s*branches:\n\s*-\s*main/m.test(pagesWorkflow)) {
  console.error("GitHub Pages push trigger must be restricted to the main branch.");
  process.exit(1);
}

if (!pagesWorkflow.includes("npm run lint") || !pagesWorkflow.includes("npm run build") || !pagesWorkflow.includes("npm run validate") || !pagesWorkflow.includes("npm run smoke")) {
  console.error("GitHub Pages workflow must run lint, build, validate, and smoke.");
  process.exit(1);
}

const appSource = readFileSync(join(root, "src/App.tsx"), "utf8");
const contentSource = readFileSync(join(root, "src/content.ts"), "utf8");
const indexSource = readFileSync(join(root, "index.html"), "utf8");

if (appSource.includes('"/assets/') || appSource.includes("'/assets/")) {
  console.error("src/App.tsx must not use root-absolute /assets paths; use import.meta.env.BASE_URL-safe asset paths.");
  process.exit(1);
}

if (!appSource.includes('base.endsWith("/")') || !appSource.includes("path.replace(/^\\/+/, \"\")")) {
  console.error("assetUrl must normalize BASE_URL and strip leading slashes from asset paths.");
  process.exit(1);
}

if (appSource.includes('href="https://github.com/"')) {
  console.error("Do not link the community CTA to the generic GitHub homepage before a real public repo or discussion URL is approved.");
  process.exit(1);
}

if (!contentSource.includes("description:") || !appSource.includes("copy.meta.description") || !indexSource.includes("Riai is a calm, transparent autonomous-agent concept")) {
  console.error("Localized metadata must include a source description, initial HTML description, and runtime language updates.");
  process.exit(1);
}

if (!appSource.includes('<main id="main" tabIndex={-1}>')) {
  console.error("The skip-link target main element must be programmatically focusable.");
  process.exit(1);
}

if (!appSource.includes("function handlePhaseKeyDown") || !appSource.includes('onKeyDown={(event) => handlePhaseKeyDown(event, phase.id)}') || !appSource.includes("tabIndex={active ? 0 : -1}")) {
  console.error("Command Center phase tabs must keep arrow-key navigation and roving tabIndex behavior.");
  process.exit(1);
}

if (!appSource.includes('role="progressbar"') || !appSource.includes("aria-valuenow={agent.progress}")) {
  console.error("Agent progress indicators must expose progressbar semantics.");
  process.exit(1);
}

if (!appSource.includes('aria-disabled="true"') || !appSource.includes('aria-current="page"')) {
  console.error("Command Center sidebar must avoid focusable no-op links and mark the active item.");
  process.exit(1);
}

if (!appSource.includes("width={960}") || !appSource.includes("height={1440}") || !appSource.includes("aspect-[2/3]")) {
  console.error("Hero image must keep explicit dimensions and the source asset aspect ratio.");
  process.exit(1);
}

const distFiles = [
  "dist/index.html",
  "dist/.nojekyll",
  "dist/assets/riai-core.webp",
  "dist/assets/riai-core.png"
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

console.log("Validation passed: files, scripts, dist output, approved Pages workflow, accessibility gates, and hero asset are release-ready locally.");
