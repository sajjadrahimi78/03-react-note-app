import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import { useReducer, useState } from "react";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import { NoteProvider } from "./context/NoteContext";

function App() {
  // states
  // const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  // functions
  // const handleAddNote = (newNote) => {
  //   // setNotes((prevNotes) => [...prevNotes, newNote]);
  //   // dispatch({ type: "add", payload: newNote });
  // };

  // const handleDeleteNote = (id) => {
  //   // first way -> use filter method to unmutate array
  //   // const filteredNotes = notes.filter((n) => n.id !== id);
  //   // setNotes(filteredNotes);

  //   // callback way
  //   // setNotes((privNotes) => privNotes.filter((n) => n.id !== id));
  //   dispatch({ type: "delete", payload: id });
  // };

  // const handleCompleteNote = (e) => {
  //   const noteId = +e.target.id;
  //   // first way -> use map method to unmutate array
  //   // const newNotes = notes.map((note) =>
  //   //   note.id === noteId ? { ...note, completed: !note.completed } : note
  //   // );
  //   // setNotes(newNotes);

  //   // callback way
  //   // setNotes((privNotes) =>
  //   //   privNotes.map((note) =>
  //   //     note.id === noteId ? { ...note, completed: !note.completed } : note
  //   //   )
  //   // );
  //   dispatch({ type: "complete", payload: noteId });
  // };

  return (
    <NoteProvider>
      <div className="container">
        <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
        <div className="note-app">
          <AddNewNote />
          <div className="note-container">
            <NoteStatus />
            <NoteList sortBy={sortBy} />
          </div>
        </div>
      </div>
    </NoteProvider>
  );
}

export default App;
