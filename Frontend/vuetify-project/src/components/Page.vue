<template>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer">
        <!-- navs -->
         
        
        <v-list class="mt-6 ml-2 text-h6">
          <v-list-item class="navs" href="#" prepend-icon="mdi-home">Home</v-list-item>
          <v-list-item class="navs" href="#" prepend-icon="mdi-widgets">Devices</v-list-item>
          <v-list-item class="navs" href="#" prepend-icon="mdi-plus">Teste</v-list-item>
          <v-list-item class="navs" href="#" prepend-icon="mdi-alert-circle">Teste</v-list-item>
          <v-list-item class="navs" href="#" prepend-icon="mdi-account">Users</v-list-item>
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
  
      <v-main>
        <v-table>
          <thead>
            <tr>
              <th>System</th>
              <th>Type</th>
              <th>Brand</th>
              <th>Model</th>
              <th>IP Adress</th>
              <th>MAC</th>
              <th>Host</th>
              <th>Shop</th>
              <th>Station</th>
              <th>O.S</th>
              <th>SerialNumber</th>
              <th>Install</th>
              <th>Asset</th>
              <th>Switch Port</th>
              <th>Switch</th>
              <th>Rack</th>
            </tr>
            <tr>
              <td></td>
            </tr>
          </thead>
        </v-table>
      </v-main>
    </v-app>
</template>
  

<!-- Theme Page -->
<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';

//validação formulário
const nameRules = [
  value => {
    if(value) return true

    return 'o nome é obrigatório'    
  },
]


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





<!-- <v-card-title>
  <v-btn @click ='isDialogOpen = true' variant="elevated" color="indigo-darken-4" class="mb-4">Add Device</v-btn>

  <v-dialog v-model="isDialogOpen" width="600px">
    <v-card>
      <v-card-title class="mt-4">Register New Device</v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-text-field label="NameDevice" variant="outlined"
            :rules="nameRules"></v-text-field>
          </v-col>
          
          <v-col>
            <v-select variant="outlined" label="System" :items="['MES']"></v-select>
          </v-col>
        </v-row>
        
        <v-select label="Shop"
        variant="outlined"
        :items="['ASSEMBLY', 'PAINT', 'BODY', 'PRESS', 'ENGINE']"></v-select>
      </v-card-text>

      <v-card-actions>
        <v-btn variant="text" @click="isDialogOpen = false">Cancel</v-btn>
        <v-btn variant="elevated" color="indigo-darken-4" class="ma-4">Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-card-title> -->