import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const NoteInput = ({ onSubmitAction, onTitleChange, onBodyChange }) => {
  return (
    <form onSubmit={onSubmitAction} className="add-new-page">
      <label htmlFor="title" className="add-new-page__input__title">
        Title
      </label>
      <input
        type="text"
        id="title"
        placeholder="Note Title"
        onChange={(event) => onTitleChange(event.target.value)}
      />

      <label htmlFor="body" className="add-new-page__input__body">
        Description
      </label>
      <input
        type="text"
        id="body"
        placeholder="Note Description"
        onChange={(event) => onBodyChange(event.target.value)}
      />

      <Button>Submit</Button>
    </form>
  );
};

NoteInput.propTypes = {
  onSubmitAction: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onBodyChange: PropTypes.func.isRequired,
};

export default NoteInput;
