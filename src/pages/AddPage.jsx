import React, { useContext, useState } from "react";
import NoteInput from "../Components/NoteInput";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/api";
import LocaleContext from "../Contexts/LocaleContext";
import useInput from "../Hooks/useInput";

const AddPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  const onSubmitHandler = async ({ title, body }) => {
    event.preventDefault();
    if (title !== "" && body !== "") {
      setLoading(true);
      await addNote({ title, body });
      setLoading(false);
      navigate("/");
    } else {
      alert("Judul dan deskripsi harus diisi");
    }
  };

  return (
    <section>
      <div>
        <h1>{locale === "id" ? "Tambah Catatan" : "Add Note"}</h1>
      </div>
      <NoteInput submit={onSubmitHandler} loading={loading} />
    </section>
  );
};

export default AddPage;
