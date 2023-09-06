<script setup lang="ts">
import { router } from "../router/index";
import { ref, onMounted, computed } from "vue";
import Chat_Input from "../components/Chat_Data/Chat_Input.vue";
import {
  // defaultTweet,
  mynameData,
  allNameDocumentData,
} from "@/db";
import type { Name } from "@/Types/TweetTypes";
import { logoutUser } from "@/firebase/firebaseAuth";

// const friendNameData = ref<string | object>({});
const allNameData = ref<Name[]>([]);

onMounted(async () => {
  allNameData.value = await allNameDocumentData();
  console.log(allNameData.value);
});

//mynameDataが取得出来ない時がある。その為にcomputedを使用。
const result = computed(() => {
  return (
    allNameData.value
      //自分のコレクションの中にある、フレンドnameを表示したい。
      .filter((n) => mynameData.value?.friends.includes(n.nameid))
  );
});

const topButton = () => {
  router.push("/");
};
const nameButton = () => {
  router.push("/Chat_Name_Registration");
};

const roomButton = () => {
  router.push("/Chat_Room");
};
const friendSave = () => {
  router.push("/ChatFriendSave");
};
</script>

<template>
  <div class="container">
    <div class="route-area">
      <!-- <div class="route-button" @click="topButton">Top</div> -->
      <div class="route-button" @click="logoutUser">ログアウト</div>
      <div class="route-button" @click="nameButton">プロフィールへ</div>
    </div>
    <div class="friend-container">
      <div class="friend-title">フレンド一覧</div>
      <div class="friend-title">{{ mynameData?.name }}</div>
      <div class="friend-addition" @click="friendSave">友達追加へ</div>
    </div>

    <div class="header-container">
      <div class="edit">編集</div>
      <div class="edit">削除</div>
      <div class="new-talkroom" @click="roomButton">チャットルーム一覧へ</div>
    </div>
    <div class="search-room">
      <Chat_Input placeholder="🔍 検索" />
    </div>
  </div>
  <div class="room-container" v-for="t in result">
    <div class="room-icon">
      <img :src="t.image" alt="" />
    </div>
    <!-- <Chat_List class="room-list" /> -->
    <input type="checkbox" class="checkbox" v-if="false" />
    <div class="room-list">{{ t.name }}</div>
  </div>
  <!-- <h1>トークルーム</h1> -->
</template>

<style scoped>
.route-area {
  margin-left: 720px;
  display: flex;
}

.route-button {
  width: 200px;
  margin: 0 0 32px 32px;
  /* margin-left: auto; */
  /* padding: 8px 0; */
  font-size: 16px;
  font-weight: bold;
  /* border-radius: 20px; */
  background: rgb(0, 22, 47);
  color: white;
  cursor: pointer;
}

a {
  margin: 0;
}

img {
  width: 176px;
  height: 160px;
  object-fit: cover;
}

.container {
  width: 1080px;
  margin: 0 auto;
  padding: 20px 0 40px 0;
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
