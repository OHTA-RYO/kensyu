<script setup lang="ts">
// import { router } from "../../router/index";
</script>

<template>
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
        <input type="text" />
        <input type="mail" />
        <input type="password" />
      </div>
    </div>
    <div class="sendarea">
      <p>送信する</p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  margin: 32px 0;
  /* padding-bottom: 32px; */
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
  /* padding-right: 100px; */
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

.container-inputarea input {
  margin: 6px 0 4px 0;
  padding: 15px 0;
  border: 1px solid lightgray;
  width: 480px;
  /* font-size: 20px; */
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
  /* border: 1px solid gray; */
  border-radius: 16px;
  background: rgb(98, 212, 250);
  color: white;
  cursor: pointer;
}
</style>
