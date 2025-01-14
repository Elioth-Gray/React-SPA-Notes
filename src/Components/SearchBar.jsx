import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Notes"
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
