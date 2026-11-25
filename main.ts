import { writeFileSync } from "node:fs";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = `${outputDir}/entry.txt`;

const message = "Fix the bug by deleting the feature that had it";

writeFileSync(entryPath, message);