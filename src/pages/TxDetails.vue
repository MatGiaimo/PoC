<template>
  <v-ons-page>
    <custom-toolbar :back-label="back">{{title}}</custom-toolbar>
    <v-ons-card>
      <v-ons-row>
        <v-ons-col>Type:</v-ons-col>
        <v-ons-col>{{tx.type}}</v-ons-col>
      </v-ons-row>
            <v-ons-row>
        <v-ons-col>Transaction ID:</v-ons-col>
        <v-ons-col>{{tx.txid}}</v-ons-col>
      </v-ons-row>
            <v-ons-row>
        <v-ons-col>Time:</v-ons-col>
        <v-ons-col>{{moment(tx.time*1000).format()}}</v-ons-col>
      </v-ons-row>
    </v-ons-card>
  </v-ons-page>
</template>

<script>
  import customToolbar from "../partials/CustomToolbar.vue";
  import app from "../App.vue";
  import apiMaker from '../api/ApiMaker';

  let moment = require('moment');

  var explorer = apiMaker.Explorer('neoscanio');

  export default {
    methods: {
      pop() {
        this.pageStack.pop();
      }
    },
    mounted() {
      explorer.getTransaction(this.txid).then((data) => {
        this.tx = data
        console.dir(this.tx);
      });
    },
    props: ["pageStack", "hash"],
    components: {
      customToolbar
    },
    data() {
      return {
        title: "Transaction Information",
        tx: {},
        txid: "",
        back: "Back",
        moment: moment
      };
    }
  };
</script>