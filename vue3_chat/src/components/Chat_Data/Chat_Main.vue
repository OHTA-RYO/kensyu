<script setup lang="ts">
import Chat_List from "./Chat_List.vue";
import Chat_Button from "./Chat_Button.vue";
import Chat_Input from "./Chat_Input.vue";
// import { router } from "../../router/index";
</script>

<template>
  <h1>トークルーム</h1>
  <div class="talk-area">
    <Chat_List />
    <Chat_List />
    <Chat_List />
    <Chat_List />
    <Chat_List />
    <Chat_List />
  </div>
  <div class="input-area">
    <Chat_Input />
    <p>送信</p>
  </div>
</template>

<style scoped>
.talk-area {
  height: auto;
}
.input-area {
  display: flex;
  margin-top: 24px;
}

.input-area p {
  width: 64px;
  text-align: center;
  margin-left: 16px;
  padding: 8px 16px;
  background: rgb(98, 212, 250);
  color: white;
  border-radius: 16px;
}
</style>
