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

const chatroomCreation = () => {
  router.push("/Chat_Room_Creation");
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
      <div class="edit">編集</div>
      <div class="new-talkroom" @click="chatroomCreation">
        トークルームを作成
      </div>
    </div>
    <div class="search-room">
      <Chat_Input placeholder="🔍 検索" />
    </div>
  </div>
  <div class="room-container">
    <div class="room-icon">アイコン</div>
    <Chat_List class="room-list" />
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
}

/* h1 {
  text-align: center;
  margin: 0;
  padding-bottom: 24px;
  border-bottom: 1px solid black;
} */
</style>
