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
import type { Tweet, Name, ChatRoom } from "../Types/TweetTypes";
// import { app, db, auth } from "../firebase/firebase";

//ログインしたアカウントのnameData↓
export const mynameData = ref<Name>();
/**
 * ログインしているアカウントのuidを渡してドキュメントidを取得する関数
 */
export const realTimeMydata = (uid: string) => {
  const q = query(collection(db, "names"), where("nameid", "==", uid));
  onSnapshot(q, (docs) => {
    docs.forEach((d) => {
      if (d.data().nameid === uid) {
        mynameData.value = d.data() as Name;
      }
    });

    // console.log(source, " data: ", doc.data());
  });
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
    tweetsid: [], //["tweetsid1", "tweetsid2"]
  };
};

export const defaultTweetCollection = (): Tweet => {
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

//ChatRoomのnameを渡してdocidを取得したかった。
//promiseでデータ取れなかった。
export const chatRoomDocumentName = async (
  ni: string
): Promise<ChatRoom | null> => {
  let q = query(collection(db, "chatRoom"), where("roomname", "==", ni));
  q = query(q, limit(1));
  const querySnapshot = await getDocs(q);
  let roomid: string | null = null;
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    // console.log(doc.id); //ドキュメントid
    // console.log(doc.data().nameid);
    // console.log(doc.data().name);
    if (doc.exists()) roomid = doc.id;
    // return (ni = doc.data().name);
  });
  console.log(roomid);
  return roomid; //リターンするのをforEachの中でやってたからデータ取れなかった。
};

// console.log(chatRoomDocumentName("テスト2"));

// export const chatRoomDocumenId = async (ni: string): Promise<ChatRoom | null> => {
//   let q = query(collection(db, "chatRoom"), where("roomid", "==", ni));
//   q = query(q, limit(1));
//   const querySnapshot = await getDocs(q);
//   let roomid: ChatRoom | null = null;
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id, " => ", doc.data());
//     console.log(doc.id); //ドキュメントid
//     console.log(doc.data().nameid);
//     console.log(doc.data().name);
//     if (doc.exists()) roomid = doc.id as ChatRoom;
//     // return (ni = doc.data().name);
//   });
//   return roomid; //リターンするのをforEachの中でやってたからデータ取れなかった。
// };

/**
 * ログインしているアカウントのuidを渡してドキュメントidを取得する関数
 * @param uid
 * @returns ドキュメントid
 */
export const nameDocument = async (nameid: string | undefined) => {
  if (!nameid) return;
  const q = query(collection(db, "names"), where("nameid", "==", nameid));
  const querySnapshot = await getDocs(q);
  let docid: string = "";
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    console.log(doc.id); //ドキュメントid
    console.log(doc.data());
    console.log(doc.data().name);
    // const d = doc.id;
    if (doc.exists()) docid = doc.id;
  });
  // console.log(doc.id, "=>", doc.data());
  console.log(docid);
  return docid;
};

/**
 * firebaseのusersの情報を登録する関数
 * @param a トークルームでinputに入力した値。
 */
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

/**
 * firebaseのusersの情報を登録する関数
 * @param a チャットルームでinputに入力した値（部屋の名前）。
 */
export const saveDocumentChatRoom = async (a: ChatRoom) => {
  try {
    const docRef = await addDoc(collection(db, "chatRoom"), a);
    a.roomid = docRef.id;
    // tweet.value.id = docRef.id;
    // console.log(tweet.value.id);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

/**
 * firebaseのnameコレクションの更新をする関数
 * @param nameid 引数にログイン中のnameidを渡す。
 */
export const updateDocment = async (uid: string, obj: object) => {
  const docId = await nameDocument(uid);
  if (!docId) {
    console.log("みつからんかった");
    return;
  }
  const washingtonRef = doc(db, "names", docId);
  await updateDoc(washingtonRef, obj);
};

// /**
//  * 単一のドキュメントを取得する関数
//  */
// export const getNameData = async (nameid: string) => {
//   const docRef = doc(db, "names", "nameid");
//   const docSnap = await getDoc(docRef);
//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//     console.log(docSnap.data().name);
//   } else {
//     // docSnap.data() will be undefined in this case
//     console.log("No such document!");
//   }
// };

/**
 * nameの全てのコレクションデータを取得する関数
 * @returns namesコレクションの全てのコレクションデータ
 */
export const allNameDocumentData = async () => {
  const querySnapshot = await getDocs(collection(db, "names"));
  const allData: Name[] = [];
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    // console.log(doc.data().name);
    allData.push(doc.data() as Name);
  });
  return allData;
};

/**
 * chatRoomの全てのコレクションデータを取得する関数
 * @returns chatRoomの全てのコレクションデータ
 */
export const allChatRoomDocumentData = async () => {
  const querySnapshot = await getDocs(collection(db, "chatRoom"));
  const allData: ChatRoom[] = [];
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    // console.log(doc.data().name);
    // console.log(doc.id);
    allData.push(doc.data() as ChatRoom);
  });
  return allData;
};
