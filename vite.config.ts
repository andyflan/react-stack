import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

const { PORT } = process.env;

export default defineConfig({
  plugins: [react(), svgr()],
});
