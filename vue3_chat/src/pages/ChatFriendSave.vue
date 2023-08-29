<script setup lang="ts">
import { router } from "../router/index";
import { ref } from "vue";
import Chat_Input from "../components/Chat_Data/Chat_Input.vue";
import { nameidDocument, defaultName } from "@/db";
import type { Name } from "@/Types/TweetTypes";
import { collection, addDoc } from "firebase/firestore";
import { app, db, auth } from "../firebase/firebase";

const chatName = ref<Name>(defaultName());
const isCheckbox = ref(false);

const nameidSearch = async () => {
  await nameidDocument(chatName.value.nameid);
  // chatName.value.name = nameidDocument(chatName.value.nameid)
};

const topButton = () => {
  router.push("/");
};
const nameButton = () => {
  router.push("/Chat_Name_Registration");
};

const roomButton = () => {
  router.push("/Chat_Room");
};
const friendList = () => {
  router.push("/ChatFriendList");
};
</script>

<template>
  <button @click="topButton">Top</button>
  <button @click="nameButton">nameButton</button>
  <div class="container">
    <div class="friend-container">
      <div class="friend-title">フレンド追加</div>
      <!-- <div class="friend-addition" @click="friendSave">友達追加へ</div> -->
    </div>

    <div class="header-container">
      <div class="edit" @click="nameidSearch()">検索</div>
      <div class="edit">追加</div>
      <div class="edit">編集</div>
      <div class="edit">削除</div>
      <div class="new-talkroom" @click="friendList">フレンド一覧へ</div>
    </div>
    <div class="search-room">
      <Chat_Input placeholder="🔍 フレンドID検索" v-model="chatName.nameid" />
    </div>
  </div>
  <div class="room-container" v-for="t in chatName.name">
    <div class="room-icon"></div>
    <!-- <Chat_List class="room-list" /> -->
    <input type="checkbox" class="checkbox" v-if="isCheckbox" />
    <div class="room-list">{{ t }}</div>
  </div>
  <!-- <h1>トークルーム</h1> -->
</template>

<style scoped>
.container {
  width: 1080px;
  margin: 0 auto;
  padding: 40px 0;
  font-weight: bold;
  /* text-align: center; */
  color: white;
  background: rgb(0, 22, 47);
}

.friend-container {
  display: flex;
}

.friend-title {
  margin: -16px 0 32px 32px;
  font-size: 28px;
}

.friend-addition {
  margin: 0 32px 0 auto;
  cursor: pointer;
}

.edit {
  margin-left: 32px;
  cursor: pointer;
}

.header-container {
  display: flex;
}

.new-talkroom {
  margin-left: auto;
  margin-right: 32px;
  cursor: pointer;
  /* font-size: 20px; */
}

.search-room {
  width: 508px;
  margin: 32px auto 0 32px;
}

.room-container {
  width: 1078px;
  margin: 0 auto;
  border: 1px solid rgb(187, 186, 186);
  /* height: 120px; */
  line-height: 90px;
  display: flex;
  align-items: center;
}

.room-icon {
  width: 160px;
  height: 160px;

  padding-right: 16px;
  /* background: pink; */
}

.room-list {
  width: 100%;
  background: white;
  border: none;
  margin-left: 16px;
  font-size: 24px;
}

.checkbox {
  width: 24px;
  height: 24px;
}
</style>
