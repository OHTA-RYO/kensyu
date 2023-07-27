<script setup lang="ts">
import ProfileCard from "./ProfileCard.vue";
import ProfileButton from "./ProfileButton.vue";
import ProfileSarch from "./ProfileSarch.vue";

import { ref, reactive, watch, computed } from "vue";
import { InputData, defaultInputData } from "../types";

const inputData = ref<InputData>(defaultInputData());

const saveInputData = ref<InputData[]>([
  {
    id: Math.floor(Math.random() * 100),
    name: "中島慶樹",
    birthday: "1997年7月7日",
    age: "",
    height: "178cm",
    weight: "73kg",
    tel: "080-1234-5678",
    mail: "nakashima-k@codelic.co",
    remarks: "筋トレが趣味です",
  },
  {
    id: Math.floor(Math.random() * 100),
    name: "山田次郎",
    birthday: "1945年6月8日",
    age: "",
    height: "188cm",
    weight: "73kg",
    tel: "080-1234-5678",
    mail: "nakashima-k@codelic.co",
    remarks: "筋トレが趣味です",
  },
  {
    id: Math.floor(Math.random() * 100),
    name: "山田三郎",
    birthday: "2000年1月8日",
    age: "",
    height: "188cm",
    weight: "73kg",
    tel: "080-1234-5678",
    mail: "nakashima-k@codelic.co",
    remarks: "筋トレが趣味です",
  },
  {
    id: Math.floor(Math.random() * 100),
    name: "山田四郎",
    birthday: "1999年3月8日",
    age: "",
    height: "188cm",
    weight: "73kg",
    tel: "080-1234-5678",
    mail: "nakashima-k@codelic.co",
    remarks: "筋トレが趣味です",
  },
  {
    id: Math.floor(Math.random() * 100),
    name: "山田吾郎",
    birthday: "1978年9月8日",
    age: "",
    height: "188cm",
    weight: "73kg",
    tel: "080-1234-5678",
    mail: "nakashima-k@codelic.co",
    remarks: "筋トレが趣味です",
  },
]);

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

const isToggle = ref<boolean>(false);

const editIndex = ref<number | null>(null);

const openIndex = ref<number | null>(null);

const setIndex = (index: number) => {
  console.log(isToggle.value, index);
  if (isToggle.value) return;
  editIndex.value = index;

  if (index === openIndex.value) {
    openIndex.value = null;
  } else {
    openIndex.value = index;
  }
  console.log(index);
};

const editButton = () => {
  if (openIndex.value === null) return;
  isToggle.value = !isToggle.value;
};

const updateButton = () => {
  console.log(isToggle.value);
  if (openIndex.value === null) return;
  isToggle.value = !isToggle.value;
};

// const sarchText = ref<string>('')
//   console.log(sarchText.value);

// const sarchText = ref<string>('')

const sarchText = (e: any) => {
  //  sarchText.value = e.target.value
  console.log(e.target.value);
};

// const sarchButton = (e:string)=>{
//   sarchText.value =
// }

// const sarchName = computed (() =>{
//   return saveInputData.value.filter( saveInputData.name.includes(saveInputData.name) )
// })

</script>

<template>
  <div class="container">
    <div class="left-container">
      <ProfileCard
        v-model="inputData"
        :isToggle="true"
        :isPaddingLeft="false"
        :isReadonly="false"
      />
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
          :isReadonly="!(index === openIndex && isToggle)"
        />
      </div>
      <div class="sub-container">
        <ProfileSarch lablel="名前検索" :ProfileSarch="sarchText" />
        <div class="button-area">
          <ProfileButton label="検索" />
          <ProfileButton
            label="編集"
            @click="editButton"
            :disabled="isToggle"
          />
          <ProfileButton label="更新" @click="updateButton" />
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
