<script setup lang="ts">
import { router } from "../router/index";
import { ref, onMounted, computed, watch } from "vue";

import Chat_Input from "../components/Chat_Data/Chat_Input.vue";
import ChatCheckbox from "../components/Chat_Data/ChatCheckbox.vue";
import {
  defaultChatRoom,
  allNameDocumentData,
  mynameData,
  saveDocumentChatRoom,
  chatRoomDocumentName,
  chatRoomUpdateDocument,
} from "@/db";
import type { ChatRoom, Name } from "@/Types/TweetTypes";
import {
  collection,
  addDoc,
  doc,
  getDoc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import { app, db, auth } from "../firebase/firebase";

const chatRoom = ref<ChatRoom>(defaultChatRoom());
const allNameData = ref<Name[]>([]);
const chatName = ref<Name[]>([]); //型を配列に
const nameid = ref(""); //フレンドid入力用に変数を作成。
const friendsid = ref<{
  [key: string]: {
    val: boolean;
    name: string;
  };
}>({});
const checkData = ref<string[]>([]);

//フレンドを全て表示する。
onMounted(async () => {
  allNameData.value = await allNameDocumentData();
  allNameData.value.forEach((a) => {
    friendsid.value[a.nameid] = {
      val: false,
      name: a.name,
    };
  });
});

//mynameDataが取得出来ない時がある。その為にcomputedを使用。
const result = computed(() => {
  return allNameData.value.filter((n) =>
    mynameData.value?.friends.includes(n.nameid)
  );
});

//ログイン中アカウントのフレンドを選択し、右側に表示させる動き。
watch(
  friendsid,
  () => {
    console.log(friendsid.value);
    const checkbox = Object.entries(friendsid.value).filter(
      //filterでtrueのデータだけ抽出する。
      (array) => array[1].val === true
    );
    // try {
    console.log(checkbox);
    console.log(checkbox[0]);
    //   console.log(checkbox[0][1]);
    // } catch {}
    checkData.value = checkbox.map((m) => m[1].name);
    chatRoom.value.nameid = checkbox.map((m) => m[0]);
    console.log(checkData.value);
    console.log(chatRoom.value);
  },
  { deep: true }
);

/**
 * 新規トークルームを作成する関数
 */
const createChatRoom = async () => {
  if (!confirm("保存しますか？")) return;
  chatRoom.value.nameid.push(mynameData.value?.nameid as string);
  await saveDocumentChatRoom(chatRoom.value);

  // // ↓saveDocumentChatRoomにroomidを更新する流れを追加したか↓は不要。
  // const getChatRoomid = await chatRoomDocumentName(chatRoom.value.roomname);
  // // ドキュメントidが取れた。
  // chatRoom.value.roomid = getChatRoomid ?? "";
  // console.log(getChatRoomid);
  // chatRoomUpdateDocument(chatRoom.value.roomid, chatRoom.value);
  alert("チャットルームが保存されました。");
  router.push(`/Chat_Main?id=${chatRoom.value.roomid}`);
};

console.log(chatRoom.value.roomname);

const topButton = () => {
  router.push("/");
};
const nameButton = () => {
  router.push("/Chat_Name_Registration");
};
</script>

<template>
  <button @click="topButton">Top</button>
  <button @click="nameButton">nameButton</button>

  <div class="container">
    <div class="header-container">
      <div class="title">チャットルームを作成</div>
    </div>
    <div class="search-room" @click="createChatRoom">チャットルームを保存</div>
  </div>
  <div class="room-main-container">
    <div class="room-container">
      <div class="room-name">チャットルーム名:</div>
      <Chat_Input class="room-name-input" v-model="chatRoom.roomname" />
      <div class="room-friend">友達を検索:</div>
      <Chat_Input placeholder="🔍 友達検索" class="friend-search" />
      <!-- <div class="search-name" @click="searchNameData">検索</div> -->
    </div>
    <div class="fc">
      <div class="fc2">
        <div class="room-friend-container" v-for="t in result">
          <div class="friend-check">フレンドを選択:</div>
          <div class="friend-select-container">
            <ChatCheckbox :text="t.name" v-model="friendsid[t.nameid].val" />
            <!-- <ChatCheckbox :text="t.name" v-model="friendsid[t.name]" /> -->
          </div>
        </div>
      </div>
      <div class="fc3">
        <div class="friend-check2" v-for="c in checkData">
          {{ c }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 1080px;
  margin: 0 auto;
  padding: 40px 0;
  font-weight: bold;
  color: white;
  background: rgb(0, 22, 47);
}

.title {
  margin-left: 32px;
  font-size: 24px;
}

.search-room {
  width: 160px;
  margin: 32px 32px 0 auto;
  cursor: pointer;
}

.friend-search {
  margin-left: 16px;
  margin-right: 32px;
  width: 240px;
}

.room-main-container {
  width: 1080px;
  margin: 0 auto;
  border: 1px solid rgb(187, 186, 186);
}

.room-container {
  width: 100%;
  margin: 16px 0;
  line-height: 90px;
  display: flex;
}

.room-friend-container {
  margin: 32px 0 32px 32px;
  display: flex;
  /* flex-direction: column; */
}

.room-name {
  padding: 0 16px 0 32px;
}

.room-name-input {
  width: 240px;
}

.room-friend {
  margin-left: auto;
  padding-left: 60px;
}

.friend-select {
  margin-left: 40px;
  width: 160px;
}

.friend-check {
  margin-right: 32px;
  /* padding-bottom: 32px; */
}
.friend-check2 {
  margin-right: 32px;
  padding-bottom: 32px;
}

.fc {
  display: flex;
}

.fc2 {
  width: 480px;
}

.fc3 {
  margin-left: 360px;
  margin-top: 32px;
  margin-bottom: 32px;
  width: 280px;
}
</style>
