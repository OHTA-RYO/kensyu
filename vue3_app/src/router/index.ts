import { createRouter, createWebHistory } from "vue-router";
import Main from "../components/Main.vue";
import ProfileLogin from "../components/ProfileLogin.vue";

const routes = [
  { path: "/", name: "ProfileLogin", component: ProfileLogin },
  { path: "/Main", name: "main", component: Main },
];

const router = createRouter({
  history: createWebHistory(), // HTML5 History モード
  routes,
});

export default router;
