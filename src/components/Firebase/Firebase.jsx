// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLVCXInkNbp7elLEsiy4OKViqyVcBWR5g",
  authDomain: "ma7al-956d5.firebaseapp.com",
  projectId: "ma7al-956d5",
  storageBucket: "ma7al-956d5.appspot.com",
  messagingSenderId: "368680331422",
  appId: "1:368680331422:web:5c3853ba07ca7a7d4a738f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//const storage = getStorage();
const database = getDatabase()
const laptopia_firestore_db = getFirestore()

// Initialize Firebase
