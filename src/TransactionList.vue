<template>
  <v-ons-list modifier="inset">
      <v-ons-list-header>
     <div class="left" style="float:left;">Type</div>
      <div class="center" style="float:left;">Transaction ID</div>
      <div class="right" style="float:left;">Completed On</div>
      </v-ons-list-header>

    <v-ons-list-item>
      <div class="left">Left</div>
      <div class="center">Center</div>
      <div class="right">Right</div>
    </v-ons-list-item>
  </v-ons-list>
</template>

<script>
  export default {
      props: ['transactions']
  }
</script>