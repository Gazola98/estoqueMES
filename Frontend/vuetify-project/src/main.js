/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Router
import router from './routes/router'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

app.use(router);


registerPlugins(app)

app.mount('#app')
