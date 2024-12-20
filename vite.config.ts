import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Optional: Customize your local dev server port
  },
  build: {
    outDir: 'dist', // Ensure correct output folder
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
