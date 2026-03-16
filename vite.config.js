import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 新增：Element Plus按需引入插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 新增：自动导入Element Plus的API和组件
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  // 配置路径别名（方便导入）
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  // 适配GitHub Pages（仓库名，若为xxx.github.io则填'/'）
  base: '/benson-young.github.io/', // 替换为你的仓库名！！！
  server: {
    open: true // 启动后自动打开浏览器
  },
  // 新增：调整chunk警告阈值（可选）
  build: {
    chunkSizeWarningLimit: 1000,
    // 新增：开启代码分割，减小单个chunk体积
    rollupOptions: {
      output: {
        manualChunks(id) {
          // 将vue、element-plus等库拆分成单独chunk
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
})