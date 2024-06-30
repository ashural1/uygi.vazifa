// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbMEd4OlaV5f7nRvHzkGpXR8CZf9Gc6Sg",
  authDomain: "home-4763b.firebaseapp.com",
  projectId: "home-4763b",
  storageBucket: "home-4763b.appspot.com",
  messagingSenderId: "226658652888",
  appId: "1:226658652888:web:7ef48c243e416cd115bdad",
  measurementId: "G-MKR5PF2CT6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
