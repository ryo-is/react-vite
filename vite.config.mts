/// <reference types="vitest" />
/// <reference types="vite/client" />

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import topLevelAwait from 'vite-plugin-top-level-await';
import wasm from 'vite-plugin-wasm';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
    tsconfigPaths(),
    vanillaExtractPlugin(),
    wasm(),
    topLevelAwait(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.test.{js,ts,jsx,tsx}'],
    setupFiles: ['./src/test/setup.ts'],
    css: true,
  },
});
