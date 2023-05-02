// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA97kCrcRDizczpHwZ_-F9G5YZ7Bca9_Qc",
  authDomain: "food-blog-login-from.firebaseapp.com",
  projectId: "food-blog-login-from",
  storageBucket: "food-blog-login-from.appspot.com",
  messagingSenderId: "453526530604",
  appId: "1:453526530604:web:428a01b9cab3eec13aff89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;