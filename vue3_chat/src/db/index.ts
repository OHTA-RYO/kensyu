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

import type { Tweet, Name, ChatRoom } from "../Types/TweetTypes";

import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import type { StorageReference } from "firebase/storage";

//ログインしたアカウントのnameData↓
export const mynameData = ref<Name>();
// export const tweetmynameData = ref<Tweet>();

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
  });
};

export const defaultName = (): Name => {
  return {
    nameid: "", //uid
    name: "",
    friends: [],
    image: "",
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

export const defaultTweet = (): Tweet => {
  return {
    tweetsId: "", //documentId
    nameId: "", //userID
    time: new Date(),
    image: "",
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

//✅
// ChatRoomのnameを渡してdocidを取得したかった。
// promiseでデータ取れなかった。
export const chatRoomDocumentName = async (
  ni: string
): Promise<string | null> => {
  let q = query(collection(db, "chatRoom"), where("roomname", "==", ni));
  q = query(q, limit(1));
  const querySnapshot = await getDocs(q);
  let roomid: string | null = null;
  querySnapshot.forEach((doc) => {
    if (doc.exists()) roomid = doc.id;
  });
  // console.log(roomid);
  return roomid; //リターンするのをforEachの中でやってたからデータ取れなかった。
};

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
 * ログインしているアカウントのuidを渡してfriendidを取得する関数
 * @param uid
 * @returns ドキュメントid
 */
export const friendidGet = async (nameid: string | undefined) => {
  if (!nameid) return;
  const q = query(collection(db, "names"), where("nameid", "==", nameid));
  const querySnapshot = await getDocs(q);
  let friendsid: string[] = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    console.log(doc.id); //ドキュメントid
    // console.log(doc.data());
    // console.log(doc.data().friends);
    // const d = doc.id;
    if (doc.exists()) friendsid.push(doc.id);
  });
  // console.log(doc.id, "=>", doc.data());
  console.log(friendsid);
  return friendsid;
};

/**
 * チャットルームのドキュメントidを渡してnameidを取得する関数。
 * @param
 * @returns
 */
export const chatRoomNameGet = async (
  chatroomid: string
): Promise<string[]> => {
  if (!chatroomid) return [];
  const q = query(
    collection(db, "chatRoom"),
    where("roomid", "==", chatroomid)
  );
  const querySnapshot = await getDocs(q);
  let docid: string[] = [];
  querySnapshot.forEach((doc) => {
    // console.log(doc.data().nameid);
    if (doc.exists()) docid = doc.data().nameid;
  });
  return docid;
};

/**
 * firebaseのtweetsの情報を登録する関数
 * @param a トークルームでinputに入力した値。
 */
export const saveDocumentTweet = async (a: Tweet) => {
  try {
    const docRef = await addDoc(collection(db, "tweets"), a);
    // await updateDoc(docRef, { tweetsId: docRef.id });
    // tweet.value.id = docRef.id;
    // console.log(tweet.value.id);
    docRef.id;
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
    await updateDoc(docRef, { roomid: docRef.id });
    // tweet.value.id = docRef.id;
    // console.log(tweet.value.id);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

//クラウドファンクションをいつか使う。
//ファンクションズを勉強する。

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

/**
 *
 * @param roomid ドキュメントidを渡す
 * @param obj chatRoom.valueを渡す。
 */
export const chatRoomUpdateDocument = async (roomid: string, obj: ChatRoom) => {
  const useRef = doc(db, "ChatRoom", roomid);
  console.log(useRef);
  await updateDoc(useRef, obj);
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

const storage = getStorage();

export const imgUp = async (file: File) => {
  const randomID =
    Math.floor(Math.random() * 9000000000000000) + 1000000000000000;
  const storageRef2 = storageRef(storage, `${randomID}`);
  const blob = new Blob([file], { type: file.type });
  const imgresult = await uploadBytes(storageRef2, blob);
  console.log(imgresult.ref);
  const url = await getDownloadURL(storageRef2);
  // if (!confirm("画像を送信しますか？")) return;
  console.log(url);
  return url;
};

// const getUrl = async (storageRef: StorageReference, a: Tweet | Name) => {
//   await getDownloadURL(storageRef)
//     .then((url) => {
//       console.log(url);
//       a.image = url;
//     })
//     .catch((error) => {});
// };
