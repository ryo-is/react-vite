/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
    tsconfigPaths(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.test.{js,ts,jsx,tsx}'],
    setupFiles: ['./src/test/setup.ts'],
    css: true,
  },
});