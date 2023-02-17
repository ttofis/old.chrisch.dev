import { defineMDSveXConfig as defineConfig } from "mdsvex";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  layout: "./src/routes/(design)/posts/(post)/+layout.svelte",

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;
