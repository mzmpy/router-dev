<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/user/David">User:David</router-link> |
    <v-button></v-button>
  </div>
  <div class="center">
    <router-view class="user" name="leftView"></router-view>
    <router-view class="user" />
    <router-view class="user" name="rightView"></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import vButton from "@/components/VButton/VButton.vue";

export default defineComponent({
  components: {
    vButton,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.center {
  margin: 0 auto;
  vertical-align: center;
  margin: 20px;
}

.user {
  display: inline-block;
  padding: 10px;
  background-color: bisque;
  margin: 3px;
}
</style>
