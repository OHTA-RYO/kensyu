<script setup lang="ts">
import { useRouter } from "vue-router";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// import { userInfo } from "os";
// import { userInfo } from "os";

const auth = getAuth();
let email = ""; // ユーザーのメールアドレスを定義だけしておく。inputに入力したメールアドレスが入る
let password = ""; // ユーザーのパスワードを定義だけしておく。inputに入力したメールアドレスが入る

console.log(email);
//test1234

/**
 * アカウント作成用の関数
 */
const registerUser = async () => {
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
        alert("既に登録がある為、このメールアドレスは登録出来ません。");
      }
    });
};

/**
 * ログイン時の関数
 */
const loginUser = async () => {
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
      //既に登録済みの
    });
};

//test@test.com
//test12345

const router = useRouter();

// const clickButton = () => {
//   router.push("/Main");
// };
</script>

<template>
  <div class="container">
    <h1>サインイン</h1>
    <div class="login-container">
      <p>メールアドレス</p>
      <input type="email" v-model="email" />
      <p class="text-ps">パスワード</p>
      <input type="password" v-model="password" />
      <button @click="loginUser">サインイン</button>
    </div>
    <h2 @click="registerUser">アカウントを作成</h2>
  </div>
</template>

<style scoped>
.container {
  width: 1600px;
  margin: 160px auto;
  padding: 80px 0 80px 0;
  /* background: lightgray; */
}
.login-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

h1 {
  /* margin-top: 160px; */
  text-align: center;
  color: #28f005;
  font-weight: bold;
}

p {
  text-align: center;
  margin-right: 372px;
  margin-top: 40px;
}

.text-ps {
  margin-right: 396px;
}

input {
  width: 30%;
  height: 40px;
  margin: 0 auto;
}

button {
  width: 30%;
  margin: 64px auto 0 auto;
  background: #28f005;
  height: 40px;
  border: 1px solid #28f005;
  color: white;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 1px 1px;
  text-decoration: none;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);

  /*--角丸指定--*/
  border-radius: 12px;
}

button:hover {
  /*--水平方向 垂直方向 色--*/
  box-shadow: 0 0 10px rgba(0, 0, 0, 0);
}

h2 {
  color: #28f005;
  text-align: center;
  margin-top: 32px;
  cursor: pointer;
}
</style>
