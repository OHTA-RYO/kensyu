import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app, db } from "../firebase/firebase";
import { ref } from "vue";

const auth = getAuth();
export const registerUser = async (email: string, password: string) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

// export const auth = getAuth(app);
