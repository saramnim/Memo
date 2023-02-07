let notes = [
    {
        id: 1,
        title: 'first note',
        content: 'My first note is here.'
    },
];
exports.list = () => {  // memo list
    return notes.map(({ id, title }) => ({
        id, title,
    }));
}
exports.get = (id) => { // memo detail
    const note = notes.find(
        (note) => note.id === id
    );
    if (!note) {
        throw new Error('Note Not Found');
    }
    return note;
}
exports.create = (title, content) => {  // memo write
    const { id: lastId } = notes[notes.length - 1];
    const newNote = {
        id: lastId + 1,
        title,
        content,
    };
    notes.push(newNote);
    return newNote;
}
exports.update = (id, title, content) => {  // memo edit
    const index = notes.findIndex(
        (note) => note.id === id
    );
    if (index < 0) {
        throw new Error('Note Not Found For Update');
    }
    const note = notes[index];
    note.title = title;
    note.content = content;
    notes[index] = note;
    return note;
}
exports.delete = (id) => {  // memo delete
    if (!notes.some((note) => note.id === id)) {
        throw new Error(
            'Note Note Found For Delete'
        );
    }
    notes = notes.filter(note => note.id !== id);
    return;
}