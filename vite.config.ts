// vitest.config.ts
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig, configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    ...configDefaults,
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    coverage: {
      exclude: [
        '**/__test__/**',
        'public',
        'src/locales',
        'src/layout',
        'src/router',
        'src/main.tsx',
        'src/App.tsx',
        'eslint.config.js',
        'vite.config.ts',
      ],
    },
  },
  server: {
    port: 8080,
  },
});
