import { defineConfig } from 'vite'
import { visualizer } from "rollup-plugin-visualizer";
import vue from '@vitejs/plugin-vue'
import cdn from 'vite-plugin-cdn-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  cdn({
    modules: ['vue', 'axios', 'lodash', 'vue-router',
      {
        name: '@wangeditor/editor-for-vue',
        var: '@wangeditor/editor-for-vue',
        path: `https://unpkg.com/@wangeditor/editor-for-vue@5.1.12`,
      },
      {
        name: 'naive-ui',
        var: 'naive-ui',
        path: `https://unpkg.com/naive-ui@2.39.0`,
      },
    ],
  }),
  visualizer({
    emitFile: false,
    file: "status.html",
    open: true
  }),
  ],
  build: {
    terserOptions: {
      compress: {
        drop_console: true, //剔除console,和debugger
        drop_debugger: true,
      },
    },
    // chunkSizeWarningLimit: 1500,大文件报警阈值设置,不建议使用
    //rollup分包
    rollupOptions: {
      external: ['@wangeditor/editor-for-vue', 'naive-ui'],
      output: { //静态资源分类打包
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        manualChunks(id) { //静态资源分拆打包
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
})
//--2.19Mb，5.69s
//--2.18Mb,5.92s rollup分包
//--1.89Mb,5.85s cdn引入vue,axios,loadsh,vue-router
//插件自动引入的打包自动在rollup剔除
//--1.11Mb,5.85s cdn引入wangditor
//--100.55kb,971ms cdn引入naive-ui

