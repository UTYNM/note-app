import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddButton from "../components/AddButton";
import SearchButton from "../components/SearchButton";
import NoteList from "../components/NoteList";
import { getNotes, deleteNote } from "../utils/network";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
const fetchData = async () => {
  try {
    const { error, data } = await getNotes();
    if (error) {
      setNotes([]);
    } else {
      setNotes(data);
    }
  } catch (error) {
    console.error(error);
  }
};
    fetchData();
  }, []);

  const handleSearch = (keyword) => {
    setKeyword(keyword);
  };

  const filteredNotes = notes.filter((note) => {
    const title = note.title.toLowerCase();
    const searchKeyword = keyword.toLowerCase();
    return title.includes(searchKeyword);
  });

  const onDeleteHandler = (id) => {
    deleteNote(id);
    setNotes(getNotes());
  };

  return (
    <div className="bg-white py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Note App
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Dirancang untuk memudahkan pengguna dalam mencatat dan menyimpan informasi penting, ide-ide kreatif, daftar tugas, atau catatan pribadi dengan mudah.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <div>
            <SearchButton handleSearch={handleSearch} />
          </div>
          <div>
            <Link to="/add">
              <AddButton />
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-10 border-t border-gray-300 pt-10 sm:mt-10 sm:pt-16">
          <NoteList notes={filteredNotes}
            onDelete={onDeleteHandler} />
        </div>
      </div>
    </div>
  );
};

export { Home };
