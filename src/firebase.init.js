// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXaQ9wfuIsYAbp5l3uBw7HTLCWNC6uEKc",
  authDomain: "router-firebase-integrat-bc5dd.firebaseapp.com",
  projectId: "router-firebase-integrat-bc5dd",
  storageBucket: "router-firebase-integrat-bc5dd.appspot.com",
  messagingSenderId: "271053339571",
  appId: "1:271053339571:web:f77e1c73b75963836fe9c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;