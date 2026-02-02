import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const addLead = async (lead) => {
  await addDoc(collection(db, "leads"), {
    ...lead,
    createdAt: serverTimestamp(),
  });
};
