import { createRouter, createWebHistory, Router, useRouter } from "vue-router";
import Main from "../components/Main.vue";
import ProfileLogin from "../components/ProfileLogin.vue";
import ProfileInformation from "../components/ProfileInformation.vue";
import Contact from "../components/Contact.vue";
import Confirmation from "../components/Confirmation.vue";
import { isLogin } from "../firebaseAuth";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  reauthenticateWithCredential,
  // optimizeAsyncOperations,
} from "firebase/auth";

import { ref } from "vue";

const auth = getAuth();

export const routes = [
  { path: "/", name: "ProfileLogin", component: ProfileLogin },
  { path: "/Main", name: "Main", component: Main },
  {
    path: "/ProfileInformation",
    name: "ProfileInformation",
    component: ProfileInformation,
  },
  { path: "/Contact", name: "Contact", component: Contact },
  { path: "/Confirmation", name: "Confirmation", component: Confirmation },
];

export const router = createRouter({
  history: createWebHistory(), // HTML5 History モード
  routes,
});

//ログインしたかどうかを判断した。という何かしら変数が必要。

export const loginJage = ref(false);
//ifでログイン中かつprofileloginurlを叩いた時に動く内容を書く。

/**
 * ログインしていない場合に/Mainを直打ちした場合にlogin画面に自動で遷移する関数
 */
//loginjage&&
export const routerIslogin = () => {
  router.beforeEach((to, from, next) => {
    console.log(loginJage.value);
    if (!loginJage.value) return;

    //toは次にナビゲーションされる対象
    //次の遷移先がprofilelogin以外でログアウトしている場合は
    //router.pushでlogin画面に飛ばす。
    if (to.name !== "ProfileLogin" && isLogin.value === false) {
      router.push("/");
    } else next();
  });
};

// export const routerIslogin = () => {
//   if (loginJage.value === isLogin.value) {
//     router.beforeEach((to, from, next) => {
//       //toは次にナビゲーションされる対象
//       //次の遷移先がprofilelogin以外でログアウトしている場合は
//       //router.pushでlogin画面に飛ばす。
//       if (to.name !== "ProfileLogin" && isLogin.value === false) {
//         router.push("/");
//       } else next();
//     });
//   }
// };

//login画面で↑の処理をする場合にはApp.vueに71〜76を描く必要がある。App.vueに書く場合にも現在どこにいるのかを検知する何かを描く必要がある。

// router.push("/")

// export const authenticationGuard = (router: Router) => {
//   const authenticationStore = useAuthenticationStore();
//   const routingStore = useRoutingStore();

//   router.beforeEach((to) => {
//     // 既に認証されていれば何もしない
//     if (authenticationStore.isAuthenticated) {
//       return true;
//     }

//     // 未認証状態で遷移を許可するルート
//     if (['login', 'home'].includes(to.name)) {
//       return true;
//     }

//     // 認証後のリダイレクトで使う。必要に応じてパラメーターも保存しておく。
//     routingStore.setRedirectFrom(to.name);

//     return { name: 'login' };
//   });
// };
