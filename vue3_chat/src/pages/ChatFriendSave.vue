<script setup lang="ts">
import { router } from "../router/index";
import { ref, watch } from "vue";
import Chat_Input from "../components/Chat_Data/Chat_Input.vue";
import ChatCheckbox from "../components/Chat_Data/ChatCheckbox.vue";
import { nameidDocument, defaultName, updateDocment } from "@/db";
import type { Name } from "@/Types/TweetTypes";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { app, db, auth } from "../firebase/firebase";

// const isCheckbox = ref(false);
const chatName = ref<Name[]>([]); //型を配列に
const nameid = ref(""); //フレンドid入力用に変数を作成。
const friendsid = ref<{ [key: string]: boolean }>({});
// const name = ref<Name | null>(null)

//既に存在するidを入力すると既にフレンドにいます。という風に
//コレクションにフレンドを作る？
//作成したとして、持たせる情報は、ドキュメントid=nameid
//その中にフレンドのnameidを格納していく。

const nameidSearch = async () => {
  const name = await nameidDocument(nameid.value);
  console.log(name?.nameid); //フレンドのid
  if (!name) return alert("フレンドが存在しません。");
  if (name) {
    chatName.value.push(name);
    //↑chatName.nameとnameidにフレンドのidとnameが入った。
    console.log(chatName.value);
    // friendsid.value.push(name.nameid);
    friendsid.value[name.nameid] = false;
    nameid.value = "";
    console.log(friendsid.value);
  }
};
//スコープ外で[name.nameid]が使えない。
//値が取れない。
if (friendsid.value[nameid.value] === true) {
  console.log(friendsid.value);
}
console.log(friendsid.value[nameid.value]);
console.log(friendsid.value.target);
//

const friendsidUpdate = () => {
  // if (friendsid.value === true) {
  //   // chatName.value.push(friendsid.value[])
  //   updateDocment(chatName.value[0].nameid);
  //   console.log(chatName.value)
  // }
};
//checkboxのコンポーネントでbooleanの引数を渡す。
//emitでtrue falseを受け取れるように。

const topButton = () => {
  router.push("/");
};
const nameButton = () => {
  router.push("/Chat_Name_Registration");
};

const roomButton = () => {
  router.push("/Chat_Room");
};
const friendList = () => {
  router.push("/ChatFriendList");
};

watch(
  friendsid,
  () => {
    console.log(friendsid.value);
  },
  { deep: true }
);

//trueの時にtrueの情報だけを配列にして保存する。
</script>

<template>
  <button @click="topButton">Top</button>
  <button @click="nameButton">nameButton</button>
  <div class="container">
    <div class="friend-container">
      <div class="friend-title">フレンド追加</div>
      <!-- <div class="friend-addition" @click="friendSave">友達追加へ</div> -->
    </div>

    <div class="header-container">
      <div class="edit" @click="nameidSearch()">検索</div>
      <div class="edit">追加</div>
      <div class="edit">編集</div>
      <div class="edit">削除</div>
      <div class="new-talkroom" @click="friendList">フレンド一覧へ</div>
    </div>
    <div class="search-room">
      <Chat_Input placeholder="🔍 フレンドID検索" v-model="nameid" />
    </div>
  </div>
  <div class="room-container" v-for="t in chatName">
    <div class="room-icon"></div>
    <div class="checkbox-container">
      <ChatCheckbox
        :text="t.name"
        class="checkbox"
        v-model="friendsid[t.nameid]"
      />
    </div>
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
  width: 508px;
  margin: 32px auto 0 32px;
}

.room-container {
  width: 1078px;
  margin: 0 auto;
  border: 1px solid rgb(187, 186, 186);
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
  width: 100%;
  padding: 16px 16px 0 0;
  margin-right: 24px;
}
</style>
