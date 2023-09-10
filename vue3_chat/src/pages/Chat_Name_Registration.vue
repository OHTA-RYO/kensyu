<script setup lang="ts">
import { ref, watch, computed, onMounted } from "vue";
import Chat_Login_Main from "./Chat_Login_Main.vue";
import Chat_Input from "../components/Chat_Data/Chat_Input.vue";
import { router } from "../router/";
import { collection, addDoc } from "firebase/firestore";
import { app, db, auth } from "../firebase/firebase";
import type { Name } from "@/Types";
import { defaultName, mynameData, updateDocment, imgUp } from "@/db";
import { isLogin } from "@/firebase/firebaseAuth";

const nameData = ref<Name>(defaultName());
const file = ref<File | null>(null);

//updateDocumentをinpopotしてimage upをその中にかく。

//uidをnameidに入れる。
// console.log(user?.uid)
//↑undifindの状態でexportしているから一生値が取れない。
//↓だから、auth.currentUserにするとログイン後の値が取れる。
// console.log(auth.currentUser?.uid);
//↑リロードしたら消える。

//エラー

//↓tsに移動させる。
//collection→docに変えた方が良い的なことを言ってた。
const nameRegistration = async () => {
  try {
    nameData.value.nameid = auth.currentUser!.uid;
    const docRef = await addDoc(collection(db, "names"), nameData.value);
    console.log(nameData.value);
    console.log("Document written with ID: ", docRef.id);
    router.push("/Chat_Room");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const imgData = (e: any) => {
  file.value = e.target.files[0];
  console.log(e.target.files[0]);
};

const myIconSet = async () => {
  if (!file.value) return alert("画像が選択されていません。");
  nameData.value.image = await imgUp(file.value);
  console.log(nameData.value.image);
  console.log(mynameData.value);
  console.log(nameData.value);
  updateDocment(mynameData.value?.nameid ?? "", {
    image: nameData.value.image,
  });
};

const roomButton = () => {
  router.push("/Chat_Room");
};

const friendList = () => {
  router.push("/ChatFriendList");
};
const friendSave = () => {
  router.push("/ChatFriendSave");
};
</script>

<template>
  <div class="border-area">
    <div class="container">
      <div class="profile-container">
        <div class="naime-title">プロフィールページ</div>
        <div class="naime-title">{{}}</div>
        <div class="friend-addition" @click="friendSave">友達追加へ</div>
      </div>

      <div class="header-container">
        <div class="chatroom" @click="roomButton">チャットルーム一覧へ</div>
      </div>
    </div>

    <div class="main-container">
      <div class="title">
        <h1 v-if="!mynameData?.nameid">ニックネームを登録して下さい。</h1>
      </div>
      <div class="name-container" v-if="!mynameData?.nameid">
        <div class="container-parea">
          <p>お名前</p>
        </div>
        <div class="container-inputarea">
          <Chat_Input
            :isRegistration="true"
            type="text"
            placeholder="ニックネームを入力して下さい。"
            class="inputarea"
            :height="46"
            v-model="nameData.name"
          />
        </div>
      </div>
      <div class="save" v-if="!mynameData?.nameid">
        <p @click="nameRegistration">登録</p>
      </div>
      <div class="sendarea" v-if="mynameData?.nameid">
        <div class="file-save-area">
          <h1 v-if="mynameData?.nameid">プロフィール画像を設定</h1>
        </div>
        <div class="file-area"><input type="file" @change="imgData" /></div>
      </div>
      <div class="file-save" v-if="mynameData?.nameid">
        <p @click="myIconSet">アイコンを設定</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.border-area {
  width: 100%;
  border: 1px solid rgb(187, 186, 186);
}
.container {
  padding: 40px 0;
  font-weight: bold;
  color: white;
  background: rgb(0, 22, 47);
}
.profile-container {
  display: flex;
}

.naime-title {
  margin: -16px 0 32px 32px;
  font-size: 28px;
}

.chatroom {
  margin-left: auto;
  margin-right: 32px;
  cursor: pointer;
}

.friend-addition {
  margin: 0 32px 0 auto;
  cursor: pointer;
}

.name-container {
  margin-top: 32px;
}

.header-container {
  display: flex;
  margin-left: auto;
}

.inputarea {
  width: 320px;
  margin: 6px 0 6px 0;
}
.main-container {
  box-sizing: border-box;
  margin: 0 auto;
}

h1 {
  margin: 32px 0 32px 32px;
  font-size: 28px;
}

.container-parea {
  margin-right: 100px;
}

p {
  margin: 0;
}

.container-parea {
  width: 320px;
  margin: 0 32px;
}

.container-parea p {
  margin: 10px 0;
  padding: 8px 0 8px 32px;
  background: rgb(0, 22, 47);
  color: white;
  font-size: 20px;
}

.container-inputarea {
  display: flex;
  flex-direction: column;
  width: 320px;
  margin-left: 32px;
}

.save {
  text-align: center;
}

.save p {
  width: 160px;
  margin: -52px auto 32px;
  padding: 8px 0;
  font-size: 20px;
  font-weight: bold;
  background: rgb(0, 22, 47);
  color: white;
  cursor: pointer;
}

.file-save-area {
  margin-top: 96px;
}

.file-area {
  margin: 0 0 0 32px;
  color: white;
}
.file-save {
  text-align: center;
}

.file-save p {
  width: 160px;
  margin: -52px auto 32px;
  padding: 8px 0;
  font-size: 20px;
  font-weight: bold;
  background: rgb(0, 22, 47);
  color: white;
  cursor: pointer;
}

@media screen and (max-width: 820px) {
  .naime-title {
    font-size: 24px;
  }

  .container-parea {
    width: 280px;
  }

  .save p {
    font-size: 16px;
  }

  .inputarea {
    width: 280px;
  }

  h1 {
    font-size: 24px;
  }

  .file-save p {
    width: 160px;
    font-size: 16px;
  }
}

@media screen and (max-width: 430px) {
  .title {
    margin-top: 16px;
  }
  .naime-title {
    margin: -16px 0 40px 16px;
    font-size: 18px;
  }

  .chatroom {
    font-size: 14px;
    margin: 0 16px 0 auto;
  }

  .friend-addition {
    font-size: 14px;
    margin: 16px 16px 0 auto;
  }

  .name-container {
    margin-top: 16px;
  }

  .container-parea {
    width: 180px;
    margin: 6px 0 6px 16px;
  }

  .container-parea p {
    font-size: 16px;
    padding: 8px 0 8px 16px;
  }

  .container-inputarea {
    width: 120px;
    margin-left: 16px;
  }

  .inputarea {
    width: 180px;
    font-size: 16px;
  }

  .file-save-area {
    margin-top: 48px;
  }

  h1 {
    font-size: 18px;
    margin: 0 0 32px 16px;
  }

  .save p {
    width: 120px;
    margin: -64px 16px 0 auto;
  }

  .file-save p {
    width: 120px;
    margin: -36px 16px 16px auto;
  }

  .file-area {
    margin: 16px 0 0 16px;
  }
}
</style>
