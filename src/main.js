import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './route/main'
import api from './api/main'
import store from './components/Products/PPOS/store/store'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.config.globalProperties.$http = api
app.mount('#app')
