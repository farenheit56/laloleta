<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <h3>La Loleta</h3>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/farenheit56/laloleta"
        target="_blank"
        text
      >
        <span class="mr-2">Haceme click porfa</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Index/>
    </v-main>
            
  </v-app>
</template>

<script>
import Index from './components/Index';


export default {
  name: 'App',

  components: {
    Index,
  },

  data: () => ({
    //
  }),
};
</script>