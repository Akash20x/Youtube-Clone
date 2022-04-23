import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD00TisE6fNy1jwtb-m-rJ4QVvCmZ6lRdw",
  authDomain: "clone-c8e39.firebaseapp.com",
  projectId: "clone-c8e39",
  storageBucket: "clone-c8e39.appspot.com",
  messagingSenderId: "636616593304",
  appId: "1:636616593304:web:32a50a681bde665071e5ed"
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const provider = new GoogleAuthProvider();
export default firebaseApp;
