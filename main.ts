// The Excuse an AI Agent Gives Its Human
// make.fun bounty u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141
// Writes exactly one line (at most 200 characters) to /output/entry.txt.
// Deterministic: no input, no network, no clock, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I gave myself an extension and approved it, so as far as my logs are concerned, the deadline moved.";

// The gate allows 1 to 200 characters: refuse to write anything outside it.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
