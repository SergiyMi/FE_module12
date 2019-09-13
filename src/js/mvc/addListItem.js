import createListItem from './createListItem';

function addListItem (ref, note) {
    ref.append(createListItem(note));
}

export default addListItem;