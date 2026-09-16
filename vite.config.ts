import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

function githubPagesFallback() {
  return {
    name: "github-pages-spa-fallback",
    closeBundle() {
      const index = resolve("dist/index.html");
      if (existsSync(index)) {
        copyFileSync(index, resolve("dist/404.html"));
      }
    },
  };
}

export default defineConfig({
  base: process.env.VITE_BASE || "/",
  plugins: [react(), githubPagesFallback()],
});
