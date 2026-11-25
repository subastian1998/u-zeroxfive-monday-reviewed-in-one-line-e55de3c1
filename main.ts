import { mkdirSync, writeFileSync } from "node:fs";

// One-line review of my own Monday: concrete details (a 47-minute
// standup, 214 unread emails, a dead coffee machine), deadpan turn,
// "One star, would not relive" closer in review format. Single line,
// 149 chars, well inside the 1-200 gate.
const entry =
  "Monday review: standup ran 47 minutes, inbox hit 214 unread, and the office coffee machine filed for retirement. One star, would not relive.";

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry is ${entry.length} chars, gate requires 1-200`);
}
if (!entry.trim() || entry.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
