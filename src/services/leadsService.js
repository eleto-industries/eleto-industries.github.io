import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export const addLead = async ({ name, email, message }) => {
  await addDoc(collection(db, "leads"), {
    name,
    email,
    message,
    createdAt: serverTimestamp(),
  });
};
