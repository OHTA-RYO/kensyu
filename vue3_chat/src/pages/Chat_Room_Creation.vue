<script setup lang="ts">
import { router } from "../router/index";
import { ref, watch } from "vue";
import Chat_List from "../components/Chat_Data/Chat_List.vue";
import Chat_Input from "../components/Chat_Data/Chat_Input.vue";
import { defaultTweet } from "@/db";
import type { Tweet } from "@/Types/TweetTypes";
import { collection, addDoc } from "firebase/firestore";
import { app, db, auth } from "../firebase/firebase";

// const tweet = ref<Tweet>(defaultTweet());
// const saveTweet = ref<Tweet[]>([]);
const topButton = () => {
  router.push("/");
};
const nameButton = () => {
  router.push("/Chat_Name_Registration");
};

// const tweeting = () => {
//   saveTweet.value.push(tweet.value);
//   tweet.value = defaultTweet();
//   console.log(saveTweet.value);
// };

// watch(tweet.value, () => {
//   // tweeting;
//   // console.log(tweet.value);
//   // console.log(saveTweet.value);
// });

// /**
//  * firebaseにTweetを保存する関数
//  */
// const saveDocumentTweet = async () => {
//   try {
//     const docRef = await addDoc(collection(db, "users"), tweet.value);
//     // tweet.value.id = docRef.id;
//     // console.log(tweet.value.id);
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// };

//saveTweetの送信時間を取得したい。
</script>

<template>
  <button @click="topButton">Top</button>
  <button @click="nameButton">nameButton</button>
  <div class="container">
    <div class="header-container">
      <div class="title">トークルームを作成</div>
      <!-- <div class="new-talkroom">トークルームを作成</div> -->
    </div>
    <div class="search-room">
      <Chat_Input placeholder="🔍 友達検索" class="friend-search" />
      <div class="pulus">追加</div>
    </div>
  </div>
  <div class="room-container">
    <div class="room-name">チャットルーム名:</div>
    <Chat_Input class="room-name-input" />
  </div>
  <div class="room-container">
    <div class="room-friend">友達を招待:</div>
    <Chat_Input class="room-friend-input" />
  </div>
  <!-- <div class="room-container">
    <div>チャットルーム名</div>
    <input type="text" />

  </div> -->
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

.title {
  text-align: center;
  font-size: 24px;
}

.search-room {
  width: 1080px;
  /* margin: 32px auto 0 auto; */
  margin-top: 32px;
  display: flex;
}

.friend-search {
  margin-left: 32px;
  width: 388px;
}

.pulus {
  margin-left: 320px;
  font-size: 24px;
  font-weight: bold;
}

.room-container {
  width: 1078px;
  margin: 0 auto;
  border: 1px solid rgb(187, 186, 186);
  border-bottom: none;
  border-top: none;
  line-height: 90px;
  display: flex;
  align-items: center;
}

.room-name {
  padding: 0 16px 0 32px;
}

.room-name-input {
  width: 240px;
}

.room-friend {
  padding-left: 32px;
}

.room-friend-input {
  width: 240px;
  margin-left: 64px;
}

/* .room-list {
  width: 100%;
  background: white;
  border: none;
  margin-left: 16px;
} */
</style>
