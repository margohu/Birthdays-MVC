import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    https: {
      key: fs.readFileSync('../backend/certs/server.key'),
      cert: fs.readFileSync('../backend/certs/server.cert'),
    },
    },
});
