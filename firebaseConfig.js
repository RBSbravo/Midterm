// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import{getFirestore}from "firebase/firestore";
import{getDatabase}from "firebase/database";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0mZhb7CiO-5_5VweZ9GrZG9975rW47zI",
  authDomain: "group3firebase.firebaseapp.com",
  databaseURL:"https://group3firebase-default-rtdb.firebaseio.com/",
  projectId: "group3firebase",
  storageBucket: "group3firebase.appspot.com",
  messagingSenderId: "853237508290",
  appId: "1:853237508290:web:54291d8d3e82686b3f335b",
  measurementId: "G-WB4M9ECF79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const rtdb = getDatabase(app);
const db = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, auth,db,rtdb };