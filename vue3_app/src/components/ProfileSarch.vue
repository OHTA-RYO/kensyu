<script setup lang="ts">
defineProps({
  lablel: { type: String },
});
</script>

<template>
  <p>{{ lablel }}</p>
  <input type="text" />
</template>

<style scoped>
p {
  font-size: 18px;
}
</style>
