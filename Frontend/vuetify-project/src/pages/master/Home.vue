<template>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer">
        <!-- navs -->
         
        
        <v-list class="mt-6 ml-2 text-h6">
          <router-link to="/"  class="link">
            <v-list-item prepend-icon="mdi-home">Home</v-list-item>
          </router-link>
          <router-link to="/devices" class="link">
            <v-list-item prepend-icon="mdi-widgets">Devices</v-list-item>
          </router-link>
          <router-link to="/add" class="link">
            <v-list-item prepend-icon="mdi-plus">Add</v-list-item>
          </router-link>
          <router-link to="/logs" class="link">
            <v-list-item prepend-icon="mdi-alert-circle">Logs</v-list-item>
          </router-link>
          <router-link to="/users" class="link">
            <v-list-item prepend-icon="mdi-account">Users</v-list-item>
          </router-link>
          
        </v-list>
 
        <v-switch 
          @click="toggleTheme" 
          prepend-icon="mdi-theme-dark-light"
          false-icon="mdi-weather-night"
          true-icon="mdi-weather-sunny"
          class="switch"
          >
        </v-switch>
        
      </v-navigation-drawer>

      <!-- Menu com titulo -->
      <v-app-bar color="indigo-darken-4">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-app-bar-title class="text-h5">MES Storage</v-app-bar-title>
        
        <template #append>
          <v-avatar>
            <v-img src="https://img.freepik.com/vetores-gratis/circulo-azul-com-usuario-branco_78370-4707.jpg?semt=ais_hybrid&w=740"></v-img>
          </v-avatar>
          <v-btn size="large" class="pr-1" prepend-icon="mdi-exit-to-app"></v-btn>
        </template>
      </v-app-bar>


      <v-main>
        <v-container>

          <!-- Conteudo para Home -->
           <div class="d-flex ml-12" v-if="route.path === '/'">
                <v-card class="mb-4 mr-6 pa-4">
                <h3 class="text-h6 mb-2">Devices por shop:</h3>
                <v-chip
                v-for="(count, shop) in shopCounts"
                :key="shop"
                class="ma-1"
                color="primary"
                text-color="white"
                >
                  {{ shop }}: {{ count }}
                </v-chip>
              </v-card>

            <!-- Contagem type -->
              <v-card class="mb-4 ml-6 pa-4">
                <h3 class="text-h6 mb-2">Devices por type:</h3>
                <v-chip
                  v-for="(count, type) in typeCounts"
                  :key="type"
                  class="ma-1"
                  color="indigo"
                  text-color="white"
                  >
                  {{ type }}: {{ count }}
                </v-chip>
              </v-card>
           </div>

           <!-- Outras rotas -->
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
</template>

<script setup>

import { computed, ref } from 'vue';
import { useTheme } from 'vuetify';
import { useRoute } from 'vue-router';

const route = useRoute()


// criando referencia para o drawer
const drawer = ref(null)

//acessando o tema global
const theme = useTheme()

//Função para alternar entre tema claro e escuro
const toggleTheme = () => {
  const currentTheme = theme.global.name.value;
  if (currentTheme === 'light') {
    theme.global.name.value = 'dark';  // tema escuro
  } else {
    theme.global.name.value = 'light'; // tema claro
  }
};

// // Total de devices por shop
// const shopCounts = computed(() => {
//   const counts = {}
//   deviceStore.devices.forEach(device => {
//     const shop = device.shop || 'Desconhecido'
//     counts[shop] = (counts[shop] || 0) + 1
//   })
//   return counts
//  })

//  // Total de devices por type
//  const typeCounts = computed(() => {
//   const counts = {}
//   deviceStore.devices.forEach(device => {
//     const type = device.type || 'Desconhecido'
//     counts[type] = (counts[type] || 0) + 1
//   })
//   return counts
//  })



</script>

<style scoped>
  .link {
    text-decoration: none;
    margin: 14rem;
    position: sticky;
  }

  .switch {
    margin-top: 21rem;
  }
</style>