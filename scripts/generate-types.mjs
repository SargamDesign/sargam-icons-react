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
  return `import * as React from 'react';

/**
 * Props for Sargam icon components
 * @property {string} [title] - Accessible title for the icon. When provided, the icon will have an accessibility label.
 */
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  title?: string;
}

`;
}

function iconTypeLine(name) {
  return `/**
 * ${name} icon component
 * @param {IconProps} props - Icon props including SVG attributes and optional title
 * @returns {JSX.Element} SVG icon element
 */
export const ${name}: React.FC<IconProps>;`;
}

async function writeStyleDts(styleName, names) {
  const target = path.join(DIST, `${styleName}.d.ts`);
  const lines = [
    fileHeader(),
    ...names.map(iconTypeLine),
    '\n// Re-export IconProps for convenience',
    'export type { IconProps };\n'
  ];
  await fs.writeFile(target, lines.join('\n'), 'utf8');
}

async function writeIndexDts() {
  const content = `import type { IconProps } from './line.js';

export * as Line from './line.js';
export * as Duotone from './duotone.js';
export * as Fill from './fill.js';

/**
 * Props for all Sargam icon components
 * Re-exported from individual style modules for convenience
 */
export type { IconProps };
`;
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


