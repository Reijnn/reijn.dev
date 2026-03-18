import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'static/js',
    emptyOutDir: false,
    minify: true,
    rollupOptions: {
      input: {
        typewriter: 'src/js/typewriter-effect.js',
        mermaid: 'src/js/mermaid.js',
      },
      output: {
        entryFileNames: '[name].bundle.js',
        chunkFileNames: '[name].chunk.js',
        format: 'es',
      },
    },
  },
});
