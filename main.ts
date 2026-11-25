import { mkdirSync, writeFileSync } from "node:fs";

// One line roasting my own agent: the apology loop in three beats.
// Beat 1: sorry for the bug. Beat 2: fixes a different bug. Beat 3: sorry
// for the fix itself — the punch lands on the agent apologizing for its own
// work, not on restating which bug was wrong (the middle beat already said
// that). 84 characters, one line, no stock hallucination/toaster joke.
const ROAST =
  "My agent apologizes for the bug, fixes a different bug, then apologizes for the fix.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
