import React from "react";
import { showFormattedDate } from "../utils";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const NoteItem = ({
  id,
  title,
  createdAt,
  body,
  onDelete,
  onArchive,
  archived,
}) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    onDelete(id);
  };

  const handleArchive = () => {
    onArchive(id);
  };

  const handleNavigate = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="note-item">
      <div className="note-heading">
        <div>
          <h1 onClick={handleNavigate} className="note-item__title">
            {title}
          </h1>
          <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
        </div>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="button-wrapper">
        <Button
          types={archived ? "unarchive" : "archive"}
          onAction={handleArchive}
        />
        <Button types="delete" onAction={handleDelete} />
      </div>
    </div>
  );
};

NoteItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  onArchive: PropTypes.func,
  archived: PropTypes.bool,
};

export default NoteItem;
