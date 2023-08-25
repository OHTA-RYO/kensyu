<script setup lang="ts">
import { defaultTweet } from "@/db";
import type { Tweet } from "../../Chat_Types/types";
import type { PropType } from "vue";
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Object as PropType<Tweet>,
  },

  mail: {
    type: String,
  },
  password: {
    type: String,
  },
  type: {
    type: String as PropType<"password" | "text" | "email">,
  },
  placeholder: {
    type: String as PropType<"User Email" | "User Password" | "フルネーム">,
  },
  isMain: {
    type: Boolean,
    default: false,
  },
  isLogin: {
    type: Boolean,
    default: false,
  },
  isRegistration: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value?: Tweet): void;
  (e: "getEmailData", value?: string): void;
  (e: "getPasswordData", value?: string): void;
}>();

const result = computed({
  get() {
    return props.modelValue ?? defaultTweet();
  },
  set(v) {
    emit("update:modelValue", v);
  },
});

const getDataFunc = () => {
  emit("getEmailData");
  emit("getPasswordData");
};

// const getPasswordDataFunc = () => {
// };
</script>

<template>
  <div class="input-area">
    <input
      :type="props.type"
      :placeholder="props.placeholder"
      :class="{ main: isMain, login: isLogin, registration: isRegistration }"
      @change="getDataFunc"
    />
  </div>
</template>

<style scoped>
.main {
  width: 320px;
  height: 24px;
}

.login {
  width: 320px;
  margin: 8px 0;
  padding: 16px 0;
  background: rgb(230, 228, 228);
  border: none;
}
.registration {
  margin: 6px 0 4px 0;
  padding: 15px 0;
  border: 1px solid lightgray;
  width: 480px;
}
</style>
