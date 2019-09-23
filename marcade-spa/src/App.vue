<template>
  <v-app>
    <app-header />
    <v-content>
      <main-body />
    </v-content>
  </v-app>
</template>

<script>
import AppHeader from '@/components/Header.vue';
import MainBody from '@/components/MainBody.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    MainBody
  },
  data: () => ({
    //
    drawer:  false
  }),
};
</script>
