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
</script>

<template>
  <div class="main-cardarea">
    <p>名前/日本語</p>
    <input v-model="inputData.name" type="text" />
    <div class="closearea" v-if="isToggle">
      <p>生年月日/西暦</p>
      <input v-model="inputData.birthday" type="text" />
      <p>年齢/歳</p>
      <input v-model="inputData.age" type="text" />
      <p>身長/cm</p>
      <input v-model="inputData.height" type="text" />
      <p>体重/kg</p>
      <input v-model="inputData.weight" type="text" />
      <p>電話番号:</p>
      <input v-model="inputData.tel" type="text" />
      <p>メールアドレス:</p>
      <input v-model="inputData.mail" type="text" />
      <p>備考:</p>
      <textarea v-model="inputData.remarks"></textarea>
    </div>
  </div>
  <!-- <button @click="">test</button> -->
  <!-- {{ inputData.name }} -->
</template>

<style scoped>
p {
  font-size: 18px;
}
</style>
