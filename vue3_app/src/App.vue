<script setup lang="ts">
import Main from "./components/Profile_data/Main.vue";
// import sampleN from "./components/sampleN.vue";
import Test from "./components/gomi/Test.vue";
// import oya from "./components/oya.vue";
// import ProfileLogin from "./components/ProfileLogin.vue";
// import ProfileInformation from "./components/ProfileInformation.vue";

import { loginJage } from "./router";

//v-ifを入れた。
</script>

<template>
  <div v-if="loginJage">
    <router-view></router-view>
  </div>
  <!-- <Main /> -->
  <!-- <ProfileLogin /> -->
  <!-- <sampleN /> -->
  <!-- <Test /> -->
  <!-- <oya /> -->
  <!-- <ProfileInformation /> -->
</template>

<style scoped></style>
