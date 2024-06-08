// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKF8PKRMf4qNXn9uz_l5oCEEZ__6wIYtw",
  authDomain: "adminpanel-2829.firebaseapp.com",
  projectId: "adminpanel-2829",
  storageBucket: "adminpanel-2829.appspot.com",
  messagingSenderId: "19205508825",
  appId: "1:19205508825:web:b78d5edc9615eb72f8b8c8",
  measurementId: "G-8D5ZZ7WFHN",
};

// Initialize firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log("Firebase initialized successfully");
export { app, auth };
