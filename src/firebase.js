// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBaewXodOzq_bqgwWrG7EOXheI0az7r24",
  authDomain: "organetravels.firebaseapp.com",
  projectId: "organetravels",
  storageBucket: "organetravels.firebasestorage.app",
  messagingSenderId: "949887032950",
  appId: "1:949887032950:web:ab989b95c967b54800c957",
  measurementId: "G-2VDRWTJX28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
