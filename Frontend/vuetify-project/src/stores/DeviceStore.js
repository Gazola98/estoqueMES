import { defineStore } from "pinia";

export const useDeviceStore = defineStore('device', {
   state: () => ({
      devices: JSON.parse(localStorage.getItem('devices')) || []
   }),
   actions: {
      addDevice(device) {
         if(!device.shop || !device.type) {
            console.warn("Device precisa de 'shop'e 'type'.")
            return;
         }
         this.devices.push(device)
         this.saveToLocalStorage()
      },
      removeDevice(index) {
         this.devices.splice(index, 1)
         this.saveToLocalStorage()
      },
      saveToLocalStorage() {
         localStorage.setItem('devices', JSON.stringify(this.devices))
      },
      loadFromLocalStorage() {
         const data = localStorage.getItem('devices')
         if (data) {
            this.devices = JSON.parse(data)
         }
      }
   }
})