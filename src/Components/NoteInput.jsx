import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import LocaleContext from "../Contexts/LocaleContext";
import { useContext } from "react";
import useInput from "../Hooks/useInput";

const NoteInput = ({ submit, loading }) => {
  const [title, onTitleChangeHandler] = useInput("");
  const [body, onBodyChangeHandler] = useInput("");
  const { locale } = useContext(LocaleContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    submit({ title, body });
  };

  return (
    <form onSubmit={onSubmitHandler} className="add-new-page">
      <label htmlFor="title" className="add-new-page__input__title">
        {locale === "id" ? "Judul" : "Title"}
      </label>
      <input
        type="text"
        id="title"
        placeholder={locale === "id" ? "Judul catatan" : "Note title"}
        onChange={onTitleChangeHandler}
        disabled={loading}
        value={title}
      />

      <label htmlFor="body" className="add-new-page__input__body">
        {locale === "id" ? "Deskripsi" : "Description"}
      </label>
      <input
        type="text"
        id="body"
        placeholder={locale === "id" ? "Deskripsi Catatan" : "Note description"}
        onChange={onBodyChangeHandler}
        disabled={loading}
        value={body}
      />

      <Button type="submit" disabled={loading}>
        {loading
          ? locale === "id"
            ? "Memproses..."
            : "Processing..."
          : locale === "id"
          ? "Tambah catatan"
          : "Add note"}
      </Button>
    </form>
  );
};

NoteInput.propTypes = {
  submit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default NoteInput;
