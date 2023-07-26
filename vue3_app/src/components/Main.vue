<script setup lang="ts">
import ProfileCard from "./ProfileCard.vue";
import ProfileButton from "./ProfileButton.vue";
import ProfileSarch from "./ProfileSarch.vue";
import ProfileCardD from "./ProfileCardD.vue";

import { ref, reactive, watch } from "vue";
import { InputData, defaultInputData } from "../types";

const inputData = ref<InputData>(defaultInputData())

const saveInputData = ref<InputData[]>([]);

watch(inputData, () => {
  console.log(inputData);
});

const saveButton = () => {
  saveInputData.value.push(inputData.value);
  console.log(inputData);
  inputData.value = defaultInputData();
};

const deleteButton = () => {
  if (editIndex.value === null) return;
  confirm("削除しますか？");
  saveInputData.value = saveInputData.value.filter(
    (t, index) => index !== editIndex.value
  );
  editIndex.value = null;
};

const editIndex = ref<number | null>(null);

const openIndex = ref<number | null>(null);

const setIndex = (index: number) => {
  editIndex.value = index;

  if (index === openIndex.value) {
    openIndex.value = null;
  } else {
    openIndex.value = index;
  }
  console.log(index);
};
</script>

<template>
  <div class="container">
    <div class="left-container">
      <ProfileCard v-model="inputData" :isToggle="true" :isPaddingLeft = 'false' :isReadonly="false" />
      <ProfileButton @click="saveButton" label="保存" id="save-button" />
    </div>

    <div class="right-container">
      <div
        @click="setIndex(index)"
        v-for="(s, index) in saveInputData"
        :key="index"
      >

        <ProfileCard
          v-model="saveInputData[index]"
          :isToggle="index === openIndex"
         :isReadonly="true" />
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
  flex-direction: column;
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
