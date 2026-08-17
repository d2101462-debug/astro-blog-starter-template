import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://gateway-portal.d2101462.workers.dev",
  integrations: [mdx(), sitemap()],
  output: "server",
  adapter: cloudflare(),
});
