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

const isReadonly = ref(false);

const props = defineProps({
  modelValue: {
    type: Object as PropType<InputData>,
  },
});

// const emit = defineEmits<{
//   (e: "update:modelValue", value?: InputData): void;
// }>();

// const inputData = computed({
//   get() {
//     return props.modelValue ?? defaultInputData();
//   },
//   set(v) {
//     emit("update:modelValue", v);
//   },
// });

const router = useRouter();

const mainButton = () => {
  router.push("/Main");
};

const route = useRoute();
//vue routerからクエリ情報を取得
// console.log(route.query.id);
//profileIdにクエリ情報(id)を代入
const profileId = route.query.id;
const saveId = ref<string | undefined>("");
// profileId.value = route.query.id

//クエリと一致したデータを格納する変数を定義
const targetData = ref<InputData | undefined>(undefined);

//vue routerからクエリを取得できた。
//idから全データをfirebaseから取得するにはどうするのか。

//
/**
 * onSnapshotは常に関ししながら、クエリidとfirebaseのidが一致したデータを取得
 */
const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
  // console.log("大田");
  snapshot.docChanges();
  targetData.value = saveInputData.value.find(
    (d: InputData) => d.id === profileId
  );
  saveId.value = targetData.value?.id;
  console.log(targetData.value);
});

// //✅データを更新
//saveInputDataのidとオブジェクトidが一致しているのを対象にする。
// const updateDocument = async () => {
//   //saveInputDataの中から、idがオブジェクトのidと一致するデータを取り出す。
//   targetData.value = saveInputData.value.find((d) => d.id === saveId.value);
//   //editIndexでオブジェクトのidを選択肢に入れる。
//   const useRef = doc(db, "users", saveId.value);
//   console.log(targetData.value);
//   //findDataのidがオブジェクトのidと一致するデータがなければ何もしない。
//   // if (!findData) return;
//   //useRef、第2引数に更新するデータ(findData)を指定
//   await updateDoc(useRef, targetData );
// };

// //データを削除✅
// /**
//  * firebaseに保存したデータを削除する関数
//  */
// const deleteDocument = async () => {
//   //findで対象となるオブジェクトの要素を探す。saveInputDataのidとドキュメントのidが一致しているデータ
//   targetData.value = saveInputData.value.find((d) => d.id === saveId.value);
//   //confirmで選択中の名前をアラートで表示
//   if (!targetData) return;
//   if (!confirm(`${targetData.value?.name}削除しますか？`)) return;

//   //オブジェクトを削除する
// await deleteDoc(doc(db, "users", saveId.value));
//   //editIndexに削除したidが入っているから空文字を入れる。
//   // editIndex.value = "";
// };

/**
 * isReadonlyをtrue→falseに切り替える関数
 */
const readonlyFalse = () => {
  if (isReadonly.value) return false;
  isReadonly.value = !isReadonly.value;
  // console.log(isReadonly.value);
};

/**
 * isReadonlyをfalse→trueに切り替える関数
 */
const readonlyTrue = () => {
  if (isReadonly.value === false) return;
  isReadonly.value = !isReadonly.value;
  alert("データを更新しました。");
  confirm("更新しました。");
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
</script>

<template>
  <!-- <h1>テスト</h1> -->
  <div class="content">
    <div class="information">
      <ProfileCard
        :isReadonly="!isReadonly"
        :dataSharing="dataSharing"
        v-model="targetData"
      />
    </div>
    <ProfileButton label="戻る" @click="mainButton" />
  </div>
  <div class="button-area">
    <ProfileButton label="編集" @click="readonlyFalse" />
    <ProfileButton label="更新" @click="readonlyTrue" :disabled="!isReadonly" />
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
