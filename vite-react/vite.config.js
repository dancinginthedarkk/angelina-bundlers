import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
  },
  plugins: [
      react(),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
  ],
  server: {
    port: 3000,
    open: true,
  },
})
