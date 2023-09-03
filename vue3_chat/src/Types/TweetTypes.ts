import { ref } from "vue";

// export type Tweet = {
//   id: string;
//   name: string;
//   time: string;
//   tweets: string;
// };

export type Name = {
  nameid: string; //id===uid
  name: string;
  friends: string[];
  image: string;
};

export type ChatRoom = {
  roomid: string; //documentId
  roomname: string;
  nameid: string[]; //["nameid1","nameid2"]
  // name: string[]; //["name1","name2"]
  tweetsid: string[]; //["tweetsid1", "tweetsid2"]
};

export type Tweet = {
  tweetsId: string; //documentId
  nameId: string; //userID
  time: Date;
  image: string;
  message: {
    text: string;
    // sendAt: Date;
    sendAt: string;
  };
};
