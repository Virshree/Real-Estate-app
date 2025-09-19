// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTK5_ywXcjUgZlaH0-A6HI2ucL_LACiqs",
  authDomain: "real-estate-app-f0f90.firebaseapp.com",
  projectId: "real-estate-app-f0f90",
  storageBucket: "real-estate-app-f0f90.firebasestorage.app",
  messagingSenderId: "201546347087",
  appId: "1:201546347087:web:5ed50dce0f11f78381303a",
  measurementId: "G-GZ72JHS0RS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
