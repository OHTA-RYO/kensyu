<script setup lang="ts">
import Contact from "./Contact.vue";
import { inquiryDetail, InquiryDetail } from "../types";
import { ref, onMounted } from "vue";

const saveInquiryDetail = ref<InquiryDetail | undefined>(undefined);

onMounted(() => {
  saveInquiryDetail.value = inquiryDetail.value;
  console.log(saveInquiryDetail.value);
});
</script>

<template>
  <div class="preview-area">
    <h1 class="preview">preview</h1>
  </div>
  <Contact :isButton="true" :isTitle="true" v-model="saveInquiryDetail" />
  <div class="sending-area">
    <button>送信</button>
  </div>
</template>

<style scoped>
.preview-area {
  width: 100%;
  /* padding: ; */
  background: rgb(255, 255, 255);
}
.preview {
  font-size: 48px;
  padding-left: 64px;
}

.sending-area {
  width: 100%;
  background: rgb(210, 209, 209);
}

button {
  width: 96px;
  height: 48px;
  margin: 0 0 32px 64px;
  /* padding: 32px 0 32px 64px; */
}
</style>
