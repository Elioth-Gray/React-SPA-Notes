import React from "react";
import {
  deleteNote,
  getArchivedNotes,
  unarchiveNote,
} from "../utils/local-data";
import NoteList from "../Components/NoteList";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import PropTypes from "prop-types";

const ArchivedPageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeKeyword = searchParams.get("title");

  const changeSearchParams = (keyword) => {
    setSearchParams({ title: keyword });
  };

  return (
    <ArchivedPage
      defaultKeyword={activeKeyword}
      changeParams={changeSearchParams}
    ></ArchivedPage>
  );
};

class ArchivedPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: this.props.defaultKeyword || "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onChangeSearchParams = this.onChangeSearchParams.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.setState({
      notes: getArchivedNotes(),
    });
  }

  onUnarchiveHandler(id) {
    unarchiveNote(id);
    this.setState({
      notes: getArchivedNotes(),
    });
  }

  onChangeSearchParams(keywordChange) {
    this.setState(() => {
      return {
        keyword: keywordChange,
      };
    });

    this.props.changeParams(keywordChange);
  }

  render() {
    console.log(this.state.notes);
    const updateNote = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    );

    if (updateNote.length === 0) {
      return (
        <header>
          <h1>Arsip Kosong!</h1>
        </header>
      );
    }

    return (
      <>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onChangeSearchParams}
        ></SearchBar>
        <NoteList
          notes={updateNote}
          onDelete={this.onDeleteHandler}
          onArchive={this.onUnarchiveHandler}
          archived={true}
        ></NoteList>
      </>
    );
  }
}

ArchivedPage.propTypes = {
  changeParams: PropTypes.func.isRequired,
  defaultKeyword: PropTypes.string,
};

export default ArchivedPageWrapper;
