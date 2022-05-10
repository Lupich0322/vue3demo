import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import 'animate.css/animate.min.css'
// import * as ElIconModules from '@element-plus/icons-vue'

const app = createApp(App)
// for (const iconName in ElIconModules) {
//   app.component(iconName , ElIconModules[iconName])
// }


app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
