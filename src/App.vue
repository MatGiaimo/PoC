<template>
  <v-ons-navigator :page-stack="pageStack">
    <component :is="page" v-for="page in pageStack" 
    :key="page.title" :page-stack="pageStack" :bus="bus"></component>
  </v-ons-navigator>
</template>

<script>
  import Vue from 'vue';
  import page1 from './Page1';
  import page2 from './Page2';

  var bus = new Vue();

  export default {
    data() {
      return {
        pageStack: [page1],
        bus: bus
      }
    }
  }
</script>
