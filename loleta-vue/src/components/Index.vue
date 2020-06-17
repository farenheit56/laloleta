<template>
  <v-container class="mt-5">
    <v-layout justify-center>
      <v-flex xs5 sm4>
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
      <v-flex xs5 sm4>
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
      <v-text-field class="pa-2 pb-0" 
        v-model="summoner10"        
        label="Summoner 10"
        required
      ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout justify-center mt-5>
      <v-btn
        color="warning"
        @click="summonersSubmit"
      >
        Armar equipo
      </v-btn>
    </v-layout>
    <v-layout justify-center mt-5 v-if="result.display">
      <v-flex xs5 sm4>
        <v-card

          color="red darken-4"
          dark
          class="mx-auto ma-5 "          
          max-width="322"
          outlined
          
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1 mb-1">Summoner 1</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card
          color="red darken-4"
          dark
          class="mx-auto ma-5"
          max-width="322"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1 mb-1">Summoner 2</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card
          color="red darken-4"
          dark
          class="mx-auto ma-5"
          max-width="322"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1 mb-1">Summoner 3</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card
          color="red darken-4"
          dark
          class="mx-auto ma-5"
          max-width="322"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1 mb-1">Summoner 4</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card
          color="red darken-4"
          dark
          class="mx-auto ma-5"
          max-width="322"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1 mb-1">Summoner 5</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-flex>
      <v-flex xs5 sm4>
        <v-card
          color="blue darken-4"
          dark
          class="mx-auto ma-5"
          max-width="322"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1 mb-1">Summoner 6</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card
          color="blue darken-4"
          dark
          class="mx-auto ma-5"
          max-width="322"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1 mb-1">Summoner 7</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card
          color="blue darken-4"
          dark
          class="mx-auto ma-5"
          max-width="322"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1 mb-1">Summoner 8</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card
          color="blue darken-4"
          dark
          class="mx-auto ma-5"
          max-width="322"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1 mb-1">Summoner 9</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card
          
          color="blue darken-4"
          dark
          class="mx-auto ma-5"
          max-width="322"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1 mb-1">Summoner 10</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog
          v-model="loading.estado"
          hide-overlay
          persistent
          width="300"
        >
          <v-card
            color="primary"
            dark
          >
            <v-card-text>
              {{loading.titulo}}
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
  </v-container>
</template>

<script>
//import axios from "axios"; 
import {mapMutations} from "vuex";
import {mapState} from "vuex";
import axios from "axios"; 

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
    methods: {
    ...mapMutations(['showSumm','mostrarLoading','ocultarLoading',]),
    async summonersSubmit(){
      //let riotAPI = 'RGAPI-58f1c92c-6db0-4f82-82fa-ee8e1d93b8f4';
    
      try {
        this.mostrarLoading({titulo: 'BANCA QUE BUSCO ÑERY'})
        let datosAPI = await axios.get(`https://mindicador.cl/api/dolar/04-04-1994`);
        console.log(datosAPI)
      } catch (error) {
        console.log(error)
      } finally {        
        this.ocultarLoading();
        this.showSumm();
      }
      
    },
  },
    computed: {
    ...mapState(['loading','result']),
  }
}
</script>
