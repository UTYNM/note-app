import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchButton = ({ handleSearch }) => {
    return (
        <div>
            <div className="relative w-full rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                    <span className="text-gray-500 sm:text-sm"><MagnifyingGlassIcon className="h-5 w-5" /></span>
                </div>
                <input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => handleSearch(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    );
}

export default SearchButton;