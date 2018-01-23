<template>
  <v-ons-page>
    <custom-toolbar> {{title}} </custom-toolbar>
    <p style="text-align: center">
      <v-ons-search-input placeholder="Block Height, Hash, Address or Transaction id"></v-ons-search-input>
      <v-ons-button @click="push"><v-ons-icon icon="fa-arrow-right"></v-ons-icon></v-ons-button>
    </p>
  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';
  import page2 from './Page2';
  export default {
     methods: {
       pop(){
         this.pageStack.pop();
       },
       push() {
         this.pageStack.push(page2);
       }
     },
     props: ['pageStack'],
     components: { customToolbar },
     data() {
       return {
         title: "NeoSpy - Neo Blockchain Explorer"
       }
     }
  }
</script>
