<<<<<<< HEAD
import { defineConfig, PluginOption } from "vite";
import { enterDevPlugin, enterProdPlugin } from 'vite-plugin-enter-dev';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const plugins = [
        ...enterProdPlugin(),
    ];
    if (mode === 'development') {
        plugins.push(...enterDevPlugin());
    }
    return {
        server: {
            host: "::",
            port: 8080,
        },
        plugins: plugins.filter(Boolean) as PluginOption[],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
        base: '/',
        build: {
            outDir: 'dist',
        }
    };
});
=======
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/',
  build: {
    outDir: 'dist',
  }
});
>>>>>>> 22c23e23c0037efefc4a17ab12685b48da11f683
