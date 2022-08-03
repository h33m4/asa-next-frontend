// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ98XUmTgSgT4GJKmkrLxe4pRwWa9S8BA",
  authDomain: "artschoolafrica.firebaseapp.com",
  projectId: "artschoolafrica",
  storageBucket: "artschoolafrica.appspot.com",
  messagingSenderId: "313775344698",
  appId: "1:313775344698:web:1519a60abba56c8557b903",
  measurementId: "G-F96CVVM27T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);