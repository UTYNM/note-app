import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
        {notes.length === 0 ? (
          <p>No notes found</p>
        ) : (
          notes.map((note) => (
            <NoteItem key={note.id} note={note} onDelete={onDelete} {...note}/>
          ))
        )}
    </div>

  );
}

export default NoteList;