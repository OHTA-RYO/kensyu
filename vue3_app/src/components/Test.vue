<script setup lang="ts">
import TestCard from "./TestCard.vue";
import TestButton from "./TestButton.vue";
import TestSearch from "./TestSearch.vue";
import { ref,reactive } from "vue";

const inputData = ref<saveInputData>()

type saveInputData = {
  id:  number;
  name: string;
  name2: string;
  birthday: string;
  age: string;
  height: string;
  weight: string;
  tel: string;
  mail: string;
  remarks: string;
};

const saveInputData =ref<saveInputData[]>([])

const addInput = () => {
  saveInputData.value.push(inputData.value)
}



</script>

<template>
  <input type="text" v-model="inputData">
  <div class="searchArea">
    <TestSearch  />
  </div>
  <div class="profileInputArea">
    <TestCard v-model="inputData" />
  </div>
  <div class="buttonArea">
    <TestButton label="編集" />
    <TestButton style="margin: 0 32px;" label="更新" />
    <TestButton label="削除" />
    <div class="buttonAreaS">
      <TestButton label="保存"/>
    </div>
  </div>

  <div class="profileSaveArea">
    <TestCard  />
  </div>
</template>

<style scoped>

.searchArea {
  margin: 40px 0 0 80px;
}

.profileInputArea {
  background: lightgray;
  width: 1700px;
  margin: 48px auto;
}

.buttonArea {
  display: flex;
  justify-content: left;
  width: 1700px;
  margin: 0 auto;
  /* background: pink; */
  padding: 16px;
}

.buttonAreaS {
margin-left: auto;
}

.profileSaveArea {
  background: lightblue;
  width: 1700px;
  margin: 0 auto;
}
</style>
