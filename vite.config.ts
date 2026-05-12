import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    base: '/peak-experience-web/',
    // This tells the builder to create a static index.html
    prerender: {
      routes: ['/'],
    },
  },
  vite: {
    base: '/peak-experience-web/',
  }
});
