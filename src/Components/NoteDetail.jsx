import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";

const NoteDetail = (note) => {
  return (
    <section>
      <h1 className="detail-page__title">{note.title}</h1>
      <p className="detail-page__createdAt">
        {showFormattedDate(note.createdAt)}
      </p>
      <p className="detail-page__body">{note.body}</p>
    </section>
  );
};

NoteDetail.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
export default NoteDetail;
