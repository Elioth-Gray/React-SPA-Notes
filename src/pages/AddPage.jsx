import React from "react";
import NoteInput from "../Components/NoteInput";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function AddPageWrapper() {
  const navigate = useNavigate();

  const saveNoteHandler = (note) => {
    addNote(note);
    navigate("/");
  };

  return <AddPage onSubmitNoteHandler={saveNoteHandler} />;
}

class AddPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(newTitle) {
    this.setState(() => {
      return {
        title: newTitle,
      };
    });
  }

  onBodyChangeHandler(newBody) {
    this.setState(() => {
      return {
        body: newBody,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    if (this.state.title.trim() !== "" && this.state.body.trim() !== "") {
      this.props.onSubmitNoteHandler(this.state);
    } else {
      alert("Judul dan Deskripsi harus diisi!");
    }
  }

  render() {
    return (
      <section>
        <div>
          <h1>Add New Notes</h1>
        </div>
        <NoteInput
          onBodyChange={this.onBodyChangeHandler}
          onSubmitAction={this.onSubmitHandler}
          onTitleChange={this.onTitleChangeHandler}
        />
      </section>
    );
  }
}

AddPage.propTypes = {
  onSubmitNoteHandler: PropTypes.func.isRequired,
};

export default AddPageWrapper;
