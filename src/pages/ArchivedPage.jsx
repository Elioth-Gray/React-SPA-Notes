import { useState, useEffect, useContext } from "react";
import NoteList from "../Components/NoteList";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import { getArchivedNotes, unarchiveNote, deleteNote } from "../utils/api";
import LocaleContext from "../Contexts/LocaleContext";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [allNotes, setAllNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    const fetchNotes = async () => {
      const { error, data } = await getArchivedNotes();
      if (!error) {
        setAllNotes(data);
        setNotes(data);
      }
      setLoading(false);
    };
    fetchNotes();
    return () => {
      setNotes([]);
      setAllNotes([]);
    };
  }, []);

  useEffect(() => {
    const keyword = searchParams.get("title") || "";
    if (keyword) {
      const filteredNotes = allNotes.filter((note) =>
        note.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setNotes(filteredNotes);
    } else {
      setNotes(allNotes);
    }
  }, [searchParams, allNotes]);

  const onChangeSearchParams = (keyword) => {
    setSearchParams({ title: keyword });
  };

  const onDeleteHandler = async (id) => {
    const { error } = await deleteNote(id);
    if (!error) {
      const { error, data } = await getArchivedNotes();
      if (!error) {
        setNotes(data);
        setAllNotes(data);
      }
    }
  };

  const onUnarchiveHandler = async (id) => {
    const { error } = await unarchiveNote(id);
    if (!error) {
      const { error, data } = await getArchivedNotes();
      if (!error) {
        setNotes(data);
        setAllNotes(data);
      }
    }
  };

  return (
    <>
      <SearchBar
        keyword={searchParams.get("title") || ""}
        keywordChange={onChangeSearchParams}
      />
      {loading ? (
        <h1>{locale === "id" ? "Memuat..." : "Loading..."}</h1>
      ) : notes.length > 0 ? (
        <NoteList
          notes={notes}
          onDelete={onDeleteHandler}
          onArchive={onUnarchiveHandler}
        />
      ) : (
        <h1>{locale === "id" ? "Tidak ada arsip" : "No archives found"}</h1>
      )}
    </>
  );
};

export default HomePage;
