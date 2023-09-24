<script setup lang="ts">
import { router } from "../router/index";
import { ref, watch, onMounted, computed } from "vue";
import Chat_List from "../components/Chat_Data/Chat_List.vue";
import Chat_Input from "../components/Chat_Data/Chat_Input.vue";
// import {  } from "@/db";
import type { Tweet, ChatRoom } from "@/Types/TweetTypes";
import { allChatRoomDocumentData, mynameData } from "@/db";
import { logoutUser } from "@/firebase/firebaseAuth";
import Drawer from "./Drawer.vue";

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

const isDrawer = ref(false);
</script>

<template>
  <Drawer v-model="isDrawer" />
  <div class="main-display" v-if="!isDrawer">
    <div class="container">
      <div class="q-gutter-sm menu-style">
        <q-icon name="menu" @click="isDrawer = !isDrawer" />
      </div>
      <!-- <div class="logout" @click="logoutUser">ログアウト</div> -->
      <div class="header-container">
        <div class="edit">編集</div>
        <!-- <div class="friend-list" @click="friendSave">フレンド追加</div> -->
      </div>
      <!-- <div class="new-talkroom" @click="chatroomCreation">
        チャットルームを作成
      </div> -->
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
  </div>
</template>

<style scoped>
.menu-style {
  font-size: 32px;
  margin: 0 0px 0 auto;
  width: 80px;
  cursor: pointer;
}
.container {
  padding: 20px 0 40px 0;
  font-weight: bold;
  color: white;
  background: rgb(0, 22, 47);
}

.edit {
  margin-left: 24px;
  margin-top: -24px;
  cursor: pointer;
  font-size: 24px;
}
.logout {
  width: 80px;
  margin: 0 32px 0 auto;
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
  width: 160px;
  margin: 0 32px 0 auto;
  cursor: pointer;
}

.search-room {
  width: 80%;
  margin: 32px auto 0 auto;
}

.room-container {
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
  /* width: 100%; */
  background: white;
  border: none;
  margin-left: 16px;
  cursor: pointer;
}

@media screen and (max-width: 820px) {
  .room-icon {
    width: 120px;
    height: 120px;
  }
}

@media screen and (max-width: 430px) {
  .container {
    padding: 10px 0 20px 0;
    font-weight: bold;
    color: white;
    background: rgb(0, 22, 47);
  }
  .edit {
    font-size: 20px;
  }

  .logout {
    margin: 0 7px 0 auto;
    font-size: 14px;
  }

  .friend-list {
    margin-left: auto;
    margin-right: 16px;
    padding: 8px 0;
    font-size: 14px;
  }

  .new-talkroom {
    margin: 0 -4px -16px auto;
    font-size: 14px;
  }

  .room-icon {
    width: 100px;
    height: 100px;
  }
}
</style>
