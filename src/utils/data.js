let notes = [
    {
        id: 1,
        title: "Note 1",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,",
        category: "Family",
        createdAt: new Date(),
    },
    {
        id: 2,
        title: "Note 2",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        category: "Bussines",
        createdAt: new Date(),
    },
];
const getNotes = () => notes;

const addNote = (note) => {
    const id = notes.length + 1;
    note.id = id;
    notes.push(note);
    return id;
};

const deleteNote = (id) => {
    notes = notes.filter((note) => note.id !== id);
};

export { getNotes, addNote, deleteNote };
