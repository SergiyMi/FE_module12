import createListItem from './createListItem';
import { notepad } from "./model";

function renderNoteList(ref, arr) {
    ref.innerHTML = '';
    const newArr = arr.map(el => ref.append(createListItem(el)));
    localStorage.setItem("key-note", JSON.stringify(notepad.notes));
    return newArr;
    
    // try {
    //     localStorage.setItem("key-note", JSON.stringify(arr));
    //     const locale = JSON.parse(localStorage.getItem("key-note"));
    //     if (locale !== '') {
    //         localStorage.setItem("key-note", JSON.stringify(locale));
    //         console.log(locale);
    //     }
    //     return newArr;
    // }
    // catch (err) {
    //     console.error('Get state error: ', err);
    // }
}

export default renderNoteList;