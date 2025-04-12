<template>
 <v-main>
  <v-container>

    <!-- Busca -->
     <v-text-field
      v-model="search"
      label="Search"
      prepend-icon="mdi-magnify"
      class="mb-4"></v-text-field>

      <!-- Filtros -->
       <v-row class="mb-4" dense>
        <v-col cols="12" sm="4">
          <v-text-field v-model="filters.host" label="Filter by host" prepend-icon="mdi-desktop-classic"></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
        <v-select
        v-model="filters.shop" label="Filter by shop" prepend-icon="mdi-store">
        </v-select>
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
        </tr>
        <tr v-for="(device, index) in (filteredDevices, filteredDeevices)" :key="index" :class="index % 2 === 0 ? 'linha-par' : 'linha-impar'">
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
        </tr>
      </thead>
    </v-table>
  </v-container>
 </v-main>
</template>
  

<!-- Theme Page -->
<script setup>
 import { ref, computed } from 'vue'
 import { onMounted } from 'vue';
 import { useDeviceStore } from '@/stores/DeviceStore';

 const deviceStore = useDeviceStore();

 const search = ref('');

 // computed com filtro simples
 const filteredDevices = computed(() => {
  if(!search.value) return deviceStore.devices

  const term = search.value.toLowerCase()

  return deviceStore.devices.filter(device => Object.values(device).some(value => String(value).toLowerCase().includes(term)
   )
 )
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

 // Gerar opções únicas de tipo
 const typeOptions = computed(() => {
  const types = deviceStore.devices.map(d => d.type)
  return [...new Set(types)]
 })

 // Computed com filtros por campo
 const filteredDeevices = computed(() => {
  return deviceStore.devices.filter(device => {
    const hostMatch = device.host.toLowerCase().includes(filters.value.host.toLowerCase())
    const shopMatch = device.shop.toLowerCase().includes(filters.value.shop.toLowerCase())
    const typeMatch = !filters.value.type || device.type === filters.value.type

    return hostMatch && shopMatch && typeMatch
  })
})

</script>



<style scoped>
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