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
      <v-ons-list-item :key="n" v-for="n in 5">
        <div class="left">{{transactions[n].type}}</div>
        <div class="center">{{String(transactions[n].txid).slice(0,12)+'...'}}</div>
        <div class="right">{{moment(transactions[n].time*1000).format()}}</div>
      </v-ons-list-item>
    </v-ons-list>
  </div>
</template>

<script>
  let moment = require('moment');

  export default {
    props: ["transactions"],
    methods: {

    },
    components: {},
    data() {
      return {
        moment: moment
      };
    }
  };
</script>