import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import { useReducer, useState } from "react";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

function notesReducer(state, { type, payload }) {
  switch (type) {
    case "add":
      return [...state, payload];
      break;
    case "delete":
      return state.filter((s) => s.id !== payload);
      break;
    case "complete":
      return state.map((note) =>
        note.id === payload ? { ...note, completed: !note.completed } : note
      );
      break;
    default:
      throw new Error("Unknown Error" + type);
      break;
  }
}

function App() {
  // states
  // const [notes, setNotes] = useState([]);
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [sortBy, setSortBy] = useState("latest");

  // functions
  const handleAddNote = (newNote) => {
    // setNotes((prevNotes) => [...prevNotes, newNote]);
    dispatch({ type: "add", payload: newNote });
  };

  const handleDeleteNote = (id) => {
    // first way -> use filter method to unmutate array
    // const filteredNotes = notes.filter((n) => n.id !== id);
    // setNotes(filteredNotes);

    // callback way
    // setNotes((privNotes) => privNotes.filter((n) => n.id !== id));
    dispatch({ type: "delete", payload: id });
  };

  const handleCompleteNote = (e) => {
    const noteId = +e.target.id;
    // first way -> use map method to unmutate array
    // const newNotes = notes.map((note) =>
    //   note.id === noteId ? { ...note, completed: !note.completed } : note
    // );
    // setNotes(newNotes);

    // callback way
    // setNotes((privNotes) =>
    //   privNotes.map((note) =>
    //     note.id === noteId ? { ...note, completed: !note.completed } : note
    //   )
    // );
    dispatch({ type: "complete", payload: noteId });
  };

  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDelete={handleDeleteNote}
            onComplete={handleCompleteNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
