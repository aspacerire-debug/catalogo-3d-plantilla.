import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  root: 'origen',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'origen'),
      '@ui': resolve(__dirname, 'origen/ui')
    }
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})
