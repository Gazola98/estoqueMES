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
  </v-container>
 </v-main>
</template>
  

<!-- Theme Page -->
<script setup>

</script>






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