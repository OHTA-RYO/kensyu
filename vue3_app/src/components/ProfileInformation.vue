<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import ProfileCard from "./ProfileCard.vue";
import ProfileButton from "./ProfileButton.vue";
import { PropType, onMounted, computed } from "vue";
import { InputData, defaultInputData } from "../types";
import { firebaseConfig, app, db } from "../firebass";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import saveInputData from "./Main.vue";

const props = defineProps({
  modelValue: {
    type: Object as PropType<InputData>,
    isToggle: {
      type: Boolean,
      default: false,
    },
  },
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
console.log(route.query);

//vue routerからクエリを取得できた。
//idから全データをfirebaseから取得するにはどうするのか。

// onMounted(() => {
//   const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
//     snapshot.docChanges()
//       //firebaseに登録されているデータは常に表示されている。
//       //saveInputDataに表示させたい。

//       if (s.type === "added") {
//         console.log("New users:", s.doc.data());
//         // ...はオブジェクト,配列も合体するやつ。
//         saveInputData.value.push({
//           ...(s.doc.data() as InputData),
//           ...{ id: s.doc.id },
//         });
//       }
//       //saveInputDataを編集　✅
//       if (s.type === "modified") {
//         console.log("Modified users:", s.doc.data());
//         //
//       }
//       //saveInputDataを削除
//       if (s.type === "removed") {
//         //フィルターで新しい配列をsaveInputDataに入れる。
//         //削除対象のidとドキュメントのidが一致していないデータで配列が返ってくる。
//         saveInputData.value = saveInputData.value
//           .filter
//           // (d, id) => d.id !== s.doc.id
//           ();
//         console.log("Removed users:", doc.data());
//       }
//     });
//   });
</script>

<template>
  <!-- <h1>テスト</h1> -->
  <div class="content">
    <div class="information" :is-padding-left="true">
      <ProfileCard
        :is-padding-left="false"
        :isToggle="true"
        :isReadonly="false"
      />
    </div>
    <ProfileButton label="戻る" @click="mainButton" />
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
