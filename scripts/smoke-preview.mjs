import { spawn } from "node:child_process";
import { once } from "node:events";
import { existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const viteBin = join(root, "node_modules", "vite", "bin", "vite.js");
const host = "127.0.0.1";
const port = 4174;
const baseUrl = `http://${host}:${port}`;

if (!existsSync(join(root, "dist", "index.html"))) {
  console.error("Missing dist/index.html. Run npm run build before npm run smoke.");
  process.exit(1);
}

if (!existsSync(viteBin)) {
  console.error("Missing Vite binary. Run npm install first.");
  process.exit(1);
}

const server = spawn(
  process.execPath,
  [viteBin, "preview", "--host", host, "--port", String(port), "--strictPort"],
  {
    cwd: root,
    stdio: ["ignore", "pipe", "pipe"]
  }
);

let output = "";

server.stdout.on("data", (chunk) => {
  output += chunk.toString();
});

server.stderr.on("data", (chunk) => {
  output += chunk.toString();
});

async function waitForServer() {
  const startedAt = Date.now();
  while (Date.now() - startedAt < 10_000) {
    if (server.exitCode !== null) {
      throw new Error(`Preview server exited early:\n${output}`);
    }

    try {
      const response = await fetch(baseUrl);
      if (response.ok) {
        return;
      }
    } catch {
      // Preview may still be binding the port.
    }

    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error(`Timed out waiting for ${baseUrl}\n${output}`);
}

async function checkText(path, expected) {
  const response = await fetch(`${baseUrl}${path}`);
  const text = await response.text();

  if (!response.ok) {
    throw new Error(`${path} returned HTTP ${response.status}`);
  }

  if (!text.includes(expected)) {
    throw new Error(`${path} did not include expected text: ${expected}`);
  }
}

async function checkAsset(path, contentTypePrefix, maxBytes) {
  const response = await fetch(`${baseUrl}${path}`);

  if (!response.ok) {
    throw new Error(`${path} returned HTTP ${response.status}`);
  }

  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.startsWith(contentTypePrefix)) {
    throw new Error(`${path} returned unexpected content type: ${contentType}`);
  }

  const body = await response.arrayBuffer();
  if (body.byteLength > maxBytes) {
    throw new Error(`${path} is too large: ${body.byteLength} bytes`);
  }
}

try {
  await waitForServer();
  await checkText("/", "Riai | Transparent Autonomous Agents");
  await checkText("/", './assets/');
  await checkAsset("/assets/riai-core.webp", "image/webp", 180 * 1024);
  await checkAsset("/assets/riai-core.png", "image/png", 750 * 1024);
  console.log(`Smoke preview passed at ${baseUrl}`);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
} finally {
  server.kill("SIGTERM");
  await Promise.race([
    once(server, "exit"),
    new Promise((resolve) => setTimeout(resolve, 2_000))
  ]);
}
