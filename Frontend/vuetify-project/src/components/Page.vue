<template>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer">

        <!-- Dentro da toolbar -->
        <v-sheet class="pa-4" color="grey-lighten-3">
          <v-avatar class="mb-6 ml-11" color="grey-darken-1" size="130">
            
          </v-avatar>
          <h1>User</h1>
        </v-sheet>

        <!-- navs -->
        <v-list class="">
          <v-list-item href="#" prepend-icon="mdi-home">Home</v-list-item>
          <v-list-item href="#" prepend-icon="mdi-widgets">Devices</v-list-item>
          <v-list-item href="#" prepend-icon="mdi-plus">Add</v-list-item>
          <v-list-item href="#" prepend-icon="mdi-alert-circle">Logs</v-list-item>
          <v-list-item href="#" prepend-icon="mdi-account">Users</v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- Menu com titulo -->
      <v-app-bar color="indigo-darken-4">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-app-bar-title class="text-h5">MES Storage</v-app-bar-title>
      </v-app-bar>
  
      <v-main>
        <!--  -->
      </v-main>
    </v-app>
</template>
  
<script setup>
    import { ref } from 'vue';

    const drawer = ref(null)
</script>