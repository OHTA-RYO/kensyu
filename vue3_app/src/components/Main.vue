<script setup lang="ts">
import ProfileCard from "./ProfileCard.vue";
import ProfileButton from "./ProfileButton.vue";
import ProfileSarch from "./ProfileSarch.vue";

import { ref, reactive, watch } from "vue";
import { InputData, SaveInputData  } from "../types";

const inputData = reactive<InputData>([{
  name: "",
  birthday: "",
  age: "",
  height: "",
  weight: "",
  tel: "",
  mail: "",
  remarks: "",
}]);

watch(inputData, () => {
  console.log(inputData);
});

const saveButton = () => {
  const saveInputData = [{
    name: inputData.name,
    birthday: inputData.birthday,
    age: inputData.age,
    height: inputData.height,
    weight: inputData.weight,
    tel: inputData.tel,
    mail: inputData.mail,
    remarks: inputData.remarks,
  }];
  inputData.push(saveInputData);
  console.log(inputData);
};

const deleteButton = () => {
  confirm("削除しますか？");
};
</script>

<template>
  <div class="container">
    <div class="left-container">
      <ProfileCard v-model="inputData" />
      <ProfileButton @click="saveButton" label="保存" id="save-button" />
    </div>

    <div class="right-container">
      <div>
        <ProfileCard />
        {{ inputData.name }}
      </div>
      <div class="sub-container">
        <ProfileSarch lablel="名前検索" />
        <div class="button-area">
          <ProfileButton label="検索" />
          <ProfileButton label="編集" />
          <ProfileButton label="更新" />
          <ProfileButton label="削除" @click="deleteButton()" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  /* margin: 0; */
}

.container {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 32px;
  left: 24px;
}

.left-container {
  width: 640px;
  height: 100%;
}

.right-container {
  width: 640px;
  height: 100%;
  /* background: lightgray; */
  padding-left: 32px;
  display: flex;
}

.sub-container {
  width: 100%;
  margin-left: 80px;
  position: fixed;
  left: 960px;
}

.button-area {
  margin-top: 32px;
}

button:nth-child(n + 2) {
  margin-left: 24px;
}

#save-button {
  margin: 16px 0px;
}
</style>
