import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/api";
import NoteDetail from "../Components/NoteDetail";

const DetailPage = () => {
  const { noteId } = useParams();
  const [note, setNote] = useState();
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const fetchNote = async () => {
      const { error, data } = await getNote(noteId);

      if (!error) {
        setNote(data);
      }
      setInitializing(false);
    };

    fetchNote();
  }, []);

  if (initializing) {
    return <p>Loading</p>;
  }

  if (!note) {
    return <p>Catatan tidak ditemukan</p>;
  }

  return <NoteDetail {...note}></NoteDetail>;
};

export default DetailPage;
