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
      <router-view></router-view>
    </v-app>
</template>

<script setup>

import { ref } from 'vue';
import { useTheme } from 'vuetify';


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




</script>

<style scoped>
  .link {
    text-decoration: none;
    margin: 14rem;
  }

  .switch {
    margin-top: 21rem;
  }

</style>