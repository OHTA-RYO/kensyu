<script setup lang="ts">
import { router } from "../router/index";
import { useRoute } from "vue-router";
import { onMounted, ref, watch, computed } from "vue";
import Chat_List from "../components/Chat_Data/Chat_List.vue";
import Chat_Input from "../components/Chat_Data/Chat_Input.vue";
import {
  defaultTweet,
  saveDocumentTweet,
  mynameData,
  imgUp,
  imgData,
} from "@/db";
import type { Tweet } from "@/Types/TweetTypes";
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

const tweet = ref<Tweet>(defaultTweet());
const saveTweet = ref<Tweet[]>([]);

const route = useRoute();
const roomId = route.query.id;
// const saveId = ref<string[] | string | undefined>();

//uidを常に表示させる。
//uidをtweet.nameidに代入。
watch(mynameData, () => {
  tweet.value.nameId = mynameData.value?.nameid!;
  console.log(tweet.value.nameId);
});

//roomIdをtweet.tweetsIdに代入
//↑型をstringに変換しないといけない。

console.log(roomId);

const resule = computed(() => {
  mynameData.value?.nameid;
});

tweet.value.tweetsId = roomId?.toString() ?? "";
console.log(roomId?.toString());

// ドキュメントidをクエリで取る。
// const roomidQuery = query(
//   collection(db, "chatRoom"),
//   where("roomid", "==", roomId?.toString() ?? "")
// );

onMounted(() => {
  const getTweets = async () => {
    let q: CollectionReference | Query = collection(db, "tweets");
    console.log(roomId?.toString() ?? "");
    q = query(q, where("tweetsId", "==", roomId?.toString() ?? ""));
    const querySnapshot = await getDocs(q);
    onSnapshot(q, (docs) => {
      docs.forEach((d) => {
        // console.log(d.data());
        saveTweet.value.push(d.data() as Tweet);
      });
      saveTweet.value.sort((a, b) => {
        return a.time < b.time ? -1 : 1;
      });
    });
  };
  getTweets();
});

//   const querySnapshot = await getDocs(q);
//   querySnapshot.docChanges().forEach((doc) => {
//     if (doc.type === "added") {
//       console.log("New tweets:", doc.doc.data());
//       //↓tweetidとroomidが一致しているtweetだけ表示させる。
//       saveTweet.value.push(
//         doc.doc
//           .data()
//           .fillter((o: Tweet) => o.tweetsId === roomId?.toString() ?? "")
//       );
//       //saveTweetをソートする。
//       saveTweet.value.sort((a, b) => {
//         return a.time < b.time ? -1 : 1;
//       });
//     }
//     //saveTweetを編集
//     if (doc.type === "modified") {
//       console.log("Modified tweets:", doc.doc.data());
//     }
//     //saveTweetを削除
//     if (doc.type === "removed") {
//       //フィルターで新しい配列をsaveInputDataに入れる。
//       //削除対象のidとドキュメントのidが一致していないデータで配列が返ってくる。
//       saveTweet.value = saveTweet.value.filter(
//         (d, tweetsId) => d.tweetsId !== doc.doc.id
//       );
//       console.log("Removed users:", doc.doc.data());
//     }
//   });

// const getTweets = async () => {
//   let q = collection(db, "tweets");
//   q = query(q, where("tweetid", "==", roomId?.toString() ?? ""));
//   const querySnapshot = await getDocs(q);
//   querySnapshot.docChanges().forEach((doc) => {
//     if (doc.type === "added") {
//       console.log("New tweets:", doc.doc.data());
//       //↓tweetidとroomidが一致しているtweetだけ表示させる。
//       saveTweet.value.push(
//         doc.doc
//           .data()
//           .fillter((o: Tweet) => o.tweetsId === roomId?.toString() ?? "")
//       );
//       //saveTweetをソートする。
//       saveTweet.value.sort((a, b) => {
//         return a.time < b.time ? -1 : 1;
//       });
//     }
//     //saveTweetを編集
//     if (doc.type === "modified") {
//       console.log("Modified tweets:", doc.doc.data());
//     }
//     //saveTweetを削除
//     if (doc.type === "removed") {
//       //フィルターで新しい配列をsaveInputDataに入れる。
//       //削除対象のidとドキュメントのidが一致していないデータで配列が返ってくる。
//       saveTweet.value = saveTweet.value.filter(
//         (d, tweetsId) => d.tweetsId !== doc.doc.id
//       );
//       console.log("Removed users:", doc.doc.data());
//     }
//   });
// };
// getTweets();

// onMounted(() => {
// 案3
//   const roomidQuery = query(
//     collection(db, "chatRoom"),
//     where("roomid", "==", roomId?.toString() ?? "")
//   );

//   const unsub = onSnapshot(collection(db, "tweets"), (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       // saveTweet.value.push(
//       //   doc.data().filter((o: Tweet) => o.tweetsId === roomId?.toString() ?? "")
//       // );
//       saveTweet.value = doc
//         .data()
//         .find((d: Tweet) => d.tweetsId === roomId?.toString() ?? "");
//       console.log("あ", saveTweet.value);
//     });
//   });
// });

//案2
//   const unsub = onSnapshot(collection(db, "tweets"),(querySnapshot) => {
//       query(collection(db, "chatRoom"),
//         where("roomid", "==", roomId?.toString() ?? ""));
//       querySnapshot.forEach((doc) => {
//         console.log("あ", doc.data());
//         saveTweet.value.push(doc.data() as Tweet);
//       });
//       // console.log("Current data: ", doc.data());
//     }
//   );
// });

// 案１;
// const roomidQuery = query(
//   collection(db, "chatRoom"),
//   where("roomid", "==", roomId?.toString() ?? "")
// );

// onMounted(() => {
//   //ドキュメントidをクエリで取る。
//   const unsub = onSnapshot(collection(db, "tweets"), (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       console.log("あ", doc.data());
//       saveTweet.value.push(doc.data() as Tweet);
//     });
//     saveTweet.value.sort((a, b) => {
//       return a.time < b.time ? -1 : 1;
//     });
//     // console.log("Current data: ", doc.data());
//   });
// });

const sendmessage = async () => {
  tweet.value.tweetsId = roomId?.toString() ?? "";
  imgUp();
  await saveDocumentTweet(tweet.value);
  tweet.value = defaultTweet();
  console.log(saveTweet.value);
};

/**
 * firebaseにTweetを保存する関数
 */

// const saveDocumentTweet = async () => {
//   try {
//     const docRef = await addDoc(collection(db, "tweets"), tweet.value);
//     // tweet.value.id = docRef.id;
//     // console.log(tweet.value.id);
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// };

//saveTweetの送信時間を取得したい。
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
    <input type="file" @change="imgData" />
    <!-- <img :src="tweet.image" alt="" /> -->
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
