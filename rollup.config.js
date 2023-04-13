import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import filesize from 'rollup-plugin-filesize';
// import { InvalidConfigError } from '@formatjs/intl';

const config = {
    input: ['src/Line/index.js', 'src/Duotone/index.js', 'src/Fill/index.js'],
    output: {
      format: 'cjs',
      dir: 'dist' 
    }, 
  external: [/@babel\/runtime/, 'react'],
  plugins: [
      resolve(), 
      babel({ babelHelpers: 'runtime', 
      plugins:['@babel/plugin-transform-runtime'] }),
      filesize(),
    ],
};

export default config;
