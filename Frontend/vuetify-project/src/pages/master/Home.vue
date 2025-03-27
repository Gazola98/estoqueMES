<template>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer">
        <!-- navs -->
         
        
        <v-list class="mt-6 ml-2 text-h6">
          <router-link to="/">
            <v-list-item class="navs" prepend-icon="mdi-home">Home</v-list-item>
          </router-link>
          <router-link to="/devices">
            <v-list-item class="navs" prepend-icon="mdi-widgets">Devices</v-list-item>
          </router-link>
          <router-link to="">
            <v-list-item class="navs" prepend-icon="mdi-plus">Teste</v-list-item>
          </router-link>
          <router-link to="">
            <v-list-item class="navs" prepend-icon="mdi-alert-circle">Teste</v-list-item>
          </router-link>
          <router-link to="/users">
            <v-list-item class="navs" prepend-icon="mdi-account">Users</v-list-item>
          </router-link>
          
        </v-list>
 
        <v-switch 
          @click="toggleTheme" 
          prepend-icon="mdi-theme-dark-light"
          false-icon="mdi-weather-night"
          true-icon="mdi-weather-sunny"
          class="teste">
        </v-switch>
        
      </v-navigation-drawer>

      <!-- Menu com titulo -->
      <v-app-bar color="indigo-darken-4">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-app-bar-title class="text-h5">MES Storage</v-app-bar-title>
        <template #append>
          <v-avatar>
            <v-img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"></v-img>
          </v-avatar>
          <v-btn size="large" class="pr-1" prepend-icon="mdi-exit-to-app"></v-btn>
        </template>
      </v-app-bar>
    </v-app>
</template>

<script setup>

import { ref } from 'vue';
import { useTheme } from 'vuetify';


// Criando script para modal
const isDialogOpen = ref(false)

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

<style>
  .navs {
    margin-top: 4.6rem;
  }

  .teste {
    margin-top: 12.5rem;
    width: 0;
    height: 0;
  }
</style>