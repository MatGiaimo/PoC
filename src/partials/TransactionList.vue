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
      <v-ons-list-item :key="n" v-for="n in 5" tappable @click="details(transactions[n].txid)">
          <div class="left">{{transactions[n].type}}</div>
          <div class="center">{{String(transactions[n].txid).slice(0,12) + '...'}}</div>
          <div class="right">{{moment(transactions[n].time*1000).format()}}</div>
      </v-ons-list-item>
    </v-ons-list>
  </div>
</template>

<script>
  import txDetails from '../pages/TxDetails.vue';

  let moment = require('moment');

  export default {
    props: ["transactions", "pageStack"],
    methods: {
      getTxType(tx) {
        return tx.type;
      },
      getTxId(tx) {
        return String(tx.txid).slice(0,12) + '...';
      },
      getTimeStamp(tx) {
        return moment(tx.time*1000).format();
      },
      getTxVm(tx) {
        return {
          type: getTxType(tx),
          id: getTxId(tx),
          time: getTimeStamp(tx)
        }
      },
      details(txid) {
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
    components: {},
    data() {
      return {
        moment: moment
      };
    }
  };
</script>