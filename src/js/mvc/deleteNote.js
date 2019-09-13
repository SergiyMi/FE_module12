import removeListItem from './removeListItem';
import { notificationDeleted } from '../utils/libraries';

function deleteNote({ target }) {
    if (target.nodeName !== 'I') return;
    if (target.parentNode.dataset.action === 'delete-note') {
        removeListItem(target);
        notificationDeleted();
    }
}

export default deleteNote;