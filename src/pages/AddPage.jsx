import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addNote } from "../utils/network";

const AddPage = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    function onTitleHandler(event) {
        setTitle(event.target.value);
        checkInputs(event.target.value, body);
    }

    function onDescriptionHandler(event) {
        setBody(event.target.value);
        checkInputs(title, event.target.value);
    }

    const checkInputs = (title, body) => {
        if (title.trim() === "" || body.trim() === "") {
            setIsButtonDisabled(true);
        } else {
            setIsButtonDisabled(false);
        }
    }

    const onAddNotetHandler = async ({ title, body }) => {
        const { error } = await addNote({ title, body });

        if (!error) navigate("/");
        else setErrorMessage("Gagal menambahkan catatan");
    }

    function onSubmitHandler(event) {
        event.preventDefault();
        onAddNotetHandler({ title: title, body: body, createdAt: new Date() });
    }

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Add Note</h2>
            </div>
            <div className="mx-auto mt-16 max-w-xl sm:mt-20">
                <form onSubmit={onSubmitHandler}>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900">
                                Title
                            </label>
                            <div className="mt-3">
                                <input
                                    type="text"
                                    onChange={onTitleHandler}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-2 mt-2">
                        <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900">
                            Description
                        </label>
                        <div className="mt-3">
                            <textarea
                                type="text"
                                onChange={onDescriptionHandler}
                                rows={5}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Link to="/">
                            <button
                                type="button"
                                className="text-sm px-4 py-1 font-semibold leading-6 text-gray-900 border rounded hover:bg-red-500">
                                Cancel
                            </button>
                        </Link>
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white text-sm px-8 py-1 font-semibold leading-6 border rounded hover:bg-white hover:text-indigo-900">Submit
                        </button>
                        {errorMessage && <div className="error">{errorMessage}</div>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export { AddPage };