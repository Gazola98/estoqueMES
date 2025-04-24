<template>
    <!-- Busca -->
     <v-row>
      <v-col cols="12" sm="6">
        <v-text-field
       v-model="search"
       label="Search"
       prepend-icon="mdi-magnify"
       class="mb-4"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-select
         
         label="Filter CCR Stock"
         prepend-icon="mdi-package-variant-closed"
         :items="['Stock']"
         clearable></v-select>
      </v-col>
     </v-row>
     

      

      <!-- Filtros -->
       <v-row class="mb-4" dense>
        <v-col cols="12" sm="4">
          <v-text-field v-model="filters.host" label="Filter by host" prepend-icon="mdi-desktop-classic"></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
        <v-select
         v-model="filters.shop"
         :items="shopOptions"
         label="Filter by shop" 
         prepend-icon="mdi-factory"
         clearable></v-select>
        </v-col>
        <v-col cols="12" sm="4">
          <v-select
           v-model="filters.type"
           :items="typeOptions"
           label="Filter by Type"
           prepend-icon="mdi-shape"
           clearable></v-select>
        </v-col>
       </v-row>

    <!-- Tabela -->
    <v-table class="rounded-lg">
      <thead>
        <tr>
          <th>System</th>
          <th>Type</th>
          <th>Brand</th>
          <th>Model</th>
          <th>IP Address</th>
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
          <th>Ações</th>
        </tr>
        <tr v-for="(device, index) in (filteredDevices)" :key="index" :class="index % 2 === 0 ? 'linha-par' : 'linha-impar'">
          <td>{{ device.select }}</td>
          <td>{{ device.type }}</td>
          <td>{{ device.brand }}</td>
          <td>{{ device.model }}</td>
          <td>{{ device.ip }}</td>
          <td>{{ device.mac }}</td>
          <td>{{ device.host }}</td>
          <td>{{ device.shop }}</td>
          <td>{{ device.station }}</td>
          <td>{{ device.os }}</td>
          <td>{{ device.serial }}</td>
          <td>{{ device.install }}</td>
          <td>{{ device.asset }}</td>
          <td>{{ device.switchPort }}</td>
          <td>{{ device.switch }}</td>
          <td>{{ device.rack }}</td>
          <td><v-chip><button @click="openDialog(index)">🗑️</button></v-chip></td>
        </tr>
      </thead>

      <!-- Confirm para excluir -->
      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-card-title class="text-h6">Confirmar Exclusão</v-card-title>
          <v-card-text>Tem certeza que deseja excluir este dispositivo?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="grey" text @click="dialog = false">Cancelar</v-btn>
            <v-btn color="red" text @click="confirmRemove">Excluir</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-table>
</template>
  

<!-- Theme Page -->
<script setup>
 import { ref, computed } from 'vue'
 import { onMounted } from 'vue';
 import { useDeviceStore } from '@/stores/DeviceStore';

 const deviceStore = useDeviceStore();

 const search = ref('');

 // computed com filtro simples})
 const filteredDevices = computed(() => {
  let result = deviceStore.devices

  // Filtro por texto (search)
  if (search.value) {
    const term = search.value.toLowerCase()
    result = result.filter(device =>
      Object.values(device).some(value =>
        String(value).toLowerCase().includes(term)
      )
    )
  }

  // Filtros por campo (host, shop, type)
  result = result.filter(device => {
    const hostMatch = device.host.toLowerCase().includes(filters.value.host.toLowerCase())
    const shopMatch = !filters.value.shop || device.shop.toLowerCase() === filters.value.shop.toLowerCase()
    const typeMatch = !filters.value.type || device.type === filters.value.type

    return hostMatch && shopMatch && typeMatch
  })

  return result
})
 onMounted(() => {
  deviceStore.loadFromLocalStorage()
 })


   // Filtros por campo
   const filters = ref({
    host: '',
    shop: '',
    type: ''
  })

  // Gerar opções únicas para shop
  const shopOptions = computed(() => {
    const shops = deviceStore.devices.map(d => d.shop)
    return [...new Set(shops)]
  })

 // Gerar opções únicas de tipo
 const typeOptions = computed(() => {
  const types = deviceStore.devices.map(d => d.type)
  return [...new Set(types)]
 })

// Controle do dialog
const dialog = ref(false)
const deviceIndexToRemove = ref(null)

//Abrir o dialog e guardar o índice
function openDialog(index) {
  deviceIndexToRemove.value = index
  dialog.value = true
}

function confirmRemove() {
  if (deviceIndexToRemove.value !== null) {
    deviceStore.removeDevice(deviceIndexToRemove.value)
  }
  dialog.value = false
  deviceIndexToRemove.value = null
}

</script>



<style scoped>
  th {
    font-size: 16px;
  }

  td {
    border-bottom: 0.01px solid rgba(128, 128, 128, 0.3);
  }

  .linha-par {
    background-color: #b6b6b638;
  }

  .linha-impar {
    background-color: #0e0e0e00;
  }
</style>