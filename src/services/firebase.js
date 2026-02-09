// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// 🔴 REPLACE with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAgSwpGRg7kasPOE0YF8DJ1nCRV2kwoj6Y",
  authDomain: "eleto-industries.firebaseapp.com",
  projectId: "eleto-industries",
  storageBucket: "eleto-industries.firebasestorage.app",
  messagingSenderId: "51049914683",
  appId: "1:51049914683:web:ee4e6f92b1c3c72431971e"
};

const app = initializeApp(firebaseConfig);

// ✅ Exports used across the app
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
