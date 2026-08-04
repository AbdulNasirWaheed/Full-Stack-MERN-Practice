import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config. The proxy forwards /api requests from the frontend
// (port 5173) to the backend (port 5000) so we can write fetch("/api/...")
// without worrying about CORS or typing the full URL.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});
