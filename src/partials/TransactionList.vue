<template>
  <div>
    <div>Last 5 Transactions</div>
    <v-ons-row>
      <v-ons-col>Type</v-ons-col>
      <v-ons-col>Transaction ID</v-ons-col>
      <v-ons-col>Completed On</v-ons-col>
    </v-ons-row>
    <v-ons-row :key="n" v-for="n in 5" @click="details(transactions[n].txid)">
      <v-ons-col><div class="left">{{voca.words(transactions[n].type).join(' ')}}</div></v-ons-col>
      <v-ons-col><div class="center">{{String(transactions[n].txid).slice(0,12) + '...'}}</div></v-ons-col>
      <v-ons-col><div class="right">{{moment(transactions[n].time*1000).format()}}</div></v-ons-col>
    </v-ons-row>    
  </div>
</template>

<script>
  import txDetails from '../pages/TxDetails.vue';

  let moment = require('moment');
  let voca = require('voca');

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
        moment: moment,
        voca: voca
      };
    }
  };
</script>