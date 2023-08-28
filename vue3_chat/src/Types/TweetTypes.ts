import { ref } from "vue";

export type Tweet = {
  id: string;
  name: string;
  time: string;
  tweets: string;
};

export type Name = {
  nameid: string; //id===uid
  name: string;
};

type ChatRoom = {
  id: string; //documentId
  roomname: string;
  nameid: string[]; //["nameid1","nameid2"]
  name: string[]; //["name1","name2"]
  tweets: string[]; //["tweetsid1", "tweetsid2"]
};

type TweetCollection = {
  id: string; //documentId
  nameId: string; //userID
  message: {
    text: string;
    sendAt: Date;
  };
};
