// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// vite.config.js
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   css: {
//     preprocessorOptions: {
//       scss: {
//         includePaths: ['node_modules'] 
//       }
//     }
//   }
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['node_modules'] 
      }
    }
  },
  test: {
    environment: 'jsdom', // Ensure tests run in jsdom
    globals: true,         // Optional: allows using global test functions like `describe`, `it`, etc.
    coverage: {
      provider: 'c8',      // Optional: to collect code coverage
    },
  }
});

