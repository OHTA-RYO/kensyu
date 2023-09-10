<script setup lang="ts">
import { router } from "../router/index";
import { ref, watch } from "vue";
import Chat_Input from "../components/Chat_Data/Chat_Input.vue";
import ChatCheckbox from "../components/Chat_Data/ChatCheckbox.vue";
import {
  nameidDocument,
  defaultName,
  updateDocment,
  mynameData,
  nameDocument,
  friendidGet,
} from "@/db";
import type { Name } from "@/Types/TweetTypes";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { app, db, auth } from "../firebase/firebase";
import { logoutUser } from "@/firebase/firebaseAuth";

const chatName = ref<Name[]>([]); //型を配列に
const nameid = ref(""); //フレンドid入力用に変数を作成。
const friendsid = ref<{ [key: string]: boolean }>({});

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

// console.log(nameDocument(mynameData.value));

/**
 * 追加ボタンを押すと、チェックボックスがtrueのデータを追加する関数
 */

const pushID = () => {
  //Object.entriesでオブジェと→配列にする。

  // chatName.value.push(pushData)
  const filterData = Object.entries(friendsid.value).filter(
    //filterでtrueのデータだけ抽出する。
    (array) => array[1] === true
  ); //mapでtrueの配列のidの部分のみ取得。

  const newFilterData = filterData.map((d) => {
    console.log(d);
    return d[0];
  });

  return newFilterData;
};
// pushID();
console.log(chatName.value);

//nameidを渡してfriendidを取得する。

const friendsidUpdate = async () => {
  if (!confirm("追加しますか！？")) return;
  if (!mynameData.value) return;
  updateDocment(mynameData.value.nameid, {
    //   //↓更新するデータ
    friends: pushID().concat(mynameData.value.friends),
  } as object);
  //配列どうしでなぜpushが出来ないのか？
  // console.log(mynameData.value?.friends);
};

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

// const username = ref<string | undefined | Promise<null>>(undefined);
// username.value = userName(auth.currentUser!.uid);
// console.log(username);

//trueの時にtrueの情報だけを配列にして保存する。
</script>

<template>
  <div class="container">
    <div class="friend-container">
      <div class="friend-title">フレンド追加</div>
      <div class="friend-title">{{ mynameData?.name }}</div>
      <!-- <div class="friend-addition" @click="friendSave">友達追加へ</div> -->
    </div>

    <div class="header-container">
      <div class="edit" @click="nameidSearch()">検索</div>
      <div class="edit" @click="friendsidUpdate()">追加</div>
      <div class="edit" @click="nameDocument(mynameData?.nameid)">編集</div>
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
  padding: 40px 0;
  font-weight: bold;
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
}

.search-room {
  width: 50%;
  margin: 32px auto 0 32px;
}

.room-container {
  border: 1px solid rgb(187, 186, 186);
  display: flex;
  align-items: center;
}

.room-icon {
  width: 160px;
  height: 160px;
  padding-right: 16px;
}

.room-list {
  background: white;
  border: none;
  margin-left: 16px;
  font-size: 24px;
}

.checkbox {
  width: 100%;
  padding: 16px 16px 16px 0;
  margin-right: 24px;
}

@media screen and (max-width: 430px) {
  .container {
    padding: 30px 0 20px 0;
  }
  .friend-title {
    margin: -16px 0 32px 16px;
    font-size: 24px;
  }
  .search-room {
    width: 60%;
    margin: 32px auto 0 16px;
  }

  .new-talkroom {
    margin: -60px 16px 0 auto;
    font-size: 14px;
  }
  .edit {
    margin-left: 16px;
    font-size: 14px;
  }
  .room-icon {
    width: 100px;
    height: 100px;
    padding-right: 16px;
  }
}
</style>
