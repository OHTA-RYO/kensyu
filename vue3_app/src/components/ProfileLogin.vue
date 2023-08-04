<script setup lang="ts"></script>

<template>
  <div class="container">
    <h1>サインイン</h1>
    <div class="login-container">
      <p>メールアドレス</p>
      <input type="text" />
      <p class="text-ps">パスワード</p>
      <input type="text" />
      <button>サインイン</button>
    </div>
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
</style>
