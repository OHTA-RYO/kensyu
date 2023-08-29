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

export type ChatRoom = {
  id: string; //documentId
  roomname: string;
  nameid: string[]; //["nameid1","nameid2"]
  name: string[]; //["name1","name2"]
  tweetsid: string[]; //["tweetsid1", "tweetsid2"]
};

export type TweetCollection = {
  id: string; //documentId
  nameId: string; //userID
  message: {
    text: string;
    // sendAt: Date;
    sendAt: string;
  };
};
