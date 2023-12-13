import React from 'react';
import { DocumentPlusIcon  } from '@heroicons/react/24/outline';
const AddButton = () => {
  return (
    <span>
      <button
        type="button"
        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200"
      >
        <DocumentPlusIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
        Add Note
      </button>
    </span>
  );
};

export default AddButton; 