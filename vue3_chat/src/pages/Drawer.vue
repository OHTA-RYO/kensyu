<script setup lang="ts">
import { router } from "../router/index";
import { logoutUser } from "@/firebase/firebaseAuth";
import { ref, watch, onMounted, computed } from "vue";

const props = defineProps({
  modelValue: { type: Boolean },
});

const emit = defineEmits<{
  (e: "update:modelValue", payload: boolean): void;
}>();

const value = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});

const profileMenu = () => {
  router.push("/Chat_Name_Registration");
};
const friendListMenu = () => {
  router.push("/ChatFriendList");
};
const friendSaveMenu = () => {
  router.push("/ChatFriendSave");
};
const chatroomMenu = () => {
  router.push("/Chat_Room");
};
const newChatroomMenu = () => {
  router.push("/Chat_Room_Creation");
};
</script>

<template>
  <div v-if="value">
    <div class="close-button-container" @click="value = !value">
      <q-btn dense flat icon="close" class="close-button" />
    </div>
    <div class="menu-container">
      <div class="menu" @click="profileMenu">プロフィール</div>
      <div class="menu" @click="friendListMenu">フレンド一覧</div>
      <div class="menu" @click="friendSaveMenu">フレンド追加</div>
      <div class="menu" @click="chatroomMenu">チャットルーム一覧</div>
      <div class="menu" @click="newChatroomMenu">新規チャットルーム作成</div>
      <div class="menu" @click="logoutUser">ログアウト</div>
    </div>
  </div>
</template>

<style scoped>
.close-button-container {
  /* background: rgb(187, 186, 186); */
  width: 40px;
  margin: 4px 0 0 auto;
}
/* .close-button {
  width: 40px;
  margin: 4px 0 0 auto;
} */

.menu-container {
  min-height: 100vh;
  background: rgb(0, 22, 47);
}
.menu {
  background: rgb(0, 22, 47);
  color: rgb(187, 186, 186);
  font-size: 20px;
  border-bottom: 1px solid rgb(187, 186, 186);
  padding: 4px 0 4px 16px;
  cursor: pointer;
  font-weight: bold;
}
</style>
