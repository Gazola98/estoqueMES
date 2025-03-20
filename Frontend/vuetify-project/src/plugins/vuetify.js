/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createApp } from 'vue'


// Composables
import { createVuetify } from 'vuetify'


// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark', // Define o tema padrão como claro
    themes: {
      light: {
        colors: {
          primary: '#1976D2', // Cor primária do tema claro
        },
      },
      dark: {
        colors: {
          primary: '#1E1E1E', // Cor primária do tema escuro
        },
      },
    },
  },
});

export default vuetify;

