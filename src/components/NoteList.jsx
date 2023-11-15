import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
        {notes && notes.length > 0 ? (
          notes.map((note) => <NoteItem key={note.id} note={note} onDelete={onDelete}/>)
        ) : (
          <p>No notes found</p>
        )}
    </div>
  );
};

export default NoteList;
