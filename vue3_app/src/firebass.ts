// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCYHT_3BE6QpjiaO2XoQx5zqxKQVxMR_kU",
  authDomain: "vue3app-7dd14.firebaseapp.com",
  projectId: "vue3app-7dd14",
  storageBucket: "vue3app-7dd14.appspot.com",
  messagingSenderId: "83310436161",
  appId: "1:83310436161:web:c3d476db485e5b6f3ccbc0",
  measurementId: "G-C8J92TZM9E",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
//  export const firebaseConfig = {
//     FIREBASE_CONFIGURATION
// };

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
