<script setup lang="ts">
import { router } from "../router/index";
import { onMounted, ref, watch } from "vue";
import Chat_List from "../components/Chat_Data/Chat_List.vue";
import Chat_Input from "../components/Chat_Data/Chat_Input.vue";
import { defaultTweetCollection, saveDocumentTweet } from "@/db";
import type { Tweet } from "@/Types/TweetTypes";
import { collection, addDoc, onSnapshot, doc } from "firebase/firestore";
import { app, db, auth } from "../firebase/firebase";

const tweet = ref<Tweet>(defaultTweetCollection());
const saveTweet = ref<Tweet[]>([]);
const topButton = () => {
  router.push("/");
};
const nameButton = () => {
  router.push("/Chat_Name_Registration");
};

const profileId = router.currentRoute.value.query.roomid;

//部屋一覧から飛ぶ時にドキュメントidをクエリとして渡す。
console.log(profileId);

onMounted(() => {
  //sFドキュメントidをクエリで取る。
  const unsub = onSnapshot(doc(db, "Tweet", "SF"), (doc) => {
    console.log("Current data: ", doc.data());
  });
});
const sendmessage = () => {
  saveDocumentTweet(tweet.value);
  saveTweet.value.push(tweet.value);
  tweet.value = defaultTweetCollection();
  console.log(saveTweet.value);
};

watch(tweet.value, () => {
  // tweeting;
  // console.log(tweet.value);
  // console.log(saveTweet.value);
});

/**
 * firebaseにTweetを保存する関数
 */
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
    <h1>トークルーム</h1>

    <div v-for="t in saveTweet" class="talk-area">
      <div class="tweet-area">
        {{ t.message.sendAt }}
      </div>
      <Chat_List :text="t" />
    </div>
  </div>
  <div class="input-area">
    <p class="image-up">＋</p>
    <Chat_Input v-model="tweet.message.text" class="inputarea" />
    <p class="sending" @click="sendmessage">送信</p>
  </div>
</template>

<style scoped>
/* body {
  box-sizing: border-box;
} */

.inputarea {
  width: 320px;
  height: 24px;
  margin: 8px;
}

.container {
  width: 1080px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  text-align: center;
  /* margin-bottom: 24px; */
  padding-bottom: 24px;
  border-bottom: 1px solid black;
}
.talk-area {
  width: 100%;
  height: auto;
  display: flex;
  margin: 0 0 0 auto;
  word-wrap: 64px;
}

.tweet-area {
  margin: 0 0 0 auto;
  display: flex;
  align-items: center;
  padding-right: 16px;
  /* word-wrap: 64px; */
}

.input-area {
  display: flex;
  justify-content: center;
  margin-top: 480px;
  /* position: fixed;
  top: 456px;
  left: 384px; */
}

.image-up {
  width: 16px;
  height: 16px;
  text-align: center;
  padding: 9px;
  margin-top: 4px;
  margin-right: 16px;
  font-weight: bold;
  cursor: pointer;
}

.sending {
  width: 64px;
  text-align: center;
  margin-top: 8px;
  margin-left: 16px;
  padding: 8px 16px;
  background: rgb(98, 212, 250);
  color: white;
  border-radius: 16px;
  cursor: pointer;
  height: auto;
}
</style>
