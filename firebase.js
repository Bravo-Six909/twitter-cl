import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3AtHgj82SOEnPGIrWH-JKWOj9ZZs3kow",
  authDomain: "twitter-cl-d8c89.firebaseapp.com",
  projectId: "twitter-cl-d8c89",
  storageBucket: "twitter-cl-d8c89.appspot.com",
  messagingSenderId: "964822012220",
  appId: "1:964822012220:web:0b17299f0378e38905ce39"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
const provider = new GoogleAuthProvider();

export { auth,db,provider };