import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Layouts from 'vite-plugin-vue-layouts'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsDir: './assets',
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [vue({ script: { refSugar: true } }), Layouts(), Pages()],
})
