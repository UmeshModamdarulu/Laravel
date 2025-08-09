import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
    server: {
        host: '0.0.0.0', // listen on all interfaces
        port: 5174, // <-- Use the new port
        hmr: {
            protocol: 'wss',
            host: 'super-duper-palm-tree-56gr4wwgxqvfpg67-5174.app.github.dev', // <-- Use the new URL
        },
    },
});