import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: false,
    watch: {
      usePolling: true, // Aktiviert das Polling für Dateiwatching
      interval: 100,    // Intervall in Millisekunden
    },
    hmr: {
      host: 'localhost',
      port: 3000,
    },
  },
});
