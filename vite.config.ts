// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ElementPlus from 'unplugin-element-plus/vite';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
    plugins: [
        vue(),
        ElementPlus(),
        viteCompression({
            algorithm: "brotliCompress",
            verbose: true,
            ext: ".br",
            deleteOriginFile: false, // Ensures that original files are available
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    base: '/stable-ui/', // Keep the base path consistent
});
