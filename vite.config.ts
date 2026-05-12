import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    base: '/peak-experience-web/',
    prerender: {
      routes: ['/'],
    },
  },
  vite: {
    base: '/peak-experience-web/',
  }
});
