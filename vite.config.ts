// vitest.config.ts
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig, configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    ...configDefaults,
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
  },
  server: {
    port: 8080,
  },
});
