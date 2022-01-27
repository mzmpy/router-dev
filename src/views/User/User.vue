<template>
  <div>
    <router-link to="/user/David/profile">profile</router-link> |
    <router-link to="/user/David/post">post</router-link>
    <div>{{ info + ":" + id }}</div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["id"],
  data() {
    return {
      info: "User",
    };
  },
});
</script>
