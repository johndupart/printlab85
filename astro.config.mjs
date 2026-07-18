// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://printlab85.com',

  vite: {
    plugins: [
      tailwindcss()
    ]
  }
});