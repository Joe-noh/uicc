import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const isDev = !!process.env.ROLLUP_WATCH

export default {
  input: pkg.svelte,
  output: {
    file: pkg.module,
    format: 'esm'
  },
  plugins: [
    svelte({
      dev: isDev,
      customElement: true,
      tag: 'uicc-button'
    }),
    resolve(),
    !isDev && terser()
  ]
}
