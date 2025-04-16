<template>
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
                     :items="['MES']"
                     clearable></v-select>
                    <v-select
                    v-model="form.type"
                     label="Type"
                     variant="outlined"
                     :items="['OPTIPLEX', 'MONITOR', 'OSD', 'PRINTER', 'TV', 'KEYBOARDS']"
                     clearable></v-select>
                    <v-select
                    v-if="BrandOptions.length"
                    v-model="form.brand"
                     label="Brand"
                     variant="outlined"
                     :items="BrandOptions"
                     clearable></v-select>
                    <v-select
                     v-if="modelOptions.length"
                     v-model="form.model"
                     label="Model"
                     variant="outlined"
                     :items="modelOptions"
                     clearable></v-select>
                    <v-text-field
                    v-model="form.ip"
                     label="IP-Address"
                     variant="outlined"
                     clearable
                     ></v-text-field>
                     <v-text-field
                     v-model="form.mac"
                     label="Mac"
                     variant="outlined"
                     clearable
                     ></v-text-field>
                     <v-text-field
                     v-model="form.host"
                     label="Host Name"
                     variant="outlined"
                     clearable
                     ></v-text-field>
                    <v-select
                    v-model="form.shop"
                     label="Shop"
                     variant="outlined"
                     :items="['ASSEMBLY','BODY','ENGINE PLANT','PRESS/STAMP','PAINT']"
                     clearable></v-select>
                     <v-text-field
                     v-model="form.station"
                     label="Station"
                     variant="outlined"
                     clearable
                     ></v-text-field>
                     <v-select
                     v-model="form.os"
                     label="OS"
                     variant="outlined"
                     :items="['W10 IOT ENTERPRISE LTSC', 'N/A']"
                     clearable></v-select>
                     <v-text-field
                     v-model="form.serial"
                     label="Serial Number"
                     variant="outlined"
                     clearable
                     ></v-text-field>
                     <v-text-field
                     v-model="form.install"
                     label="Install"
                     variant="outlined"
                     clearable
                     ></v-text-field>
                     <v-text-field
                     v-model="form.asset"
                     label="Asset"
                     variant="outlined"
                     clearable
                     ></v-text-field>
                     <v-text-field
                     v-model="form.switchPort"
                     label="Switch Port"
                     variant="outlined"
                     clearable
                     ></v-text-field>
                     <v-text-field
                     v-model="form.switch"
                     label="Switch"
                     variant="outlined"
                     clearable
                     ></v-text-field>
                     <v-text-field
                     v-model="form.rack"
                     label="Rack"
                     variant="outlined"
                     clearable
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
</template>



<script setup>
import { computed, reactive } from 'vue';
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

const modelOptions = computed(() => {
    switch(form.type) {
        case 'MONITOR':
            return ['P2422H'];
        case 'OPTIPLEX':
            return ['3000', '3060', '3050']
        case 'OSD':
            return ['ZEBRA - ZT410']
        case 'PRINTER':
            return ['HP']
        case 'TV':
            return ['SAMSUNG']
        case 'KEYBOARDS':
            return ['AVANTTEC']
        default:
            return []
    }
})

const BrandOptions = computed(() => {
    switch(form.type) {
        case 'OPTIPLEX':
            return ['DELL']
        case 'MONITOR':
            return ['DELL']
        case 'OSD':
            return ['ZEBRA - ZT410']
        case 'PRINTER':
            return ['HP']
        case 'TV':
            return ['SAMSUNG']
        case 'KEYBOARDS':
            return ['AVANTTEC']
        default:
            return []
    }
})

const validateForm = () => {
    const requiredFields = [
        'select', 'type', 'brand', 'model', 'ip', 'mac', 'host',
        'shop', 'station', 'os', 'serial', 'install',
        'asset', 'switchPort', 'switch', 'rack'
    ]

    const missingFields = requiredFields.filter(field => !form[field]);

    if (missingFields.length) {
        alert(`Por favor, preencha todos os campos obrigatórios.\nCampos faltando: ${missingFields.join(', ')}`);
        return false;
    }

    return true;
}

const submitForm = () => {
    if(!validateForm()) return;

    // Adiciona ao store
    deviceStore.addDevice({...form})
    // Redireciona para tabela
    router.push({ name: 'Devices'})
}

</script>