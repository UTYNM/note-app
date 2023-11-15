import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeButton from '../components/HomeButton';
import { addNote } from '../utils/data';

const AddPage = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
    e.preventDefault();

    const note = {
        title,
        description,
        category,
        createdAt: new Date(),
    };

    addNote(note);
    navigate("/");
    };

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Add Note</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Aute magna irure deserunt veniam aliqua magna enim voluptate.
                </p>
            </div>
            <Link to={'/'} className="flex justify-center items-center mt-3">
                <HomeButton />
            </Link>
            <div className="mx-auto mt-16 max-w-xl sm:mt-20">
                <form onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900">
                                Title
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="category" className="block text-sm font-semibold leading-6 text-gray-900">
                                Category
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900">
                                Description
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    type="text"
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={4}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};



export default AddPage;