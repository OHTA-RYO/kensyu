import { ref } from "vue";
// import { Tweet } from "../Chat_Types/types";
// import { Tweet } from "@/Chat_Types";
import type { Tweet, Name } from "../Types/TweetTypes";

export const defaultTweet = (): Tweet => {
  return {
    id: "",
    name: "",
    time: new Date().toLocaleTimeString("ja-JP", {
      hour: "numeric",
      minute: "numeric",
    }),
    tweets: "",
  };
};

export const defaultName = (): Name => {
  return {
    nameid: "",
    name: "",
  };
};
