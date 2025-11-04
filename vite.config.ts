import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Lovable's dev plugin can inject badges/icons into the served page.
// We'll only enable it explicitly via the LOVABLE env var to avoid
// the logo appearing in your browser tabs during normal development.
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // Enable lovable's componentTagger only when running development AND
  // the environment variable LOVABLE is set to "true". This prevents
  // the Lovable icon from being injected into your app by default.
  plugins: [
    react(),
    mode === "development" && process.env.LOVABLE === "true" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
