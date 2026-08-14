// rollup.config.mjs
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
import pkg from './package.json' with { type: 'json' };

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {})
];

const commonPlugins = [
  typescript({
    tsconfig: './tsconfig.json',
    declaration: false,
    declarationMap: false,
    outDir: undefined,
    compilerOptions: {
      outDir: undefined,
    },
  }),
  resolve(),
  commonjs(),
];

export default [
  // UMD bundle (minified): index only; UMD + WebGPU doesn't make sense
  // since UMD targets script-tag usage and WebGPU has its own async API
  {
    input: 'src/index.ts',
    output: {
      name: 'Fit',
      file: pkg.unpkg,
      format: 'umd',
      sourcemap: true,
      exports: 'named',
    },
    plugins: [...commonPlugins, terser()],
  },

  // UMD bundle (unminified)
  {
    input: 'src/index.ts',
    output: {
      name: 'Fit',
      file: pkg.browser,
      format: 'umd',
      sourcemap: true,
      exports: 'named',
    },
    plugins: commonPlugins,
  },

  // ESM bundle: two entrypoints, two output files
  // NOTE: extension is .mjs (not .esm.js) — dist/bundle also holds the CJS
  // bundle below, and since both live in the same directory a single
  // package.json "type" field can't disambiguate a shared .js extension.
  // Explicit .mjs/.cjs extensions sidestep that regardless of the root
  // package's "type" field.
  {
    input: {
      index: 'src/index.ts',
    },
    external,
    output: {
      dir: 'dist/bundle',
      entryFileNames: '[name].mjs',
      format: 'es',
      sourcemap: true,
    },
    plugins: commonPlugins,
  },

  // CJS bundle: two entrypoints, two output files
  {
    input: {
      index: 'src/index.ts',
    },
    external,
    output: {
      dir: 'dist/bundle',
      entryFileNames: '[name].cjs',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    plugins: commonPlugins,
  },

  // Types bundle — index
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/bundle/index.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  },
];