<template>
    <v-app-bar app color='bg-main white--text'>  
      <v-toolbar-title class="headline">
        <span class='material-icons align-middle'>shopping_cart</span>
        <span class="font-weight-light">Marcade-SMS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down d-flex align-items-center">
         <i class="material-icons">message</i>
         <i class="material-icons mx-3">notification_important</i>
         <i class="material-icons mr-5">settings_applications</i>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style>
.theme--light.v-sheet {

    background: #064475 !important;
}
</style>
