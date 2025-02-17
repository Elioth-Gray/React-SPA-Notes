import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

const NoteList = ({ notes, onDelete, onArchive, archived }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          {...note}
          onDelete={onDelete}
          onArchive={onArchive}
          archived={archived}
        />
      ))}
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  archived: PropTypes.bool,
};

export default NoteList;
