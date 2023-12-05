import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

import { createApp } from 'vue'
import App from './App.vue'
import {autoAnimatePlugin} from '@formkit/auto-animate/vue'
import router from '@/router';
import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

/*pinia持久化配置*/
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App)
    .use(autoAnimatePlugin)
    .use(router)
    .use(pinia)
    .mount('#app')
