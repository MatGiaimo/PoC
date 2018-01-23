<template>
  <v-ons-page>
    <custom-toolbar :back-label="Back">{{title}}</custom-toolbar>
    <p style="text-align: center">Transaction Details</p>
  </v-ons-page>
</template>

<script>
import customToolbar from "./CustomToolbar";
import app from "./App";

export default {
  methods: {
    pop() {
      this.pageStack.pop();
    }
  },
  props: ["pageStack"],
  components: { customToolbar },
  data() {
    return {
      title: "Results"
    };
  }
};
</script>
