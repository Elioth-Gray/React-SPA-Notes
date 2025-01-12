import React from "react";
import { archiveNote, deleteNote, getActiveNotes } from "../utils/local-data";
import NoteList from "../Components/NoteList";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../Components/SearchBar";

const HomePageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeKeyword = searchParams.get("title");

  const changeSearchParams = (keyword) => {
    setSearchParams({ title: keyword });
  };

  return (
    <HomePage
      defaultKeyword={activeKeyword}
      changeParams={changeSearchParams}
    ></HomePage>
  );
};

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: this.props.defaultKeyword || "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onChangeSearchParams = this.onChangeSearchParams.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const updatedNotes = deleteNote(id);
    this.setState({
      notes: updatedNotes,
    });
  }

  onArchiveHandler(id) {
    archiveNote(id);
    this.setState({
      notes: getActiveNotes(),
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
    return (
      <>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onChangeSearchParams}
        ></SearchBar>
        <NoteList
          notes={updateNote}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        ></NoteList>
      </>
    );
  }
}

HomePage.propTypes = {
  changeParams: PropTypes.func.isRequired,
  defaultKeyword: PropTypes.string,
};

export default HomePageWrapper;
