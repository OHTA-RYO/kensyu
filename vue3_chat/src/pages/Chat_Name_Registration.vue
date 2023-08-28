<script setup lang="ts">
import { ref, watch, computed } from "vue";
import Chat_Login_Main from "./Chat_Login_Main.vue";
import Chat_Input from "../components/Chat_Data/Chat_Input.vue";
import { router } from "../router/";
import { collection, addDoc } from "firebase/firestore";
import { app, db, auth } from "../firebase/firebase";
import type { Name } from "@/Types";
import { defaultName } from "@/db";
import { user } from "@/firebase/firebaseAuth";

const nameData = ref<Name>(defaultName());

//uidをnameidに入れる。
// console.log(user?.uid)
//↑undifindの状態でexportしているから一生値が取れない。
//↓だから、auth.currentUserにするとログイン後の値が取れる。
console.log(auth.currentUser?.uid);

const nameRegistration = async () => {
  try {
    nameData.value.nameid = auth.currentUser!.uid;
    const docRef = await addDoc(collection(db, "names"), nameData.value);
    console.log(nameData.value);
    console.log("Document written with ID: ", docRef.id);
    // router.push("/")
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const login = () => {
  router.push("/");
};
const loginMain = () => {
  router.push("/Chat_Main");
};

const roomButton = () => {
  router.push("/Chat_Room");
};
// watch([nameData], (a, b) => {
//   console.log(a, b);
//   console.log(nameData.value);
// });
</script>

<template>
  <button @click="login">login</button>
  <button @click="loginMain">loginMain</button>
  <button @click="roomButton">roomButton</button>
  <div class="main-container">
    <div class="title">
      <h1>プロフィール登録</h1>
    </div>
    <div class="container">
      <div class="container-parea">
        <p>お名前</p>
      </div>
      <div class="container-inputarea">
        <Chat_Input
          :isRegistration="true"
          type="text"
          placeholder="フルネーム"
          class="inputarea"
          :height="46"
          v-model="nameData.name"
        />
      </div>
    </div>
    <div class="sendarea">
      <p @click="nameRegistration">登録</p>
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
