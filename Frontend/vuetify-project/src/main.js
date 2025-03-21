/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

import vuetify from './plugins/vuetify'

// import router
// import routes from './routes'

// Vue.config.productionTip = false;

// // instância do vue para passar o router
// new Vue ({
//     rendr: h => h(app),
//     routes // registrar o router
// }).$mount('#app');

// createApp(App)
// .use(vuetify)
// .mount('#app')

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
