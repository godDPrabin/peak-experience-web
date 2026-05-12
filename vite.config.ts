import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    base: '/peak-experience-web/', 
    prerender: {
      routes: ['/'], // Add other static routes here like '/about' if needed
    },
  },
  vite: {
    base: '/peak-experience-web/',
  }
});
