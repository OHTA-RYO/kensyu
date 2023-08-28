import { createRouter, createWebHistory } from "vue-router";

// import HomeViewVue from "@/views/HomeView.vue";

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
];

export const router = createRouter({
  history: createWebHistory(), // HTML5 History モード
  routes,
});
// export default router;
