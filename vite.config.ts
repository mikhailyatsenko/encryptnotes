import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

dotenv.config();

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  define: {
    'process.env': process.env,
  },
  base: '/encryptnotes/',
});
