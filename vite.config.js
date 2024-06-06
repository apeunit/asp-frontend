import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    "@": path.resolve(__dirname, "./src/"),
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      input: "./index.html",
    },
  },
})
