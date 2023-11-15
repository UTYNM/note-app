import { TrashIcon } from "@heroicons/react/24/outline";
import React from "react";
const NoteItem = ({ note, onDelete }) => {
  return (
    <article className="flex max-w-xl flex-col items-start border-b border-gray-500 pb-9">
      <div className="flex items-center gap-x-4 text-xs">
        <div className="text-gray-500">
          {note.createdAt.toLocaleDateString()}
        </div>
        <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-red-600 hover:bg-gray-100">
          {note.category}
        </p>
       <div className="ml-auto">
         <button className="hover:text-red-600" onClick={() => onDelete(note.id)}>
           <TrashIcon className="h-5 w-5" />
         </button>
       </div>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <span className="absolute" />
          {note.title}
        </h3>
        <p className="text-justify mt-5 line-clamp-6 text-sm leading-6 text-gray-600">
          {note.description}
        </p>
      </div>
    </article>
  );
}

export default NoteItem