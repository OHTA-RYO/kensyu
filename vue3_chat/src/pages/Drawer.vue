<script setup lang="ts">
import { router } from "../router/index";
import { ref, watch } from "vue";
import Chat_Input from "../components/Chat_Data/Chat_Input.vue";
import ChatCheckbox from "../components/Chat_Data/ChatCheckbox.vue";
import {
  nameidDocument,
  defaultName,
  updateDocment,
  mynameData,
  nameDocument,
  friendidGet,
} from "@/db";
import type { Name } from "@/Types/TweetTypes";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { app, db, auth } from "../firebase/firebase";
import { logoutUser } from "@/firebase/firebaseAuth";
</script>

<template>
  <h1>テスト</h1>
</template>

<style scoped>
.container {
  padding: 40px 0;
  font-weight: bold;
  color: white;
  background: rgb(0, 22, 47);
}

.friend-container {
  display: flex;
}

.friend-title {
  margin: -16px 0 32px 32px;
  font-size: 28px;
}

.friend-addition {
  margin: 0 32px 0 auto;
  cursor: pointer;
}

.edit {
  margin-left: 32px;
  cursor: pointer;
}

.header-container {
  display: flex;
}

.new-talkroom {
  margin-left: auto;
  margin-right: 32px;
  cursor: pointer;
}

.search-room {
  width: 50%;
  margin: 32px auto 0 32px;
}

.room-container {
  border: 1px solid rgb(187, 186, 186);
  display: flex;
  align-items: center;
}

.room-icon {
  width: 160px;
  height: 160px;
  padding-right: 16px;
}

.room-list {
  background: white;
  border: none;
  margin-left: 16px;
  font-size: 24px;
}

.checkbox {
  width: 100%;
  padding: 16px 16px 16px 0;
  margin-right: 24px;
}

@media screen and (max-width: 430px) {
  .container {
    padding: 30px 0 20px 0;
  }
  .friend-title {
    margin: -16px 0 32px 16px;
    font-size: 24px;
  }
  .search-room {
    width: 60%;
    margin: 32px auto 0 16px;
  }

  .new-talkroom {
    margin: -60px 16px 0 auto;
    font-size: 14px;
  }
  .edit {
    margin-left: 16px;
    font-size: 14px;
  }
  .room-icon {
    width: 100px;
    height: 100px;
    padding-right: 16px;
  }
}
</style>
