<template>
    <v-main>
        <v-container>
            <v-card
             class="mx-auto"
             max-width="800"
             title="Add New Device"
             >
                <v-container>
                    <v-select
                    v-model="form.select"
                     label="Select"
                     variant="outlined"
                     :items="['MES']"></v-select>
                    <v-select
                    v-model="form.type"
                     label="Type"
                     variant="outlined"
                     :items="['MES PC', 'MONITOR']"></v-select>
                    <v-select
                    v-model="form.brand"
                     label="Brand"
                     variant="outlined"
                     :items="['DELL']"></v-select>
                    <v-select
                    v-model="form.model"
                     label="Model"
                     variant="outlined"
                     :items="['DELL']"></v-select>
                    <v-text-field
                    v-model="form.ip"
                     label="IP-Address"
                     variant="outlined"
                     ></v-text-field>
                     <v-text-field
                     v-model="form.mac"
                     label="MAC"
                     variant="outlined"
                     ></v-text-field>
                     <v-text-field
                     v-model="form.host"
                     label="Host Name"
                     variant="outlined"
                     ></v-text-field>
                    <v-select
                    v-model="form.shop"
                     label="Shop"
                     variant="outlined"
                     :items="['ASSEMBLY','BODY','ENGINE PLANT','PRESS/STAMP','PAINT']"></v-select>
                     <v-text-field
                     v-model="form.station"
                     label="Station"
                     variant="outlined"
                     ></v-text-field>
                     <v-select
                     v-model="form.os"
                     label="OS"
                     variant="outlined"
                     :items="['Windows 10']"></v-select>
                     <v-text-field
                     v-model="form.serial"
                     label="Serial Number"
                     variant="outlined"
                     ></v-text-field>
                     <v-text-field
                     v-model="form.install"
                     label="Install"
                     variant="outlined"
                     ></v-text-field>
                     <v-text-field
                     v-model="form.asset"
                     label="Asset"
                     variant="outlined"
                     ></v-text-field>
                     <v-text-field
                     v-model="form.switchPort"
                     label="Switch Port"
                     variant="outlined"
                     ></v-text-field>
                     <v-text-field
                     v-model="form.switch"
                     label="Switch"
                     variant="outlined"
                     ></v-text-field>
                     <v-text-field
                     v-model="form.rack"
                     label="Rack"
                     variant="outlined"
                     ></v-text-field>
                </v-container>
                
                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="success" @click="submitForm">
                        SUBMIT
                        <v-icon icon="mdi-chevron-right" end></v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </v-main>
</template>



<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useDeviceStore } from '@/stores/DeviceStore';

const router = useRouter()
const deviceStore = useDeviceStore();

const form = reactive({
    select: '',
    type: '',
    brand: '',
    model: '',
    ip: '',
    mac: '',
    host: '',
    shop: '',
    station: '',
    os: '',
    serial: '',
    install: '',
    asset: '',
    switchPort: '',
    switch: '',
    rack: ''
})

const submitForm = () => {
    // Adiciona ao store
    deviceStore.addDevice({...form})
    // Redireciona para tabela
    router.push({ name: 'Devices'})
}

</script>