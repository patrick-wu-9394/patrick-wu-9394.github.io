import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)

app.use(router)

// Handle GitHub Pages 404 redirect
if (sessionStorage.redirect) {
  const redirect = sessionStorage.redirect
  delete sessionStorage.redirect
  router.push(redirect)
}

app.mount('#app')
