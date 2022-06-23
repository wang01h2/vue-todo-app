<template>
  <Index/>
</template>

<style>
@media (prefers-color-scheme: dark) {
  html {
    background-color: #101827;

  }

  .todo-view {
    background-color: #101827;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: #F9FAFB;
}
</style>
<script setup lang="ts">
import Index from "../src/pages/Index.vue";
</script>
