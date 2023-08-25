import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsYXGWpam_LwQF3CgIxxGOj8GY0nzJTts",
  authDomain: "vue3chat-40df5.firebaseapp.com",
  projectId: "vue3chat-40df5",
  storageBucket: "vue3chat-40df5.appspot.com",
  messagingSenderId: "559022862894",
  appId: "1:559022862894:web:994997677fbeee46d9e5bf",
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815,
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

// Initialize Firebase
