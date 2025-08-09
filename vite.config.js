// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Optional: Configure build output directory if needed
  // build: {
  //   outDir: 'build', // Example to match CRA's default build folder
  // },
});