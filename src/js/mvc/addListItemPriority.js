import { notepad } from "./model";
import { PRIORITY_TYPES } from '../utils/constants';
import { notificationChangePriority } from '../utils/libraries';
import storage from './storage';

function addListItemPriority(note) {
    const li = note.closest('.note-list__item');
    const { id } = li.dataset;
    const notee = notepad.findNoteById(id);
    const span = li.querySelector('.note__priority');
    if (notee.priority < PRIORITY_TYPES.HIGH) {
        notee.priority += 1;
        notificationChangePriority();
        span.textContent = `Priority: ${notee.priority}`;
    }
    // localStorage.setItem("key-note", JSON.stringify(notepad._notes));
    storage.save("key-note", notepad.notes);
}

export default addListItemPriority;