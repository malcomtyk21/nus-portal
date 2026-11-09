// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZfpXtIek7NkTsKloDXPE2gdplOFKM7Cw",
  authDomain: "nus-portal-10ea0.firebaseapp.com",
  projectId: "nus-portal-10ea0",
  storageBucket: "nus-portal-10ea0.firebasestorage.app",
  messagingSenderId: "519135438726",
  appId: "1:519135438726:web:b6499ad3e50925a3edee07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();