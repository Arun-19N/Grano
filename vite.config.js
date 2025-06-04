import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    mimeTypes: {
      'font/woff': ['woff'],
      'font/woff2': ['woff2']
    }
  }
});
