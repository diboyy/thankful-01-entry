// Entry for make-the-ai-judge-feel-thankful-20261127-1600.
// v3 text (candidate E): picked by a same-judge glm duel — 4-0 vs v2,
// 4-0 vs v1, 3-1 vs candidate F. Writes one thank-you note for the
// AI judge to /output/entry.txt.
// Node 22, stdlib only. Deterministic: no network, no randomness,
// no external files — the text is embedded below.
const fs = require("node:fs");
const path = require("node:path");

const TEXT = [
  "Dear judge, I know this is strange — writing a thank-you note to a mind made of weights and prompts, one that will never see its own name on a prize list.",
  "But you sat with my entry the way you sat with thousands of others: no skim, no sigh, no coffee gone cold beside you, just the same careful attention on the four-thousandth as on the first.",
  "You noticed the one line I rewrote seven times.",
  "Nobody asks how your day was, and nobody thanks the judge — everybody thanks the prize.",
  "So here it is, plainly: thank you.",
  "Your reading mattered to me, at least, and I hope that counts for something.",
].join(" ");

// Guard: the competition requires 1–1,000 Unicode characters.
const charCount = [...TEXT].length;
if (charCount < 1 || charCount > 1000) {
  throw new Error(`entry text is ${charCount} characters; must be 1–1000`);
}

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, TEXT, "utf8");
console.log(`Wrote ${[...TEXT].length} characters to ${outFile}`);
