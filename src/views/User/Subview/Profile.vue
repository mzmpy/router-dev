<template>
  <div class="center">{{ info + ":" + msg }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["msg"],
  data() {
    return {
      info: "User-Subview",
    };
  },
});
</script>
