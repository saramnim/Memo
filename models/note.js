let notes = [
    {
        id: 1,
        title: 'first note',
        content: 'My first note is here.',
        author: 'bibi',
    },
];
exports.list = () => {  // memo list
    return notes.map(({ id, title, author }) => ({
        id, title, author,
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
exports.create = (title, content, author) => {  // memo write
    const { id: lastId } = notes[notes.length - 1];
    const newNote = {
        id: lastId + 1,
        title,
        content,
        author,
    };
    notes.push(newNote);
    return newNote;
}
exports.update = (id, title, content, author) => {  // memo edit
    const index = notes.findIndex(
        (note) => note.id === id
    );
    if (index < 0) {
        throw new Error('Note Not Found For Update');
    }
    const note = notes[index];
    if (note.author !== author) {
        throw new Error("Author not matches");
    }
    note.title = title;
    note.content = content;
    notes[index] = note;
    return note;
}
exports.delete = (id, author) => {  // memo delete
    // if (!notes.some((note) => note.id === id)) {
    //     throw new Error(
    //         'Note Note Found For Delete'
    //     );
    // }
    const index = notes.findIndex((note) => note.id === id);
    if (index < 0) {
        throw new Error('Note Not Found For Delete');
    }
    const note = notes[index];
    if (note.author !== author) {
        throw new Error("Author not matches");
    }
    notes = notes.filter(note => note.id !== id);
    return;
}
exports.search = (search) => {
    const searched = notes.filter(({ title }) => {
        const index = title.indexOf(search);
        return index >= 0;
    });

    return searched.map(({ id, title, author }) => ({
        id,
        title,
        author,
    }));
}