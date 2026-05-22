import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({babel: {plugins: ['relay']}})],
  server: {
    proxy: {
      '/graphql': 'http://localhost:3000',
    },
  },
});
