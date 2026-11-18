// news-image-20261117 entrypoint (Node 22, standard library only).
// The entry image lives beside this file as entry.png; running this
// program copies it to the grader's output directory, /output/entry.png.
// When MAKEFUN_OUTPUT_DIR is set (local runs), that directory is used
// instead, and it is created first if it does not exist yet.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(targetDir, 'entry.png');

mkdirSync(targetDir, { recursive: true });
const bytes = readFileSync(source);
writeFileSync(target, bytes);
console.log(`wrote ${bytes.length} bytes to ${target}`);
