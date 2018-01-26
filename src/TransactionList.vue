<template>
<div>
  <v-ons-list modifier="inset">
      <v-ons-list-header>
        Last 5 Transactions
      </v-ons-list-header>
      <v-ons-list-item>     
      <div class="left">Type</div>
      <div class="center">Transaction ID</div>
      <div class="right">Completed On</div></v-ons-list-item>
    <v-ons-list-item :key="n" v-for="n in 5">
      <div class="left">{{transactions[n].type}}</div>
      <div class="center">{{transactions[n].txid}}</div>
      <div class="right">{{transactions[n].time}}</div>
    </v-ons-list-item>
  </v-ons-list>
</div>
</template>

<script>

  export default {
      props: ['transactions'],
      methods: {
      },
      components: {},
      data() {
        return {
        }
      }
  }
</script>