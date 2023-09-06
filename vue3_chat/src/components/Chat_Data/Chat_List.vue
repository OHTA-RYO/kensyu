<script setup lang="ts">
import type { PropType } from "vue";
import { computed } from "vue";
import type { Tweet, ChatRoom } from "@/Types/TweetTypes";
import { defaultTweet } from "@/db";

const props = defineProps({
  text: {
    type: Object as PropType<Tweet>,
  },
  isTweet: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div :class="{ receive: isTweet, listArea: !text?.image }">
    <ul v-if="text?.message.text">
      <li>{{ text?.message.text }}</li>
      <!-- <li>{{ text?.tweets text?.name! }}</li> -->
    </ul>
    <div class="img-container">
      <a :href="text?.image" v-if="text?.image" target="_blank">
        <img :src="text?.image" alt="" />
      </a>
    </div>
    <!-- <div>{{ isTweet }}</div> -->
  </div>
</template>

<style scoped>
ul {
  padding: 0;
  width: 100%;
}

li {
  width: 100%;
  list-style: none;
  /* word-wrap: 50px; */
}

.listArea {
  width: 320px;
  margin: 16px 0;
  border-radius: 16px;
  background: lightgreen;
}

.receive {
  width: 320px;
  margin-top: 16px;
  margin-bottom: 16px;
  margin-right: 600px;
  border-radius: 16px;
  background: lightskyblue;
}

a {
  margin: 0;
}

img {
  max-width: 320px;
  object-fit: cover;
}
</style>
