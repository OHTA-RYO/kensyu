<script setup lang="ts">
import { computed } from 'vue';

const props = 
defineProps({
  lablel: { type: String },
  modelValue: {
    type: String ,
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value?: string): void;
}>();


const inputData = computed({
  get() {
    return props.modelValue ??'' ;
  },
  set(v) {
    emit("update:modelValue", v);
  },
});


</script>

<template>
  <p>{{ lablel }}</p>
  <input type="text" v-model="inputData" />
</template>

<style scoped>
p {
  font-size: 18px;
}
</style>
