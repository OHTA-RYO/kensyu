<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
// import Chat_Main from "./components/Chat_Data/Chat_Main.vue";
</script>

<template>
  <!-- <Chat_Main /> -->
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.main {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
</style>
