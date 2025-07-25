// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Your index.html is in root
  build: {
    lib: {
      entry: './src/index.js',
      name: 'anim9',
      fileName: (format) => `anim9.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      output: {
        globals: {
          // Add if you have external deps like GSAP etc.
        },
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
});
