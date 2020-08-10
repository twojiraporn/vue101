<template>
  <div>
    <h1>HOME</h1>

    <counter initial="10"></counter>

    <counter initial="20"></counter>

    <counter></counter>
    <router-link to="/about">Contact Me</router-link>
  </div>
</template>

<script>
import Counter from "./Counter";
export default {
  data() {
    return {
      title: "Home Page"
    };
  },
  components: {
    Counter
  }
};
</script>

<style></style>
