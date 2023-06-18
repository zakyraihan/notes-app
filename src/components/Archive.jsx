import React from "react";
import NotesCard from './NotesCard';

function Archive({ onDelete, notes, onArchive }) {
    return (
        <div className="">
            {
                notes.map(note => (
                    <NotesCard changeButton="Pindah" key={note.id} onDelete={onDelete} buttonData={onArchive} {...note} />
                ))
            }
        </div>
    )
}

export default Archive;