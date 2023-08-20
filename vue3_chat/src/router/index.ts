import { createRouter, createWebHistory } from "vue-router";
import Chat_Main from "../components/Chat_Data/Chat_Main.vue";
import Chat_Login_Main from "../components/Chat_Login/Chat_Login_Main.vue";
// import HomeViewVue from "@/views/HomeView.vue";

export const routes = [
  {
    path: "/",
    name: "Chat_Login_Main",
    component: Chat_Login_Main,
  },
  {
    path: "/Chat_Main",
    name: "Chat_Main",
    component: Chat_Main,
  },
];

export const router = createRouter({
  history: createWebHistory(), // HTML5 History モード
  routes,
});
// export default router;
