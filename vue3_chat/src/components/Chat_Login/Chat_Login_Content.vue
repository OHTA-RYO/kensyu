<script setup lang="ts">
import { router } from "../../router/index";

const login = () => {
  router.push("/Chat_Main");
};

const registration = () => {
  router.push("/Chat_Login_Registration");
};
</script>

<template>
  <div class="main">
    <div class="main-container">
      <div class="container">
        <input type="mail" placeholder="User Id" />
        <input type="password" placeholder="User Password" />
        <p class="login" @click="login">ログイン</p>
        <p class="account" @click="registration">アカウント登録はこちら</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.container input {
  width: 320px;
  margin: 8px 0;
  padding: 16px 0;
  background: rgb(230, 228, 228);
  border: none;
}

.container p {
  width: 320px;
  margin: 32px 0 16px 0;
  padding: 8px 0;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
}

.login {
  /* border: 1px solid black; */
  background: rgb(98, 212, 250);
  color: white;
}

.account {
  color: rgb(189, 186, 186);
}
</style>
