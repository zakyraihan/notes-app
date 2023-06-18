import React from "react";
import NotesCard from "./NotesCard";

function ActiveNote({ onDelete, onActive, notes }) {
  return (
    <div className="">
      {notes.map((note) => (
        <NotesCard changeButton="Arsip" key={note.id} onDelete={onDelete} buttonData={onActive} {...note}/>
      ))}
    </div>
  );
}

export default ActiveNote;
