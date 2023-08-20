<script setup lang="ts">
import { router } from "../../router/index";

// import Chat_List from "../Chat_Data/Chat_List.vue";

const mainButton = () => {
  router.push("/Chat_Main");
};
</script>

<template>
  <h1>テスト2</h1>
  <button @click="mainButton">Main</button>
</template>

<style scoped></style>
