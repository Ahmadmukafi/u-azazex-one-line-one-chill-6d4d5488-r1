// One Line, One Chill — one sentence of horror, written verbatim to entry.txt
import { writeFileSync, mkdirSync } from "node:fs";

const line =
  "I found a second set of footprints in the snow, walking beside mine, stopping whenever I stopped.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const entryPath = `${outDir}/entry.txt`;
writeFileSync(entryPath, line, "utf8");
