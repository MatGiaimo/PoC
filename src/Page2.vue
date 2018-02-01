<template>
  <v-ons-page>
    <custom-toolbar :back-label="back">{{title}}</custom-toolbar>
    <v-ons-card>
      <div>
        Type: {{tx.type}}
      </div>
    </v-ons-card>
  </v-ons-page>
</template>

<script>
import customToolbar from "./CustomToolbar";
import app from "./App";
import ApiMaker from './API/ApiMaker';

var explorer = ApiMaker.Explorer('neoscanio');

export default {
  methods: {
    pop() {
      this.pageStack.pop();
    }
  },
  mounted() {
      explorer.getTransaction(this.txid).then((data) => this.tx = data);
  },
  props: ["pageStack","hash"],
  components: { customToolbar },
  data() {
    return {
      title: "Transaction Information",
      tx: {},
      txid: "",
      back: "Back"
    };
  }
};
</script>
