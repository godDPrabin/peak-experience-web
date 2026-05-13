import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

// Standalone Vite SPA config used for GitHub Pages deploys.
// The Lovable preview keeps using TanStack Start via vite.config.ts.
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  base: process.env.BASE_PATH || "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist-static",
    emptyOutDir: true,
  },
});
