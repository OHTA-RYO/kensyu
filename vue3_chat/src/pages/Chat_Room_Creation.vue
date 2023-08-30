<script setup lang="ts">
import { router } from "../router/index";
import { ref, watch } from "vue";
import Chat_List from "../components/Chat_Data/Chat_List.vue";
import Chat_Input from "../components/Chat_Data/Chat_Input.vue";
import ChatCheckbox from "../components/Chat_Data/ChatCheckbox.vue";
import { defaultTweet, defaultChatRoom, nameDocument } from "@/db";
import type { Tweet, ChatRoom, TweetCollection } from "@/Types/TweetTypes";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { app, db, auth } from "../firebase/firebase";

const chatRoom = ref<ChatRoom>(defaultChatRoom());
const name = ref("");

//トークルームには全フレンドが全て表示される。
//検索をかけると、絞り込みが出来る。
//チェックボックスにチェックを入れると右側に選択したフレンドが表示。

//友達検索inputに名前を入力して検索をかけ、ヒットすると
//友達を追加に名前が表示される。
//保存ボタンをクリックすると、入力したデータがfirebaseに保存され、
//チャットルームが作成される。

//firebaseから取得するデータ
//自身のnameとnameid
//招待するuserのnameとnameid

//ChatRoomに↑の情報を取得する関数

// const getData = () => {
//   chatRoom.value.nameid
// }

//友達検索画面に入力した値を取得する。
//その値をnameDocumentに渡す。
// nameDocument();

// const testfun = () => {
//   chatRoom.value.name.push(chatRoom.value.name[0]);
// };

const searchNameData = async () => {
  //↓わからない。
  // chatRoom.value.nameid = await nameDocument(name.value);
  // await nameDocument(chatRoom.value.name[0]);
  // chatRoom.value.name.push(chatRoom.value.name[0]);
  // chatRoom.value.name.push(name.value);
  // a = chatRoom.value.name[0];
  // chatRoom.value.name.push(a);
  // console.log(a);
  console.log(nameDocument(name.value));
  // chatRoom.value.nameid = nameDocument
};

// const searchNameData = (a: string) => {
//   a = chatRoom.value.name[0];
//   chatRoom.value.name.push(a);
//   console.log(a);
//   console.log(nameDocument(a));
//   // chatRoom.value.nameid = nameDocument
// };

// watch(chatRoom.value.name[], () => {
//   console.log(chatRoom.value.name);
// });

/**
 * 新規トークルームを作成する関数
 */
const saveDocumentChatRoom = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), chatRoom.value);
    // tweet.value.id = docRef.id;
    // console.log(tweet.value.id);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

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
    <div class="search-room">チャットルームを保存</div>
  </div>
  <div class="room-main-container">
    <div class="room-container">
      <div class="room-name">チャットルーム名:</div>
      <Chat_Input class="room-name-input" />
      <div class="room-friend">友達を検索:</div>
      <Chat_Input
        placeholder="🔍 友達検索"
        class="friend-search"
        v-model="name"
      />
      <!-- <div class="search-name" @click="searchNameData">検索</div> -->
    </div>
    <div class="room-friend-container">
      <div class="friend-check">フレンドを選択:</div>

      <div class="friend-select-container" v-for="t in name">
        <ChatCheckbox text="{{ t }}" />
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
}
</style>
