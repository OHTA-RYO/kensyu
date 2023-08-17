<script setup lang="ts">
import kodomo from "./kodomo.vue";
import { ref } from "vue";

const label = ref<string>("変化前");
const label2 = ref<string>("変化前");

function labelChangeEmit(value: string) {
  label.value = value;
}
function label2ChangeEmit(value: string) {
  label2.value = value;
}
</script>

<template>
  <kodomo :label="label" @labelChange="labelChangeEmit" />
  <!-- <kodomo :label5="label2" @label2Change="label2ChangeEmit" /> -->
</template>
