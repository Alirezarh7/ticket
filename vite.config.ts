import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './',
  build: {
    outDir: '../webdist/MyReactProject',
    emptyOutDir: true,
  },
  plugins: [
      react(),
      tailwindcss(),
  ],
})
