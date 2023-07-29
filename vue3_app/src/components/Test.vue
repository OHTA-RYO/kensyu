<script setup lang="ts">
import TestCard from "./TestCard.vue";
import TestButton from "./TestButton.vue";
import TestSearch from "./TestSearch.vue";
import { ref,reactive, watch } from "vue";
import { InputData } from "../typesTest";

const inputData = ref<InputData>()
const saveInputData = ref<InputData[]>([{ id: 0,
  name: '山田　太郎',
  name2: 'やまだ　たろう',
  birthday: '1994年9月15日',
  age: '28歳',
  height: '170cm',
  weight: '60kg',
  tel: '090-5157-9001',
  mail: 'r-oota@mldfp.com',
  remarks: 'サンプルサンプル'}])

 const saveDataButton = () => {
  saveInputData.value.push(inputData.value)
}




</script>

<template>
  <div class="searchArea" >
    <TestSearch  />
    <TestButton label="検索" style="margin-left: 16px;" />
  </div>
  <div class="profileInputArea">
    <TestCard  v-model="inputData" />
  </div>
  <div class="buttonArea">
    <TestButton label="編集" />
    <TestButton style="margin: 0 32px;" label="更新" />
    <TestButton label="削除" />
    <div class="buttonAreaS">
      <TestButton label="保存" @click="saveDataButton"/>
    </div>
  </div>

  <div class="profileSaveArea">
    <TestCard  />
  </div>
</template>

<style scoped>

.searchArea {
  margin: 40px 0 0 64px;
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

/* .buttonAreaS {
margin-left: auto;
} */

.profileSaveArea {
  background: lightblue;
  width: 1700px;
  margin: 0 auto;
}
</style>
