import React from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import NoteDetail from "../Components/NoteDetail";

const DetailPage = () => {
  const { noteId } = useParams();

  const note = getNote(noteId);

  if (!note) {
    return <p>Catatan tidak ditemukan</p>;
  }

  return <NoteDetail {...note}></NoteDetail>;
};

export default DetailPage;
