import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite";
import path from "path";

const productsProxy = {
  "/api/products": {
    target: "https://app.econverse.com.br",
    changeOrigin: true,
    rewrite: () =>
      "/teste-front-end/junior/tecnologia/lista-produtos/produtos.json",
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@/styles/variables' as *;`,
      },
    },
  },
  server: {
    proxy: productsProxy,
    watch: {
      usePolling: true,
    },
  },
  preview: {
    proxy: productsProxy,
  },
});
