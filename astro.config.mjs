import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import cloudflare from '@astrojs/cloudflare';

// Import the Vercel adapter
// import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: "https://maintenance.gogeeks.au/",

  //  output: 'server',
  //  adapter: vercel(),
  integrations: [tailwind()],

  adapter: cloudflare(),
});