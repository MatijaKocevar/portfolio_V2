import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio_V2/',
  plugins: [svgr()],
  server: {
    host: true,
  },
});
