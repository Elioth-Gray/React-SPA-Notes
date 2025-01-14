import { useState, useEffect } from "react";
import { archiveNote, deleteNote, getActiveNotes } from "../utils/local-data";
import NoteList from "../Components/NoteList";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../Components/SearchBar";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const activeNotes = getActiveNotes();
    setNotes(activeNotes);
  }, []);

  useEffect(() => {
    const activeNotes = getActiveNotes();
    if (searchParams.has("title")) {
      const filteredNotes = activeNotes.filter((note) =>
        note.title
          .toLowerCase()
          .includes(searchParams.get("title").toLowerCase())
      );
      setNotes(filteredNotes);
    } else {
      setNotes(activeNotes);
    }
  }, [searchParams]);

  const onChangeSearchParams = (keyword) => {
    setSearchParams({ title: keyword });
  };

  const onDeleteHandler = (id) => {
    const updatedNotes = deleteNote(id);
    setNotes(updatedNotes);
  };

  const onArchiveHandler = (id) => {
    archiveNote(id);
    const updatedNotes = getActiveNotes();
    setNotes(updatedNotes);
  };

  return (
    <>
      <SearchBar
        keyword={searchParams.get("title") || ""}
        keywordChange={onChangeSearchParams}
      />
      {notes.length > 0 ? (
        <NoteList
          notes={notes}
          onDelete={onDeleteHandler}
          onArchive={onArchiveHandler}
        />
      ) : (
        <p>Catatan Tidak Ditemukan</p>
      )}
    </>
  );
};

export default HomePage;
