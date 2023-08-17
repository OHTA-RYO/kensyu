<script setup lang="ts">
import { router } from "../router/index";
import { inquiryDetail } from "../contact";

const props = defineProps({
  // modelValue: {
  //   // type: Object as PropType<InputData>,
  // },

  isButton: {
    type: Boolean,
    default: false,
  },
  isTitle: {
    type: Boolean,
    default: false,
  },
  isReadonly: {
    type: Boolean,
    default: false,
  },
});
const preview = () => {
  if (!confirm("入力したデータを確認する")) return;
  console.log(inquiryDetail.value);
  router.push("./Confirmation");
};
// if (!confirm(`${targetData.name}削除しますか？`)) return;
const mainButton = () => {
  router.push("/Main");
};

// const label = "contact";
</script>

<template>
  <div class="main-container">
    <div class="title-area">
      <h1 :class="{ title: isTitle }">contact</h1>
    </div>
    <div class="contact-container">
      <p>氏名</p>
      <input type="text" v-model="inquiryDetail.name" :readonly="isReadonly" />
      <p>電話番号</p>
      <input type="text" v-model="inquiryDetail.tell" :readonly="isReadonly" />
      <p>メールアドレス</p>
      <input type="text" v-model="inquiryDetail.maill" :readonly="isReadonly" />
      <div class="radio-area">
        <div class="contact-radio">
          <p>問合せ内容</p>
          <input
            type="radio"
            name="contact"
            value="資料請求"
            v-model="inquiryDetail.info"
            :readonly="isReadonly"
          />
          資料請求
          <input
            type="radio"
            name="contact"
            value="電話でやり取り"
            v-model="inquiryDetail.info"
            :readonly="isReadonly"
          />
          電話でやり取り
          <input
            type="radio"
            name="contact"
            value="メールでやり取り"
            v-model="inquiryDetail.info"
            :readonly="isReadonly"
          />メールでやり取り
        </div>
        <div class="contact-day">
          <p>希望日時</p>
          <input
            type="radio"
            name="day"
            value="いつでも"
            v-model="inquiryDetail.times"
            :readonly="isReadonly"
          />いつでも
          <input
            type="radio"
            name="day"
            value="平日のみ"
            v-model="inquiryDetail.times"
            :readonly="isReadonly"
          />平日のみ
          <input
            type="radio"
            name="day"
            value="休日のみ"
            v-model="inquiryDetail.times"
            :readonly="isReadonly"
          />休日のみ
        </div>
      </div>
      <div class="remarks-container">
        <p>備考</p>
        <textarea
          v-model="inquiryDetail.remarks"
          :readonly="isReadonly"
        ></textarea>
      </div>
    </div>
    <div :class="{ previewArea: isButton }" class="button-area">
      <button @click="preview">プレビュー</button>
      <button @click="mainButton">メインへ戻る</button>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  width: 100%;
}
.title-area {
  width: 100%;
  /* padding: ; */
  background: rgb(255, 255, 255);
}

.title {
  display: none;
}

h1 {
  font-size: 48px;
  padding-left: 64px;
}

.contact-container {
  width: 100%;
  padding: 32px 0 32px 64px;
  background: rgb(210, 209, 209);
}

p {
  font-size: 24px;
  /* margin: 16px 0 16px; */
  margin-top: 24px;
  width: 178px;
}

input {
  width: 200px;
}

.contact-radio input {
  width: 64px;
  margin-top: 16px;
}

.contact-day input {
  width: 64px;
  margin-top: 16px;
}

.remarks-container textarea {
  margin-top: 8px;
  width: 320px;
  height: 128px;
}

.button-area {
  width: 100%;
  background: rgb(210, 209, 209);
}

button {
  width: 96px;
  height: 48px;
  margin: 0 0 32px 64px;
  /* padding: 32px 0 32px 64px; */
}

.previewArea {
  display: none;
}

input[type="radio"][readonly] {
  pointer-events: none;
}
</style>
