<template>
  <button @click="clickMe">Step</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router/index";

export default defineComponent({
  props: {
    clcikTo: {
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {
    clickMe() {
      let nid: number = Math.random() * 1000000000000000;

      const route = {
        path: this.clcikTo
          ? this.clcikTo
          : "/step/" + Math.round(nid).toString(),
      };
      console.log(route);
      router.push(route);
    },
  },
});
</script>
