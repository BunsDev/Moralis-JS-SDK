import typescript from 'rollup-plugin-typescript2';
import cleaner from 'rollup-plugin-cleaner';
import dts from 'rollup-plugin-dts';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import fs from 'fs';

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const external = [
  ...Object.keys(packageJson.dependencies),
  ...Object.keys(packageJson.peerDependencies),
  'react-dom/client',
  'react/jsx-runtime',
];

export default [
  {
    input: './src/index.ts',
    plugins: [
      cleaner({
        targets: ['./lib'],
      }),
      commonjs(),
      typescript({
        useTsconfigDeclarationDir: true,
      }),
      nodeResolve({
        preferBuiltins: false,
      }),
    ],
    cache: false,
    external,
    output: [
      {
        file: './lib/cjs/index.cjs',
        format: 'cjs',
        exports: 'named',
        interop: 'auto',
      },
      {
        file: './lib/esm/index.js',
        format: 'esm',
      },
    ],
  },
  {
    input: './build/index.d.ts',
    output: [
      {
        file: './lib/index.d.ts',
        format: 'es',
      },
    ],
    plugins: [dts()],
  },
];
