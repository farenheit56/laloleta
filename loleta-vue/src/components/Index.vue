<template>
  <v-container class="mt-5">
    <v-layout justify-center>
      <v-flex xs4 md4 lg4 xl4>
        <v-text-field class="pa-2"
        v-model="summoner1"
        label="Summoner 1"
        required
      ></v-text-field>
      <v-text-field class="pa-2" 
        v-model="summoner2"        
        label="Summoner 2"
        required
      ></v-text-field>
      <v-text-field class="pa-2" 
        v-model="summoner3"        
        label="Summoner 3"
        required
      ></v-text-field>
      <v-text-field class="pa-2" 
        v-model="summoner4"        
        label="Summoner 4"
        required
      ></v-text-field>
      <v-text-field class="pa-2" 
        v-model="summoner5"        
        label="Summoner 5"
        required
      ></v-text-field>
      </v-flex>
      <v-flex xs4 md4 lg4 xl4>
        <v-text-field class="pa-2" 
        v-model="summoner6"        
        label="Summoner 6"
        required
      ></v-text-field>
      <v-text-field class="pa-2" 
        v-model="summoner7"        
        label="Summoner 7"
        required
      ></v-text-field>
      <v-text-field class="pa-2" 
        v-model="summoner8"        
        label="Summoner 8"
        required
      ></v-text-field>
      <v-text-field class="pa-2" 
        v-model="summoner9"        
        label="Summoner 9"
        required
      ></v-text-field>
      <v-text-field class="pa-2" 
        v-model="summoner10"        
        label="Summoner 10"
        required
      ></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Index',

    data: () => ({
      summoner1:"",
      summoner2:"",
      summoner3:"",
      summoner4:"",
      summoner5:"",
      summoner6:"",
      summoner7:"",
      summoner8:"",
      summoner9:"",
      summoner10:"",
    }),
  }
</script>
