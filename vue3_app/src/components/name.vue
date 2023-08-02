<script setup lang="ts">
const props = defineProps({
  staffName: { type: String },
  modelValue: { type: String },
});

const emit = defineEmits<{
  (e: "changeStaffName", value: string): void;
  (e: "update:modelValue", value: string): void;
}>();

function changeStaffName() {
  emit("update:modelValue", "かきく");
  // props.staffName = "かきく";
  emit("changeStaffName", "かきく");
}

// props.staffName = "かきく";
//データをもらって表示ができて
//書き換えもできる。
</script>
<template>
  <!-- <input type="text" : /> -->
  <div>{{ modelValue }}</div>
  <div>{{ staffName }}</div>
  <button @click="changeStaffName">ボタン</button>
  <!-- <input type="text" /> -->
</template>

<style scoped>
button {
  background: lightgray;
  width: 48px;
  height: 32px;
  cursor: pointer;
  border-radius: 4px;
}
</style>
