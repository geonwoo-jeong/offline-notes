import { ImmortalDB } from "immortal-db";
import { GET_NOTES } from "./queries";

export const saveNotes = async cache => {
  const { notes } = cache.readQuery({ query: GET_NOTES });
  const jsonNotes = JSON.stringify(notes);
  try {
    await ImmortalDB.set("notes", jsonNotes);
  } catch (error) {
    console.log(error);
  }
};

export const restoreNotes = async () => {
  const notes = await ImmortalDB.get("notes");
  if (notes) {
    try {
      const parsedNotes = JSON.parse(notes);
      return parsedNotes;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  return [];
};
