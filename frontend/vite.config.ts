import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Ändert den Port auf 3000
    host: true, // Macht den Server von außerhalb des Containers erreichbar
  },
});
