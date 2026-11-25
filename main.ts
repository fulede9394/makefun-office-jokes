// Trust falls, HR, and a bill for the floor.
// Nobody caught the fall. The floor sent an invoice anyway.
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const trustFall =
  "Our team building exercise was trust falls. I fell. Nobody caught me. HR called it 'a learning opportunity' and charged me for the floor.";

class Publisher {
  text: string;
  limit: number;

  constructor(text: string, limit: number) {
    this.text = text;
    this.limit = limit;
  }

  check(): void {
    if (this.text.length > this.limit) {
      throw new Error("joke exceeds the limit");
    }
    if (!this.text.includes("trust falls")) {
      throw new Error("joke lost its exercise");
    }
    if (!this.text.includes("HR")) throw new Error("joke lost its HR");
  }

  async publish(): Promise<void> {
    this.check();
    const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
    await mkdir(folder, { recursive: true });
    await writeFile(join(folder, "entry.txt"), this.text, "utf8");
  }
}

void new Publisher(trustFall, 199).publish();
