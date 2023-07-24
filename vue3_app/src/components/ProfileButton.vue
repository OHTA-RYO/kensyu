<script setup lang="ts">
// import { defineEmits } from 'vue';

// const emit = defineEmits()



defineProps({
  label: { type: String },
});
</script>

<template>
  <button>{{ label }}</button>
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
