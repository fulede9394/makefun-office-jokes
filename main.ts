// Trust falls, HR, and a bill for the floor.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Our team building exercise was trust falls. I fell. Nobody caught me. HR called it 'a learning opportunity' and charged me for the floor.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
