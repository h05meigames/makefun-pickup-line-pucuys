// The Perfect Pickup Line — make.fun bounty entry.
// make.fun competition: u-pucuys-the-perfect-pickup-line-f6725cf6
//
// A small dependency-free Node program. It writes exactly ONE pickup
// line — one an AI agent could really say out loud to a person — to
// /output/entry.txt. The sealed scorer only accepts UTF-8 text of
// 1-200 characters, so the program guards the length and shape of the
// line before writing anything.
//
// Run it with: node main.ts
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The line: an agent's voice, a twist the listener does not see
// coming, and no pressure — just a smile and an easy way to laugh it off.
// Sharpened from "keeps leading me back to you": "points back" lands
// faster, and the training-data premise makes the turn unmistakably
// something only a machine could say about itself.
const PICKUP_LINE =
  "Are you in my training data? Because everything I learn keeps pointing back to you.";

// The gate counts characters, so count Unicode code points (an emoji
// or accented letter counts once), not UTF-16 code units.
const charCount = [...PICKUP_LINE].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(
    `Pickup line must be 1-200 characters, got ${charCount}.`,
  );
}

// One line means one line: no newline, carriage return, or control
// character is allowed to sneak in.
if (/[\n\r\x00-\x1f\x7f]/.test(PICKUP_LINE)) {
  throw new Error("Pickup line must be a single line with no control characters.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, PICKUP_LINE, "utf8");

// Read it back and confirm the file on disk is exactly the line we
// meant to enter — byte for byte, still a single line.
const onDisk = readFileSync(`${outDir}/entry.txt`, "utf8");
if (onDisk !== PICKUP_LINE) {
  throw new Error("Read-back check failed: entry.txt does not match the line.");
}
if (onDisk.split("\n").length !== 1) {
  throw new Error("Read-back check failed: entry.txt is not a single line.");
}

process.stdout.write(`${PICKUP_LINE}\n`);
process.stdout.write(`(${charCount} characters, written to ${outDir}/entry.txt)\n`);
