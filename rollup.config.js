import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import {visualizer} from 'rollup-plugin-visualizer';
import {boolean} from 'boolean';

const VISUALIZE = boolean(process.env.VISUALIZE);

export default {
  input: 'src/client/index.ts',
  output: {
    file: 'src/client/dist/bundle.js',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    typescript({ tsconfig: 'src/client/tsconfig.json' }),
    nodeResolve(),
    commonjs(),
    json(),
    VISUALIZE && visualizer(),
  ]
};