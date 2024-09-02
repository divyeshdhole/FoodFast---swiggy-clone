// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        historyApiFallback: true, // Add this to handle SPA routing
    },
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
            },
        },
    },
});
