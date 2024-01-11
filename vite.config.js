import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: "assets", // Adjust this to your asset directory
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
