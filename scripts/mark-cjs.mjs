// scripts/mark-cjs.mjs
//
// The root package.json declares "type": "module", so any plain .js file
// under dist/cjs would otherwise be parsed by Node as ESM and throw
// ERR_REQUIRE_ESM when a consumer calls require('xfdog'). Dropping a
// package.json into dist/cjs that overrides the type to "commonjs" is the
// standard fix for dual ESM/CJS package builds.
import { writeFile, mkdir } from 'node:fs/promises';

await mkdir('dist/cjs', { recursive: true });
await writeFile(
  'dist/cjs/package.json',
  JSON.stringify({ type: 'commonjs' }, null, 2) + '\n'
);
