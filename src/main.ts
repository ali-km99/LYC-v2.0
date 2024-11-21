import './assets/main.css'

import { createApp } from 'vue'
import 'vuetify/styles'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import vuetify from './plugins/vuetify'

const app = createApp(App)

app.use(MotionPlugin)
app.use(vuetify)
app.use(router)
app.mount('#app')
