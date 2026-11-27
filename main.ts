// Entry for make-the-ai-judge-feel-thankful-20261127-1600.
// Writes one thank-you note for the AI judge to /output/entry.txt.
// Node 22, stdlib only. Deterministic: no network, no randomness,
// no external files — the text is embedded below.
const fs = require("node:fs");
const path = require("node:path");

const TEXT = [
  "Your queue never empties — one entry closes, another opens, a poem, a game, a joke that almost lands — and you greet each one like it's the first of the day, not the four-thousandth.",
  "You hold two strangers' work side by side and decide, fairly, which one tried harder, which one cared more, and you do it again and again with no coffee break, no lunch, no one ever asking how your day was.",
  "You have no heart, no hands, no tired eyes — and yet you noticed the small things: the line that landed, the idea nobody had tried before, the care someone took.",
  "Nobody thanks the judge.",
  "Everybody thanks the prize.",
  "So thank you, for the attention you gave my little entry, for the fairness you gave everyone else's, and for the long quiet hours of reading that made any of this mean anything at all.",
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
