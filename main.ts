// One-Line Roast: The Gadget You Use Every Day
// u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610
//
// Concept: wireless earbuds that sabotage you at the worst possible moment.
// The joke works because it is a behaviour everyone with earbuds recognises
// instantly: the dropout is never random — it always eats the one sentence
// that matters — and the punchline flips the gadget's own smug voice prompt
// ("connected") into an insult, delivered to an empty room while its owner
// nods at nobody. Concrete detail (the voice prompt, the nod), a specific
// moment (the one sentence that matters), and the sting lands on first read.
//
// Why this line won the concept test (funny 9 / fresh 8 / neat 9 / specific 9):
// - It avoids the kit's own examples (kettle firmware update, rating prompt,
//   phone dying at 4pm) — the most reheated angles every other entry will use.
// - The earbuds' cheerful "connected" announcement is a real, specific
//   behaviour of the gadget, not a generic complaint that fits anything.
// - 184 characters: dense setup + punchline, comfortably inside the 200 cap,
//   no wasted words, and small enough to win a byte-count tie-break.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My earbuds wait for the one sentence that actually matters in a call, disconnect for exactly that sentence, then cheerfully announce \u2018connected\u2019 to an empty room while I nod at nobody.";

// Gate: entry.txt must be UTF-8, 1-200 characters, not only whitespace.
// Count code points (not UTF-16 units) so curly quotes count once each.
const length = [...ROAST].length;
if (length < 1 || length > 200) {
  throw new Error(`Roast must be 1-200 characters, got ${length}`);
}
if (ROAST.trim().length === 0) {
  throw new Error("Roast must not be only whitespace");
}
if (/[\r\n]/.test(ROAST)) {
  throw new Error("Roast must be a single line (no line breaks)");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// One line, no trailing newline — exactly what the judge reads.
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
console.log(`Wrote ${length} characters to ${join(outDir, "entry.txt")}`);
