import { ref, watch } from "vue";
import {
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  limit,
  updateDoc,
  onSnapshot,
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
    friends: [],
  };
};

export const defaultChatRoom = (): ChatRoom => {
  return {
    roomid: "", //documentId
    roomname: "",
    nameid: [], //["nameid1","nameid2"]
    // name: [""], //["name1","name2"]
    tweetsid: [], //["tweetsid1", "tweetsid2"]
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

/**
 * フレンドIDを検索して一致したら名前を返す関数
 * @param ni フレンド追加画面の入力したフレンドid
 * @returns 名前、コレクションID
 */
export const nameidDocument = async (ni: string): Promise<Name | null> => {
  let q = query(collection(db, "names"), where("nameid", "==", ni));
  q = query(q, limit(1));
  const querySnapshot = await getDocs(q);
  let name: Name | null = null;
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    // console.log(doc.id); //ドキュメントid
    // console.log(doc.data().nameid);
    // console.log(doc.data().name);
    if (doc.exists()) name = doc.data() as Name;
    // return (ni = doc.data().name);
  });
  return name; //リターンするのをforEachの中でやってたからデータ取れなかった。
};

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

//firebaseのusersの情報を登録する関数
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

export const updateDocment = async (nameid: string) => {
  const washingtonRef = doc(db, "name", nameid);

  // Set the "capital" field of the city 'DC'
  await updateDoc(washingtonRef, {
    capital: true,
  });
};

// const updateDocument = onSnapshot(collection(db, "name"), (snapshot) => {});

// const q = query(collection(db, "cities"), where("state", "==", "CA"));
// const unsubscribe = onSnapshot(q, (querySnapshot) => {
//   const cities = [];
//   querySnapshot.forEach((doc) => {
//       cities.push(doc.data().name);
//   });
//   console.log("Current cities in CA: ", cities.join(", "));
// });
