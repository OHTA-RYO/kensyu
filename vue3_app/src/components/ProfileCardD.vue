<script setup lang="ts">



</script>

<template>
  <div class="main-cardarea">
    <p>名前/日本語</p>
    <input type="text" value="山田 太郎" readonly  />
    <div class="closearea">
    <p>生年月日/西暦</p>
    <input type="text" value="1994年1月1日" readonly />
    <p>年齢/歳</p>
    <input type="text" value="28歳" readonly />
    <p>身長/cm</p>
    <input  type="text" value="170cm" readonly />
    <p>体重/kg</p>
    <input  type="text" value="60kg" readonly />
    <p>電話番号:</p>
    <input  type="text" value='090-1234-5678' readonly />
    <p>メールアドレス:</p>
    <input  type="text" value="t-yamada@test.com" readonly  />
    <p>備考:</p>
    <textarea readonly>趣味は....</textarea>
    </div>
  </div>
  <!-- <button @click="">test</button> -->
  <!-- {{ inputData.name }} -->
</template>

<style scoped>
p {
  font-size: 18px;
}

.closearea {
  display: none;
}
</style>
