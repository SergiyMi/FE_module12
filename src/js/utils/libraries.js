import MicroModal from 'micromodal';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

import { NOTIFICATION_MESSAGES } from './constants';

MicroModal.init();

const notyf = new Notyf();

const openEditor = () => {
    MicroModal.show('note-editor-modal');
}

const closeEditor = () => {
    MicroModal.close('note-editor-modal');
}
 
const {
    NOTE_ADDED_SUCCESS,
    NOTE_DELETED_SUCCESS,
    NOTE_SAVE_SUCCESS,
    EDITOR_FIELDS_EMPTY,
    NOTE_CHANGE_PRIORITY,
} = NOTIFICATION_MESSAGES;

const notificationAdded = msg => {
    const message = msg || NOTE_ADDED_SUCCESS;
    notyf.success(message);
}

const notificationDeleted = msg => {
    const message = msg || NOTE_DELETED_SUCCESS;
    notyf.success(message);
}

const notificationSaved = msg => {
    const message = msg || NOTE_SAVE_SUCCESS;
    notyf.success(message);
}

const notificationError = msg => {
    const message = msg || EDITOR_FIELDS_EMPTY;
    notyf.error(message);
} 

const notificationChangePriority = msg => {
    const message = msg || NOTE_CHANGE_PRIORITY;
    notyf.success(message);
}

export {
    openEditor,
    closeEditor,
    notificationAdded,
    notificationDeleted,
    notificationSaved,
    notificationError,
    notificationChangePriority,
};