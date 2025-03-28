// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuNSbI19BXuHm4MeeYpkUbI8pmUp1ztb8",
  authDomain: "hamburgueseria-mia.firebaseapp.com",
  projectId: "hamburgueseria-mia",
  storageBucket: "hamburgueseria-mia.firebasestorage.app",
  messagingSenderId: "731297658992",
  appId: "1:731297658992:web:3e21720a834651ed9bdcb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};