import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { router, routerIslogin } from "./router/index";
import { loginSearch } from "./firebaseAuth";

createApp(App).use(router).mount("#app");

loginSearch();
routerIslogin();

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// main.ts
