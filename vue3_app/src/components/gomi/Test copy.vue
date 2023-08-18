<script setup lang="ts">
import TestCard from "./TestCard.vue";
import TestButton from "./TestButton.vue";
import TestSearch from "./TestSearch.vue";
import { ref, reactive, watch } from "vue";
import { InputData, defaultInputData } from "../../Profile_types/typesTest";

const inputData = ref<InputData>(defaultInputData());
const saveInputData = ref<InputData[]>([
  {
    id: 0,
    name: "山田　太郎",
    name2: "やまだ　たろう",
    birthday: "1994年9月15日",
    age: "28歳",
    height: "170cm",
    weight: "60kg",
    tel: "090-5157-9001",
    mail: "r-oota@mldfp.com",
    remarks: "サンプルサンプル",
  },
]);

/**
 *ユーザが入力したデータをsaveInputdataに追加する関数
 */
const saveInputDataFuc = () => {
  //inputDataにid(配列のlength)を入れる。
  inputData.value.id = saveInputData.value.length;
  saveInputData.value.push(inputData.value);
  console.log(inputData);
  console.log(saveInputData.value);
  inputData.value = defaultInputData();
};

//toggleの切替
const isToggle = ref(false);

//toggleが閉じている時
const closeIndex = ref<number | null>(null);

//toggleが開いている時
const openIndex = ref<number | null>(null);
/**
 *
 *
 *
 *
 */

const setIndex = (id: number) => {
  isToggle.value = true;
  // openIndexにクリックしたIDを保存
  // TogleのBooleanを切り替え（単一のTogle）

  console.log(isToggle.value, id);
  // if (isToggle.value) return;
  // editIndex.value = id;

  // if (ßid === openIndex.value) {
  //   openIndex.valßue = null;
  // } else {
  //   openIndex.value = id;
  // }
  // console.log(id);
};

//対象の要素を消す
//削除ボタンを押すと要素を削除出来る関数が必要
//クリックしているIDが必要
//クリックしたIDを受け取ってsaveInputDataから削除
/**
 * 対象のidを受けとってsaveInputDataから削除する
 * @param id:number
 */

const deleteProfileData = () => {
  //クリックしたIDを受け取ってsaveInputDataから削除
  // idを保持する変数が必要✅。

  saveInputData.value.pop();
};
</script>

<template>
  <div class="searchArea">
    <TestSearch />
    <TestButton label="検索" style="margin-left: 16px" />
  </div>
  <div class="profileInputArea">
    <TestCard v-model="inputData" :isToggle="true" />
  </div>
  <div class="buttonArea">
    <TestButton label="編集" />
    <TestButton style="margin: 0 32px" label="更新" />
    <TestButton label="削除" />
    <div class="buttonAreaS">
      <TestButton label="保存" @click="saveInputDataFuc" />
    </div>
  </div>
  {{ saveInputData }}
  <div class="profileSaveArea" v-for="(s, index) in saveInputData" :key="index">
    <TestCard
      @click="setIndex(s.id)"
      v-model="saveInputData[index]"
      :isToggle="s.id === openIndex"
    />
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
  display: flex;
  flex-direction: column;
}
</style>
