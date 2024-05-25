import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import { useState } from "react";

function App() {
  // states
  const [notes, setNotes] = useState([]);

  // functions
  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (id) => {
    // first way -> use filter method to unmutate array
    // const filteredNotes = notes.filter((n) => n.id !== id);
    // setNotes(filteredNotes);

    // callback way
    setNotes((privNotes) => privNotes.filter((n) => n.id !== id));
  };

  const handleCompleteNote = (e) => {
    const noteId = +e.target.id;
    // first way -> use map method to unmutate array
    // const newNotes = notes.map((note) =>
    //   note.id === noteId ? { ...note, completed: !note.completed } : note
    // );
    // setNotes(newNotes);

    // callback way
    setNotes((privNotes) =>
      privNotes.map((note) =>
        note.id === noteId ? { ...note, completed: !note.completed } : note
      )
    );
  };

  return (
    <div className="container">
      <div className="note-header">note header</div>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-container">
          <NoteList
            notes={notes}
            onDelete={handleDeleteNote}
            onComplete={handleCompleteNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
