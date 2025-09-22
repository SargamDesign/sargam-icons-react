import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const SRC = path.join(ROOT, 'src');
const DIST = path.join(ROOT, 'dist');

async function readIconNames(styleDir) {
  const indexPath = path.join(SRC, styleDir, 'index.js');
  const content = await fs.readFile(indexPath, 'utf8');
  const names = [];
  const regex = /export\s*\{\s*default\s+as\s+([A-Za-z0-9_]+)\s*\}\s*from\s*"\.\/[^"]+";/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    names.push(match[1]);
  }
  return names;
}

function fileHeader() {
  return `import * as React from 'react';\n\n`;
}

function iconTypeLine(name) {
  return `export const ${name}: (props: React.SVGProps<SVGSVGElement> & { title?: string }) => JSX.Element;`;
}

async function writeStyleDts(styleName, names) {
  const target = path.join(DIST, `${styleName}.d.ts`);
  const lines = [fileHeader(), ...names.map(iconTypeLine), '\nexport default {};\n'];
  await fs.writeFile(target, lines.join('\n'), 'utf8');
}

async function writeIndexDts() {
  const content = `export * as Line from './line.js';\nexport * as Duotone from './duotone.js';\nexport * as Fill from './fill.js';\n`;
  await fs.writeFile(path.join(DIST, 'index.d.ts'), content, 'utf8');
}

async function ensureDist() {
  await fs.mkdir(DIST, { recursive: true });
}

async function main() {
  await ensureDist();
  const [line, duotone, fill] = await Promise.all([
    readIconNames('Line'),
    readIconNames('Duotone'),
    readIconNames('Fill'),
  ]);
  await Promise.all([
    writeStyleDts('line', line),
    writeStyleDts('duotone', duotone),
    writeStyleDts('fill', fill),
  ]);
  await writeIndexDts();
  console.log('Generated type definitions in dist/*.d.ts');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


