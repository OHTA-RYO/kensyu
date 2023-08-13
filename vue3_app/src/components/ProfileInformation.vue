<script setup lang="ts">
import { useRouter } from "vue-router";
import ProfileCard from "./ProfileCard.vue";
import ProfileButton from "./ProfileButton.vue";
import { PropType } from "vue";
import { InputData, defaultInputData } from "../types";
import inputData from "./Main.vue";

const props = defineProps({
  modelValue: {
    type: Object as PropType<InputData>,
  },
  inputData: {
    type: inputData,
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value?: InputData): void;
}>();

const router = useRouter();

const mainButton = () => {
  router.push("/Main");
};
</script>

<template>
  <!-- <h1>テスト</h1> -->
  <!-- <div :is-padding-left="true"> -->
  <ProfileCard />
  <ProfileButton label="戻る" @click="mainButton" />
  <!-- </div> -->
</template>

<style scoped></style>
