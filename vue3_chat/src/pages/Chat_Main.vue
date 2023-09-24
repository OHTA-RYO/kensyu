<script setup lang="ts">
import { router } from "../router/index";
import { useRoute } from "vue-router";
import { onMounted, ref, watch, computed } from "vue";
import Chat_Input from "../components/Chat_Data/Chat_Input.vue";
import Chat_List from "../components/Chat_Data/Chat_List.vue";
import {
  defaultTweet,
  saveDocumentTweet,
  mynameData,
  imgUp,
  nameidDocument,
  chatRoomNameGet,
} from "@/db";
import type { Tweet, Name } from "@/Types/TweetTypes";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  query,
  where,
  getDocs,
  CollectionReference,
  Query,
} from "firebase/firestore";
import { app, db, auth } from "../firebase/firebase";
import Drawer from "./Drawer.vue";

const tweet = ref<Tweet>(defaultTweet());
const saveTweet = ref<Tweet[]>([]);
const file = ref<File | null>(null);
const tweeter = ref<Name[]>([]);
// const iconBox = ref<string[]>([]);
const iconBox = ref<string[]>([]);

const route = useRoute();
const roomId = route.query.id;
const isTweet = ref<boolean>(true);

//uidを常に表示させる。
//uidをtweet.nameidに代入。

watch([mynameData, tweeter], () => {
  tweet.value.nameId = mynameData.value?.nameid!;
  console.log(tweet.value.nameId);
});

// const resule = computed(() => {
//   mynameData.value?.nameid;
// });

//クエリを取得。roomid
tweet.value.tweetsId = roomId?.toString() ?? "";
console.log(roomId?.toString());

//roomidが一致しているTweetのみリアルタイムで取得
onMounted(async () => {
  let q: CollectionReference | Query = collection(db, "tweets");
  q = query(q, where("tweetsId", "==", roomId?.toString() ?? ""));
  onSnapshot(q, (docs) => {
    //          ↑の)を消した。
    //↓docChanges().を追加。
    docs.docChanges().forEach(async (d) => {
      saveTweet.value.push(d.doc.data() as Tweet);
      // グループに存在している人の分だけ探したい。if()
      //chatroomにあるnameidを取得する。
      //↓チャットルームの人数分のidを取得。
    });
    //ソート（時間で昇順）
    saveTweet.value.sort((a, b) => {
      return a.time < b.time ? -1 : 1;
    });
  });
  //chatroomidを渡して、chatroomのメンバーのnameidを取得。
  const roomMember = await chatRoomNameGet(roomId?.toString() ?? "");
  // console.log(roomMember);
  //↓部屋のメンバーに限定しないと。
  //全てのnameidを取得しないといけない。注意
  //チャットルームグループのnameidを全て取得。
  roomMember.forEach(async (d) => {
    const userData = await nameidDocument(d);
    if (userData) {
      tweeter.value.push(userData);
    }
  });
  // roomMember.forEach(async (d) => {
  //   const userIcon = await getIcon(d);
  //   console.log(userIcon);
  //   if (userIcon) {
  //     // iconBox.value.concat(userIcon);
  //     // iconBox.value.push(userIcon)
  //     iconBox.value = userIcon;
  //   }
  //   console.log(iconBox.value);
  // });
});

//v-forのt分だけ回す。かつnameをリターンしているから
//名前が表示される。
const findName = (t: Tweet) => {
  return tweeter.value.find((d) => d.nameid === t.nameId)?.name || "";
};
console.log(tweeter.value);

const findData = (t: Tweet) => {
  return tweeter.value.find((d) => d.nameid === t.nameId)?.image || "";
};

//自分のツイートか他の人のツイートを判断。
const change = (tweetid: Tweet) => {
  if (!mynameData.value?.nameid) return;
  if (tweetid.nameId === mynameData.value.nameid) {
    return (isTweet.value = false);
  }
  console.log(isTweet.value, tweetid.nameId);
};

const imgData = (e: any) => {
  file.value = e.target.files[0];
  console.log(e.target.files[0]);
  console.log(file.value);
};

