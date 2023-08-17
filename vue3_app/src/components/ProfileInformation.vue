<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import ProfileCard from "./ProfileCard.vue";
import ProfileButton from "./ProfileButton.vue";
import { PropType, onMounted, computed, useSSRContext, ref, watch } from "vue";
import { InputData, defaultInputData } from "../types";
import { firebaseConfig, app, db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  DocumentReference,
  DocumentData,
} from "firebase/firestore";
import { dataSharing, saveInputData } from "../db/usersdb";

const isReadonly = ref(true);

const props = defineProps({
  modelValue: {
    type: Object as PropType<InputData>,
  },
  isToggle: {
    type: Boolean,
    default: false,
  },
  // isReadonly: {
  //   type: Boolean,
  //   default: true,
  // },

  // inputData: {
  //   type: inputData,
  // },
});

const emit = defineEmits<{
  (e: "update:modelValue", value?: InputData): void;
}>();

const inputData = computed({
  get() {
    return props.modelValue ?? defaultInputData();
  },
  set(v) {
    emit("update:modelValue", v);
  },
});

const router = useRouter();

const mainButton = () => {
  router.push("/Main");
};

const route = useRoute();
//vue routerからクエリ情報を取得
// console.log(route.query.id);
//profileIdにクエリ情報(id)を代入
const profileId = route.query.id;

//クエリと一致したデータを格納する変数を定義
const targetData = ref<InputData | undefined>(undefined);

//vue routerからクエリを取得できた。
//idから全データをfirebaseから取得するにはどうするのか。

//onSnapshotは常に関ししてくれる関数
const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
  // console.log("大田");
  snapshot.docChanges();
  targetData.value = saveInputData.value.find(
    (d: InputData) => d.id === profileId
  );
  console.log(targetData.value);
});

console.log(isReadonly.value);
const readonlyFalse = () => {
  isReadonly.value = !isReadonly.value;
  console.log(isReadonly.value);
};

const readonlyTrue = () => {
  isReadonly.value = !isReadonly.value;
};

//データが取れなかった。そんな時はwatch!!
// watch(targetData, () => {
//   console.log("大田", targetData.value);
// });

//onSnapshotの中に↓の関数を入れた。そして関数は削除した。動かないから
// const findData = () => {
//   //undefindの時はreturnが邪魔をしていたから削除。
//   //v-model＝targetDataでデータを反映
//   targetData.value = saveInputData.value.find(
//     (d: InputData) => d.id === profileId
//   );
//   console.log(targetData.value);
// };
// findData();
// findData();
// idと一致したオブジェクトデータのみ抽出したい。

const editButton = () => {
  //openIndex(toggleが閉じている時)がnullの時は何もしない。
  !isReadonly;
};
</script>

<template>
  <!-- <h1>テスト</h1> -->
  <div class="content">
    <div class="information" :is-padding-left="true">
      <ProfileCard
        :is-padding-left="false"
        :isToggle="true"
        :readonly="isReadonly"
        :dataSharing="dataSharing"
        v-model="targetData"
      />
    </div>
    <ProfileButton label="戻る" @click="mainButton" />
  </div>
  <div class="button-area">
    <ProfileButton label="編集" @click="readonlyFalse" />
    <ProfileButton label="更新" @click="" />
    <ProfileButton label="削除" @click="" />
  </div>
</template>

<style scoped>
.content {
  width: 800px;
  margin: 40px auto;
}
.information {
  width: 100%;
}
</style>
../firebase
