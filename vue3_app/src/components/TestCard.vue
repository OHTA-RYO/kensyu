<script setup lang="ts">
import { PropType, computed } from "vue";
import { InputData,defaultInputData } from "../typesTest";

const props = defineProps({
  modelValue: {
    type: Object as PropType<InputData>,
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value?: InputData): void;
}>();

const inputData = computed({
  get() {
    return props.modelValue ?? defaultInputData();
  },
  set(v) {
    emit("update:modelValue", v);
  },
});
</script>

<template>
  <div class="profileCardContent">
    <div class="namearea">
      <p>名前:</p>
      <input type="text" v-model="inputData.name" />
    </div>
    <div class="nameFarea">
      <p>ふりがな:</p>
      <input type="text" v-model="inputData.name2"/>
    </div>
    <div class="birthdayarea">
      <p>生年月日:</p>
      <input type="text" v-model="inputData.birthday"  />
    </div>
    <div class="agearea">
      <p>年齢/歳</p>
      <input type="text" style="width: 80px" />
    </div>
    <div class="heightarea">
      <p>身長/cm</p>
      <input type="text" style="width: 80px" v-model="inputData.height" />
    </div>
    <div class="weightarea">
      <p>体重/kg</p>
      <input type="text" style="width: 80px" v-model="inputData.weight" />
    </div>
    <div class="telarea">
      <p>電話番号:</p>
      <input type="text" v-model="inputData.tel" />
    </div>
    <div class="mailarea">
      <p>メールアドレス:</p>
      <input type="text" v-model="inputData.mail" />
    </div>
    <div class="remarksarea">
      <p>備考:</p>
      <textarea v-model="inputData.remarks" ></textarea>
    </div>

    <!-- <div class="profileCardInput">
    </div> -->
  </div>
</template>

<style scoped>
.profileCardContent {
  width: 1700px;
  display: flex;
  justify-content: space-around;
  margin: 32px auto;
  padding-bottom: 16px;
}

p {
  margin-top: 16px;
}
</style>
