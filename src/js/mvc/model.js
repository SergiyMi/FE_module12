import INITIAL_NOTES from '../../assets/notes.json';
import Notepad from '../components/Notepad';
import storage from './storage';

let notes;
try {
    notes = storage.load("key-note");
}
catch(err) {
    console.log(err);
}
const notepad = new Notepad(notes || INITIAL_NOTES);

export { notepad };
