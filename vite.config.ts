import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port:3001
  },
  resolve:{
    //设置路径别名
    alias:{
      "@":path.resolve(__dirname,'src'),
      "com":path.resolve(__dirname,'src/components')

    }
  },
  plugins: [vue()]
})
