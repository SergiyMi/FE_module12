import { notepad } from "./model";
import storage from './storage';

function removeListItem (note) {
    const li = note.closest('.note-list__item');
    const { id } = li.dataset;
    notepad.deleteNote(id);
    // localStorage.setItem("key-note", JSON.stringify(notepad._notes));
    li.remove();
    // storage.save("key-note", notepad.notes);
}

export default removeListItem;