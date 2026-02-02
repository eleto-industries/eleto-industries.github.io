import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAgSwpRg7kasPOE0YF8DJ1nCRV2kwoj6Y",
//   authDomain: "eleto-industries.firebaseapp.com",
//   projectId: "eleto-industries",
//   storageBucket: "eleto-industries.appspot.com",
//   messagingSenderId: "51049914683",
//   appId: "1:51049914683:web:ee4e6f92b1c3c72431971e",
// };

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgSwpGRg7kasPOE0YF8DJ1nCRV2kwoj6Y",
  authDomain: "eleto-industries.firebaseapp.com",
  projectId: "eleto-industries",
  storageBucket: "eleto-industries.firebasestorage.app",
  messagingSenderId: "51049914683",
  appId: "1:51049914683:web:ee4e6f92b1c3c72431971e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
