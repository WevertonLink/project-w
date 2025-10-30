import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/project-w/',
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    hmr: {
      clientPort: 5173
    }
  },
  build: {
    target: 'es2015',
    minify: 'esbuild',
    cssMinify: true,
    outDir: 'dist',
  },
})
