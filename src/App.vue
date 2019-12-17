<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>GOODMONTH</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >


        <span class="mr-2">LOCALIZESSE</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <main-component />
    </v-content>
  </v-app>
</template>

<script>
import MainComponent from './components/Main';

export default {
  name: 'App',
  components: {
    MainComponent,
  },
  data: () => ({
    //
  }),
};
</script>
