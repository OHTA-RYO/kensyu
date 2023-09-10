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
  overflow-wrap: break-all;
}

.listArea {
  width: 320px;
  margin: 16px 16px 0 0;
  border-radius: 16px;
  background: lightgreen;
}

.receive {
  width: 320px;
  margin: 16px 16px 0 0;
  margin-right: 800px;
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

@media screen and (max-width: 820px) {
  .listArea {
    width: 280px;
    margin: 16px 24px 0 0;
    border-radius: 16px;
    background: lightgreen;
    object-fit: cover;
  }

  .receive {
    width: 280px;
    margin: 16px 16px 0 0;
    margin-right: 440px;
    border-radius: 16px;
    background: lightskyblue;
    object-fit: cover;
  }

  img {
    max-width: 280px;
    object-fit: cover;
  }
}
@media screen and (max-width: 430px) {
  li {
    font-size: 14px;
  }
  .listArea {
    width: 160px;
    margin: 16px 8px 0 0;
    border-radius: 16px;
    background: lightgreen;
    object-fit: cover;
  }

  .receive {
    width: 160px;
    margin: 16px 16px 0 0;
    margin-right: 196px;
    border-radius: 16px;
    background: lightskyblue;
    object-fit: cover;
  }

  img {
    max-width: 160px;
    object-fit: cover;
  }
}

@media screen and (max-width: 390px) {
  li {
    font-size: 12px;
  }
  .listArea {
    width: 160px;
    margin: 16px 8px 0 0;
    border-radius: 16px;
    background: lightgreen;
    object-fit: cover;
  }

  .receive {
    width: 160px;
    margin: 16px 16px 0 0;
    margin-right: 196px;
    border-radius: 16px;
    background: lightskyblue;
    object-fit: cover;
  }
}
</style>
