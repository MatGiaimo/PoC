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
import customToolbar from "../partials/CustomToolbar.vue";
import app from "../App.vue";
import apiMaker from '../api/ApiMaker';

var explorer = apiMaker.Explorer('neoscanio');

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
