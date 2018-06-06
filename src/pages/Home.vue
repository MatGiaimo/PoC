<template>
  <v-ons-page>
    <custom-toolbar> {{title}} </custom-toolbar>
    <p style="text-align: center">
      <v-ons-search-input placeholder="Block Height, Hash, Address or Transaction id" v-model="query"></v-ons-search-input>
      <v-ons-button @click="details()"><v-ons-icon icon="fa-arrow-right"></v-ons-icon></v-ons-button>
    </p>
    <transaction-list :transactions="recent" :page-stack="pageStack"/>

  </v-ons-page>
</template>

<script>
  import customToolbar from '../partials/CustomToolbar.vue';
  import transactionList from '../partials/TransactionList.vue';
  import txDetails from '../pages/TxDetails.vue';
  import apiMaker from '../api/ApiMaker';

  var explorer = apiMaker.Explorer('neoscanio');

  export default {
     methods: {
       pop(){
         this.pageStack.pop();
       },
       getRecent() {
         explorer.getLastTransactions().then((data) => this.recent = data);
       },
       details() {
         var txid = this.query;
         this.pageStack.push({
           extends: txDetails,
           data() {
             return {
               txid: txid
             };
           }
         });
      }
     },
     beforeMount() {
       this.getRecent();
     },
     computed: {
     },
     props: ['pageStack'],
     components: { customToolbar, transactionList },
     data() {
       return {
         title: "NeoSpy - Neo Blockchain Explorer",
         recent: "Pending",
         query: ''
       };
     }
  }
</script>
