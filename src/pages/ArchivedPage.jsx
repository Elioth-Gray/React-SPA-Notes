import React, { useEffect, useState } from "react";
import {
  archiveNote,
  deleteNote,
  getArchivedNotes,
  unarchiveNote,
} from "../utils/local-data";
import NoteList from "../Components/NoteList";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import PropTypes from "prop-types";

const ArchivedPage = () => {
  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const archivedNotes = getArchivedNotes();
    setNotes(archivedNotes);
  }, []);

  useEffect(() => {
    const archivedNotes = getArchivedNotes();
    if (searchParams.has("title")) {
      const updatedNotes = archivedNotes.filter((note) =>
        note.title
          .toLowerCase()
          .includes(searchParams.get("title").toLowerCase())
      );
      setNotes(updatedNotes);
    } else {
      setNotes(archivedNotes);
    }
  }, [searchParams]);

  const onChangeSearchParams = (keyword) => {
    setSearchParams({ title: keyword });
  };

  const onDeleteHandler = (id) => {
    const updatedNotes = deleteNote(id);
    setNotes(updatedNotes);
  };

  const onUnarchiveHandler = (id) => {
    unarchiveNote(id);
    const updatedNotes = getArchivedNotes();
    setNotes(updatedNotes);
  };

  return (
    <>
      <SearchBar
        keyword={searchParams.get("title") || ""}
        keywordChange={onChangeSearchParams}
      ></SearchBar>
      {notes.length > 0 ? (
        <NoteList
          notes={notes}
          onDelete={onDeleteHandler}
          onArchive={onUnarchiveHandler}
        />
      ) : (
        <p>Arsip Tidak Ditemukan</p>
      )}
    </>
  );
};

export default ArchivedPage;
