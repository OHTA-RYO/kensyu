<script setup lang="ts">
const props = defineProps({
  label: { type: String },
  label5: { type: String },
});

const emit = defineEmits<{
  (e: "labelChange", value: string): void;
  (e: "label2Change", value: string): void;
}>();

function labelChange() {
  emit("labelChange", "変更後");
  // emit("label2Change", "変更後");
}
function label2Change() {
  // emit("labelChange", "変更後");
  emit("label2Change", "変更後");
}
</script>

<template>
  <h1>{{ label }}</h1>
  <h2>{{ label5 }}</h2>
  <!-- <button @click="labelChange">ボタン</button> -->
  <button :label2Change="label2Change" :labelChange="labelChange">
    ボタン
  </button>
  <!-- <button @click="label2Change">ボタン</button> -->
</template>
