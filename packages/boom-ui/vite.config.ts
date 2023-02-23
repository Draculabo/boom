import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import path from 'path';
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [vue(), vueJsx({}), svgLoader()],
  optimizeDeps: {
    exclude: ['@vueuse/core', 'vue-router'],
  },
  server: {
    fs: {
      strict: false,
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/theme/boomui-var.scss";`,
      },
    },
  },
});
