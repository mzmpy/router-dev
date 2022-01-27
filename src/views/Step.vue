<template>
  <div class="center">
    {{ info + ":" + nid }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["nid"],
  data() {
    return {
      info: "Step",
    };
  },
});
</script>
