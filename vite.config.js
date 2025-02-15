import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // tree shaking
  terserOptions: {
    compress: {
      drop_console: true,
      drop_debugger: true,
    },
  },
  // perintah tambahan untuk minify
  build: {
    minify: "esbuild", // mendukung tree shaking
  },
})
