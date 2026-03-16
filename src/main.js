import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'animate.css' // 引入动画库
import router from '@/router'
import '@/assets/styles/global.scss' // 全局样式
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')