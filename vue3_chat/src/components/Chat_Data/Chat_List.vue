<script setup lang="ts">
import type { PropType } from "vue";
import { computed } from "vue";
import type { Tweet, ChatRoom } from "@/Types/TweetTypes";
import { defaultTweet } from "@/db";

const props = defineProps({
  text: {
    type: Object as PropType<Tweet>,
  },
  // text: {
  //   type: Object as PropType<Tweet | ChatRoom>,
  // },
  // text: {
  //   type: String,
  // },
});
</script>

<template>
  <div class="list-area">
    <ul>
      <li>{{ text?.tweets }}</li>
      <!-- <li>{{ text?.tweets text?.name! }}</li> -->
    </ul>
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

.list-area {
  width: 240px;
  /* word-wrap: 64px; */
  margin: 16px 0;
  border: 1px solid black;
  border-radius: 16px;
  background: lightgreen;
}
</style>
