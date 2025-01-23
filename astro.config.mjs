import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// Import the Vercel adapter
// import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: "https://maintenance.gogeeks.au/",
  integrations: [tailwind()],
//  output: 'server',
//  adapter: vercel(),
});