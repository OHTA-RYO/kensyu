<script setup lang="ts">
import { router } from "../../router/index";
import { ref, watch } from "vue";
import Chat_List from "./Chat_List.vue";
import Chat_Input from "./Chat_Input.vue";
import { defaultTweet } from "@/db";
import type { Tweet } from "../../Chat_Types/types";

const tweet = ref<Tweet>(defaultTweet());
const topButton = () => {
  router.push("/");
};

const saveTweet = ref<Tweet>(defaultTweet());

//inputに入力した値を取得する。
//送信ボタンを押すとlistへ反映する。

// const tweeting = (e: any) => {
//   tweet.value.tweets = e.target.value;
//   console.log(e);
//   console.log(tweet.value.tweets);
// };

// const tweeting = () => {
//   // e.target.value.push(tweet.value.tweets);
// };

watch(tweet.value, () => {
  // tweeting;
  saveTweet.value = tweet.value;
  console.log(tweet.value);
});

console.log(saveTweet.value);

// console.log(tweet.value.tweets);

// // tweeting(tweet);
// console.log(tweet.value);

// const tweeting = (e:string) => {
//   tweet.value = e.
// }
</script>

<template>
  <p></p>
  <input type="text" />
  <button>送信</button>
  <div class="container">
    <h1>トークルーム</h1>
    <button @click="topButton">Top</button>
    <div class="talk-area">
      <Chat_List v-model="tweet" />
      <Chat_List />
      <Chat_List />
      <Chat_List />
      <Chat_List />
      <Chat_List />
    </div>
    <div class="input-area">
      <p class="image-up">＋</p>
      <Chat_Input v-model="tweet" :isMain="true" />
      <p class="sending">送信</p>
    </div>
  </div>
</template>

<style scoped>
/* body {
  box-sizing: border-box;
} */
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
  height: auto;

  /* border: 1px solid black; */
}
.input-area {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

.image-up {
  width: 16px;
  height: 16px;
  text-align: center;
  padding: 9px;
  margin-right: 16px;
  font-weight: bold;
  /* border: 1px solid black;
  border-radius: 50%; */
}

.sending {
  width: 64px;
  text-align: center;
  margin-left: 16px;
  padding: 8px 16px;
  background: rgb(98, 212, 250);
  color: white;
  border-radius: 16px;
  cursor: pointer;
}
</style>
