<script setup lang="ts">
import { PropType, computed, watch } from "vue";
import { InputData, defaultInputData } from "../types";

const props = defineProps({
  modelValue: {
    type: Object as PropType<InputData>,
  },
  isToggle: {
    type: Boolean,
    default: false,
  },
  isPaddingLeft: {
    type: Boolean,
    default: true,
  },
  isReadonly: {
    type: Boolean,
    default: true,
  },
  isSaveInputOpen: {
    type: Boolean,
    default: false,
  },
});

// const emit = defineEmits(["update:modelValue"]);

const emit = defineEmits<{
  (e: "update:modelValue", value?: InputData): void;
  (e: "nameData", value: boolean): void; //save出来るならtrue
  (e: "mailData", value: boolean): void; //save出来るならtrue
  (e: "telData", value: boolean): void; //save出来るならtrue
  (e: "heightData", value: boolean): void; //save出来るならtrue
  (e: "weightData", value: boolean): void; //save出来るならtrue
  (e: "birthdayData", value: boolean): void; //save出来るならtrue
  (e: "isboolean", value: boolean): void; //save出来るならtrue
}>();

const inputData = computed({
  get() {
    return props.modelValue ?? defaultInputData();
  },
  set(v) {
    emit("update:modelValue", v);
  },
});

// /^[ぁ-んァ-ヶー一-龯]+$/

const nameData = computed(() => {
  if (!inputData.value.name) return false;
  return !inputData.value.name.match(/[^\x01-\x7E]/);
  // return inputData.value.name.length < 4
});

const birthdayData = computed(() => {
  if (!inputData.value.birthday) return false;
  return !inputData.value.birthday.match(/^[0-9]{4}年\d{1,2}月\d{1,2}日$/);
});

const heightData = computed(() => {
  if (!inputData.value.height) return false;
  return !inputData.value.height.match(/^[0-9]+$/);
});

const weightData = computed(() => {
  if (!inputData.value.weight) return false;
  return !inputData.value.weight.match(/^[0-9]+$/);
});

const telData = computed(() => {
  if (!inputData.value.tel) return false;
  return !inputData.value.tel.match(/\d{2,4}-\d{2,4}-\d{4}/);
});

const mailData = computed(() => {
  if (!inputData.value.mail) return false;
  return !inputData.value.mail.match(
    /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
  );
});

//名前〜メールアドレスにエラー表示がある場合は保存できないようにしたい。
//その為に必要なモノnameData〜がtrue,falseか
//↑のデータをまとめる関数も必要。

function isAbleToSave() {
  console.log(nameData.value);
  console.log(mailData.value);
}

//watchの中にnameDataなどのtrue,falseを見る関数を作る。

//nameDataなどが全て配列に入れる。
//全てがfalseになったらok
const errorBox = [
  nameData,
  mailData,
  birthdayData,
  heightData,
  weightData,
  telData,
];

watch(
  [
    nameData,
    mailData,
    birthdayData,
    heightData,
    weightData,
    telData,
    inputData,
  ],
  () => {
    const booleans = () => {
      if (
        nameData.value === false &&
        mailData.value === false &&
        telData.value === false &&
        birthdayData.value === false &&
        heightData.value === false &&
        weightData.value === false
      ) {
        return false;
      }
      return true;
    };
    const isboolean = booleans();
    emit("isboolean", isboolean);
    console.log(isboolean);
  },
  { deep: true }
);

// console.log("テスト");
//     emit("nameData", nameData.value);
//     emit("mailData", mailData.value);
//     emit("telData", telData.value);
//     emit("birthdayData", birthdayData.value);
//     emit("heightData", heightData.value);
//     emit("weightData", weightData.value);
// console.log(nameData.value);
// console.log(mailData.value);
// console.log(telData.value);
// console.log(birthdayData.value);
// console.log(heightData.value);
// console.log(weightData.value);
//trueの時に保存ボタンを押せなくしたい。
//emitで親にデータを渡すことはできた。
//必要なことは

// emit("labelChange", "変更後");

// function labelChange() {
//   emit("labelChange", "変更後");
//   // emit("label2Change", "変更後");
// }
</script>

<template>
  <div class="main-cardarea">
    <p>名前/日本語</p>
    <p v-if="nameData" class="error">漢字・ひらがなで入力して下さい。</p>
    <input v-model="inputData.name" type="text" :readonly="isReadonly" />
    <div v-if="isToggle" :class="{ closearea: isPaddingLeft }">
      <p>生年月日/西暦</p>
      <p v-if="birthdayData" class="error" :birthdayData="birthdayData">
        生年月日は西暦で入力下さい。
      </p>
      <input v-model="inputData.birthday" type="text" :readonly="isReadonly" />
      <p>年齢/歳</p>
      <input type="text" :readonly="isReadonly" :value="inputData.age" />
      <p>身長/cm</p>
      <p v-if="heightData" class="error" :heightData="heightData">
        身長は半角数字のみ入力下さい。
      </p>
      <input v-model="inputData.height" type="text" :readonly="isReadonly" />
      <p>体重/kg</p>
      <p v-if="weightData" class="error" :weightData="weightData">
        体重は半角数字のみ入力下さい。
      </p>
      <input v-model="inputData.weight" type="text" :readonly="isReadonly" />
      <p>電話番号:</p>
      <p v-if="telData" class="error" :telData="telData">
        電話番号は半角ハイフンありで入力下さい。
      </p>
      <input v-model="inputData.tel" type="text" :readonly="isReadonly" />
      <p>メールアドレス:</p>
      <p v-if="mailData" class="error" :mailData="mailData">
        メールアドレスに誤りがあります。
      </p>
      <input v-model="inputData.mail" type="text" :readonly="isReadonly" />
      <p>備考:</p>
      <textarea v-model="inputData.remarks" :readonly="isReadonly"></textarea>
      <div :class="{ imagetitle: isSaveInputOpen }">
        <p>画像:</p>
        <!-- <div class="save-image"></div> -->
        <img :src="inputData.image" alt="" class="save-image" />
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  font-size: 18px;
}

.closearea {
  padding-left: 20px;
}

.imagetitle {
  display: none;
}

.save-image {
  width: 50%;
  height: 50%;
  overflow: hidden;
}

.error {
  color: rgb(255, 73, 73);
}
</style>
