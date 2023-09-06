import { isLogin } from "@/firebase/firebaseAuth";
import { createRouter, createWebHistory, useRoute } from "vue-router";

// import { isLogin } from "../firebase/firebaseAuth";

//meta情報を持たせる。
//リダイレクト機能もつける。

export const routes = [
  {
    path: "/",
    name: "Chat_Login_Main",
    component: () => import("@/pages/Chat_Login_Main.vue"),
  },
  {
    path: "/Chat_Main",
    name: "Chat_Main",
    component: () => import("@/pages/Chat_Main.vue"),
  },
  {
    path: "/Chat_Login_Registration",
    name: "Chat_Login_Registration",
    component: () => import("@/pages/Chat_Login_Registration.vue"),
  },
  {
    path: "/Chat_Name_Registration",
    name: "/Chat_Name_Registration",
    component: () => import("@/pages/Chat_Name_Registration.vue"),
  },
  {
    path: "/Chat_Room",
    name: "/Chat_Room",
    component: () => import("@/pages/Chat_Room.vue"),
  },
  {
    path: "/Chat_Room_Creation",
    name: "/Chat_Room_Creation",
    component: () => import("@/pages/Chat_Room_Creation.vue"),
  },
  {
    path: "/ChatFriendSave",
    name: "/ChatFriendSave",
    component: () => import("@/pages/ChatFriendSave.vue"),
  },
  {
    path: "/ChatFriendList",
    name: "/ChatFriendList",
    component: () => import("@/pages/ChatFriendList.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(), // HTML5 History モード
  routes,
});

// export const route = useRoute();

// export const routerBefore = () => {
//   router.beforeEach((to, from, next) => {
//     //遷移先がパスネーム:チャットログイン以外の場合にはチャットログイン画面に飛ばす。
//     console.log(isLogin.value);
//     if (to.name !== "Chat_Login_Main" && isLogin.value === false) {
//       router.push("/");
//     } else next();
//   });
// };

// routerBefore();

// export default router;
