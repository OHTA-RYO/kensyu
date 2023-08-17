<script setup lang="ts">
import { PropType, computed } from "vue";
import { InputData, defaultInputData } from "../typesTest";
import ProfileCardD from "./ProfileCardD.vue";

const props = defineProps({
  modelValue: {
    type: Object as PropType<InputData>,
  },
  isToggle: {
    type: Boolean,
    defaulte: false,
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value?: InputData): void;
  // (e: "update:modelValue", value?: saveInputData):void;
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
  <div
    :class="['profileCardContent', { 'profileCardContent-active': isToggle }]"
  >
    <div class="namearea">
      <p>名前:</p>
      <input type="text" v-model="inputData.name" />
    </div>

    <div class="nameFarea" v-if="isToggle">
      <p>ふりがな:</p>

      <input type="text" v-model="inputData.name2" />
    </div>
    <div class="birthdayarea" v-if="isToggle">
      <p>生年月日:</p>
      <input type="text" v-model="inputData.birthday" />
    </div>
    <div class="agearea" v-if="isToggle">
      <p>年齢/歳</p>
      <input type="text" style="width: 80px" />
    </div>
    <div class="heightarea" v-if="isToggle">
      <p>身長/cm</p>
      <input type="text" style="width: 80px" v-model="inputData.height" />
    </div>
    <div class="weightarea" v-if="isToggle">
      <p>体重/kg</p>
      <input type="text" style="width: 80px" v-model="inputData.weight" />
    </div>
    <div class="telarea" v-if="isToggle">
      <p>電話番号:</p>
      <input type="text" v-model="inputData.tel" />
    </div>
    <div class="mailarea" v-if="isToggle">
      <p>メールアドレス:</p>
      <input type="text" v-model="inputData.mail" />
    </div>
    <div class="remarksarea" v-if="isToggle">
      <p>備考:</p>
      <textarea v-model="inputData.remarks"></textarea>
    </div>
  </div>
</template>

<style scoped>
.profileCardContent {
  width: 1700px;
  display: flex;
  margin: 32px auto 32px 32px;
  padding-bottom: 16px;
}

.profileCardContent-active {
  justify-content: space-around;
  margin: 32px auto;
}

p {
  margin-top: 16px;
}
</style>
