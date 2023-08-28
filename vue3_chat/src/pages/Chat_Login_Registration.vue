<script setup lang="ts">
import { ref, watch, computed } from "vue";
import Chat_Login_Main from "./Chat_Login_Main.vue";
import Chat_Input from "../components/Chat_Data/Chat_Input.vue";
import { router } from "../router/";
import {
  // emailData,
  // passwordData,
  registerUser,
} from "../firebase/firebaseAuth";

const nameData = ref<string>("");
const emailData = ref<string>("");
const passwordData = ref<string>("");

const login = () => {
  router.push("/");
};

watch([nameData, emailData, passwordData], (a, b) => {
  console.log(a, b);
  console.log(passwordData.value);
});

const saveAccount = async () => {
  await registerUser(emailData.value, passwordData.value);

  nameData.value = "";
  emailData.value = "";
  passwordData.value = "";
};

const passwordDataError = computed(() => {
  if (!passwordData.value) return false;
  if (passwordData.value.length < 6) return true;
});
</script>

<template>
  <button @click="login">login</button>
  <div class="main-container">
    <div class="title">
      <h1>アカウント登録</h1>
    </div>
    <div class="container">
      <div class="container-parea">
        <!-- <p>お名前</p> -->
        <p>メールアドレス</p>
        <p>パスワード</p>
      </div>
      <div class="container-inputarea">
        <!-- <Chat_Input
          :isRegistration="true"
          type="text"
          placeholder="フルネーム"
          class="inputarea"
          :height="46"
          v-model="nameData"
        /> -->
        <Chat_Input
          :isRegistration="true"
          type="email"
          v-model="emailData"
          class="inputarea"
          :height="46"
        />
        <div v-if="passwordDataError">パスワードは6文字以上で入力下さい。</div>
        <Chat_Input
          :isRegistration="true"
          type="password"
          v-model="passwordData"
          class="inputarea"
          :height="46"
        />
        <!-- <input type="text" />
        <input type="mail" />
        <input type="password" /> -->
      </div>
    </div>
    <div class="sendarea">
      <p @click="saveAccount">送信する</p>
    </div>
  </div>
</template>

<style scoped>
.inputarea {
  width: 480px;
  margin: 6px 0 6px 0;
  /* height: 16px;¥ */
  /* padding: 15px 0; */
}

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
