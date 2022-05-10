import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import 'animate.css/animate.min.css'


const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
