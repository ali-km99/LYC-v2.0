import './assets/main.css'

import { createApp } from 'vue'
import 'vuetify/styles'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import vuetify from './plugins/vuetify'
import i18n from './i18n'

const app = createApp(App)
app.use(i18n)
app.use(MotionPlugin)
app.use(vuetify)
app.use(router)
app.mount('#app')
