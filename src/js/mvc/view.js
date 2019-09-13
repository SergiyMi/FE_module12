import template from '../templates/note.hbs';  // импортируем новый темплейт
import { notepad } from './model';
import refs from '../utils/refs';
import renderNoteList from './renderNoteList';
import deleteNote from './deleteNote';
import editNote from './editNote';
import addNote from './addNote';
import { openEditor } from '../utils/libraries';
import addNotePriority from './addNotePriority';
import removeNotePriority from './removeNotePriority';
import searchNote from './searchNote';
import storage from './storage';

const refreshList = data => {
    const locale = storage.load("key-note");
    if (locale === null) {
        // localStorage.setItem("key-note", JSON.stringify(notepad.notes));
        storage.save("key-note", notepad.notes);
        locale = storage.load("key-note");
    }
    const notes = data || locale; 
    const htmlNotesList = notes.map(note => template(note)).join("\n");  // получаем строку через map
    refs.list.innerHTML = "";
    refs.list.insertAdjacentHTML("afterbegin", htmlNotesList);
   };

//    const refreshList = data => {
//     const locale = storage.load("key-note");
//     if (locale === null) {
//         // localStorage.setItem("key-note", JSON.stringify(notepad.notes));
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 storage.save("key-note", notepad.notes);
//                 locale = storage.load("key-note");
//             }, 0)
//         })
//     }
//     const notes = data || locale; 
//     const htmlNotesList = notes.map(note => template(note)).join("\n");  // получаем строку через map
//     refs.list.innerHTML = "";
//     refs.list.insertAdjacentHTML("afterbegin", htmlNotesList);
//    };

renderNoteList(refs.list, notepad.notes);

refs.list.addEventListener('click', editNote);
refs.list.addEventListener('click', deleteNote);
refs.list.addEventListener('click', addNotePriority);
refs.list.addEventListener('click', removeNotePriority);
refs.search.addEventListener('input', searchNote);
refs.openEditor.addEventListener('click', openEditor);
refs.form.addEventListener('click', addNote);

export { refreshList };