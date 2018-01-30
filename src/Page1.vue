<template>
  <v-ons-page>
    <custom-toolbar> {{title}} </custom-toolbar>
    <p style="text-align: center">
      <v-ons-search-input placeholder="Block Height, Hash, Address or Transaction id"></v-ons-search-input>
      <v-ons-button><v-ons-icon icon="fa-arrow-right"></v-ons-icon></v-ons-button>
    </p>
    <transaction-list :transactions="recent" :page-stack="pageStack" :bus="bus"/>

  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';
  import transactionList from './TransactionList';
  import ApiMaker from './API/ApiMaker';

  var explorer = ApiMaker.Explorer('neoscanio');

  export default {
     methods: {
       pop(){
         this.pageStack.pop();
       },
       getRecent() {
         explorer.getLastTransactions().then((data) => this.recent = data);
       }
     },
     beforeMount() {
       this.getRecent();
     },
     computed: {
     },
     props: ['pageStack','bus'],
     components: { customToolbar, transactionList },
     data() {
       return {
         title: "NeoSpy - Neo Blockchain Explorer",
         recent: "Pending"
       };
     }
  }
</script>
