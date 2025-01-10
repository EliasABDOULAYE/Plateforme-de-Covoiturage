import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/signUp': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },

      '/login': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },

      '/trajets': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
