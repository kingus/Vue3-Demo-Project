import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import messages from './i18n/messages'

import '@mdi/font/css/materialdesignicons.css'
import { createI18n } from 'vue-i18n'

const app = createApp(App)

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
