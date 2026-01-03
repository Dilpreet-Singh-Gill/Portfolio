import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // ✅ FIXED
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
