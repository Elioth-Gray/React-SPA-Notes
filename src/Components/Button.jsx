import React from "react";
import PropTypes from "prop-types";

const Button = ({ types = "none", onAction, children }) => {
  return (
    <button className={`button-${types}`} onClick={onAction}>
      {types === "archive" && "📦"}
      {types === "unarchive" && "🔓"}
      {types === "delete" && "🗑️"}
      {types === "none" && children}
    </button>
  );
};

Button.propTypes = {
  types: PropTypes.oneOf(["archive", "unarchive", "delete", "none"]),
  onAction: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Button;
