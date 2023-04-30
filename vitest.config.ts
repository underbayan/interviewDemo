import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    environment: 'happy-dom',
    alias: {
      '@demo': path.resolve(__dirname, './src')
    },
  },
})