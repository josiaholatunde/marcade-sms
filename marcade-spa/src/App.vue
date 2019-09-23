<template>
  <v-app>
    <app-header />
    <v-content>
      <h1>Hello World</h1>
    </v-content>
  </v-app>
</template>

<script>
import AppHeader from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
  data: () => ({
    //
    drawer:  false
  }),
};
</script>
