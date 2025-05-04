import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import crypto from "crypto";
const hash = crypto.createHash("sha256");

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});

// Example: SHA256 hashing
