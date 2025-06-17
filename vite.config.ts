import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        svgr(),
        react({
            plugins: [
                // You can add SWC plugins here if needed
            ],
        }),
    ],
    build: {
        reportCompressedSize: false, // This can speed up builds
    },
    // Your existing optimizeDeps config
    optimizeDeps: {
        extensions: ['.css'],
        esbuildOptions: {
            plugins: [
                (await import('esbuild-sass-plugin')).sassPlugin({
                    type: 'style',
                }),
            ],
        },
    },
});
