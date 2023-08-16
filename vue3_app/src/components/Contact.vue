<script setup lang="ts"></script>

<template>
  <div class="main-container">
    <div class="title">
      <h1>お問合せ</h1>
    </div>
    <div class="contact-container">
      <p>氏名</p>
      <input type="text" />
      <p>メールアドレス</p>
      <input type="text" />
      <p>電話番号</p>
      <input type="text" />
      <div class="radio-area">
        <div class="contact-radio">
          <p>問合せ内容</p>
          <input type="radio" name="contact" value="資料請求" />
          <div>資料請求</div>
          <input type="radio" name="contact" value="電話でやり取り" />
          <div>電話でやり取り</div>
          <input
            type="radio"
            name="contact"
            value="メールでやり取り"
          />メールでやり取り
        </div>
        <div class="contact-day">
          <p>希望日時</p>
          <input type="radio" name="day" value="いつでも" />いつでも
          <input type="radio" name="day" value="平日のみ" />平日のみ
          <input type="radio" name="day" value="休日のみ" />休日のみ
        </div>
      </div>
      <p>備考</p>
      <textarea></textarea>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  width: 100%;
}
.title {
  width: 100%;
  /* padding: ; */
  background: rgb(197, 255, 255);
}

h1 {
  font-size: 40px;
  padding: 32px 0 32px 64px;
}

.contact-container {
  width: 100%;
  padding: 32px 0 32px 64px;
}

p {
  font-size: 24px;
  /* margin: 16px 0 16px; */
  margin-top: 24px;
}

input {
  width: 240px;
}

.contact-radio {
  display: flex;
  flex-direction: column;
}
</style>
