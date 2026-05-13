import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Use relative base so the build works on GitHub Pages (subpath),
// custom domains, and the Lovable preview (served at root).
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
});
