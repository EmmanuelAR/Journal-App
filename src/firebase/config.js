import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBe-a8sKU7uPBbh2ltuPRuP5aKUGa0oqjc",
  authDomain: "react-course-1c7bd.firebaseapp.com",
  projectId: "react-course-1c7bd",
  storageBucket: "react-course-1c7bd.appspot.com",
  messagingSenderId: "735647349963",
  appId: "1:735647349963:web:4dd231b47344174338af4e",
};

export const FireBaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FireBaseApp);
export const FireBaseDB = getFirestore(FireBaseApp);
