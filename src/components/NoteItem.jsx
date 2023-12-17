import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

const NoteItem = ({ note, onDelete }) => {
  return (
    <article className="flex max-w-xl flex-col items-start border-b border-gray-500 pb-9">
      <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={note.datetime} className="text-gray-500">
            {new Date(note.createdAt).toLocaleDateString()}
          </time>
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
          {note.body}
        </p>
      </div>
    </article>
  );
}

export default NoteItem;