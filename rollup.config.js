import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import filesize from 'rollup-plugin-filesize';

const config = {
  input: {
    line: 'src/Line/index.js',
    duotone: 'src/Duotone/index.js',
    fill: 'src/Fill/index.js'
  },
  output: {
    format: 'cjs',
    dir: 'dist',
    entryFileNames: '[name].js'
  },
  external: [/@babel\/runtime/, 'react'],
  plugins: [
    resolve(),
    babel({ 
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'] 
    }),
    filesize(),
  ],
};

export default config;