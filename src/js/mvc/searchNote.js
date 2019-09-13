import { notepad } from "./model";
import renderNoteList from './renderNoteList';
import refs from "../utils/refs";
import storage from './storage';

function searchNote(event) {
    event.preventDefault();
    const { target } = event;
    const searchItems = notepad.filterNotesByQuery(target.value);
    console.table(searchItems);
    renderNoteList(refs.list, searchItems);
    // localStorage.setItem("key-note", JSON.stringify(searchItems));
    storage.save("key-note", searchItems);
}

export default searchNote;