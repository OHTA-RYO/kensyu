<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import ProfileCard from "./ProfileCard.vue";
import ProfileButton from "./ProfileButton.vue";
import { PropType, onMounted, computed, useSSRContext, ref } from "vue";
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
} from "firebase/firestore";
import { dataSharing, saveInputData } from "../db/usersdb";

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
//vue routerからクエリ情報を取得
console.log(route.query);
//profileIdにクエリ情報(id)を代入
const profileId = route.query;
//クエリと一致したデータを格納する変数を定義
const targetData = ref<InputData[]>([]);

//vue routerからクエリを取得できた。
//idから全データをfirebaseから取得するにはどうするのか。

onMounted(() => {
  dataSharing();
  //filterでidがクエリidと一致したオブジェクトデータのみ抽出したい。

  targetData.value = saveInputData.value.filter(
    (value) => value.id === profileId
  );
  console.log(targetData.value);
});
</script>

<template>
  <!-- <h1>テスト</h1> -->
  <div class="content">
    <div class="information" :is-padding-left="true">
      <ProfileCard
        :is-padding-left="false"
        :isToggle="true"
        :isReadonly="false"
        :dataSharing="dataSharing"
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
