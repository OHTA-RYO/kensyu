<script setup lang="ts">
import Contact from "./Contact.vue";
import { defaultInquiryDetail, InquiryDetail } from "../types";
import { inquiryDetail } from "../contact";
import { ref, onMounted } from "vue";
import { router } from "@/router";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const saveInquiryDetail = ref<InquiryDetail | undefined>(undefined);
// const isReadonly = ref(true);

onMounted(() => {
  // const getData = () =>{
  saveInquiryDetail.value = inquiryDetail.value;
  console.log(saveInquiryDetail.value);
  // }
});

const saveContact = async () => {
  try {
    const docRef = await addDoc(
      collection(db, "contacts"),
      saveInquiryDetail.value
    );
    console.log("Document written with ID: ", docRef.id);
    if (!confirm("送信が完了しました。お問合せありがとうございます。")) return;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  inquiryDetail.value = defaultInquiryDetail();
};

const contactReturn = () => {
  router.push("/Contact");
};
</script>

<template>
  <div class="preview-area">
    <h1 class="preview">preview</h1>
  </div>
  <Contact
    :isButton="true"
    :isTitle="true"
    v-model="saveInquiryDetail"
    :isReadonly="true"
  />
  <div class="sending-area">
    <button @click="saveContact">送信</button>
    <button @click="contactReturn">戻る</button>
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
