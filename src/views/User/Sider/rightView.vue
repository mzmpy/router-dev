<template>
  <div>{{ info }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      info: "User-Subview-Rightview",
    };
  },
});
</script>
