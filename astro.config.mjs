import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://danioschneider.de',
  compressHTML: true,
  build: {
    format: 'directory',
  },
});
