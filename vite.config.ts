import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// SINGLE=1 يبني ملفًا واحدًا للمعاينة؛ البناء العادي للنشر على أي استضافة
export default defineConfig({
  base: './',
  plugins: [react(), ...(process.env.SINGLE ? [viteSingleFile()] : [])],
  build: { chunkSizeWarningLimit: 2000 },
});
