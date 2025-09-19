import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    // Set the base path conditionally.
    // For 'serve' (development), it's '/', for 'build' (production), it's '/portfolio/'.
    base: command === 'serve' ? '/' : '/portfolio/',
    plugins: [
      react(),
      tailwindcss(),
    ],
    server: {
      host: '0.0.0.0',
      port: 5173,
    }
  }
})
