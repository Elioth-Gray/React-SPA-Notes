import React, { useContext } from "react";
import PropTypes from "prop-types";
import { showFormattedDateEN, showFormattedDateID } from "../utils";
import LocaleContext from "../Contexts/LocaleContext";

const NoteDetail = (note) => {
  const { locale } = useContext(LocaleContext);

  if (note === undefined) {
    return <p>Detail tidak ditemukan</p>;
  }

  return (
    <section>
      <h1 className="detail-page__title">{note.title}</h1>
      <p className="detail-page__createdAt">
        {locale === "id"
          ? showFormattedDateID(note.createdAt)
          : showFormattedDateEN(note.createdAt)}
      </p>
      <p className="detail-page__body">{note.body}</p>
    </section>
  );
};

NoteDetail.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string,
    createdAt: PropTypes.string,
    body: PropTypes.string,
  }),
};
export default NoteDetail;
