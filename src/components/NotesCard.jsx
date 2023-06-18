import React from "react";
import { showFormattedDate } from "../index";

function NotesCard({ id,title, body, createdAt, changeButton, onDelete, buttonData }) {
  return (
    <div className=" my-3 p-3 md:w-[30rem]  rounded-lg border shadow-lg">
      <div className="">
        <h5 className="text-xl font-semibold">{title}</h5>
        <span className="text-sm text-slate-500">{showFormattedDate(createdAt)}</span>
      </div>
      <div className="my-3">{body}</div>
      <div className="flex gap-3">
        <button className="bg-red-500 p-1 rounded-md text-white" 
        onClick={() => onDelete(id)}>Delete</button>
        <button className="bg-green-400 p-1 rounded-md text-white" 
        onClick={() => buttonData(id)}>{changeButton}</button>
      </div>
    </div>
  );
}

export default NotesCard;
