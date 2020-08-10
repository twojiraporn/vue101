<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <h1 :title="msg">{{ msg }}</h1>

    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import Counter from "./Counter.vue";
export default {
  name: "app",
  data() {
    return {
      msg: "Vue101 on CS443",
      url: "https://google.com",
      isShow: false
    };
  },
  components: {
    Counter
  }
};
</script>

<style></style>
