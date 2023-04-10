import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio_V2/",
  plugins: [react()],
  server: {
    host: true    
  }
})
