import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  server: { open: true },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/entities'),
      pages: path.resolve(__dirname, 'src/pages'),
      api: path.resolve(__dirname, 'src/api'),
      helpers: path.resolve(__dirname, 'src/helpers'),
      store: path.resolve(__dirname, 'src/store'),
      hooks: path.resolve(__dirname, 'src/hooks'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@helpers/const/variables.scss" as *;`,
      },
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
  },
});
