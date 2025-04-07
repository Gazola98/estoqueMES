<template>
 <v-main>
  <v-container>
    <v-table>
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
        <tr v-for="(device, index) in deviceStore.devices" :key="index">
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
 import { useDeviceStore } from '@/stores/DeviceStore';

 const deviceStore = useDeviceStore();
  
</script>