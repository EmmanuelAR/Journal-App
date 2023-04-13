import { async } from "@firebase/util";
import { collection, doc } from "firebase/firestore/lite";
import { FireBaseDB } from "../../firebase/config";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };
  };
};
