import { ref, watch } from "vue";
import {
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { app, db, auth } from "../firebase/firebase";

// import { Tweet } from "../Chat_Types/types";
// import { Tweet } from "@/Chat_Types";
import type {
  Tweet,
  Name,
  ChatRoom,
  TweetCollection,
} from "../Types/TweetTypes";
// import { app, db, auth } from "../firebase/firebase";

export const defaultTweet = (): Tweet => {
  return {
    id: "",
    name: "",
    time: new Date().toLocaleTimeString("ja-JP", {
      hour: "numeric",
      minute: "numeric",
    }),
    tweets: "",
  };
};

export const defaultName = (): Name => {
  return {
    nameid: "",
    name: "",
  };
};

export const defaultChatRoom = (): ChatRoom => {
  return {
    id: "", //documentId
    roomname: "",
    nameid: [""], //["nameid1","nameid2"]
    name: [""], //["name1","name2"]
    tweetsid: [""], //["tweetsid1", "tweetsid2"]
  };
};
export const defaultTweetCollection = (): TweetCollection => {
  return {
    id: "", //documentId
    nameId: "", //userID
    message: {
      text: "",
      sendAt: new Date().toLocaleTimeString("ja-JP", {
        hour: "numeric",
        minute: "numeric",
      }),
    },
  };
};
//↓を使う
//友達検索inputの値をnameに渡す。
export const nameidDocument = async (ni: string) => {
  const q = query(collection(db, "names"), where("nameid", "==", ni));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    console.log(doc.id);
    console.log(doc.data().nameid);
    console.log(doc.data().name);
    return (ni = doc.data().name);
  });
};
// console.log(nameidDocument);

export const nameDocument = async (name: string) => {
  const q = query(collection(db, "names"), where("name", "==", name));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    console.log(doc.id);
    console.log(doc.data());
    return doc.id;
  });
};

nameDocument("テスト太郎");

//↓全て取得する場合はデータ取得出来る。
// const querySnapshot = await getDocs(collection(db, "names"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });
// console.log(querySnapshot);

export const saveDocumentTweet = async (a: Tweet) => {
  try {
    const docRef = await addDoc(collection(db, "users"), a);
    // tweet.value.id = docRef.id;
    // console.log(tweet.value.id);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
