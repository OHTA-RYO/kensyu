<script setup lang="ts">
import { ref } from "vue";
import Chat_Login_Main from "./Chat_Login_Main.vue";
import Chat_Input from "../Chat_Data/Chat_Input.vue";
import { router } from "../../router/index";
import { registerUser } from "../../firebase/firebaseAuth";

const emailData = ref<string>("");
const passwordData = ref<string>("");

console.log(emailData);

const login = () => {
  router.push("/");
};
</script>

<template>
  <button @click="login">login</button>
  <div class="main-container">
    <div class="title">
      <h1>アカウント登録</h1>
    </div>
    <div class="container">
      <div class="container-parea">
        <p>お名前</p>
        <p>メールアドレス</p>
        <p>パスワード</p>
      </div>
      <div class="container-inputarea">
        <Chat_Input
          :isRegistration="true"
          type="text"
          placeholder="フルネーム"
        />
        <Chat_Input
          :isRegistration="true"
          type="email"
          :mail="emailData"
          @getEmailData?="emailData"
        />
        <Chat_Input
          :isRegistration="true"
          type="password"
          @getPasswordData?="passwordData"
        />
        <!-- <input type="text" />
        <input type="mail" />
        <input type="password" /> -->
      </div>
    </div>
    <div class="sendarea">
      <p @click="registerUser(emailData, passwordData)">送信する</p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  margin: 32px 0;
  text-align: center;
}

p {
  margin: 0;
}

.main-container {
  width: 100%;
  box-sizing: border-box;
}

.container {
  display: flex;

  width: 100%;
  justify-content: center;
}

.container-parea {
  width: 400px;
  margin-right: 32px;
}

.container-parea p {
  margin: 10px 0;
  padding: 8px 0;
  background: rgb(230, 228, 228);
  text-align: center;
  font-size: 20px;
}

.container-inputarea {
  display: flex;
  flex-direction: column;
  width: 320px;
}

.sendarea {
  width: 100%;
  margin-top: 64px;
  text-align: center;
}

.sendarea p {
  width: 160px;
  margin: 0 auto;
  padding: 8px 0;
  font-size: 20px;
  font-weight: bold;
  border-radius: 16px;
  background: rgb(98, 212, 250);
  color: white;
  cursor: pointer;
}
</style>
