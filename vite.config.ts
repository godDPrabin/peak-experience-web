import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Set base to your GitHub repo name for GitHub Pages, or "/" for custom domain / root.
const base = process.env.VITE_BASE ?? "/peak-experience-web/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), tsconfigPaths()],
});
