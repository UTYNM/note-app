import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeButton from '../components/HomeButton';
import { Link } from 'react-router-dom';
import { NoteForm } from '../components/NoteForm';
import { addNote } from '../utils/network';

function AddPage({ }) {

    const navigate = useNavigate();
    const addNoteHandler = async (title, body) => {
        await addNote(title, body);
        navigate('/home');
    }

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8" >
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Add Note</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Aute magna irure deserunt veniam aliqua magna enim voluptate.
                </p>
            </div>
            <Link to={'/home'} className="flex justify-center items-center mt-3">
                <HomeButton />
            </Link>
            <NoteForm addNote={addNoteHandler} />
        </div>
    );
};

export { AddPage };