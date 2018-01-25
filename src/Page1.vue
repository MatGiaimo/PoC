<template>
  <v-ons-page>
    <custom-toolbar> {{title}} </custom-toolbar>
    <p style="text-align: center">
      <v-ons-search-input placeholder="Block Height, Hash, Address or Transaction id"></v-ons-search-input>
      <v-ons-button @click="push"><v-ons-icon icon="fa-arrow-right"></v-ons-icon></v-ons-button>
    </p>
    <p style="text-align: center">
      Last 20 Transactions:    
    </p>
    <transaction-list></transaction-list>

  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';
  import page2 from './Page2';
  import transactionList from './TransactionList';
  import ApiMaker from './API/ApiMaker';

  var explorer = ApiMaker.Explorer('neoscanio');
  var msg = "Pending";

  export default {
     methods: {
       pop(){
         this.pageStack.pop();
       },
       push() {
         this.pageStack.push(page2);
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
     props: ['pageStack'],
     components: { customToolbar, transactionList },
     data() {
       return {
         title: "NeoSpy - Neo Blockchain Explorer",
         recent: "Pending"
       };
     }
  }
</script>
