// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ 1. Define firebaseConfig first
const firebaseConfig = {
  apiKey: "AIzaSyC6zIRmbnNC9ZcZDJG5t7SJo2mhjyMIiyE",
  authDomain: "mobileweb-assignment2.firebaseapp.com",
  projectId: "mobileweb-assignment2",
  storageBucket: "mobileweb-assignment2.appspot.com",
  messagingSenderId: "724080516224",
  appId: "1:724080516224:web:dd68983bdd265e75271a65",
  measurementId: "G-M7N50LVWKZ"
};

// ✅ 2. Initialize app AFTER firebaseConfig
const app = initializeApp(firebaseConfig);

// ✅ 3. Then use 'app' safely
export const auth = getAuth(app);
export const db = getFirestore(app);
