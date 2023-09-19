import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/index";
import "./firebase/firebase/";
import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

const app = createApp(App);
app.use(router).mount;
app.use(Quasar, {});
app.mount("#app");
// createApp(App).use(router).mount("#app");
