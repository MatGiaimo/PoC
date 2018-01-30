<template>
  <div>
    <v-ons-list modifier="inset">
      <v-ons-list-header>
        Last 5 Transactions
      </v-ons-list-header>
      <v-ons-list-item>
        <div class="left">Type</div>
        <div class="center">Transaction ID</div>
        <div class="right">Completed On</div>
      </v-ons-list-item>
      <v-ons-list-item :key="n" v-for="n in 5" tappable>
        <v-ons-button :id="'li-' + n" modifer="quiet" @click="details($event)">
          <div class="left">{{transactions[n].type}}</div>
          <div class="center">{{String(transactions[n].txid).slice(0,12)+'...'}}</div>
          <div class="right">{{moment(transactions[n].time*1000).format()}}</div>
        </v-ons-button>
      </v-ons-list-item>
    </v-ons-list>
  </div>
</template>

<script>
  import page2 from './Page2';

  let moment = require('moment');

  export default {
    props: ["transactions", "pageStack","bus"],
    methods: {
      details(event) {
         console.log(event);
         var id = event.target.parentNode.id;
         var n = id.substr(id.indexOf('-')+1);
         this.bus.$emit("block_hash",this.transactions[n].txid);
         console.log(n);
         this.pageStack.push(page2);
      }
    },
    components: {},
    data() {
      return {
        moment: moment
      };
    }
  };
</script>