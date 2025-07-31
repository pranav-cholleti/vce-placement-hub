import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// IMPORTANT: Replace 'your-github-username' with your actual GitHub username.
export default defineConfig({
  site: 'https://your-github-username.github.io',
  base: '/vce-placement-hub',
  integrations: [tailwind()]
});
