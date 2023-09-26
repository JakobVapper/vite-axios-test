import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
const app = createApp(App)

axios.defaults.baseURL = 'https://breakingbadapi.com/api'
app.config.globalProperties.$axios = axios

app.mount('#app')