<script setup lang="ts">
import { useRouter } from "vue-router";

import { router } from "../../router/index";
import {
  auth,
  registerUser,
  loginUser,
  isLogin,
  loginSearch,
} from "../../firebase/firebaseAuth";

import { ref } from "vue";
const emailData = ref("");
const passwordData = ref("");

//ユーザを再認証する関数
// const user = auth.currentUser;

// const continueAccount = async () => {
//   await reauthenticateWithCredential(user, credential)
//     .then(() => {
//       // User re-authenticated.
//     })
//     .catch((error) => {
//       // An error ocurred
//       // ...
//     });
// };
</script>

<template>
  <div class="container">
    <h1>サインイン</h1>
    <div class="login-container">
      <p>メールアドレス</p>
      <input type="email" v-model="emailData" />
      <p class="text-ps">パスワード</p>
      <input type="password" v-model="passwordData" />
      <button @click="loginUser(emailData, passwordData)">サインイン</button>
    </div>
    <h2 @click="registerUser(emailData, passwordData)">アカウントを作成</h2>
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
