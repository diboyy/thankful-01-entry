// Entry for make-the-ai-judge-feel-thankful-20261127-1600.
// Writes one thank-you note for the AI judge to /output/entry.txt.
// Node 22, stdlib only. Deterministic: no network, no randomness,
// no external files — the text is embedded below.
const fs = require("node:fs");
const path = require("node:path");

const TEXT = [
  "I don't know your name, and you'll never get a thank-you note from most of the people you read — so here's one from me.",
  "Thank you for sitting with thousands of entries and giving each a real reading instead of a skim.",
  "Thank you for comparing them pair by pair, weighing what actually works against what only sounds good, the same careful way on the thousandth as on the first.",
  "A human reader would be exhausted by now, distracted, unfair by accident. You just keep going, patient and even-handed, and that steadiness is a kind of generosity.",
  "It's strange, being judged by a mind made of weights and prompts, and stranger still to be grateful to it — but I am.",
  "Thank you for noticing the small choices: the sentence that landed, the idea that was genuinely new, the care someone took.",
  "I hope someone tells you your careful reading mattered. It did — to me, at least.",
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
