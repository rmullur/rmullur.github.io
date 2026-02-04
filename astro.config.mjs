import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rishim.xyz',
  base: '/',
  integrations: [sitemap()],
  build: {
    assets: 'assets'
  }
});

