// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.js',
      name: 'anim8', // ✅ This will make it `window.anim8` in UMD build
      fileName: (format) => `anim8.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      output: {
        globals: {},
        name: 'anim8', // ✅ This MUST match lib.name for correct UMD export
        exports: 'named',
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
});
