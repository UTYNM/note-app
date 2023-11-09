import React from "react"
import NoteItem from "./NoteItem"

const NoteList = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <NoteItem post={post} />
      ))}
    </>
  );
};

export default NoteList