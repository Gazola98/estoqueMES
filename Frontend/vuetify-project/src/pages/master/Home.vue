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
            <div class="d-flex ml-6 mr-3 rounded-lg" v-if="route.path === '/'">
              <v-row>
                <v-col
                 v-for="(section, index) in sections"
                 :key="index"
                 cols="4"
                 >
                  <v-card  class="mb-4 ml-3 pa-5" height="465" width="500">
                    <h2 class="d-flex justify-center">{{ section.name }}</h2>
                    <v-container class="pa-0">
                      <div
                        v-for="(item, idx) in labels"
                        :key="idx"
                        class="d-flex justify-space-between align-center border-row"
                        >
                        <h4 class="ma-0">{{ item }}:</h4>
                        <p class="ma-0">{{ section.data[item] ?? 0 }}</p>
                      </div>
                    </v-container> 
                  </v-card>
                </v-col>
              </v-row>
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
import { useDeviceStore } from '@/stores/DeviceStore';


const route = useRoute()
const deviceStore = useDeviceStore()

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

const labels = [
  'MES PC',
  'MES PC Monitors',
  'OSD PC',
  'OSD Monitors',
  'Industrial Keyboards',
  'TDCS PC',
  'TDCS Monitors',
  'KIOSK PC',
  'KIOSK Monitors',
  'Printers',
  'GPTIS',
  'GPTIS Monitors'
]

// Dados por seção
const sections = computed(() => {
  // Pega todos os shops únicos
  const shops = [...new Set(deviceStore.devices.map(d => d.shop))]

  // Garante que aparece na ordem desejada
  const order = ['Assembly', 'Body', 'Engine Plant', 'Paint', 'Press/Stamp']
  
  // Gera os dados por seção
  const sectionData = order.map(shop => {
    const data = {}
    labels.forEach(label => {
      data[label] = deviceStore.devices.filter(d => d.shop === shop && d.type === label).length
    })
    return { name: shop, data }
  })

  // Adiciona a seção "Total"
  const totalData = {}
  labels.forEach(label => {
    totalData[label] = deviceStore.devices.filter(d => d.type === label).length
  })

  sectionData.push({ name: 'Total', data: totalData })

  return sectionData
})
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

.border-row {
  border-bottom: 1px solid rgba(255, 255, 255, 0.35);
  padding: 4px 0;
}

p {
  font-weight: bold;
}
</style>