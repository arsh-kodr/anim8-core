// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.js',
      name: 'anim8Core',
      fileName: (format) => `anim8.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      output: {
        exports: 'named', // 👈 ADD THIS to remove warning
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
});
