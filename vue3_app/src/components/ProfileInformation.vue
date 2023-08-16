<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import ProfileCard from "./ProfileCard.vue";
import ProfileButton from "./ProfileButton.vue";
import {
  PropType,
  onMounted,
  computed,
  useSSRContext,
  ref,
  isReadonly,
} from "vue";
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

const props = defineProps({
  modelValue: {
    type: Object as PropType<InputData>,
  },
  isToggle: {
    type: Boolean,
    default: false,
  },
  isReadonly: {
    type: Boolean,
    default: true,
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
//vue routerからクエリ情報を取得
console.log(route.query.id);
//profileIdにクエリ情報(id)を代入
const profileId = route.query.id;
const profileId2 = profileId!.toString();
console.log(profileId);

//クエリと一致したデータを格納する変数を定義
const targetData = ref<InputData | undefined>(undefined);

//vue routerからクエリを取得できた。
//idから全データをfirebaseから取得するにはどうするのか。

// onMounted(() => {
//   dataSharing();
//   //filterでidがクエリ
// });

const findData = () => {
  //undefindの時はreturnが邪魔をしていたから削除。
  //v-model＝targetDataでデータを反映
  targetData.value = saveInputData.value.find(
    (d: InputData) => d.id === profileId2
  );
  console.log(targetData.value);
};
findData();
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
        :isReadonly="true"
        :dataSharing="dataSharing"
        v-model="targetData"
      />
    </div>
    <ProfileButton label="戻る" @click="mainButton" />
  </div>
  <div class="button-area">
    <ProfileButton label="編集" @click="!isReadonly" />
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
