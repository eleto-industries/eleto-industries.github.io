import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";

const projectsRef = collection(db, "projects");

export async function getProjects() {
  const snapshot = await getDocs(projectsRef);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function addProject(project) {
  await addDoc(projectsRef, {
    ...project,
    createdAt: serverTimestamp(),
  });
}

export async function deleteProject(id) {
  await deleteDoc(doc(db, "projects", id));
}
