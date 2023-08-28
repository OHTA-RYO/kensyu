import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app, db, auth } from "./firebase";
import { ref } from "vue";
import { router } from "@/router";

//login時にUIDを取得する。
export const user = auth.currentUser;

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
 * ログイン時にメールアドレスとパスワードを送信する関数
 */
export const loginUser = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      if (!confirm("ログインしますか?")) return;
      console.log(user?.uid);
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

// export const auth = getAuth(app);
