import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { app, db } from "./firebase";
import { ref } from "vue";
import { router } from "@/router";
import { realTimeMydata } from "@/db";

const auth = getAuth();
export const isLogin = ref(false);

// //login時にUIDを取得する。
// export const user = auth.currentUser;

/**
 *
 * アカウント登録用の関数
 */
export const registerUser = async (email: string, password: string) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      alert("アカウントが作成されました。");
      router.push("/");
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      console.log(errorCode);
      console.log(errorMessage);
      if (errorCode === "auth/missing-email") {
        alert("メールアドレスを入力して下さい。");
      }
      if (errorCode === "auth/invalid-email") {
        alert("正しいメールアドレスの形式で入力下さい。");
      }
      if (errorCode === "auth/email-already-in-use") {
        alert("このメールアドレスは既に使用されている為、登録出来ません。");
      }
      if (errorCode === "auth/weak-password") {
        alert("パスワードを6文字以上で入力下さい。");
      }
      // if (email.length < 6) {
      //   alert("パスワードを6文字以上で入力下さい。");
      // }
    });
};

/**
 *
 * ログイン時の関数（メールアドレスとパスワードを送信）
 */
export const loginUser = async (email: string, password: string) => {
  if (!confirm("ログインしますか?")) return;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      console.log(user?.uid, "ログイン中");
      router.push("/Chat_Name_Registration");
      // ...↑元々はログイン後は直でトークルーム
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      console.log(errorCode);
      console.log(errorMessage);
      if (errorCode === "auth/user-not-found") {
        alert("このメールアドレスは登録されていません。");
      }
      if (errorCode === "auth/wrong-password") {
        alert("パスワードが間違っています。");
      }
    });
};

/**
 * ログアウト時の関数
 */
export const logoutUser = () => {
  if (!confirm("ログアウトしますか?")) return;
  signOut(auth)
    .then(() => {
      router.push("/");
      console.log(auth.currentUser?.uid, "ログアウト中");
      // Sign-out successful.
    })
    .catch((error) => {
      console.log("ログアウト失敗");
      // An error happened.
    });
};

/**
 * ログイン中かどうかを検知する関数
 */
export const loginSearch = () => {
  //window.locationで現在のurl,パスを取得
  const pathName = window.location.pathname;
  //searchで?=クエリ情報を取得
  // const queryId = window.location.search;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLogin.value = true;
      realTimeMydata(user.uid);
      console.log(isLogin.value);
      if (pathName === "/") {
        router.push("/ChatFriendList");
      } else {
        router.push(pathName);
      }
    } else {
      isLogin.value = false;
      console.log(isLogin.value);
      router.push("/");
      console.log("ログアウト");
    }
  });
};

loginSearch();
// export const auth = getAuth(app);
