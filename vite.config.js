import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/buddy/',
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
  optimizeDeps: {
    force: true,
  },
})