const sendmessage = async () => {
  tweet.value.tweetsId = roomId?.toString() ?? "";
  tweet.value.nameId = mynameData.value?.nameid ?? "";
  if (file.value) {
    tweet.value.image = await imgUp(file.value);
  }
  await saveDocumentTweet(tweet.value);
  tweet.value = defaultTweet();
  console.log(saveTweet.value);
};

const friendListButton = () => {
  router.push("/ChatFriendList");
};

const inputDom = ref<HTMLInputElement | null>(null);
const clickInput = () => {
  inputDom.value?.click();
};
const isDrawer = ref(false);
</script>

<template>
  <Drawer v-model="isDrawer" />
  <div class="main-display" v-if="!isDrawer">
    <div class="container">
      <div class="q-gutter-sm menu-style">
        <q-icon name="menu" @click="isDrawer = !isDrawer" />
      </div>
      <!-- <div class="friend-list" @click="friendListButton">フレンド一覧へ</div> -->
      <h1>トークルーム</h1>
      <div v-for="t in saveTweet" class="talk-area">
        <div class="tweet-area">
          <div class="img-container">
            <img :src="findData(t)" alt="" />
          </div>
          <div>{{ findName(t) }}</div>
          <!-- <div v-if="t.message.text && t.image"> -->
          <div>{{ t.message.sendAt }}</div>
          <!-- </div> -->
        </div>
        <Chat_List :text="t" :isTweet="change(t)" />
      </div>
    </div>
    <div class="input-area">
      <p class="image-up" @click="clickInput">＋</p>
      <input type="file" @change="imgData" v-show="false" ref="inputDom" />

      <Chat_Input v-model="tweet.message.text" class="inputarea" />
      <p class="sending" @click="sendmessage" :disabled="tweet.message">送信</p>
    </div>
  </div>
</template>

<style scoped>
.menu-style {
  font-size: 32px;
  width: 64px;
  margin: 16px 32px 0 auto;
}
.friend-list {
  width: 160px;
  color: rgb(0, 22, 47);
  font-weight: bold;
  padding-top: 16px;
  margin-left: auto;
  cursor: pointer;
}
.inputarea {
  width: 320px;
  height: 24px;
  margin: 8px;
}

.container {
  text-align: center;
  position: relative;
}

h1 {
  text-align: center;
  color: rgb(0, 22, 47);
  padding-bottom: 24px;
  border-bottom: 1px solid rgb(0, 22, 47);
  margin-top: -56px;
  font-size: 24px;
}
.talk-area {
  display: flex;
  /* margin-left: auto; */
}

img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.tweet-area {
  margin: 24px 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 16px;
}

.talk-area img {
  object-fit: cover;
}

.input-area {
  display: flex;
  justify-content: center;
  margin: 240px 0 160px 0;
  align-items: center;
  /* position: fixed;
  bottom: 0;
  left: 430px; */
}

.input-area input {
  margin: 24px 0 0 0;
}

.sending {
  width: 64px;
  text-align: center;
  margin-top: 32px;
  margin-left: 16px;
  padding: 8px 16px;
  background: rgb(98, 212, 250);
  color: white;
  border-radius: 16px;
  cursor: pointer;
  height: auto;
}

.img-container img {
  object-fit: cover;
}

@media screen and (max-width: 820px) {
  .talk-area {
    margin-right: 8px;
  }

  .input-area {
    margin: 160px 0 160px 0;
    /* align-items: center; */
    /* color: white; */
  }
}
@media screen and (max-width: 430px) {
  img {
    width: 32px;
    height: 32px;
  }

  .tweet-area {
    margin: 24px 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 16px;
    font-size: 14px;
  }

  .input-area {
    margin: 160px 0 160px 16px;
    width: 320;
  }

  .sending {
    font-size: 14px;
    margin-right: 16px;
  }

  input-area input {
    margin-left: 8px;
  }
}
@media screen and (max-width: 390px) {
  .tweet-area {
    padding-right: 8px;
    padding-left: 8px;
    font-size: 12px;
  }

  .menu-style {
    font-size: 32px;
    width: 64px;
    margin: 8px 8px 0 auto;
  }
}
</style>
