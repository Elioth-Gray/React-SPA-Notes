import PropTypes from "prop-types";
import LocaleContext from "../Contexts/LocaleContext";
import { useContext } from "react";

const SearchBar = ({ keyword, keywordChange }) => {
  const { locale } = useContext(LocaleContext);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={locale === "id" ? "Cari catatan" : "Search notes"}
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </div>
  );
};

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
