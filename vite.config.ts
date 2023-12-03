import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts()],
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
  build: {
    lib: {
      name: 'pkgName',
      formats: ['es'],
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        example: resolve(__dirname, 'src/example.ts'),
      },
      fileName: (_, entryName) => {
        console.log(_)

        return `${entryName}.js`
      },
    },
  },
})
