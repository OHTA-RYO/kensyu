<script setup lang="ts">
import { defaultTweet } from "@/db";
import type { Tweet } from "@/Types";
import type { PropType } from "vue";
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
  },

  mail: {
    type: String,
  },
  password: {
    type: String,
  },
  type: {
    type: String as PropType<"password" | "text" | "email" | "checkbox">,
  },
  placeholder: {
    type: String as PropType<
      | "User Email"
      | "User Password"
      | "ニックネームを入力して下さい。"
      | "🔍 検索"
      | "🔍 友達検索"
      | "🔍 フレンドID検索"
    >,
  },
  height: {
    type: Number,
    default: 40,
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value?: String): void;
  (e: "getEmailData", value?: string): void;
  (e: "getPasswordData", value?: string): void;
}>();

const result = computed({
  get() {
    return props.modelValue ?? "";
  },
  set(v) {
    emit("update:modelValue", v);
  },
});
</script>

<template>
  <div class="">
    <input
      :type="props.type"
      :placeholder="props.placeholder"
      v-model="result"
      :style="`height: ${props.height - 20}px`"
    />
  </div>
</template>

<style scoped>
/* .main {
  width: 320px;
  height: 24px;
} */

input {
  width: 100%;
  /* margin: 8px 0; */
  padding: 8px 0;
  /* background: rgb(230, 228, 228);
  border: none; */
}

/* .login {
  width: 320px;
  margin: 8px 0;
  padding: 16px 0;
  background: rgb(230, 228, 228);
  border: none;
} */

/* .registration {
  margin: 6px 0 4px 0;
  padding: 15px 0;
  border: 1px solid lightgray;
  width: 480px;
} */
</style>
