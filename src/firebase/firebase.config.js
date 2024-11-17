// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhmnyMKMT0PsCNYVakvTzjJcJF8piUJD0",
  authDomain: "winter-clothing-donation-5e2c9.firebaseapp.com",
  projectId: "winter-clothing-donation-5e2c9",
  storageBucket: "winter-clothing-donation-5e2c9.firebasestorage.app",
  messagingSenderId: "496011624561",
  appId: "1:496011624561:web:07e15a090bbc1958655bd0"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth=getAuth(app);
 export default app;