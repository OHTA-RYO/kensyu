<script setup lang="ts">
import { PropType, computed } from "vue";
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
});

// const emit = defineEmits(["update:modelValue"]);

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

const nameData = computed(() => {
return inputData.value.name.match(/^[ぁ-んァ-ヶー一-龯]+$/)
// return inputData.value.name.length < 4
})

const birthdayData = computed(() => {
return inputData.value.birthday.match(/^[0-9]{4}年\d{1,2}月\d{1,2}日$/)
})

// const ageData = computed(() => {
// return inputData.value.name.match(/^[ぁ-んァ-ヶー一-龯]+$/)
// })

const heightData = computed(() => {
return inputData.value.height.match(/^[0-9]+$/)
})

const weightData = computed(() => {
return inputData.value.weight.match(/^[0-9]+$/)
})

const telData = computed(() => {
return inputData.value.tel.match(/\d{2,4}-\d{2,4}-\d{4}/)
})

const mailData = computed(() => {
return inputData.value.mail.match( /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/)
})



</script>

<template>
  <div class="main-cardarea">
    <p>名前/日本語</p>
    <p v-if="nameData" class="error">漢字で入力してね</p>
    <input v-model="inputData.name" type="text" :readonly="isReadonly" />
    <div v-if="isToggle" :class="{ closearea: isPaddingLeft }">
      <p>生年月日/西暦</p>
      <p v-if="birthdayData" class="error">生年月日は西暦で入力下さい。</p>
      <input v-model="inputData.birthday" type="text" :readonly="isReadonly" />
      <p>年齢/歳</p>
      <p v-if="ageData" class="error">漢字で入力してね</p>
      <input v-model="inputData.age" type="text" :readonly="isReadonly" />
      <p>身長/cm</p>
      <p v-if="heightData" class="error">身長は数字のみ入力下さい。</p>
      <input v-model="inputData.height" type="text" :readonly="isReadonly" />
      <p>体重/kg</p>
      <p v-if="weightData" class="error">体重は数字のみ入力下さい。</p>
      <input v-model="inputData.weight" type="text" :readonly="isReadonly" />
      <p>電話番号:</p>
      <p v-if="telData" class="error">電話番号に誤りがあります。</p>
      <input v-model="inputData.tel" type="text" :readonly="isReadonly" />
      <p>メールアドレス:</p>
      <p v-if="mailData" class="error">メールアドレスに誤りがあります。</p>
      <input v-model="inputData.mail" type="text" :readonly="isReadonly" />
      <p>備考:</p>
      <textarea v-model="inputData.remarks" :readonly="isReadonly"></textarea>
    </div>
  </div>
  <!-- <button @click="">test</button> -->
  <!-- {{ inputData.name }} -->
</template>

<style scoped>
p {
  font-size: 18px;
}

.closearea {
  padding-left: 20px;
}

.error {
  color: rgb(255, 73, 73);
}
</style>
