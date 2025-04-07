import { defineStore } from "pinia";

export const useDeviceStore = defineStore('device', {
   state: () => ({
      devices: []
   }),
   actions: {
      addDevice(device) {
         this.devices.push(device)
      }
   }
})