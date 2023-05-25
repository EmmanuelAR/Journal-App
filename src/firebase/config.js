import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironments } from "../helpers";

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
};

// //DEV-PROD
// const firebaseConfig = {
//   apiKey: "AIzaSyBe-a8sKU7uPBbh2ltuPRuP5aKUGa0oqjc",
//   authDomain: "react-course-1c7bd.firebaseapp.com",
//   projectId: "react-course-1c7bd",
//   storageBucket: "react-course-1c7bd.appspot.com",
//   messagingSenderId: "735647349963",
//   appId: "1:735647349963:web:4dd231b47344174338af4e",
// };

//TESTING
// const firebaseConfig = {
//   apiKey: "AIzaSyA-p_XcTUdYdw38x2zTsVOitBZfzc2bicQ",
//   authDomain: "react-course-proddb.firebaseapp.com",
//   projectId: "react-course-proddb",
//   storageBucket: "react-course-proddb.appspot.com",
//   messagingSenderId: "143814826238",
//   appId: "1:143814826238:web:2d6e54a4bf65bfe713adaf",
// };

export const FireBaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FireBaseApp);
export const FireBaseDB = getFirestore(FireBaseApp);
