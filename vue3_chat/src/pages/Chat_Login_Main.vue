<script setup lang="ts">
import { router } from "../router/";
import { ref } from "vue";
// import Chat_Login_ContentVue from "./Chat_Login_Content.vue";
import Chat_Login_Registration from "./Chat_Login_Registration.vue";
import Chat_Input from "../components/Chat_Data/Chat_Input.vue";
import {
  //↓Auth.tsで作成して、importしたが、グローバルな変数はNG
  //tsファイルでexportするのは一旦は関数だけ。
  // emailData,
  // passwordData,
  loginUser,
} from "../firebase/firebaseAuth";

const emailData = ref<string>("");
const passwordData = ref<string>("");

const registration = () => {
  router.push("/Chat_Login_Registration");
};

const loginAccount = async () => {
  loginUser(emailData.value, passwordData.value);
};
</script>

<template>
  <div class="main">
    <div class="main-container">
      <div class="container">
        <Chat_Input
          type="email"
          placeholder="User Email"
          :isLogin="true"
          class="inputarea"
          v-model="emailData"
        />
        <Chat_Input
          type="password"
          placeholder="User Password"
          :isLogin="true"
          class="inputarea"
          v-model="passwordData"
        />
        <p class="loginp" @click="loginAccount">ログイン</p>
        <p class="account" @click="registration">アカウント登録はこちら</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inputarea {
  width: 320px;
  margin: 8px 0;
  /* padding: 16px 0; */
}

.main {
  background: rgb(98, 212, 250);
  height: auto;
  padding: 64px;
}
p {
  margin: 0;
}

.main-container {
  width: 800px;
  padding: 40px 0;
  box-sizing: border-box;
  margin: 0 auto;
  background: white;
}
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
}

.container p {
  width: 320px;
  margin: 32px 0 16px 0;
  padding: 8px 0;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
}

.loginp {
  /* border: 1px solid black; */
  background: rgb(98, 212, 250);
  color: white;
}

.account {
  color: rgb(189, 186, 186);
}
</style>
