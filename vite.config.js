import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/st-valentin/', // ⚠️ exactement le nom du repo
});
