import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  reauthenticateWithCredential,
  signOut,
} from "firebase/auth";

import { ref } from "vue";

// import { firebaseConfig, app, db } from "./firebase";

import { useRouter } from "vue-router";
import { router, loginJage, routes } from "./router/index";
import path from "path";

export const isLogin = ref(false);
export const auth = getAuth();

// export let email = ""; // ユーザーのメールアドレスを定義だけしておく。inputに入力したメールアドレスが入る
// export let password = ""; // ユーザーのパスワードを定義だけしておく。inputに入力したメールアドレスが入る

// console.log(email);
//test1234

/**
 * アカウント作成用の関数
 */
//引数でemailとpasswordの値を渡す。
//profileLoginで変数emailDataとpasswordDataを定義してv-modelを渡す。
//loginUserとregisterUserに↑の引数を渡した。
export const registerUser = async (email: string, password: string) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("アカウントを作成しました。");

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("正しい情報を入力して下さい。");
      // ..
      if (errorCode === email) {
        alert("既に登録がある為、このメールアドレスは登録出来ません。");
      }
      if (errorMessage === password) {
        alert("パスワードは6文字以上で入力下さい。");
      }
    });
};

/**
 * ログイン時の関数
 */
export const loginUser = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in

      const user = userCredential.user;
      if (!confirm("ログインしますか?")) return;
      router.push("/Main");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

/**
 * ログアウト時の関数
 */
export const logoutButton = () => {
  signOut(auth)
    .then(() => {
      if (!confirm("ログアウトしますか?")) return;
      router.push("/");
    })
    .catch((error) => {
      console.log(`ログアウト時にエラーが発生しました (${error})`);
    });
};

//ifの上にloginjage.valuを入れた。
/**
 * ログイン中かどうかを検知する関数
 */
export const loginSearch = () => {
  onAuthStateChanged(auth, (user) => {
    loginJage.value = true;
    console.log(loginJage.value);
    if (user) {
      // useLogin();
      // logoutがfalseの場合は何もしない。1回目の動きをスキップ
      isLogin.value = true;
      console.log("ログイン中");
      // if (routes.keys.name === "ProfileLogin") {
      // }
      // if(router.push("/")){

      // }
      router.push("/Main");
    } else {
      // loginJage.value = false;
      isLogin.value = false;
      console.log(isLogin.value);
      router.push("/");
      console.log("ログアウト");
    }
  });
};

// import { router } from "./router/index";

// const auth = getAuth();
// ログインしていない状態でMainのURLを検索しても
// Mainに飛ばずにlogin画面に飛ばしたい。
// 必要な情報はログインしているのか、ログアウトしているのか。

// export const isAuthStateChanged = () => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       router.push("/Main");
//     } else {
//       console.log("ログアウト");
//     }
//   });
// };
