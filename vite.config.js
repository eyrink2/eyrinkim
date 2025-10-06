import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// for Cloudflare Pages deployment
export default defineConfig({
  plugins: [react()],
  base: "/",
  assetsInclude: ["**/*.PNG", "**/*.JPG", "**/*.JPEG"]
});