<script setup lang="ts">

defineProps({
  label: { type: String },
});

</script>

<template>
<button>{{ label }}</button>
</template>

<style scoped >

button {
  
  /* background: gray; */
  /* color: white; */
  width: 48px;
  height: 32px;
  cursor: pointer;
  border-radius: 4px;
  
}
</style>