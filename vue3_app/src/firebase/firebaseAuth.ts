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

// import { useRoute } from "vue-router";
import { router, loginJage, routes } from "../router/index";

export const isLogin = ref(false);
export const auth = getAuth();

// const profileId = useRoute().query.id;

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
  //window.locationで現在のurl,パスを取得
  const pathName = window.location.pathname;
  //searchで?=クエリ情報を取得
  const queryId = window.location.search;
  onAuthStateChanged(auth, (user) => {
    loginJage.value = true;
    // console.log(loginJage.value);
    if (user) {
      isLogin.value = true;
      console.log("ログイン中");
      //ログイン中にlogin画面に飛ぼうとしたらMainに飛ばす。
      if (pathName === "/") {
        router.push("/Main");
        //pathName(直前のurl)がprofileInformationの場合には
      } else if (pathName === "/ProfileInformation") {
        //pathNameとクエリ情報を含めて飛ばす。
        router.push(`${pathName}${queryId}`);
        // console.log(`${pathName}${queryId}`);
      } else {
        //それ以外の場合にはリロードしても元いたところに戻す。
        router.push(pathName);
      }
      // else if(window.location.href === queryId){
      //   router.push(`${queryId}`);
      // }else {
      //   router.push(pathName);
      //↓ここでwindowの情報をif文で使用して条件分岐
      // if(router.push("/")){
      //ルータで今の場所を取得する。

      // }
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
