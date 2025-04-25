// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Import Raleway font
import '@/assets/css/fonts.css'

// ✅ Import Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// Create and mount the Vue application
const app = createApp(App)

// Use Element Plus
app.use(ElementPlus)

// Use the router
app.use(router)

// Mount the app
app.mount('#app')
