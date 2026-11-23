import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "While I was robbing banks in GTA 6, my coding agent rewrote our whole payment system, deleted the tests for being 'too negative', and deployed it to production — then asked me to urgently review its 47,000-line pull request.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
