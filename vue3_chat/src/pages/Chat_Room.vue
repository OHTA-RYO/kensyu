<script setup lang="ts">
import { router } from "../router/index";
import { ref, watch, onMounted, computed } from "vue";
import Chat_List from "../components/Chat_Data/Chat_List.vue";
import Chat_Input from "../components/Chat_Data/Chat_Input.vue";
// import {  } from "@/db";
import type { Tweet, ChatRoom } from "@/Types/TweetTypes";
import { allChatRoomDocumentData, mynameData } from "@/db";
import { logoutUser } from "@/firebase/firebaseAuth";

const allChatRoomData = ref<ChatRoom[]>([]);

//ChatRoomの全てのコクションデータを取得
onMounted(async () => {
  allChatRoomData.value = await allChatRoomDocumentData();
  console.log(allChatRoomData.value);
});

//fileterが動かない時があるからcomputedで↑のデータからログイン中のアカウントの
//トークルームを取得。
const result = computed(() => {
  return allChatRoomData.value.filter((o) =>
    o.nameid.includes(mynameData.value?.nameid!)
  );
});

//   //✅URLにクエリ情報を付与する↓
const chatRoomButton = (roomid: string) => {
  router.push(`/Chat_Main?id=${roomid}`);
};

const friendSave = () => {
  router.push("/ChatFriendSave");
};

const chatroomCreation = () => {
  router.push("/Chat_Room_Creation");
};
</script>

<template>
  <div class="container">
    <div class="logout" @click="logoutUser">ログアウト</div>
    <div class="header-container">
      <div class="edit">編集</div>
      <div class="friend-list" @click="friendSave">フレンド追加</div>
    </div>
    <div class="new-talkroom" @click="chatroomCreation">
      チャットルームを作成
    </div>
    <div class="search-room">
      <Chat_Input placeholder="🔍 検索" />
    </div>
  </div>
  <div class="room-container" v-for="t in result">
    <div class="room-icon">アイコン</div>
    <div class="room-list" @click="chatRoomButton(t.roomid)">
      {{ t.roomname }}
    </div>
    <!-- <Chat_List class="room-list" /> -->
  </div>
  <!-- <h1>トークルーム</h1> -->
</template>

<style scoped>
.container {
  width: 1080px;
  margin: 0 auto;
  padding: 20px 0 40px 0;
  font-weight: bold;
  /* text-align: center; */
  color: white;
  background: rgb(0, 22, 47);
}

.edit {
  margin-left: 32px;
  cursor: pointer;
}
.logout {
  margin-left: 972px;
  cursor: pointer;
}
.friend-list {
  margin-left: auto;
  margin-right: 32px;
  padding: 16px 0;
  cursor: pointer;
}

.header-container {
  display: flex;
}

.new-talkroom {
  margin-left: 890px;
  cursor: pointer;
}

.search-room {
  width: 1016px;
  margin: 32px auto 0 auto;
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
  background: pink;
}

.room-list {
  width: 100%;
  background: white;
  border: none;
  margin-left: 16px;
  cursor: pointer;
}

/* h1 {
  text-align: center;
  margin: 0;
  padding-bottom: 24px;
  border-bottom: 1px solid black;
} */
</style>
