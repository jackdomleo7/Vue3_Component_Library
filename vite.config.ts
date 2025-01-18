import { resolve } from 'path';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import copy from 'vite-plugin-cp';
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: ['.mts', '.ts', '.mjs', '.js', '.vue'],
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  plugins: [
    vue(),
    copy({
      targets: [{ src: './src/types.d.ts', dest: './dist' }]
    }),
    dts({
      exclude: ['**/*.spec.ts', '**/*.stories.ts'],
      insertTypesEntry: true
    })
  ],
  build: {
    target: 'esnext',
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: pkg.name,
      // the proper extensions will be added
      fileName: pkg.name.replace('@', '').replace('/', '-')
    },
    rollupOptions: {
      treeshake: true,
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        },
        sourcemapExcludeSources: true
      }
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      enabled: true,
      reporter: ['text', 'json', 'html'],
      all: true,
      include: ['src/components/**/*.vue']
    },
    clearMocks: true,
    setupFiles: ['./vitest.setup.ts']
  }
});
