import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: ["esnext"],
    lib: {
      entry: "./src/index.ts",
      formats: ["cjs", "es", "umd"],
      name: "super-timeline",
      fileName: "index",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "zustand",
        "fabric",
        "remotion",
        "eslint",
        "@remotion/cli ",
        "@remotion/player",
        "@radix-ui/themes",
      ],
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
