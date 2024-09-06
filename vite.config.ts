import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://ACeballosAndrade.github.io/superhero-api/',
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://superheroapi.com',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     }
  //   }
  // }
})