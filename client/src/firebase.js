// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1ea49.firebaseapp.com",
  projectId: "mern-estate-1ea49",
  storageBucket: "mern-estate-1ea49.firebasestorage.app",
  messagingSenderId: "848527020966",
  appId: "1:848527020966:web:ed10877c1db7f06874f567"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);