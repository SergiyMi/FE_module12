import shortid from 'shortid';

import { PRIORITY_TYPES } from '../constants';
import refs from '../utils/refs';
import { notepad } from './model';
import { refreshList } from './mvc/view';
import {
    openEditor,
    closeEditor,
    notificationAdded,
    notificationDeleted,
    notificationSaved,
    notificationError
} from '../utils/libraries';

const state = {
    note: null,
};

