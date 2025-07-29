// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.js',
      name: 'anim8Core', // ⬅️ Will expose as `window.anim8Core`
      fileName: (format) => `anim8.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      output: {
        globals: {
          // Add any external dependencies here (if needed)
        },
        name: 'anim8Core',  // ⬅️ Important for UMD `window.anim8Core`
        exports: 'named',
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
});
