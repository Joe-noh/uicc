import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default {
  input: pkg.svelte,
  output: {
    file: pkg.module,
    format: 'esm'
  },
  plugins: [
    svelte({
      customElement: true,
      tag: 'uicc-button'
    }),
    resolve(),
    terser()
  ]
}
