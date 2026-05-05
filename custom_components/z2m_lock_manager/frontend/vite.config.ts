import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src/main.tsx'),
      name: 'Z2MLockManagerPanel',
      fileName: (format) => `z2m-lock-manager-panel.js`,
      formats: ['es']
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  }
})
