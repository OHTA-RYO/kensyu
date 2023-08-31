<script setup lang="ts">
import { router } from "../router/index";
import { ref, watch, onMounted } from "vue";
import Chat_List from "../components/Chat_Data/Chat_List.vue";
import Chat_Input from "../components/Chat_Data/Chat_Input.vue";
import {
  defaultTweet,
  mynameData,
  allNameDocumentData,
  nameidDocument,
} from "@/db";
import type { Tweet, Name } from "@/Types/TweetTypes";
import { collection, addDoc } from "firebase/firestore";
import { app, db, auth } from "../firebase/firebase";
import { logoutUser } from "@/firebase/firebaseAuth";

// const friendNameData = ref<string | object>({});
const friendNameData = ref<string[] | undefined | string>([]);

// onMounted(async () => {
//   const allNameData = await allNameDocumentData();
//   console.log(allNameData);
//   console.log(Object.entries(allNameData));
//   allNameData.filter((array) => array.nameid === mynameData.value?.nameid);
//   console.log(
//     allNameData.filter((array) => array.nameid === mynameData.value?.nameid)
//   );
//   friendNameData.value = allNameData
//     .filter((array) => array.nameid !== mynameData.value?.nameid)
//     .map((d) => {
//       console.log(d.name);
//       // console
//       return d.name;
//     });
// });

//縦に文字が表示されてテスト2しか取れない。
onMounted(async () => {
  const allNameData = await allNameDocumentData();
  Object.entries(allNameData)
    //自分のコレクションの中にある、フレンドnameを表示したい。
    .filter((array) => array[1].nameid === mynameData.value?.nameid)
    .map((d) => {
      // console.log(d[1].name);
      // console.log(d[1].nameid);
      // console.log(d[1].friends);
      let friendsNameGet: Name | null = null;
      d[1].friends.forEach(async (a) => {
        friendsNameGet = await nameidDocument(a);
        // console.log(a);
        console.log(friendsNameGet?.name);
        friendNameData.value = friendsNameGet?.name;
      });
      return friendNameData.value;
    });
});

// onMounted(async () => {
//   const allNameData = await allNameDocumentData();
//   friendNameData.value = Object.entries(allNameData)
//     //自分のコレクションの中にある、フレンドnameを表示したい。
//     .filter((array) => array[1].nameid === mynameData.value?.nameid)
//     .map((d) => {
//       // console.log(d[1].name);
//       // console.log(d[1].nameid);
//       // console.log(d[1].friends);
//       let friendsNameGet: Name | null = null;
//       d[1].friends.forEach(async (a) => {;
//         friendsNameGet = await nameidDocument(a);
//         // console.log(a);
//         console.log(friendsNameGet?.name);
//       });
//       return friendsNameGet?.name
//     });
// });

// onMounted(async () => {
//   const allNameData = await allNameDocumentData();
//   friendNameData.value = Object.entries(allNameData)
//     //自分のコレクションの中にある、フレンドnameを表示したい。
//     .filter((array) => array[1].nameid === mynameData.value?.nameid)
//     .map(async (d) => {
//       console.log(d[1].name);
//       console.log(d[1].nameid);
//       console.log(d[1].friends);
//       const friendNames = await Promise.all(
//         d[1].friends.map((a) => nameidDocument(a))
//       );
//       console.log(friendNames);
//       return friendNames;
//     });
// });

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
  <button @click="topButton">Top</button>
  <button @click="nameButton">nameButton</button>
  <button @click="logoutUser">logoutButton</button>
  <div class="container">
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
  <div class="room-container" v-for="t in friendNameData">
    <div class="room-icon"></div>
    <!-- <Chat_List class="room-list" /> -->
    <input type="checkbox" class="checkbox" v-if="false" />
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
