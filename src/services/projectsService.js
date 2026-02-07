import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export const fetchProjects = async () => {
  const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
