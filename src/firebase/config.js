// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJT72oCK698KukSy_5e-9Z4j74Qy-6O00",
  authDomain: "journalapp-7b475.firebaseapp.com",
  projectId: "journalapp-7b475",
  storageBucket: "journalapp-7b475.appspot.com",
  messagingSenderId: "317856092638",
  appId: "1:317856092638:web:42196ab3f4c12f53760d4f"
};

// Initialize Firebase
export const firebaseApp  = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth( firebaseApp );
export const firebaseDB   = getFirestore( firebaseApp );
