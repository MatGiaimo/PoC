<template>
  <v-ons-navigator :page-stack="pageStack">
    <component :is="page" v-for="page in pageStack" 
    :key="page.title" :page-stack="pageStack"></component>
  </v-ons-navigator>
</template>

<script>
  import Vue from 'vue';
  import home from './pages/Home.vue';

  export default {
    data() {
      return {
        pageStack: [home]
      }
    }
  }
</script>
