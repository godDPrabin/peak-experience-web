import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // This handles the TanStack Router base path
  tanstackStart: {
    base: '/peak-experience-web/',
    server: { entry: "server" },
  },
  // This handles the Vite asset bundling base path
  vite: {
    base: '/peak-experience-web/',
  }
});
