<script setup lang="ts">
import type { PropType } from "vue";
import { computed } from "vue";
import type { Tweet, ChatRoom } from "@/Types/TweetTypes";
import { defaultTweet } from "@/db";

const props = defineProps({
  text: {
    type: String,
  },
  modelValue: {
    type: Boolean,
  },
  // isCheckbox: {
  //   type: Boolean,
  //   default: true,
  // },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const result = computed({
  get() {
    return props.modelValue;
  },
  set(v: boolean) {
    emit("update:modelValue", v);
  },
});
//checkboxのコンポーネントでbooleanの引数を渡す。
//emitでtrue falseを受け取れるように。
</script>
<template>
  <div class="main">
    <input type="checkbox" class="checkbox" v-model="result" />
    <div @click="result = !result">{{ text }}</div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
}
.checkbox {
  /* width: 100%; */
  width: 24px;
  height: 24px;
  margin: 0 24px 0 0;
}

label {
  font-size: 24px;
  /* margin-bottom: 4px; */
}
</style>
