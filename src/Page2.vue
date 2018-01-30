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
  beforeMount() {
    this.bus.$on('block_hash', block_hash => {
      explorer.getTransaction(block_hash).then((data) => this.tx);
      console.log(this.tx);
    });
  },
  props: ["pageStack","hash","bus"],
  components: { customToolbar },
  data() {
    return {
      title: "Transaction Information",
      tx: {},
      back: "Back"
    };
  }
};
</script>
