import React, { useState } from "react";
import NoteInput from "../Components/NoteInput";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const AddPage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (title !== "" && body !== "") {
      addNote({ title, body });
      navigate("/");
    } else {
      alert("Judul dan deksripsi harus diisi");
    }
  };

  const onTitleChangeHandler = (newTitle) => {
    setTitle(newTitle);
  };

  const onBodyChangeHandler = (newBody) => {
    setBody(newBody);
  };

  return (
    <section>
      <div>
        <h1>Add New Notes</h1>
      </div>
      <NoteInput
        onBodyChange={onBodyChangeHandler}
        onSubmitAction={onSubmitHandler}
        onTitleChange={onTitleChangeHandler}
      />
    </section>
  );
};

export default AddPage;
