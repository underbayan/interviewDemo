import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { dependencies } from './package.json';
import autoprefixer from "autoprefixer";
function renderChunks(deps: Record<string, string>) {
  let chunks = { vendor: [] };
  Object.keys(deps).forEach((key) => {
    if (['normalize.css'].includes(key)) return;
    chunks.vendor.push(key);
  });
  return chunks;
}
// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxInject: `import React from 'react';`,
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          ...renderChunks(dependencies),
        },
      },
    },
    target: ['es2015', 'edge88', 'firefox78', 'chrome87', 'safari14']
  },
  resolve: {
    alias: {
      '@demo': path.resolve(__dirname, './src')
    },
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({})
        ,
      ],
    }
  }
})