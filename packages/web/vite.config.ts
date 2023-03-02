import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Pages from 'vite-plugin-pages';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  server: {
    // hmr: false,
    port: 3211,
    host: true,
    fs: {
      strict: true
    },
    proxy: {
      '/app': 'http://localhost:3210'
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.join(__dirname, 'src')
      },
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm-bundler.js' // compile template
      }
    ],
    extensions: ['.ts', '.js']
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ArcoResolver()],
    }),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true
        })
      ]
    }),
    Pages({
      dirs: path.join(__dirname, 'src/views'),
      exclude: [
        '**/**/*.ts',
        '**/**/*.tsx',
        '**/components/*.vue',
        '**/__components__/*.vue',
      ]
    }),
  ],
})
