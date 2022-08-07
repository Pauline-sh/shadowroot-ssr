import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy'
import { terser } from "rollup-plugin-terser";
import { visualizer } from 'rollup-plugin-visualizer';
import { boolean } from 'boolean';

const VISUALIZE = boolean(process.env.VISUALIZE);

const plugins = [
  typescript({ tsconfig: 'src/client/tsconfig.json' }),
  nodeResolve(),
  commonjs(),
  json(),
  VISUALIZE && visualizer(),
  copy({
    targets: [
      { src: 'src/client/normalize.css', dest: 'src/client/dist' },
    ]
  }),
  replace({
    preventAssignment: true,
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  terser(),
];

export default [{
  input: 'src/client/index.ts',
  output: {
    file: 'src/client/dist/bundle.js',
    format: 'cjs',
    sourcemap: true,
  },
  treeshake: true,
  plugins,
},
{
  input: 'src/client/process_shadow_roots.ts',
  output: {
    file: 'src/client/dist/process_shadow_roots.js',
    format: 'cjs',
    sourcemap: true,
  },
  treeshake: true,
  plugins,
}];
