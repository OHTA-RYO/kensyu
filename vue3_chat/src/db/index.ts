import { ref } from "vue";
// import { Tweet } from "../Chat_Types/types";
// import { Tweet } from "@/Chat_Types";
import type { Tweet } from "../Chat_Types/types";

export const defaultTweet = (): Tweet => {
  return {
    id: "",
    name: "",
    time: new Date(),
    tweets: "",
  };
};
