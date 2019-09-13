import editListItem from "./editListItem";

function editNote({ target }) {
    if (target.nodeName !== 'I') return;
    if (target.parentNode.dataset.action === 'edit-note') {
        editListItem(target);
    }
}

export default editNote;