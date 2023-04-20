import { collection, getDocs, query } from "firebase/firestore/lite";
import { FireBaseDB } from "../firebase/config";

export const loadNotes = async (uid) => {
  const notesSnap = await getDocs(
    query(collection(FireBaseDB, `${uid}/journal/notes`))
  );
  const notes = [];

  notesSnap.forEach((snapHijo) => {
    notes.push({
      id: snapHijo.id,
      ...snapHijo.data(),
    });
  });

  return notes;
};
