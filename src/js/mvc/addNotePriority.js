import addListItemPriority from "./addListItemPriority";

function addNotePriority({ target }) {
    if (target.nodeName !== 'I') return;
    if (target.parentNode.dataset.action === 'increase-priority') {
        addListItemPriority(target);
    }
}

export default addNotePriority;