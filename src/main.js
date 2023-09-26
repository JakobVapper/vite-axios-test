import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
const app = createApp(App)

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5'
app.config.globalProperties.$axios = axios

app.mount('#app')