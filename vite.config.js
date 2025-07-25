// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    lib: {
      entry: './src/index.js',
      name: 'anim8Core', // 👈 THIS sets global var name in browser (window.anim8Core)
      fileName: (format) => `anim8.${format}.js`, // 👈 Use consistent name for the UMD file
      formats: ['es', 'umd'], // Can add 'cjs' later if needed
    },
    rollupOptions: {
      output: {
        globals: {
          // Define any external libs if used
        },
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
});
