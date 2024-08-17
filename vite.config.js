import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import path at the top

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@fonts',
        replacement: path.resolve(__dirname, './src/assets/fonts'), 
      },
    ],
  },
});
