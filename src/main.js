import { createApp } from 'vue'
import router from './router.js'
import store from './store.js'
import i18n from './i18n.js'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(i18n)
app.mount('#app')
