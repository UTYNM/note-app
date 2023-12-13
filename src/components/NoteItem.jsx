import { TrashIcon } from "@heroicons/react/24/outline";
import React from "react";
import PropTypes from "prop-types";
function NoteItem({ title, body, createdAt, id, onDelete }) {
  return (
    <article className="flex max-w-xl flex-col items-start border-b border-gray-500 pb-9">
      <div className="flex items-center gap-x-4 text-xs">
        <div className="text-gray-500">
          {createdAt}
        </div>
        <div className="ml-auto">
          <button className="hover:text-red-600" onClick={() => onDelete(id)}>
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <span className="absolute" />
          {title}
        </h3>
        <p className="text-justify mt-5 line-clamp-6 text-sm leading-6 text-gray-600">
          {body}
        </p>
      </div>
    </article>
  );
}

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export { NoteItem };