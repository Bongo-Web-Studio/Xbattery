import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      open: true, // Opens the report automatically
      gzipSize: true,
      brotliSize: true,
      filename: "bundle-report.html",
    }),
  ],
  build: {
    sourcemap: false,
  },
});
