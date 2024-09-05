import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Import path at the top

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 5173, // Adjust the port if necessary
  },
  build: {
    outDir: "custom-dist", // Change 'custom-dist' to your desired output directory
  },

  build: {
    outDir: "dist", // Ensure this is correctly set
  },

  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@fonts",
        replacement: path.resolve(__dirname, "./src/assets/fonts"),
      },
    ],
  },
});
