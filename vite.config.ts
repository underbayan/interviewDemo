import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxInject: `import React from 'react';`,
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
        autoprefixer,
      ],
    }
  }
})
