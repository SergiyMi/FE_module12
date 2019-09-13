import removeListItemPriority from "./removeListItemPriority";

function removeNotePriority({ target }) {
    if (target.nodeName !== 'I') return;
    if (target.parentNode.dataset.action === 'decrease-priority') {
        removeListItemPriority(target);
    }
}

export default removeNotePriority;